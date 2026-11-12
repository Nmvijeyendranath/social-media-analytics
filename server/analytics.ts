import { datasetBundles, type DatasetBundle, type DatasetEdge, type DatasetNode } from "./datasets.generated";
import { randomUUID } from "node:crypto";

const uploadedBundles = new Map<string, DatasetBundle>();

function requireBundle(datasetId: string): DatasetBundle {
  const bundle = uploadedBundles.get(datasetId) ?? datasetBundles[datasetId];
  if (!bundle) throw new Error(`Unknown or expired dataset: ${datasetId}`);
  return bundle;
}

export const DATASET_META = {
  marketing_referrals: {
    id: "marketing_referrals",
    title: "Marketing referrals",
    subtitle: "Referral, invite, and purchase-share pathways",
    description: "The primary Social Media Analytics demo: eight audience segments and 30 days of directed referral behavior.",
    accent: "amber",
  },
  social_mentions: {
    id: "social_mentions",
    title: "Social mentions",
    subtitle: "Replies, shares, mentions, and follows",
    description: "A directed social interaction network for studying reach, brokerage, and community coverage.",
    accent: "teal",
  },
  email_collaboration: {
    id: "email_collaboration",
    title: "Email collaboration",
    subtitle: "Cross-team email, reply, and CC links",
    description: "A compact collaboration graph designed for teaching centrality and network resilience.",
    accent: "blue",
  },
} as const;

export type DatasetId = keyof typeof DATASET_META;

function getBundle(datasetId: string): DatasetBundle {
  return uploadedBundles.get(datasetId) ?? datasetBundles[datasetId] ?? datasetBundles.marketing_referrals;
}

function buildAdjacency(bundle: DatasetBundle) {
  const out = new Map<string, DatasetEdge[]>();
  const undirected = new Map<string, Set<string>>();
  for (const node of bundle.nodes) {
    out.set(node.user_id, []);
    undirected.set(node.user_id, new Set());
  }
  for (const edge of bundle.edges) {
    out.get(edge.source)?.push(edge);
    undirected.get(edge.source)?.add(edge.target);
    undirected.get(edge.target)?.add(edge.source);
  }
  return { out, undirected };
}

function dateRange(edges: DatasetEdge[]) {
  const dates = edges.map(edge => edge.timestamp).sort();
  return { start: dates[0]?.slice(0, 10) ?? "—", end: dates.at(-1)?.slice(0, 10) ?? "—" };
}

function datasetFacts(bundle: DatasetBundle) {
  return {
    nodeCount: bundle.nodes.length,
    edgeCount: bundle.edges.length,
    communityCount: new Set(bundle.nodes.map(node => node.community_label)).size,
    interactionTypes: Array.from(new Set(bundle.edges.map(edge => edge.interaction_type))),
    weightTotal: bundle.edges.reduce((sum, edge) => sum + edge.weight, 0),
    dateRange: dateRange(bundle.edges),
    quality: {
      missingNodeRefs: bundle.edges.filter(edge => !bundle.nodes.some(node => node.user_id === edge.source) || !bundle.nodes.some(node => node.user_id === edge.target)).length,
      selfLoops: bundle.edges.filter(edge => edge.source === edge.target).length,
      duplicatePairs: bundle.edges.length - new Set(bundle.edges.map(edge => `${edge.source}:${edge.target}`)).size,
    },
  };
}

function brandColor(community: string) {
  const palette = ["#e8a44a", "#4f8f8c", "#d66b55", "#5875a7", "#9d7bb0", "#879b55", "#c77d5c", "#4b8190"];
  const match = community.match(/(\d+)/);
  return palette[(Number(match?.[1] ?? 0)) % palette.length];
}

function bfsDistances(start: string, adjacency: Map<string, DatasetEdge[]>) {
  const distances = new Map<string, number>([[start, 0]]);
  const queue = [start];
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const current = queue[cursor];
    for (const edge of adjacency.get(current) ?? []) {
      if (!distances.has(edge.target)) {
        distances.set(edge.target, (distances.get(current) ?? 0) + 1);
        queue.push(edge.target);
      }
    }
  }
  return distances;
}

function betweennessCentrality(nodes: string[], adjacency: Map<string, DatasetEdge[]>) {
  const scores = new Map(nodes.map(node => [node, 0]));
  for (const source of nodes) {
    const stack: string[] = [];
    const predecessors = new Map<string, string[]>();
    const sigma = new Map(nodes.map(node => [node, 0]));
    const distance = new Map(nodes.map(node => [node, -1]));
    sigma.set(source, 1);
    distance.set(source, 0);
    const queue = [source];
    for (let cursor = 0; cursor < queue.length; cursor += 1) {
      const current = queue[cursor];
      stack.push(current);
      for (const edge of adjacency.get(current) ?? []) {
        const target = edge.target;
        if ((distance.get(target) ?? -1) < 0) {
          queue.push(target);
          distance.set(target, (distance.get(current) ?? 0) + 1);
        }
        if (distance.get(target) === (distance.get(current) ?? 0) + 1) {
          sigma.set(target, (sigma.get(target) ?? 0) + (sigma.get(current) ?? 0));
          const list = predecessors.get(target) ?? [];
          list.push(current);
          predecessors.set(target, list);
        }
      }
    }
    const dependency = new Map(nodes.map(node => [node, 0]));
    while (stack.length) {
      const node = stack.pop()!;
      for (const predecessor of predecessors.get(node) ?? []) {
        const share = ((sigma.get(predecessor) ?? 0) / Math.max(sigma.get(node) ?? 1, 1)) * (1 + (dependency.get(node) ?? 0));
        dependency.set(predecessor, (dependency.get(predecessor) ?? 0) + share);
      }
      if (node !== source) scores.set(node, (scores.get(node) ?? 0) + (dependency.get(node) ?? 0));
    }
  }
  return scores;
}

function networkStats(bundle: DatasetBundle) {
  const { out, undirected } = buildAdjacency(bundle);
  const ids = bundle.nodes.map(node => node.user_id);
  const inCount = new Map(ids.map(id => [id, 0]));
  const weightedOut = new Map(ids.map(id => [id, 0]));
  const weightedIn = new Map(ids.map(id => [id, 0]));
  for (const edge of bundle.edges) {
    inCount.set(edge.target, (inCount.get(edge.target) ?? 0) + 1);
    weightedOut.set(edge.source, (weightedOut.get(edge.source) ?? 0) + edge.weight);
    weightedIn.set(edge.target, (weightedIn.get(edge.target) ?? 0) + edge.weight);
  }
  const betweenness = betweennessCentrality(ids, out);
  const centrality = new Map<string, { degree: number; inDegree: number; outDegree: number; weightedIn: number; weightedOut: number; betweenness: number; closeness: number; clustering: number }>();
  for (const id of ids) {
    const distances = bfsDistances(id, out);
    const reachable = Array.from(distances.values()).filter(distance => distance > 0);
    const distanceSum = reachable.reduce((sum, distance) => sum + distance, 0);
    const neighbors = Array.from(undirected.get(id) ?? []);
    let closed = 0;
    for (const left of neighbors) {
      for (const right of neighbors) {
        if (left < right && undirected.get(left)?.has(right)) closed += 1;
      }
    }
    const possible = neighbors.length * Math.max(neighbors.length - 1, 0) / 2;
    centrality.set(id, {
      degree: (undirected.get(id)?.size ?? 0),
      inDegree: inCount.get(id) ?? 0,
      outDegree: out.get(id)?.length ?? 0,
      weightedIn: weightedIn.get(id) ?? 0,
      weightedOut: weightedOut.get(id) ?? 0,
      betweenness: Math.round((betweenness.get(id) ?? 0) * 100) / 100,
      closeness: distanceSum ? Math.round((reachable.length / distanceSum) * 1000) / 1000 : 0,
      clustering: possible ? Math.round((closed / possible) * 1000) / 1000 : 0,
    });
  }
  return { out, undirected, centrality };
}

function weakComponents(ids: string[], undirected: Map<string, Set<string>>, removed = new Set<string>()) {
  const unseen = new Set(ids.filter(id => !removed.has(id)));
  const components: string[][] = [];
  while (unseen.size) {
    const start = unseen.values().next().value as string;
    const component: string[] = [start];
    unseen.delete(start);
    for (let cursor = 0; cursor < component.length; cursor += 1) {
      const current = component[cursor];
      for (const neighbor of Array.from(undirected.get(current) ?? [])) {
        if (!removed.has(neighbor) && unseen.has(neighbor)) {
          unseen.delete(neighbor);
          component.push(neighbor);
        }
      }
    }
    components.push(component);
  }
  return components.sort((a, b) => b.length - a.length);
}

function detectCommunities(ids: string[], undirected: Map<string, Set<string>>) {
  const labels = new Map(ids.map(id => [id, id]));
  const random = seededRandom(20261112);
  for (let round = 0; round < 30; round += 1) {
    let changed = false;
    const order = [...ids];
    for (let index = order.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
    }
    for (const id of order) {
      const counts = new Map<string, number>();
      for (const neighbor of Array.from(undirected.get(id) ?? [])) {
        if (neighbor === id) continue;
        const label = labels.get(neighbor)!;
        counts.set(label, (counts.get(label) ?? 0) + 1);
      }
      if (!counts.size) continue;
      const maxCount = Array.from(counts.values()).reduce((maximum, count) => Math.max(maximum, count), 0);
      const candidates = Array.from(counts).filter(([, count]) => count === maxCount).map(([label]) => label);
      const selected = candidates[Math.floor(random() * candidates.length)];
      if (selected !== labels.get(id)) {
        labels.set(id, selected);
        changed = true;
      }
    }
    if (!changed) break;
  }
  const groups = new Map<string, string[]>();
  for (const [id, label] of Array.from(labels.entries())) groups.set(label, [...(groups.get(label) ?? []), id]);
  const orderedGroups = Array.from(groups.values()).sort((a, b) => b.length - a.length || a[0].localeCompare(b[0]));
  const communityByNode = new Map<string, string>();
  orderedGroups.forEach((group, index) => group.forEach(id => communityByNode.set(id, `segment_${index}`)));
  return communityByNode;
}

function seededRandom(seed: number) {
  let value = seed >>> 0;
  return () => {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function listDatasets() {
  return Object.values(DATASET_META).map(meta => {
    const bundle = getBundle(meta.id);
    return {
      ...meta,
      ...datasetFacts(bundle),
    };
  });
}

export function getDatasetAnalysis(datasetId: string) {
  const bundle = requireBundle(datasetId);
  const suppliedMeta = DATASET_META[datasetId as DatasetId];
  const meta = suppliedMeta
    ? { ...suppliedMeta, ...datasetFacts(bundle) }
    : { id: datasetId, title: datasetId, subtitle: "Uploaded edge-list network", description: "A user-provided network analyzed in this session.", accent: "orange", ...datasetFacts(bundle) };
  const { out, undirected, centrality } = networkStats(bundle);
  const nodeById = new Map(bundle.nodes.map(node => [node.user_id, node]));
  const nodes = bundle.nodes.map(node => ({
    ...node,
    color: brandColor(node.community_label),
    ...centrality.get(node.user_id)!,
  }));
  const ranked = [...nodes].sort((a, b) => (b.betweenness + b.inDegree / 10 + b.outDegree / 10) - (a.betweenness + a.inDegree / 10 + a.outDegree / 10));
  const visibleIds = new Set(ranked.slice(0, Math.min(90, ranked.length)).map(node => node.user_id));
  const visibleEdges = bundle.edges
    .filter(edge => visibleIds.has(edge.source) && visibleIds.has(edge.target))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 260);
  const components = weakComponents(bundle.nodes.map(node => node.user_id), undirected);
  return {
    meta,
    stats: {
      density: directedDensity(bundle),
      componentCount: components.length,
      largestComponent: components[0]?.length ?? 0,
      averageWeight: Math.round((bundle.edges.reduce((sum, edge) => sum + edge.weight, 0) / Math.max(bundle.edges.length, 1)) * 10) / 10,
    },
    nodes: ranked.slice(0, 16),
    graph: {
      nodes: Array.from(visibleIds).map(id => nodeById.get(id)!).map(node => ({ ...node, color: brandColor(node.community_label), ...centrality.get(node.user_id)! })),
      edges: visibleEdges,
    },
    communities: Array.from(new Set(bundle.nodes.map(node => node.community_label))).map(label => ({
      label,
      count: bundle.nodes.filter(node => node.community_label === label).length,
      color: brandColor(label),
    })).sort((a, b) => b.count - a.count),
    method: "Directed degree, Brandes betweenness, reachable closeness, undirected local clustering",
  };
}

function directedDensity(bundle: DatasetBundle) {
  const n = bundle.nodes.length;
  if (n < 2) return 0;
  const pairs = new Set(bundle.edges.filter(edge => edge.source !== edge.target).map(edge => `${edge.source}\u0000${edge.target}`));
  return Math.round((pairs.size / (n * (n - 1))) * 10000) / 100;
}

function selectSeeds(nodes: ReturnType<typeof getDatasetAnalysis>["nodes"], strategy: string, k: number, random: () => number) {
  if (strategy === "random") {
    const shuffled = [...nodes];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled.slice(0, k).map(node => node.user_id);
  }
  if (strategy === "community") {
    const byCommunity = new Map<string, typeof nodes>();
    for (const node of nodes) byCommunity.set(node.community_label, [...(byCommunity.get(node.community_label) ?? []), node]);
    const groups = Array.from(byCommunity.values()).map(group => [...group].sort((a, b) => b.betweenness - a.betweenness));
    const seeds: string[] = [];
    for (let round = 0; seeds.length < k && round < nodes.length; round += 1) {
      for (const group of groups) {
        if (group[round] && !seeds.includes(group[round].user_id)) seeds.push(group[round].user_id);
        if (seeds.length >= k) break;
      }
    }
    return seeds;
  }
  const scored = [...nodes].sort((a, b) => {
    const score = (node: typeof a) => strategy === "degree" ? node.inDegree + node.outDegree : node.betweenness + node.closeness * 20;
    return score(b) - score(a);
  });
  return scored.slice(0, k).map(node => node.user_id);
}

function simulateDiffusion(bundle: DatasetBundle, seeds: string[], probability: number, random: () => number) {
  const { out } = buildAdjacency(bundle);
  const active = new Set(seeds);
  const frontier = [...seeds];
  const curve = [active.size];
  let rounds = 0;
  while (frontier.length && rounds < 12) {
    const next: string[] = [];
    for (const source of frontier) {
      for (const edge of out.get(source) ?? []) {
        if (!active.has(edge.target) && random() < probability) {
          active.add(edge.target);
          next.push(edge.target);
        }
      }
    }
    if (!next.length) break;
    frontier.splice(0, frontier.length, ...next);
    curve.push(active.size);
    rounds += 1;
  }
  return { reached: active.size, rounds, curve };
}

export function simulateStrategies(datasetId: string, input: { seedBudget: number; trials: number; activationProbability: number; run?: number }) {
  const bundle = requireBundle(datasetId);
  const allCentrality = networkStats(bundle).centrality;
  const allNodes = bundle.nodes.map(node => ({
    ...node,
    color: brandColor(node.community_label),
    ...allCentrality.get(node.user_id)!,
  }));
  const rankedNodes = [...allNodes].sort((a, b) => (b.betweenness + b.inDegree / 10 + b.outDegree / 10) - (a.betweenness + a.inDegree / 10 + a.outDegree / 10));
  const strategies = [
    { id: "random", label: "Random baseline" },
    { id: "degree", label: "Degree-based" },
    { id: "centrality", label: "Centrality-based" },
    { id: "community", label: "Community-aware" },
  ];
  const results = strategies.map((strategy, strategyIndex) => {
    const spreads: number[] = [];
    let representativeCurve: number[] = [];
    for (let trial = 0; trial < input.trials; trial += 1) {
      const random = seededRandom(139 + strategyIndex * 997 + trial * 31 + (input.run ?? 0) * 104729);
      const seeds = selectSeeds(rankedNodes, strategy.id, Math.min(input.seedBudget, rankedNodes.length), strategy.id === "random" ? random : () => 0.5);
      const simulation = simulateDiffusion(bundle, seeds, input.activationProbability, random);
      spreads.push(simulation.reached);
      if (trial === 0) representativeCurve = simulation.curve;
    }
    const average = spreads.reduce((sum, value) => sum + value, 0) / Math.max(spreads.length, 1);
    const variance = spreads.reduce((sum, value) => sum + (value - average) ** 2, 0) / Math.max(spreads.length, 1);
    const seeds = selectSeeds(rankedNodes, strategy.id, Math.min(input.seedBudget, rankedNodes.length), () => 0.5);
    const communityCoverage = new Set(seeds.map(seed => bundle.nodes.find(node => node.user_id === seed)?.community_label)).size;
    return {
      ...strategy,
      averageSpread: Math.round(average * 10) / 10,
      minSpread: Math.min(...spreads),
      maxSpread: Math.max(...spreads),
      variability: Math.round(Math.sqrt(variance) * 10) / 10,
      communityCoverage,
      seeds,
      curve: representativeCurve,
    };
  });
  return { datasetId, parameters: input, results, winner: [...results].sort((a, b) => b.averageSpread - a.averageSpread)[0]?.id };
}

export function resilienceReport(datasetId: string) {
  const bundle = requireBundle(datasetId);
  const { undirected, centrality } = networkStats(bundle);
  const ids = bundle.nodes.map(node => node.user_id);
  const original = weakComponents(ids, undirected);
  const rankedDegree = [...ids].sort((a, b) => (centrality.get(b)?.degree ?? 0) - (centrality.get(a)?.degree ?? 0));
  const rankedBridge = [...ids].sort((a, b) => (centrality.get(b)?.betweenness ?? 0) - (centrality.get(a)?.betweenness ?? 0));
  const randomGenerator = seededRandom(202603);
  const random = [...ids];
  for (let index = random.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(randomGenerator() * (index + 1));
    [random[index], random[swapIndex]] = [random[swapIndex], random[index]];
  }
  const scenarios = [
    { id: "degree", label: "Remove high-degree nodes", removed: rankedDegree.slice(0, Math.max(1, Math.ceil(ids.length * 0.05))) },
    { id: "bridge", label: "Remove high-betweenness nodes", removed: rankedBridge.slice(0, Math.max(1, Math.ceil(ids.length * 0.05))) },
    { id: "random", label: "Remove a fixed random-like sample", removed: random.slice(0, Math.max(1, Math.ceil(ids.length * 0.05))) },
  ];
  return {
    original: { componentCount: original.length, largestComponent: original[0]?.length ?? 0 },
    scenarios: scenarios.map(scenario => {
      const components = weakComponents(ids, undirected, new Set(scenario.removed));
      return {
        id: scenario.id,
        label: scenario.label,
        removedCount: scenario.removed.length,
        componentCount: components.length,
        largestComponent: components[0]?.length ?? 0,
        fragmentation: Math.round((components.length / Math.max(original.length, 1)) * 100) / 100,
      };
    }),
  };
}

function parseCsv(csvText: string) {
  const rows: string[][] = [];
  const values: string[] = [];
  let current = "";
  let quoted = false;
  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];
    if (character === '"') {
      if (quoted && csvText[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(current.trim());
      current = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && csvText[index + 1] === "\n") index += 1;
      values.push(current.trim());
      if (values.some(value => value.length)) rows.push([...values]);
      values.length = 0;
      current = "";
    } else {
      current += character;
    }
  }
  if (quoted) throw new Error("CSV has an unclosed quoted field.");
  values.push(current.trim());
  if (values.some(value => value.length)) rows.push(values);
  return rows;
}

export function analyzeUploadedCsv(csvText: string, filename: string) {
  const rows = parseCsv(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) throw new Error("Upload needs a header row and at least one data row.");
  const headers = rows[0].map(header => header.toLowerCase().replace(/\s+/g, "_"));
  const get = (row: string[], names: string[], fallback = "") => {
    const index = names.map(name => headers.indexOf(name)).find(index => index >= 0);
    return index === undefined ? fallback : row[index] ?? fallback;
  };
  const edges: DatasetEdge[] = rows.slice(1).map(row => {
    const source = get(row, ["source", "from", "from_user", "sender", "user_id"]);
    const target = get(row, ["target", "to", "to_user", "receiver", "mentioned_user"]);
    const rawWeight = get(row, ["weight", "value", "count"], "1");
    const parsedWeight = rawWeight.trim() === "" ? 1 : Number(rawWeight);
    return {
      source,
      target,
      weight: Number.isFinite(parsedWeight) && parsedWeight >= 0 ? parsedWeight : 1,
      interaction_type: get(row, ["interaction_type", "type", "relationship"], "interaction"),
      timestamp: get(row, ["timestamp", "date", "created_at"], "uploaded"),
    };
  }).filter(edge => edge.source && edge.target);
  if (!edges.length) throw new Error("No usable source/target relationships found. Include source and target columns.");
  const ids = Array.from(new Set(edges.flatMap(edge => [edge.source, edge.target])));
  const communityByNode = detectCommunities(ids, buildAdjacency({ nodes: ids.map(user_id => ({ user_id, community_label: "", joined: "—" })), edges }).undirected);
  const nodes: DatasetNode[] = ids.map(user_id => ({ user_id, community_label: communityByNode.get(user_id) ?? "segment_0", joined: "—" }));
  const bundle = { nodes, edges };
  const { centrality, undirected } = networkStats(bundle);
  const enrichedNodes = nodes.map(node => ({ ...node, color: brandColor(node.community_label), ...centrality.get(node.user_id)! }));
  const topNodes = [...enrichedNodes].sort((a, b) => (b.betweenness + b.inDegree + b.outDegree) - (a.betweenness + a.inDegree + a.outDegree)).slice(0, 12);
  const components = weakComponents(ids, undirected);
  const visibleIds = new Set(topNodes.map(node => node.user_id));
  const graphEdges = edges.filter(edge => visibleIds.has(edge.source) && visibleIds.has(edge.target)).slice(0, 260);
  const uploadId = `upload_${randomUUID()}`;
  uploadedBundles.set(uploadId, bundle);
  while (uploadedBundles.size > 20) {
    const oldestId = uploadedBundles.keys().next().value;
    if (!oldestId) break;
    uploadedBundles.delete(oldestId);
  }
  return {
    uploadId,
    uploaded: true,
    filename,
    meta: {
      id: "uploaded",
      title: filename,
      subtitle: "Uploaded edge-list network",
      description: "A user-provided network analyzed in this session.",
      accent: "orange",
      nodeCount: nodes.length,
      edgeCount: edges.length,
      communityCount: new Set(nodes.map(node => node.community_label)).size,
      interactionTypes: Array.from(new Set(edges.map(edge => edge.interaction_type))),
      weightTotal: edges.reduce((sum, edge) => sum + edge.weight, 0),
      dateRange: dateRange(edges),
      quality: { missingNodeRefs: 0, selfLoops: edges.filter(edge => edge.source === edge.target).length, duplicatePairs: edges.length - new Set(edges.map(edge => `${edge.source}:${edge.target}`)).size },
    },
    stats: {
      density: directedDensity(bundle),
      componentCount: components.length,
      largestComponent: components[0]?.length ?? 0,
      averageWeight: Math.round((edges.reduce((sum, edge) => sum + edge.weight, 0) / Math.max(edges.length, 1)) * 10) / 10,
    },
    nodes: topNodes,
    graph: { nodes: topNodes, edges: graphEdges },
    communities: Array.from(new Set(nodes.map(node => node.community_label))).map(label => ({ label, count: nodes.filter(node => node.community_label === label).length, color: brandColor(label) })).sort((a, b) => b.count - a.count),
    method: "Directed degree, Brandes betweenness, reachable closeness, undirected local clustering, deterministic label-propagation communities for uploads",
    nodeCount: nodes.length,
    edgeCount: edges.length,
    interactionTypes: Array.from(new Set(edges.map(edge => edge.interaction_type))),
    dateRange: dateRange(edges),
    componentCount: components.length,
    largestComponent: components[0]?.length ?? 0,
    topNodes,
    preview: edges.slice(0, 8),
    context: JSON.stringify({ filename, nodeCount: nodes.length, edgeCount: edges.length, topNodes, componentCount: components.length }),
  };
}
