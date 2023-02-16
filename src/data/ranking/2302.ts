import { codeforcesLink } from "$data/competitions";
import type { Ranking } from "$data/ranking";

export default {
  round: "February 2023",
  link: codeforcesLink,
  tasks: ["Center of Heart", "Twice Only", "Gamedev"],
  scores: [
    { name: "ilovep", scores: [100, 100, 100] },
    { name: "Fairy_Sama", scores: [100, 100, 40] },
    { name: "Pakapim Eua-anant", scores: [0, 100, 40] },
    { name: "ttamx", scores: [40, 0, 100] },
    { name: "blackslex", scores: [0, 100, 40] },
    { name: "peteza", scores: [100, 0, 0] },
    { name: "PoonYaPat", scores: [0, 100, 0] },
    { name: "M-W", scores: [0, 0, 100] },
    { name: "JJAnawat", scores: [0, 0, 40] },
    { name: "opal_lnwza007x", scores: [0, 0, 40] },
    { name: "campsloth", scores: [0, 0, 40] },
    { name: "Bruce wayne", scores: [0, 0, 40] },
    { name: "Aphrodicez", scores: [0, 0, 40] },
    { name: "usman yusoh", scores: [0, 0, 40] },
  ],
} satisfies Ranking;
