export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function firstSaturdayOf(year: number, month: number) {
  const firstDay = new Date(Date.UTC(year, month - 1, 1));

  const weekDay = firstDay.getDay();
  const offset = 6 - weekDay;

  const target = new Date(Date.UTC(year, month - 1, offset + 1));

  return `${target.getDate()} ${
    monthNames[target.getMonth()]
  } ${target.getFullYear()}`;
}
