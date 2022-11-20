import { describe, expect, it } from "vitest";

import { firstSaturdayOf } from "./utils";

describe("firstSaturdayOf", () => {
  it("January 2023", () => {
    expect(firstSaturdayOf(2023, 1)).toBe("7 January 2023");
  });

  it("Februrary 2023", () => {
    expect(firstSaturdayOf(2023, 2)).toBe("4 February 2023");
  });

  it("March 2023", () => {
    expect(firstSaturdayOf(2023, 3)).toBe("4 March 2023");
  });

  it("April 2023", () => {
    expect(firstSaturdayOf(2023, 4)).toBe("1 April 2023");
  });
});
