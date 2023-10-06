import type { ICompetition } from "./competitions";
import { codeforcesLink, facebookLink } from "./constants";

export const nextContest = {
  round: "October",
  special: "Pre POSN 1",
  duration: "13 October 2023 19:00 - 22:00",
  link: facebookLink,
} satisfies ICompetition;

export const isTBA = nextContest.link === "TBA";
export const nextContestEnd = new Date("2023-10-13 15:00:00Z");
export const pastNextContest = new Date() > nextContestEnd;

export const nextContestTime = nextContest.duration;
export const nextContestLink = nextContest.link;
export const nextContestIsSpecial = !!nextContest.special;
