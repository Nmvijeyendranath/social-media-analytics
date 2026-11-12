import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { jsPDF } from "jspdf";
import { trpc } from "@/lib/trpc";
import {
  Activity, ArrowDown, ArrowUpRight, BarChart3, BookOpen, Bot, ChevronRight, CircleHelp, Database,
  Download, FileUp, GitBranch, GripVertical, Layers3, Menu, Maximize2, Mic, MicOff, Minimize2, Network, PanelLeftClose,
  PanelLeftOpen, Play, RefreshCw, Search, ShieldCheck, Sparkles, Target, Upload, Users, Volume2, X, Zap,
} from "lucide-react";

const GUIDE_IMAGES = [
  "/manus-storage/sna-guide-overview_6314f5e7.webp",
  "/manus-storage/sna-guide-chat_1897d818.webp",
];

const StreamdownRenderer = lazy(() => import("streamdown").then(module => ({ default: module.Streamdown })));

function Streamdown({ children }: { children: string }) {
  return <Suspense fallback={<span>Formatting reply…</span>}><StreamdownRenderer>{children}</StreamdownRenderer></Suspense>;
}

const navItems = [
  { id: "overview", label: "Overview", icon: Activity },
  { id: "audiences", label: "Audiences", icon: Users },
  { id: "simulation", label: "Seed simulation", icon: Target },
  { id: "resilience", label: "Resilience", icon: ShieldCheck },
  { id: "data", label: "Data & uploads", icon: Database },
];

function number(value: number | undefined) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(value ?? 0);
}

function pct(value: number | undefined) {
  return `${(value ?? 0).toFixed(1)}%`;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="section-heading"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>;
}

function Metric({ label, value, note, tone = "plain" }: { label: string; value: string; note?: string; tone?: string }) {
  return <div className={`metric-card ${tone}`}><div className="metric-label">{label}</div><strong>{value}</strong>{note && <span>{note}</span>}</div>;
}

export default function Home() {
  const [datasetId, setDatasetId] = useState(() => typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("dataset") ?? "marketing_referrals" : "marketing_referrals");
  const [uploadResult, setUploadResult] = useState<any>(() => {
    try { return typeof window !== "undefined" ? JSON.parse(window.sessionStorage.getItem("sna-active-upload") ?? "null") : null; }
    catch { return null; }
  });
  const [section, setSection] = useState("overview");
  const [guideOpen, setGuideOpen] = useState(false);
  const [guideStep, setGuideStep] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMaximized, setChatMaximized] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window === "undefined" ? true : window.innerWidth > 760);
  const [sidebarWidth, setSidebarWidth] = useState(266);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);
  const [workspaceName, setWorkspaceName] = useState("Social Media Analytics");
  const [insight, setInsight] = useState("");
  const [question, setQuestion] = useState("");
  const [chatAnswer, setChatAnswer] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [chatJumpVisible, setChatJumpVisible] = useState(false);
  const [shareStatus, setShareStatus] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceReadEnabled, setVoiceReadEnabled] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [speakingMessage, setSpeakingMessage] = useState<string | null>(null);
  const [simulationRun, setSimulationRun] = useState(0);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [audienceSearch, setAudienceSearch] = useState("");
  const dragRef = useRef(false);
  const contentScrollRef = useRef<HTMLDivElement>(null);
  const chatContentRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<any>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const datasets = trpc.datasets.list.useQuery();
  const analysis = trpc.datasets.analysis.useQuery({ datasetId });
  const activeDatasetId = uploadResult?.uploadId ?? datasetId;
  const simulationInput = useMemo(() => ({ datasetId: activeDatasetId, seedBudget: 4, trials: 14, activationProbability: 0.22, run: simulationRun }), [activeDatasetId, simulationRun]);
  const simulation = trpc.datasets.simulate.useQuery(simulationInput, { enabled: section === "simulation" });
  const resilience = trpc.datasets.resilience.useQuery({ datasetId: activeDatasetId }, { enabled: section === "resilience" });
  const upload = trpc.datasets.uploadAnalyze.useMutation({ onSuccess: result => { setUploadResult(result); setSelectedNode(null); setInsight(""); setAudienceSearch(""); setSection("overview"); }, onError: error => setShareStatus(error.message) });
  const insightMutation = trpc.ai.insights.useMutation({ onSuccess: result => setInsight(result.answer), onError: error => setShareStatus(error.message) });
  const stopSpeaking = () => { if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel(); utteranceRef.current = null; setSpeaking(false); setSpeakingMessage(null); };
  const speakText = (text: string) => { if (typeof window === "undefined" || !("speechSynthesis" in window)) { setShareStatus("Spoken replies are not supported in this browser"); globalThis.setTimeout(() => setShareStatus(""), 3600); return; } stopSpeaking(); const utterance = new SpeechSynthesisUtterance(text.replace(/[#*_`>-]/g, " ")); const voices = window.speechSynthesis.getVoices(); const languagePrefix = language.split("-")[0].toLowerCase(); utterance.voice = voices.filter(voice => voice.lang.toLowerCase().startsWith(languagePrefix)).sort((a, b) => Number(/google|enhanced|natural|microsoft/i.test(b.name)) - Number(/google|enhanced|natural|microsoft/i.test(a.name)))[0] ?? null; utterance.lang = language; utterance.rate = 0.92; utterance.pitch = 0.96; utterance.volume = 1; utterance.onstart = () => { setSpeaking(true); setSpeakingMessage(text); }; utterance.onend = () => { setSpeaking(false); setSpeakingMessage(null); utteranceRef.current = null; }; utterance.onerror = () => { setSpeaking(false); setSpeakingMessage(null); utteranceRef.current = null; }; utteranceRef.current = utterance; window.speechSynthesis.speak(utterance); };
  const chatMutation = trpc.ai.chat.useMutation({ onSuccess: result => { setChatAnswer(result.answer); setChatMessages(messages => [...messages, { role: "assistant", content: result.answer }]); if (voiceReadEnabled) speakText(result.answer); }, onError: error => setChatMessages(messages => [...messages, { role: "assistant", content: `I couldn't reach the analyst service: ${error.message}` }]) });
  const transcribeMutation = trpc.ai.transcribe.useMutation({ onSuccess: result => { setQuestion(value => `${value}${value ? " " : ""}${result.text}`); setShareStatus("Voice question ready"); window.setTimeout(() => setShareStatus(""), 2200); }, onError: error => setShareStatus(error.message || "Voice transcription failed") });

  const refreshWorkspace = async () => {
    setShareStatus("Refreshing workspace…");
    try {
      await Promise.all([datasets.refetch(), uploadResult ? Promise.resolve() : analysis.refetch(), section === "simulation" ? simulation.refetch() : Promise.resolve(), section === "resilience" ? resilience.refetch() : Promise.resolve()]);
      setShareStatus("Workspace refreshed");
    } catch (error) {
      setShareStatus(error instanceof Error ? error.message : "Workspace refresh failed");
    }
    window.setTimeout(() => setShareStatus(""), 2600);
  };

  const current = (uploadResult ?? analysis.data) as NonNullable<typeof analysis.data> | undefined;
  const selectedMeta = uploadResult?.meta ?? datasets.data?.find(item => item.id === datasetId);
  const filteredNodes = current?.nodes.filter(node => `${node.user_id} ${node.community_label}`.toLowerCase().includes(audienceSearch.trim().toLowerCase())) ?? [];
  const graphNodes = current?.graph.nodes ?? [];
  const graphEdges = current?.graph.edges ?? [];
  const positions = useMemo(() => graphNodes.map((node, index) => {
    const angle = (index / Math.max(graphNodes.length, 1)) * Math.PI * 2;
    const radius = 132 + (index % 5) * 13;
    return { ...node, x: 230 + Math.cos(angle) * radius, y: 170 + Math.sin(angle) * radius };
  }), [graphNodes]);
  const positionMap = useMemo(() => new Map(positions.map(node => [node.user_id, node])), [positions]);

  useEffect(() => {
    contentScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [section]);

  useEffect(() => {
    try {
      if (uploadResult) window.sessionStorage.setItem("sna-active-upload", JSON.stringify(uploadResult));
      else window.sessionStorage.removeItem("sna-active-upload");
    } catch { setShareStatus("This browser could not save the active upload for this tab."); }
  }, [uploadResult]);

  useEffect(() => {
    if (!chatContentRef.current) return;
    chatContentRef.current.scrollTo({ top: chatContentRef.current.scrollHeight, behavior: "smooth" });
    setChatJumpVisible(false);
  }, [chatMessages.length, chatMutation.isPending, chatOpen]);

  const resizeStart = () => { dragRef.current = true; };
  const resizeMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current) setSidebarWidth(Math.max(220, Math.min(360, event.clientX)));
  };
  const resizeEnd = () => { dragRef.current = false; };

  const requestInsight = () => {
    if (!current) return;
    insightMutation.mutate({ datasetId, question: "Using the observed network, explain which person or small group should be tested first to promote the uploaded product or campaign. Give a practical activation approach, why the person is a fit, and what should be validated before spending budget.", context: uploadResult?.context });
  };

  const uploadFile = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => upload.mutate({ filename: file.name, csvText: String(reader.result ?? "") });
    reader.onerror = () => setShareStatus(`Could not read ${file.name}. Try selecting the file again.`);
    reader.readAsText(file);
  };

  const askChat = () => {
    if (!question.trim()) return;
    const askedQuestion = question.trim();
    setChatMessages(messages => [...messages, { role: "user", content: askedQuestion }]);
    const context = uploadResult?.context ?? JSON.stringify({ meta: current?.meta, stats: current?.stats, topNodes: current?.nodes, communities: current?.communities, method: current?.method });
    chatMutation.mutate({ datasetId, question: askedQuestion, context, language });
    setQuestion("");
  };

  const downloadReport = () => {
    if (!current) return;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const left = 54;
    const top = 58;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - left * 2;
    let y = top;
    let pageNumber = 1;
    const footer = () => { doc.setDrawColor(225, 219, 210); doc.line(left, pageHeight - 42, pageWidth - left, pageHeight - 42); doc.setFontSize(8); doc.setTextColor(145, 137, 126); doc.text(`Social Media Analytics · ${selectedMeta?.title ?? datasetId}`, left, pageHeight - 25); doc.text(`Page ${pageNumber}`, pageWidth - left - 38, pageHeight - 25); };
    const newPage = () => { footer(); doc.addPage(); pageNumber += 1; y = top; };
    const ensure = (height: number) => { if (y + height > pageHeight - 60) newPage(); };
    const section = (title: string, subtitle?: string) => { ensure(48); doc.setFillColor(231, 107, 79); doc.rect(left, y - 14, 4, 23, "F"); doc.setFontSize(15); doc.setTextColor(24, 24, 23); doc.text(title, left + 13, y); y += 19; if (subtitle) { doc.setFontSize(9); doc.setTextColor(125, 116, 105); doc.text(subtitle, left + 13, y); y += 22; } else y += 14; };
    const paragraph = (text: string, size = 10) => { doc.setFontSize(size); doc.setTextColor(67, 62, 56); const lines = doc.splitTextToSize(text, contentWidth); const height = lines.length * (size + 5) + 9; ensure(height); doc.text(lines, left, y); y += height; };
    const tableRow = (cells: string[], widths: number[], header = false) => { const height = 23; ensure(height); let x = left; doc.setFontSize(header ? 8 : 9); doc.setTextColor(header ? 115 : 65, header ? 107 : 60, header ? 98 : 54); if (header) doc.setFillColor(245, 241, 235); doc.rect(left, y - 14, contentWidth, height, header ? "F" : "S"); cells.forEach((cell, index) => { doc.text(String(cell), x + 7, y, { maxWidth: widths[index] - 14 }); x += widths[index]; }); y += height; };
    const bar = (label: string, value: number, max: number, color: [number, number, number], suffix = "") => { ensure(22); doc.setFontSize(9); doc.setTextColor(67, 62, 56); doc.text(label, left, y); doc.setFillColor(238, 233, 225); doc.roundedRect(left + 125, y - 8, 230, 9, 3, 3, "F"); doc.setFillColor(...color); doc.roundedRect(left + 125, y - 8, Math.max(5, Math.min(230, (value / Math.max(max, 1)) * 230)), 9, 3, 3, "F"); doc.setTextColor(125, 116, 105); doc.text(`${value}${suffix}`, left + 370, y); y += 20; };

    doc.setFillColor(24, 24, 23); doc.rect(0, 0, pageWidth, 128, "F"); doc.setTextColor(255, 248, 239); doc.setFontSize(25); doc.text("Social Media Analytics", left, 50); doc.setFontSize(12); doc.text("Network analysis report", left, 74); doc.setFontSize(10); doc.setTextColor(211, 201, 189); doc.text(`${selectedMeta?.title ?? datasetId} · generated ${new Date().toLocaleString()}`, left, 98); y = 170;
    section("Executive summary", "What the network says at a glance"); paragraph(`This report analyzes ${current.meta.nodeCount} actors connected by ${current.meta.edgeCount} directed relationships across ${current.meta.dateRange.start} to ${current.meta.dateRange.end}. It combines influence ranking, community structure, network quality checks, and practical activation guidance. The findings identify promising people and segments to test; they do not establish causal impact or guarantee campaign performance.`);
    section("Network profile", "Coverage, composition, and data quality");
    const metrics = [["Actors", String(current.meta.nodeCount)], ["Relationships", String(current.meta.edgeCount)], ["Communities", String(current.meta.communityCount)], ["Interaction types", String(current.meta.interactionTypes.length)], ["Total weight", String(current.meta.weightTotal)], ["Average weight", String(current.stats.averageWeight)], ["Largest component", `${Math.round((current.stats.largestComponent / Math.max(current.meta.nodeCount, 1)) * 100)}%`], ["Density", `${current.stats.density}%`]];
    const widths = [contentWidth / 2, contentWidth / 2]; for (let index = 0; index < metrics.length; index += 2) { ensure(42); const rowY = y; [metrics[index], metrics[index + 1]].forEach((metric, col) => { const x = left + col * widths[0]; doc.setDrawColor(222, 215, 205); doc.rect(x, rowY - 15, widths[0] - 8, 34); doc.setFontSize(8); doc.setTextColor(125, 116, 105); doc.text(metric[0].toUpperCase(), x + 10, rowY - 2); doc.setFontSize(13); doc.setTextColor(24, 24, 23); doc.text(metric[1], x + 10, rowY + 12); }); y += 43; }
    paragraph(`The file contains ${current.meta.interactionTypes.join(", ")} interactions. Quality checks found ${current.meta.quality.missingNodeRefs} missing endpoint references, ${current.meta.quality.selfLoops} self-loops, and ${current.meta.quality.duplicatePairs} duplicate source-target pairs. Review these checks before treating any ranking as decision-ready.`);

    newPage(); section("Influence ranking", "Actors with the strongest structural position"); paragraph("The shortlist below combines bridge score with incoming and outgoing degree. Bridge score highlights actors that sit between otherwise separated paths; degree shows how many relationships touch the actor. Use both signals together rather than treating rank as a standalone recommendation."); tableRow(["Rank", "Actor", "Community", "In", "Out", "Bridge"], [42, 125, 120, 45, 45, 70], true); const maxBridge = current.nodes[0]?.betweenness ?? 1; current.nodes.forEach((node, index) => { tableRow([String(index + 1).padStart(2, "0"), node.user_id, node.community_label.replace("segment_", "segment "), String(node.inDegree), String(node.outDegree), String(node.betweenness)], [42, 125, 120, 45, 45, 70]); if ((index + 1) % 7 === 0 && index < current.nodes.length - 1) newPage(); });
    section("Bridge score chart", "Relative ranking signal for the visible shortlist"); current.nodes.slice(0, 12).forEach(node => bar(node.user_id, node.betweenness, maxBridge, [70, 145, 135]));

    newPage(); section("Community structure", "Segment size and practical coverage"); paragraph("Communities are descriptive groupings derived from the network structure. A community with many actors may offer reach, while a small community may offer a focused test audience. The best activation shortlist usually covers more than one community when the goal is to compare diffusion paths."); const maxCommunity = Math.max(...current.communities.map(item => item.count), 1); current.communities.forEach(community => bar(community.label.replace("segment_", "Segment "), community.count, maxCommunity, [224, 126, 82], " actors"));
    section("Interpretation", "How to use the evidence"); paragraph(`Start with a small, diverse test group: include at least one high-bridge actor, one high-degree actor, and one representative from a community that would otherwise be missed. Compare those candidates in the Seed simulation using the same budget and activation probability. If a candidate wins only under one narrow setting, treat the result as sensitive and collect more evidence before spending campaign budget.`);
    section("Recommended workflow", "A repeatable analysis-to-action sequence"); tableRow(["Step", "Action", "Why it matters"], [45, 190, 220], true); [["01", "Validate the edge list", "Confirm source, target, weight, and interaction semantics."], ["02", "Inspect the graph", "Select nodes and compare degree, bridge score, and community."], ["03", "Run seed scenarios", "Test candidate groups under a common budget."], ["04", "Generate an insight", "Ask the analyst for a grounded, practical shortlist."], ["05", "Run a controlled test", "Measure real outcomes before scaling outreach."]].forEach(row => tableRow(row, [45, 190, 220]));

    section("Method and limitations", "Definitions and responsible use"); paragraph(`Method used: ${current.method}. The graph preserves direction for source-to-target relationships, while local clustering and component reporting use an undirected neighborhood view where noted. The report is computed from the active CSV or supplied dataset at the time of generation. It does not include unseen exposure, content quality, audience sentiment, timing effects, or campaign conversion data. Centrality is not causality, and a structurally central person may not be willing or effective as a promoter.`);
    section("Appendix", "Field definitions"); tableRow(["Field", "Meaning"], [145, 310], true); [["In-degree", "Number of incoming relationships."], ["Out-degree", "Number of outgoing relationships."], ["Bridge score", "Brandes betweenness centrality over directed paths."], ["Closeness", "Reachability-based proximity to other actors."], ["Clustering", "Local neighborhood closure using the undirected view."], ["Largest component", "Number of actors in the largest weakly connected component."]].forEach(row => tableRow(row, [145, 310]));
    footer();
    doc.save(`social-media-analytics-${datasetId}-detailed-report.pdf`);
  };

  const shareReport = async () => {
    downloadReport();
    setShareStatus("Report downloaded — ready to send");
    window.setTimeout(() => setShareStatus(""), 3600);
  };

  const shareDashboard = async () => {
    if (uploadResult) {
      setShareStatus("Uploaded networks are available only in this browser session; choose a supplied dataset to copy a share link.");
      window.setTimeout(() => setShareStatus(""), 5200);
      return;
    }
    const link = `${window.location.origin}${window.location.pathname}?dataset=${encodeURIComponent(datasetId)}`;
    try { await navigator.clipboard.writeText(link); setShareStatus("Dashboard link copied"); } catch { setShareStatus(link); }
    window.setTimeout(() => setShareStatus(""), 3600);
  };

  const handleChatScroll = () => {
    const element = chatContentRef.current;
    if (!element) return;
    setChatJumpVisible(element.scrollHeight - element.scrollTop - element.clientHeight > 80);
  };

  const toggleVoiceInput = () => {
    if (voiceActive) { mediaRecorderRef.current?.stop(); setVoiceActive(false); return; }
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") { setShareStatus("Audio recording is not supported in this browser"); window.setTimeout(() => setShareStatus(""), 3600); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const mimeType = ["audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus", "audio/mp4"].find(type => MediaRecorder.isTypeSupported(type)) ?? "";
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      audioChunksRef.current = [];
      recorder.ondataavailable = (event: BlobEvent) => { if (event.data.size) audioChunksRef.current.push(event.data); };
      recorder.onstop = () => { stream.getTracks().forEach(track => track.stop()); const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || "audio/webm" }); if (!blob.size) { setShareStatus("No audio was captured. Please try again."); return; } setShareStatus("Transcribing voice question…"); const reader = new FileReader(); reader.onloadend = () => transcribeMutation.mutate({ audioBase64: String(reader.result).split(",")[1] ?? "", mimeType: blob.type, language }); reader.readAsDataURL(blob); };
      mediaRecorderRef.current = recorder; recorder.start(250); setVoiceActive(true); setShareStatus("Listening — press again to stop");
    }).catch(error => { setVoiceActive(false); setShareStatus(error instanceof Error ? `Microphone unavailable: ${error.message}` : "Microphone permission was not granted"); window.setTimeout(() => setShareStatus(""), 4200); });
  };

  const openGuide = () => { setGuideStep(0); setGuideOpen(true); };

  return <div className="app-shell" onPointerMove={resizeMove} onPointerUp={resizeEnd}>
    <aside className={`sidebar ${sidebarOpen ? "" : "collapsed"}`} style={{ width: sidebarOpen ? sidebarWidth : 70 }}>
      <div className="brand"><div className="brand-mark"><img src="/favicon.svg" alt="Social Media Analytics logo" /></div>{sidebarOpen && <div><div className="brand-name">SOCIAL MEDIA</div><div className="brand-sub">Analytics workspace</div></div>} {sidebarOpen && <button className="mobile-sidebar-close" onClick={() => setSidebarOpen(false)} aria-label="Close navigation"><X size={16} /></button>}</div>
      {sidebarOpen && <div className="workspace-wrap"><button className="workspace-picker" onClick={() => setWorkspaceOpen(value => !value)} aria-expanded={workspaceOpen}><div><span className="tiny-label">WORKSPACE</span><strong>{workspaceName}</strong></div><ChevronRight size={16} className={workspaceOpen ? "rotate" : ""} /></button>{workspaceOpen && <div className="workspace-menu"><button onClick={() => { setWorkspaceName("Social Media Analytics"); setWorkspaceOpen(false); }}>Social Media Analytics <span>active</span></button><button onClick={() => { setWorkspaceName("SIH 26152 / Research"); setWorkspaceOpen(false); }}>SIH 26152 / Research <span>demo</span></button></div>}</div>}
      <nav className="nav-list" aria-label="Primary">
        {navItems.map(item => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${section === item.id ? "active" : ""}`} onClick={() => setSection(item.id)} title={item.label}><Icon size={18} />{sidebarOpen && <span>{item.label}</span>}{sidebarOpen && item.id === "simulation" && <span className="nav-badge">NEW</span>}</button>; })}
      </nav>
      {sidebarOpen && <div className="sidebar-foot"><div className="side-note"><div className="side-note-icon"><GitBranch size={16} /></div><div><strong>Directed graph</strong><span>Weights preserved</span></div></div><button className="guide-link" onClick={openGuide}><CircleHelp size={16} />How this works</button></div>}
      <button className="collapse-button" onClick={() => setSidebarOpen(value => !value)} aria-label="Toggle sidebar">{sidebarOpen ? <PanelLeftClose size={17} /> : <PanelLeftOpen size={17} />}</button>
    </aside>
    {sidebarOpen && <div className="resize-handle" onPointerDown={resizeStart}><GripVertical size={15} /></div>}

    <main className="main-pane">
      <header className="topbar"><div className="topbar-left"><button className="mobile-menu" onClick={() => setSidebarOpen(value => !value)}><Menu size={18} /></button><div className="crumb">NETWORKS <ChevronRight size={13} /> <span>{selectedMeta?.title ?? "Loading"}</span></div></div><div className="topbar-actions"><button className="text-button" onClick={openGuide}><BookOpen size={16} />Guide</button><button className="ask-button" onClick={() => setChatOpen(true)}><Bot size={16} />Ask analyst</button><div className="status-dot"><span />Live workspace</div></div></header>
      <div className="content-scroll" ref={contentScrollRef}>
        <div className="content-wrap">
          <div className="content-toolbar"><div className="dataset-select"><Layers3 size={16} /><select value={uploadResult ? "uploaded" : datasetId} onChange={event => { if (event.target.value !== "uploaded") { setUploadResult(null); setDatasetId(event.target.value); setSelectedNode(null); setAudienceSearch(""); } }} aria-label="Choose network dataset">{datasets.data?.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}{uploadResult && <option value="uploaded">{uploadResult.filename} · this session</option>}</select><ChevronRight size={14} /></div><div className="toolbar-meta"><span className="freshness"><span className="fresh-dot" />{shareStatus || (uploadResult ? "Uploaded · session analysis" : "Demo data · Jan 2026")}</span><button className={`icon-button ${analysis.isFetching || datasets.isFetching ? "refreshing" : ""}`} title="Refresh workspace" aria-label="Refresh workspace" onClick={refreshWorkspace} disabled={analysis.isFetching || datasets.isFetching}><RefreshCw size={15} /></button></div></div>
          {datasets.error && <div className="error-box">Could not load the dataset list: {datasets.error.message}</div>}
          {analysis.error && !uploadResult && <div className="error-box">Could not load this network: {analysis.error.message}. Choose another dataset or refresh.</div>}
          {!uploadResult && !analysis.data && analysis.isPending && <div className="empty-state"><Database size={20} /><strong>Loading network…</strong><span>Preparing the dataset and its network measures.</span></div>}

          {section === "overview" && <>
            <SectionTitle eyebrow="NETWORK OVERVIEW" title="Find the people who connect the room." description="A practical view of influence, communities, and reach—built around the relationships in your graph, not vanity metrics." />
            <div className="hero-actions"><button className="primary-button" onClick={() => setSection("simulation")}><Play size={16} />Run seed simulation</button><button className="secondary-button" onClick={requestInsight} disabled={insightMutation.isPending || !current}><Sparkles size={16} />{insightMutation.isPending ? "Reading network…" : "Generate product targeting insight"}</button><label className="quick-upload"><FileUp size={15} /><span>{upload.isPending ? "Uploading…" : "Upload CSV"}</span><input type="file" accept=".csv,text/csv" disabled={upload.isPending} onChange={event => uploadFile(event.target.files?.[0])} /></label><button className="secondary-button report-button" onClick={downloadReport} disabled={!current}><Download size={15} />Download report</button><button className="quiet-button share-button" onClick={shareReport} disabled={!current}><ArrowUpRight size={15} />Download & share PDF</button><button className="quiet-button share-button" onClick={shareDashboard} disabled={!!uploadResult} title={uploadResult ? "Uploaded networks are available only in this browser session" : "Copy a link to the selected sample dataset"}><Users size={15} />{uploadResult ? "Session only" : "Copy dashboard link"}</button><span className="method-note">{shareStatus || current?.method}</span></div>
            {uploadResult && <div className="uploaded-banner"><Upload size={16} /><div><strong>{uploadResult.filename} is now the active analysis</strong><span>{number(uploadResult.nodeCount)} nodes · {number(uploadResult.edgeCount)} relationships · click a node below to inspect it. This upload is saved for this browser tab and expires when the server restarts.</span></div><button onClick={() => setUploadResult(null)} aria-label="Clear uploaded network"><X size={15} /></button></div>}
            {insight && <div className="insight-strip"><Sparkles size={18} /><div><strong>Analyst readout</strong><Streamdown>{insight}</Streamdown></div><button onClick={() => setInsight("")}><X size={15} /></button></div>}
            <div className="metrics-grid"><Metric label="Nodes" value={number(current?.meta.nodeCount)} note="unique actors" /><Metric label="Relationships" value={number(current?.meta.edgeCount)} note={`${current?.meta.interactionTypes.length ?? 0} interaction types`} tone="teal" /><Metric label="Communities" value={number(current?.meta.communityCount)} note="labeled segments" tone="warm" /><Metric label="Largest component" value={pct(((current?.stats.largestComponent ?? 0) / Math.max(current?.meta.nodeCount ?? 1, 1)) * 100)} note={`${current?.stats.componentCount ?? 0} connected regions`} tone="lavender" /></div>
            <div className="overview-grid"><section className="panel network-panel"><div className="panel-head"><div><span className="panel-kicker">STRUCTURE PREVIEW</span><h2>{uploadResult ? "Uploaded network" : "Top structural actors"}</h2></div><button className="quiet-button" onClick={() => setSection("audiences")}>Open explorer <ArrowUpRight size={15} /></button></div><div className="network-stage"><svg viewBox="0 0 460 340" role="img" aria-label="Interactive directed network preview" onClick={() => setSelectedNode(null)}><defs><marker id="arrowhead" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#bcb4a8" /></marker></defs><g className="edge-layer">{graphEdges.map((edge, index) => { const source = positionMap.get(edge.source); const target = positionMap.get(edge.target); return source && target ? <line key={`${edge.source}-${edge.target}-${index}`} x1={source.x} y1={source.y} x2={target.x} y2={target.y} strokeWidth={Math.max(0.6, edge.weight / 7)} markerEnd="url(#arrowhead)" /> : null; })}</g><g>{positions.map(node => <g key={node.user_id} className={`graph-node ${selectedNode?.user_id === node.user_id ? "selected" : ""}`} onClick={event => { event.stopPropagation(); setSelectedNode(node); }} tabIndex={0} role="button" aria-label={`Inspect ${node.user_id}`} onKeyDown={event => { if (event.key === "Enter" || event.key === " ") setSelectedNode(node); }}><circle cx={node.x} cy={node.y} r={Math.min(11, 4 + node.degree / 7)} fill={node.color} /><circle cx={node.x} cy={node.y} r={Math.min(14, 6 + node.degree / 7)} className="node-halo" /></g>)}</g></svg>{selectedNode && <div className="node-inspector"><div><span className="panel-kicker">SELECTED ACTOR</span><strong>{selectedNode.user_id}</strong><span>{selectedNode.community_label.replace("segment_", "segment ")}</span></div><div className="node-inspector-stats"><span><strong>{number(selectedNode.inDegree)}</strong> in</span><span><strong>{number(selectedNode.outDegree)}</strong> out</span><span><strong>{number(selectedNode.betweenness)}</strong> bridge</span></div><button className="icon-button" onClick={() => setSelectedNode(null)}><X size={14} /></button></div>}<div className="network-legend"><span><i className="legend-line" />directed relationship</span><span><i className="legend-node" />community color</span><span><i className="legend-size" />degree size</span></div></div></section><section className="panel ranking-panel"><div className="panel-head"><div><span className="panel-kicker">INFLUENCE RANKING</span><h2>Who to investigate next</h2></div><Target size={18} className="panel-icon" /></div><div className="ranking-list">{current?.nodes.slice(0, 7).map((node, index) => <div className="ranking-row" key={node.user_id} onClick={() => setSelectedNode(node)}><span className="rank-number">{String(index + 1).padStart(2, "0")}</span><div className="avatar-chip" style={{ background: node.color }}>{node.user_id.replace("user_", "")}</div><div className="rank-name"><strong>{node.user_id}</strong><span>{node.community_label.replace("segment_", "segment ")}</span></div><div className="rank-score"><strong>{number(node.betweenness)}</strong><span>bridge</span></div></div>)}</div><button className="full-width-button" onClick={() => setSection("audiences")}>View full ranking <ArrowUpRight size={15} /></button></section></div>
            <div className="lower-grid"><section className="panel compact-panel"><div className="panel-head"><div><span className="panel-kicker">COMMUNITY MIX</span><h2>Audience segments</h2></div><Users size={18} className="panel-icon" /></div><div className="community-bars">{current?.communities.slice(0, 6).map(community => <div className="bar-row" key={community.label}><div><span>{community.label.replace("segment_", "Segment ")}</span><strong>{community.count}</strong></div><div className="bar-track"><i style={{ width: `${(community.count / Math.max(...(current?.communities.map(item => item.count) ?? [1]))) * 100}%`, background: community.color }} /></div></div>)}</div></section><section className="panel compact-panel"><div className="panel-head"><div><span className="panel-kicker">DATA QUALITY</span><h2>Trust before interpretation</h2></div><ShieldCheck size={18} className="panel-icon" /></div><div className="quality-grid"><div><strong>{current?.meta.quality.missingNodeRefs === 0 ? "Clear" : "Review"}</strong><span>endpoint coverage</span></div><div><strong>{current?.meta.quality.selfLoops === 0 ? "None" : current?.meta.quality.selfLoops}</strong><span>self-loops</span></div><div><strong>{current?.meta.quality.duplicatePairs === 0 ? "None" : current?.meta.quality.duplicatePairs}</strong><span>duplicate pairs</span></div></div></section></div>
          </>}

          {section === "audiences" && <><SectionTitle eyebrow="AUDIENCE EXPLORER" title="Compare actors without losing the graph." description="Rankings are a starting point. Use the community labels, direction, and bridge score together before choosing a target." /><div className="filter-line"><div className="search-box"><Search size={16} /><input value={audienceSearch} onChange={event => setAudienceSearch(event.target.value)} placeholder="Search priority actors or segments" aria-label="Search priority actors or segments" /></div><span className="result-count">Showing {filteredNodes.length} of {current?.nodes.length ?? 0} priority actors</span></div><div className="analysis-chart-grid"><section className="panel chart-panel"><div className="panel-head"><div><span className="panel-kicker">BRIDGE SCORE</span><h2>Top actors to investigate</h2></div><GitBranch size={18} className="panel-icon" /></div><div className="horizontal-chart">{current?.nodes.slice(0, 6).map(node => <div className="chart-row" key={node.user_id}><div><span>{node.user_id}</span><strong>{number(node.betweenness)}</strong></div><div className="chart-track"><i style={{ width: `${(node.betweenness / Math.max(current?.nodes[0]?.betweenness ?? 1, 1)) * 100}%`, background: node.color }} /></div></div>)}</div></section><section className="panel chart-panel"><div className="panel-head"><div><span className="panel-kicker">COMMUNITY MIX</span><h2>Reach across segments</h2></div><BarChart3 size={18} className="panel-icon" /></div><div className="community-chart">{current?.communities.slice(0, 8).map(community => <div className="community-column" key={community.label}><div className="column-value">{community.count}</div><div className="column-track"><i style={{ height: `${(community.count / Math.max(...(current?.communities.map(item => item.count) ?? [1]))) * 100}%`, background: community.color }} /></div><span>{community.label.replace("segment_", "S")}</span></div>)}</div></section></div><section className="panel table-panel"><div className="table-scroll"><table><thead><tr><th>Rank</th><th>Actor</th><th>Community</th><th>In-degree</th><th>Out-degree</th><th>Bridge score</th><th>Clustering</th></tr></thead><tbody>{filteredNodes.map((node, index) => <tr key={node.user_id}><td className="muted-cell">{String(index + 1).padStart(2, "0")}</td><td><div className="table-person"><span className="mini-avatar" style={{ background: node.color }}>{node.user_id.slice(-2)}</span><strong>{node.user_id}</strong></div></td><td><span className="community-tag" style={{ borderColor: `${node.color}66`, color: node.color }}>{node.community_label.replace("segment_", "segment ")}</span></td><td>{number(node.inDegree)}</td><td>{number(node.outDegree)}</td><td><strong>{number(node.betweenness)}</strong></td><td>{number(node.clustering)}</td></tr>)}</tbody></table>{filteredNodes.length === 0 && <div className="empty-state"><Search size={20} /><strong>No actors match “{audienceSearch}”</strong><span>Try part of an actor ID or community name.</span></div>}</div></section></>}

          {section === "simulation" && <><SectionTitle eyebrow="INFLUENCE EXPERIMENT" title="Test the seed strategy before you commit." description="Each strategy gets the same seed budget and is tested against the active network. Use the results as a hypothesis, then validate with a real campaign test." /><div className="experiment-controls panel"><div><span className="panel-kicker">PARAMETERS</span><strong>Independent Cascade-style simulation</strong><span>14 trials · 4 seeds · 22% activation probability</span></div><button className="primary-button" onClick={() => setSimulationRun(value => value + 1)} disabled={simulation.isFetching}><Play size={16} />{simulation.isFetching ? "Running…" : "Run new trials"}</button></div>{simulation.error && <div className="error-box">Simulation failed: {simulation.error.message}</div>}{simulation.isPending && <div className="empty-state"><Activity size={20} /><strong>Running the network experiment…</strong><span>Comparing the four seed strategies.</span></div>}<div className="simulation-grid">{simulation.data?.results.map((result, index) => { const isWinner = result.id === simulation.data?.winner; return <section className={`panel strategy-card ${isWinner ? "recommended" : ""}`} key={`${result.id}-${simulationRun}`}><div className="strategy-head"><div><span className="panel-kicker">{isWinner ? "TOP RESULT IN THIS RUN" : result.id === "community" ? "COMMUNITY-AWARE" : `STRATEGY 0${index + 1}`}</span><h2>{result.label}</h2></div>{isWinner && <span className="recommend-tag">Highest average reach</span>}</div><div className="big-spread">{number(result.averageSpread)}<span>average users reached</span></div><div className="spread-bar"><i style={{ width: `${(result.averageSpread / Math.max(current?.meta.nodeCount ?? 1, 1)) * 100}%` }} /></div><div className="strategy-stats"><span><strong>{number(result.minSpread)}–{number(result.maxSpread)}</strong> range</span><span><strong>{number(result.variability)}</strong> variability</span><span><strong>{number(result.communityCoverage)}</strong> communities</span></div><div className="seed-list">{result.seeds.map(seed => <span key={seed}>{seed}</span>)}</div></section>; })}</div></>}

          {section === "resilience" && <><SectionTitle eyebrow="NETWORK RESILIENCE" title="See what breaks the network first." description="Compare targeted removals with a repeatable random baseline. Fragmentation measures network structure; it does not predict real-world failure." />{resilience.error && <div className="error-box">Resilience analysis failed: {resilience.error.message}</div>}{resilience.isPending && <div className="empty-state"><ShieldCheck size={20} /><strong>Measuring network resilience…</strong><span>Testing targeted and random node removals.</span></div>}<div className="resilience-callout"><ShieldCheck size={20} /><div><strong>Baseline: {resilience.data?.original.largestComponent ?? "—"} nodes in the largest component</strong><span>Each scenario removes about 5% of nodes and measures the remaining weakly connected structure.</span></div></div><section className="panel resilience-chart"><div className="panel-head"><div><span className="panel-kicker">COMPONENT RETENTION</span><h2>How much structure remains?</h2></div><Activity size={18} className="panel-icon" /></div><div className="retention-chart">{resilience.data?.scenarios.map(scenario => <div className="retention-row" key={scenario.id}><span>{scenario.label}</span><div className="retention-track"><i style={{ width: `${((scenario.largestComponent ?? 0) / Math.max(resilience.data?.original.largestComponent ?? 1, 1)) * 100}%` }} /></div><strong>{pct(((scenario.largestComponent ?? 0) / Math.max(resilience.data?.original.largestComponent ?? 1, 1)) * 100)}</strong></div>)}</div></section><div className="resilience-grid">{resilience.data?.scenarios.map(scenario => <section className="panel resilience-card" key={scenario.id}><div className="scenario-label">{scenario.label}</div><div className="resilience-number">{number(scenario.largestComponent)}<span>largest component</span></div><div className="resilience-bars"><div><span>components</span><strong>{number(scenario.componentCount)}</strong></div><div><span>fragmentation</span><strong>{number(scenario.fragmentation)}×</strong></div></div><div className={`severity ${scenario.id === "random" ? "low" : "high"}`}>{scenario.id === "random" ? "random baseline" : "targeted stress"}</div></section>)}</div></>}

          {section === "data" && <><SectionTitle eyebrow="DATA & UPLOADS" title="Bring a network into the lab." description="Upload an edge-list CSV with source and target columns. The app checks the relationships and creates a session analysis you can explore, simulate, and stress-test." /><div className="data-layout"><section className="panel upload-panel"><div className="upload-icon"><Upload size={22} /></div><h2>Upload a CSV edge list</h2><p>Required: <code>source</code> and <code>target</code>. Optional: <code>weight</code>, <code>interaction_type</code>, and <code>timestamp</code>. Quoted fields may contain commas or line breaks.</p><label className="upload-drop"><FileUp size={18} /><span>{upload.isPending ? "Checking and uploading…" : "Choose CSV file"}</span><input type="file" accept=".csv,text/csv" disabled={upload.isPending} onChange={event => uploadFile(event.target.files?.[0])} /></label>{upload.error && <div className="error-box">{upload.error.message}</div>}<div className="upload-checks"><span><ShieldCheck size={14} />Server-side checks</span><span><Database size={14} />Session-only analysis</span><span><BarChart3 size={14} />Immediate readout</span></div><p className="method-note">Uploads stay available in this browser tab while the server process is running. They are not saved as a permanent dataset.</p></section><section className="panel data-side-panel"><div className="panel-head"><div><span className="panel-kicker">ACTIVE DATASET</span><h2>{uploadResult?.filename ?? selectedMeta?.title}</h2></div><Database size={18} className="panel-icon" /></div>{uploadResult ? <><div className="metrics-grid mini"><Metric label="Nodes" value={number(uploadResult.nodeCount)} /><Metric label="Edges" value={number(uploadResult.edgeCount)} tone="teal" /><Metric label="Components" value={number(uploadResult.componentCount)} tone="warm" /></div><button className="secondary-button" onClick={() => { setInsight(""); insightMutation.mutate({ datasetId: activeDatasetId, question: `Read the uploaded file ${uploadResult.filename} using this context: ${uploadResult.context}`, context: uploadResult.context }); }} disabled={insightMutation.isPending}><Sparkles size={16} />{insightMutation.isPending ? "Reading network…" : "Generate upload insight"}</button></> : <div className="empty-state"><Database size={24} /><strong>Nothing uploaded in this session</strong><span>Your supplied datasets are already ready in the selector.</span></div>}</section></div></>}
        </div>
      </div>
    </main>

    <button className="floating-chat" onClick={() => setChatOpen(true)} aria-label="Open analyst chat"><Bot size={18} /><span>Ask about this network</span></button>

    {guideOpen && <div className="overlay" role="dialog" aria-modal="true"><div className="guide-modal"><div className="modal-head"><div><span className="eyebrow">FIELD GUIDE</span><h2>How this workspace works</h2></div><button className="icon-button" onClick={() => setGuideOpen(false)}><X size={17} /></button></div><div className="guide-body"><div className="guide-steps"><div className="guide-step"><span>01</span><div><strong>Choose or upload a network</strong><p>Start with a supplied dataset or use Upload CSV directly from the overview. A successful upload becomes the active analysis.</p></div></div><div className="guide-step"><span>02</span><div><strong>Read the structure</strong><p>Click any node in the structural preview to inspect that actor's in-degree, out-degree, community, and bridge score.</p></div></div><div className="guide-step"><span>03</span><div><strong>Run the experiment</strong><p>Compare seed strategies at the same budget, then inspect resilience under targeted removal.</p></div></div><div className="guide-step"><span>04</span><div><strong>Generate the product insight</strong><p>AI stays hidden until requested. It turns observed network evidence into a practical promotion test plan, with validation cautions.</p></div></div><div className="guide-step"><span>05</span><div><strong>Ask the analyst</strong><p>The chat answers targeting questions from the computed context. It can explain a shortlist, but it cannot prove causation.</p></div></div></div><div className="reference-shot"><div className="panel-kicker">PRODUCT WALKTHROUGH · STEP {guideStep + 1} OF 3</div><div className="guide-slide"><div className="guide-slide-image"><img src={GUIDE_IMAGES[guideStep === 2 ? 1 : 0]} alt={`Social Media Analytics guide step ${guideStep + 1}`} />{guideStep === 0 && <><span className="guide-marker marker-one">1</span><span className="guide-marker marker-two">2</span></>}{guideStep === 1 && <span className="guide-marker marker-three">3</span>}{guideStep === 2 && <><span className="guide-marker marker-four">4</span><span className="guide-marker marker-five">5</span></>}<button className="guide-next-arrow" onClick={() => setGuideStep(step => Math.min(2, step + 1))} disabled={guideStep === 2} aria-label="Show next guide step">→</button></div><div className="guide-slide-copy"><span className="guide-slide-count">0{guideStep + 1}</span><div><h3>{guideStep === 0 ? "Start with your network" : guideStep === 1 ? "Inspect the structure" : "Ask, then validate"}</h3><p>{guideStep === 0 ? "Choose a dataset, then use Upload CSV from the overview. A successful upload becomes the active analysis." : guideStep === 1 ? "Select a node to see the actor’s degree, community, and bridge score. The graph changes with the active CSV." : "Generate an insight only when needed, then ask a focused analyst question before spending budget."}</p></div></div></div><div className="guide-progress"><button className="guide-back-arrow" onClick={() => setGuideStep(step => Math.max(0, step - 1))} disabled={guideStep === 0} aria-label="Show previous guide step">←</button>{[0, 1, 2].map(step => <button key={step} className={`guide-step-dot ${guideStep === step ? "active" : ""}`} onClick={() => setGuideStep(step)} aria-label={`Go to guide step ${step + 1}`}>{step + 1}</button>)}</div></div></div><div className="modal-foot"><span><ShieldCheck size={15} />AI readouts are on-demand and grounded in the active dataset</span><button className="primary-button" onClick={() => setGuideOpen(false)}>Back to workspace</button></div></div></div>}

    {chatOpen && <div className={`chat-drawer ${chatMaximized ? "maximized" : ""}`} role="dialog" aria-label="Analyst chat" aria-modal="true"><div className="chat-head"><div><div className="chat-title"><Bot size={17} />Analyst chat</div><span>Grounded in {selectedMeta?.title ?? "your network"}</span></div><div className="chat-head-actions"><button className="icon-button" onClick={() => setChatMaximized(value => !value)} aria-label={chatMaximized ? "Restore analyst chat" : "Maximize analyst chat"} title={chatMaximized ? "Restore size" : "Maximize chat"}>{chatMaximized ? <Minimize2 size={17} /> : <Maximize2 size={17} />}</button><button className="icon-button" onClick={() => { stopSpeaking(); setChatOpen(false); }} aria-label="Close analyst chat"><X size={17} /></button></div></div><div className="chat-content" ref={chatContentRef} onScroll={handleChatScroll}><div className="chat-welcome"><Sparkles size={18} /><div><strong>Ask a precise question</strong><span>Try “which users bridge communities?” or “who should I test first with four seeds?”</span></div></div>{chatMessages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}><span className="chat-message-label">{message.role === "user" ? "You" : "Analyst"}</span><div className="chat-bubble">{message.role === "assistant" ? <><Streamdown>{message.content}</Streamdown><button className="speak-message" onClick={() => speaking && speakingMessage === message.content ? stopSpeaking() : speakText(message.content)} aria-label={speaking && speakingMessage === message.content ? "Stop reading this analyst reply" : "Read this analyst reply aloud"} title={speaking && speakingMessage === message.content ? "Stop this reply" : "Read this reply aloud"}>{speaking && speakingMessage === message.content ? <MicOff size={13} /> : <Volume2 size={13} />}{speaking && speakingMessage === message.content ? "Stop" : "Listen"}</button></> : message.content}</div></div>)}{chatMutation.isPending && <div className="chat-message assistant"><span className="chat-message-label">Analyst</span><div className="chat-bubble typing">Reading the active network…</div></div>}{chatJumpVisible && <button className="chat-jump-latest" onClick={() => chatContentRef.current?.scrollTo({ top: chatContentRef.current.scrollHeight, behavior: "smooth" })}><ArrowDown size={14} />Jump to latest</button>}<div className="suggested-questions"><button onClick={() => setQuestion("Which users are the strongest bridges between communities?")}>Who bridges communities?</button><button onClick={() => setQuestion("Which four users should I test first and why?")}>Suggest four targets</button><button onClick={() => setQuestion("What should I validate before using this result?")}>What should I validate?</button></div></div><div className="chat-input"><div className="chat-tools"><label className="language-picker"><span>Language</span><select value={language} onChange={event => setLanguage(event.target.value)}><option value="en-US">English</option><option value="hi-IN">हिन्दी</option><option value="te-IN">తెలుగు</option><option value="ta-IN">தமிழ்</option><option value="es-ES">Español</option><option value="fr-FR">Français</option></select></label><button className={`voice-tool ${voiceActive ? "active" : ""}`} onClick={toggleVoiceInput} aria-label={voiceActive ? "Stop voice input" : "Start voice input"} title={voiceActive ? "Stop listening" : "Speak your question"}>{voiceActive ? <MicOff size={15} /> : <Mic size={15} />}{voiceActive ? "Listening…" : "Voice input"}</button><button className={`voice-tool ${voiceReadEnabled ? "active" : ""}`} onClick={() => { if (voiceReadEnabled) stopSpeaking(); setVoiceReadEnabled(value => !value); }} aria-label={voiceReadEnabled ? "Stop spoken replies" : "Enable spoken analyst replies"} title={voiceReadEnabled ? "Stop spoken replies" : "Read analyst replies aloud"}>{voiceReadEnabled && speaking ? <MicOff size={15} /> : <Volume2 size={15} />}{voiceReadEnabled && speaking ? "Stop voice" : voiceReadEnabled ? "Voice on" : "Read aloud"}</button></div><textarea value={question} onChange={event => setQuestion(event.target.value)} placeholder="Ask about the network…" rows={3} onKeyDown={event => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); askChat(); } }} /><button className="primary-button" onClick={askChat} disabled={chatMutation.isPending || !question.trim()}>{chatMutation.isPending ? "Thinking…" : "Ask"}<ArrowUpRight size={15} /></button></div></div>}
  </div>;
}
