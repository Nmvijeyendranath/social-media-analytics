import { describe, expect, it } from "vitest";
import { analyzeUploadedCsv, getDatasetAnalysis, listDatasets, simulateStrategies } from "./analytics";

describe("Social Media Analytics dataset analytics", () => {
  it("lists the supplied datasets with real counts", () => {
    const datasets = listDatasets();
    expect(datasets).toHaveLength(3);
    expect(datasets.find(dataset => dataset.id === "marketing_referrals")).toMatchObject({ nodeCount: 300, edgeCount: 1100, communityCount: 8 });
    expect(datasets.every(dataset => dataset.quality.missingNodeRefs === 0)).toBe(true);
  });

  it("returns ranked nodes and graph preview data", () => {
    const analysis = getDatasetAnalysis("social_mentions");
    expect(analysis.meta.nodeCount).toBe(180);
    expect(analysis.nodes.length).toBeGreaterThan(5);
    expect(analysis.graph.nodes.length).toBeGreaterThan(5);
    expect(analysis.graph.edges.length).toBeGreaterThan(5);
    expect(analysis.nodes[0]).toHaveProperty("betweenness");
  });

  it("keeps strategy comparisons on the same seed budget", () => {
    const result = simulateStrategies("email_collaboration", { seedBudget: 3, trials: 4, activationProbability: 0.2 });
    expect(result.results).toHaveLength(4);
    expect(result.results.every(strategy => strategy.seeds.length === 3)).toBe(true);
    expect(result.results.every(strategy => strategy.averageSpread >= 3)).toBe(true);
  });

  it("accepts an uploaded edge-list CSV and returns a grounded context", () => {
    const result = analyzeUploadedCsv(
      "source,target,weight,interaction_type\nalpha,beta,3,referral\nbeta,gamma,2,reply\nalpha,gamma,1,share",
      "demo.csv",
    );
    expect(result).toMatchObject({ filename: "demo.csv", nodeCount: 3, edgeCount: 3 });
    expect(result.topNodes[0]).toHaveProperty("user_id");
    expect(result.context).toContain("demo.csv");
    expect(result.graph.edges).toEqual(expect.arrayContaining([
      expect.objectContaining({ source: "alpha", target: "beta", weight: 3 }),
    ]));
  });
});
