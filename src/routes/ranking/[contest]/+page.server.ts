import fs from "node:fs/promises";

import { createRankingProps } from "$data/ranking";

import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const { contest } = params;

  const fileData = await fs.readFile(
    `src/data/ranking/${contest}.csv`,
    "utf-8"
  );
  const lines = fileData.split("\n");
  const headers = lines[0].split(",");
  const scores = lines.slice(1).map((line) => {
    const tokens = line.split(",");
    return {
      name: tokens[0],
      scores: tokens.slice(1).map((x) => +x),
    };
  });

  return createRankingProps({
    round: headers[0],
    tasks: headers.slice(1),
    scores,
  });
}) satisfies PageServerLoad;
