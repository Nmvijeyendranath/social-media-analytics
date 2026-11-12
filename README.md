# Social Media Analytics

An interactive social network analysis lab for exploring influence, communities, and resilience. Upload edge-list CSVs, compare diffusion strategies, generate AI insights, and export reports.

## Features

- Explore three bundled sample networks with an interactive graph, actor rankings, community summaries, and data-quality checks.
- Upload CSV networks with `source` and `target` columns; optional columns include `weight`, `interaction_type`, and `timestamp`.
- Compare random, degree-based, centrality-based, and community-aware seed strategies.
- Stress-test connectivity by removing high-degree actors, bridge actors, or a repeatable random sample.
- Ask the analyst for on-demand, network-grounded explanations; export a PDF report.

## Run locally

Requirements: Node.js and pnpm.

```sh
pnpm install
pnpm dev
```

Open the local URL printed by the server. Useful project checks:

```sh
pnpm check
pnpm test
pnpm build
```

## Configuration

The app runs with bundled sample data without external credentials. AI insights and voice transcription require the configured service environment variables. Copy the required variable names from `server/_core/env.ts` into a local `.env`; never commit `.env` or credentials.

Uploads are temporary analyses held in server memory. They are not durable datasets, and a server restart expires them. The local storage fallback writes uploaded files to `local-uploads/`, which is excluded from Git.

## Sprint notes

See [SPRINT_BRIEF.md](SPRINT_BRIEF.md) for the workflow, feature guide, demo script, limitations, and a suggested task split for a three-person team.
