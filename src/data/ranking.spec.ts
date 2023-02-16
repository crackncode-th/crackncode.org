import { describe, expect, it } from "vitest";

import { createRankingProps } from "./ranking";

describe("Ranking Utilities", () => {
  it("should sort scores", () => {
    expect(
      createRankingProps({
        round: "Contest",
        link: "https://example.com",
        tasks: ["A", "B", "C"],
        scores: [
          { name: "Alice", scores: [100, 100, 100] },
          { name: "Bob", scores: [100, 100, 90] },
          { name: "Charlie", scores: [100, 100, 80] },
        ],
      })
    ).toStrictEqual({
      round: "Contest",
      link: "https://example.com",
      headers: ["Rank", "Name", "A", "B", "C", "Total"],
      content: [
        [1, "Alice", 100, 100, 100, 300],
        [2, "Bob", 100, 100, 90, 290],
        [3, "Charlie", 100, 100, 80, 280],
      ],
    });
  });

  it("tie case", () => {
    expect(
      createRankingProps({
        round: "Contest",
        link: "https://example.com",
        tasks: ["A", "B", "C"],
        scores: [
          { name: "Alice", scores: [100, 100, 100] },
          { name: "Bob", scores: [100, 100, 100] },
          { name: "Charlie", scores: [100, 100, 100] },
        ],
      })
    ).toStrictEqual({
      round: "Contest",
      link: "https://example.com",
      headers: ["Rank", "Name", "A", "B", "C", "Total"],
      content: [
        [1, "Alice", 100, 100, 100, 300],
        [1, "Bob", 100, 100, 100, 300],
        [1, "Charlie", 100, 100, 100, 300],
      ],
    });
  });
});
