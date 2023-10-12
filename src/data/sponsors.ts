export interface ISponsor {
  image: string;
  url: string;
  name: string;
  sponsoring: string;
  medal: string;
}

export const sponsors = [
  {
    image: "/logos/taurus.webp",
    url: "https://learntaurus.com/",
    name: "TAURUS",
    sponsoring: "This website domain, contest costs and coffee for members",
    medal: "🎉🎉🎉",
  },
] satisfies ISponsor[];
