import { createRankingProps, type Ranking } from "$data/ranking";

import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const { contest } = params;

  const item = (await import(`../../../data/ranking/${contest}`))
    .default as Ranking;

  return createRankingProps(item);
}) satisfies PageServerLoad;
