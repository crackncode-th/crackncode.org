export type Ranking = {
  round: string;
  link: string;
  tasks: string[];
  scores: Array<{ name: string; scores: number[] }>;
};

export function createRankingProps(ranking: Ranking) {
  const { round, link, tasks, scores } = ranking;

  const headers = ["Rank", "Name", ...tasks, "Total"];

  const computed = scores.map((score) => [
    0,
    score.name,
    ...score.scores,
    score.scores.reduce((a, b) => a + b, 0),
  ]);

  computed.sort((a, b) => {
    const aScore = +a.at(-1);
    const bScore = +b.at(-1);

    if (aScore > bScore) {
      return -1;
    } else if (aScore < bScore) {
      return 1;
    } else {
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    }
  });

  for (let i = 0; i < computed.length; i++) {
    computed[i][0] = i + 1;

    if (i > 0 && computed[i].at(-1) === computed[i - 1].at(-1)) {
      computed[i][0] = computed[i - 1][0];
    }
  }

  return {
    round,
    link,
    headers,
    content: computed,
  };
}
