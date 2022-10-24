export interface ICompetition {
  round: string;
  special?: string;
  duration: string;
  link: string;
}

export const codeforcesLink =
  "https://crackncode.contest.codeforces.com/group/rn8uJP8lA7/contests";

export const competitions: Record<string, ICompetition[]> = {
  "2021": [
    {
      round: "July",
      duration: "3 July 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-july-2021",
    },
    {
      round: "August",
      duration: "8 August 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-august-2021",
    },
    {
      round: "September",
      duration: "4 September 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-september-2021",
    },
    {
      round: "October",
      duration: "2 October 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-october-2021",
    },
    {
      round: "November",
      duration: "6 November 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-november-2021",
    },
    {
      round: "December",
      duration: "4 December 2021 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-december-2021",
    },
  ],
  "2022": [
    {
      round: "January",
      special: "New Year",
      duration: "31 December 2021 18:00 - 1 January 2022 06:00",
      link: "https://www.hackerrank.com/crack-n-code-january-2022",
    },
    {
      round: "February",
      duration: "5 February 2022 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-february-2022",
    },
    {
      round: "March",
      duration: "5 March 2022 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-march-2022",
    },
    {
      round: "April",
      duration: "2 April 2022 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-april-2022",
    },
    {
      round: "May",
      duration: "7 May 2022 19:00 - 22:00",
      link: "https://www.hackerrank.com/crack-n-code-may-2022",
    },
    {
      round: "June",
      special: "Pre TOI18",
      duration: "28 & 29 May 2022 19:00 - 22:00",
      link: "https://cnc-pretoi18.netlify.app/",
    },
    {
      round: "July",
      special: "Anniversary Round",
      duration: "2 July 2022 19:00 - 22:00",
      link: "",
    },
    {
      round: "August",
      duration: "6 August 2022 19:00 - 22:00",
      link: codeforcesLink,
    },
    {
      round: "September",
      duration: "10 September 2022 19:00 - 22:00",
      link: codeforcesLink,
    },
    {
      round: "October",
      duration: "1 October 2022 19:00 - 22:00",
      link: codeforcesLink,
    },
    {
      round: "October Extra",
      special: "Pre POSN 1",
      duration: "16 October 2022 19:00 - 22:00",
      link: "/special/2210/pre-posn-1",
    },
  ],
  "Upcoming (2022)": [
    {
      round: "November",
      duration: "5 November 2022 19:00 - 22:00",
      link: codeforcesLink,
    },
    {
      round: "December",
      duration: "3 December 2022 19:00 - 22:00",
      link: codeforcesLink,
    },
  ],
};
