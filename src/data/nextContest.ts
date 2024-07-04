import type { ICompetition } from "./competitions";
import { codeforcesLink } from "./constants";

export const nextContest = {
  round: "July",
  special: "3rd Anniversary",
  duration: "6 July 2024 19:00 - 22:00",
  link: codeforcesLink,
} satisfies ICompetition;

export const isTBA = nextContest.link === "TBA";
export const nextContestEnd = new Date("2024-07-06 15:00:00Z");
export const pastNextContest = new Date() > nextContestEnd;

export const nextContestTime = nextContest.duration;
export const nextContestLink = nextContest.link;
export const nextContestSpecial = nextContest.special;
