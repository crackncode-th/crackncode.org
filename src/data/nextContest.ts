import type { ICompetition } from "./competitions";
import { codeforcesLink } from "./constants";

export const nextContest = {
  round: "July",
  special: "Anniversary Round",
  duration: "1 July 2023 19:00 - 22:00",
  link: codeforcesLink,
} satisfies ICompetition;

export const isTBA = nextContest.link === "TBA";
export const nextContestEnd = new Date("2023-07-01 15:00:00Z");
export const pastNextContest = new Date() > nextContestEnd;

export const nextContestTime = nextContest.duration;
export const nextContestLink = nextContest.link;
export const nextContestIsSpecial = !!nextContest.special;
