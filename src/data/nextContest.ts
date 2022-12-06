import { competitions } from "./competitions";

export const nextContest = competitions["Upcoming (2023)"][0];

export const nextContestTime = nextContest.duration;
export const nextContestLink = nextContest.link;
export const nextContestIsSpecial = !!nextContest.special;
