import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { analyzeUploadedCsv, getDatasetAnalysis, listDatasets, resilienceReport, simulateStrategies } from "./analytics";
import { invokeLLM } from "./_core/llm";
import { storageGetSignedUrl, storagePut } from "./storage";
import { transcribeAudio } from "./_core/voiceTranscription";

function responseText(response: Awaited<ReturnType<typeof invokeLLM>>) {
  const content = response.choices?.[0]?.message?.content;
  if (typeof content === "string") return content;
  if (Array.isArray(content)) return content.map(part => "text" in part ? part.text : "").join("\n");
  return "No grounded response was returned.";
}

async function groundedAnswer(question: string, context: string, mode: "insight" | "chat", language = "English") {
  const response = await invokeLLM({
    model: "claude-haiku-4-5",
    messages: [
      {
        role: "system",
        content: `You are the Social Media Analytics analyst. Use only the supplied computed network context. Never invent metrics, users, communities, or causal claims. Explain uncertainty. For targeting questions, recommend a small shortlist using the observed centrality and community coverage, and state that a diffusion experiment should validate the choice. Keep answers concise, practical, and readable in Markdown. This is an analytical support tool, not an automated marketing decision-maker. Respond in the requested language: ${language}.`,
      },
      {
        role: "user",
        content: `${mode === "insight" ? "Write a concise executive insight from this network analysis." : "Answer the operator's question about this network analysis."}\n\nQuestion: ${question}\n\nComputed context:\n${context}`,
      },
    ],
    max_tokens: 700,
  });
  return responseText(response);
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  datasets: router({
    list: publicProcedure.query(() => listDatasets()),
    analysis: publicProcedure
      .input(z.object({ datasetId: z.string().min(1) }))
      .query(({ input }) => getDatasetAnalysis(input.datasetId)),
    simulate: publicProcedure
      .input(z.object({
        datasetId: z.string().min(1),
        seedBudget: z.number().int().min(1).max(12).default(4),
        trials: z.number().int().min(1).max(40).default(12),
        activationProbability: z.number().min(0.05).max(0.95).default(0.22),
        run: z.number().int().min(0).optional(),
      }))
      .query(({ input }) => simulateStrategies(input.datasetId, input)),
    resilience: publicProcedure
      .input(z.object({ datasetId: z.string().min(1) }))
      .query(({ input }) => resilienceReport(input.datasetId)),
    uploadAnalyze: publicProcedure
      .input(z.object({ filename: z.string().min(1).max(180), csvText: z.string().min(20).max(50_000_000) }))
      .mutation(async ({ input }) => {
        const analysis = analyzeUploadedCsv(input.csvText, input.filename);
        const safeName = input.filename.replace(/[^a-zA-Z0-9._-]/g, "_");
        const stored = await storagePut(`sna-uploads/${Date.now()}-${safeName}`, Buffer.from(input.csvText, "utf-8"), "text/csv");
        return { ...analysis, storageUrl: stored.url };
      }),
  }),
  ai: router({
    transcribe: publicProcedure
      .input(z.object({ audioBase64: z.string().min(100).max(24_000_000), mimeType: z.string().max(80).default("audio/webm"), language: z.string().max(12).optional() }))
      .mutation(async ({ input }) => {
        const buffer = Buffer.from(input.audioBase64, "base64");
        if (buffer.length > 16 * 1024 * 1024) throw new Error("Voice recording is larger than 16 MB.");
        const mimeType = input.mimeType.split(";", 1)[0].toLowerCase();
        const extension = mimeType.includes("mp4") ? "m4a" : mimeType.includes("ogg") ? "ogg" : mimeType.includes("wav") ? "wav" : "webm";
        const stored = await storagePut(`sna-voice/${Date.now()}.${extension}`, buffer, mimeType);
        const audioUrl = await storageGetSignedUrl(stored.key);
        const result = await transcribeAudio({ audioUrl, language: input.language?.split("-")[0], prompt: "Transcribe the user's question for a social media network analysis assistant." });
        if ("error" in result) throw new Error([result.error, result.details].filter(Boolean).join(": "));
        return { text: result.text, language: result.language };
      }),
    insights: publicProcedure
      .input(z.object({ datasetId: z.string().min(1), question: z.string().max(600).default("What should an analyst notice first?"), context: z.string().max(60_000).optional() }))
      .mutation(async ({ input }) => {
        const analysis = getDatasetAnalysis(input.datasetId);
        const context = input.context ?? JSON.stringify({ meta: analysis.meta, stats: analysis.stats, topNodes: analysis.nodes, communities: analysis.communities, method: analysis.method });
        return { answer: await groundedAnswer(input.question, context, "insight") };
      }),
    chat: publicProcedure
      .input(z.object({ datasetId: z.string().min(1), question: z.string().min(2).max(800), context: z.string().max(60_000).optional(), language: z.string().max(40).default("English") }))
      .mutation(async ({ input }) => {
        const analysis = getDatasetAnalysis(input.datasetId);
        const context = input.context ?? JSON.stringify({ meta: analysis.meta, stats: analysis.stats, topNodes: analysis.nodes, communities: analysis.communities, method: analysis.method });
        return { answer: await groundedAnswer(input.question, context, "chat", input.language) };
      }),
  }),
});

export type AppRouter = typeof appRouter;
