# Social Network Influence Lab — Sprint Brief

## What the app does

The app turns a directed relationship list into an exploratory network dashboard. It helps an analyst inspect who connects groups, compare possible campaign seed groups, and test how network structure changes when important actors are removed. Results are decision support: network position suggests who to investigate, but does not prove that a person will share content or cause conversions.

## User workflow

1. **Choose a network.** Start with one of the three bundled examples, or upload a CSV edge list.
2. **Check data quality.** Review the node and relationship counts, communities, connected components, self-loops, duplicate pairs, and missing endpoint references.
3. **Explore the graph.** Inspect the directed network preview and priority actor ranking. The audience table can be searched by actor ID or community.
4. **Compare seed strategies.** Compare random, degree, centrality, and community-aware seed selection using the same budget and diffusion settings. Rerunning creates a different, reproducible set of trials.
5. **Check resilience.** Compare removal of high-degree actors, bridge actors, and a repeatable random sample; inspect the remaining largest component and fragmentation.
6. **Ask for an interpretation.** Generate an on-demand insight or ask the analyst a question. Chat supports typed or voice questions and spoken replies where the configured services and browser support them.
7. **Share findings.** Download a PDF report. A dashboard link can be copied for a bundled sample dataset. Uploaded analyses are session-only and are not currently shareable by link.

## Features

- **Overview:** network metrics, interactive node inspection, priority actors, community mix, data-quality checks, and shortcuts to analysis actions.
- **Audience explorer:** bridge-score and community charts plus a searchable table of priority actors and their in-degree, out-degree, bridge score, and clustering.
- **Seed simulation:** four strategies, average/min/max reach, variability, seed lists, and community coverage over repeated independent-cascade-style trials.
- **Resilience:** targeted and random node-removal scenarios with component counts, largest-component retention, and fragmentation.
- **Data and uploads:** bundled sample networks plus CSV uploads. Required fields are `source` and `target`; `weight`, `interaction_type`, and `timestamp` are optional. Common source/target aliases are accepted. Quoted commas and line breaks are supported.
- **Analyst tools:** on-demand LLM insights/chat, language selection, microphone transcription, and browser text-to-speech.
- **Reports and navigation:** detailed PDF export, sample-dataset link sharing, responsive sidebar, refresh control, and an in-app walkthrough.

## How the code is organized

- `client/src/pages/Home.tsx` holds the single-page workspace, its navigation, active dataset state, and feature screens.
- `client/src/lib/trpc.ts` connects the React client to the typed API.
- `server/routers.ts` defines the tRPC procedures for datasets, uploads, AI, and logout.
- `server/analytics.ts` computes graph metrics, seed simulations, resilience scenarios, and uploaded-CSV analysis.
- `server/datasets.generated.ts` contains the three bundled network datasets.
- `server/storage.ts` writes uploads to configured object storage or the local fallback.
- `drizzle/schema.ts` currently defines the user table; uploaded datasets and analyses are not stored in a database.

## Sprint goal

Make the analysis journey dependable for a first-time user: load a dataset, understand the measures, compare strategies on the same active network, and leave with a useful report.

### Suggested split for a team of three

| Owner | Focus | Done means |
| --- | --- | --- |
| Person 1 — data and backend | Validate CSV edge cases and bounds; review metric definitions; confirm simulation and resilience use the active upload; document the input schema. | Valid files analyze consistently; invalid files show actionable errors; strategy and stress-test results use the selected network. |
| Person 2 — frontend and UX | Walk through the app as a new user; refine loading, empty, and error states; improve labels/tooltips for network terms; check narrow-screen layout and keyboard access. | A teammate can complete the workflow without verbal help; controls explain what they do and results are readable. |
| Person 3 — integration and demo | Own the end-to-end acceptance run, PDF/report review, AI configuration check, and sprint demo narrative; record blockers and coordinate merges. | The shared branch builds; the demo uses a known dataset and a valid CSV; the team can explain assumptions and limitations. |

### Working agreements for the day

- Start with a 10-minute walkthrough and choose one demo dataset plus one small CSV fixture.
- Agree on a single sprint acceptance checklist before parallel work. Keep API/schema changes coordinated with Person 1.
- Integrate at least once mid-sprint; avoid leaving UI and backend changes to the final merge.
- Reserve the final 20 minutes for a clean run-through and capture any issue that cannot be fixed safely in the sprint.

### Demo script

1. Open **Marketing referrals** and explain nodes, directed relationships, communities, and bridge score.
2. Inspect one actor, then search for a community in the Audience Explorer.
3. Run new seed trials and compare the four strategies; explain that this is a modelled estimate.
4. Show the resilience scenarios and explain the random baseline.
5. Upload a small edge-list CSV, confirm it becomes the active dataset, and run the same analyses against it.
6. Ask one grounded analyst question and download the PDF.

## Important current boundaries

- Uploaded analyses live in server memory for the current server process and are cached in the browser tab for convenience. A server restart expires the uploaded analysis; it is not a durable project dataset.
- Sample datasets are bundled demo data. Confirm provenance and meaning before presenting their values as real observations.
- Bundled community labels are supplied with the demo data. Uploaded networks receive deterministic label-propagation groupings over the undirected view; these are a useful heuristic, not a guarantee of natural communities.
- Centrality and diffusion are structural models. The current diffusion model uses a fixed activation probability for each directed edge; edge weight and interaction type do not change the activation probability.
- The AI analyst depends on configured external services. Keep a fallback demo path that does not rely on AI availability.
- Before using real or sensitive network data, the team should add authenticated access, ownership controls, and a retention policy for uploaded files.

## Local checks

Run `pnpm check`, `pnpm test`, and `pnpm build` before merging. The repository currently includes five automated tests across analytics and logout behavior.
