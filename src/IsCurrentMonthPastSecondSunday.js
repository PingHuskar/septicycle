import { ordinalSundayInYear } from "./ordinalSundayInYear.js";
export const IsCurrentMonthPastSecondSunday = (d = new Date()) => {
  const SecondSundayThisMonth = ordinalSundayInYear(
    d.getFullYear(),
    `second`
  ).at(d.getMonth());
  return d >= SecondSundayThisMonth;
};
