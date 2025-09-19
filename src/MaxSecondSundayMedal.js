import { SecondSundayMedalIntroduced } from "./SecondSundayMedalIntroduced.js";
import { monthsInAYear } from "./monthsInAYear.js";
import { IsCurrentMonthPastSecondSunday } from "./IsCurrentMonthPastSecondSunday.js";
export const MaxSecondSundayMedal = (d = new Date()) => {
  if (d.getFullYear() < SecondSundayMedalIntroduced.getFullYear()) {
    return 0;
  } else if (
    SecondSundayMedalIntroduced.getFullYear() == d.getFullYear() &&
    d.getMonth() == SecondSundayMedalIntroduced.getMonth()
  ) {
    if (d.getDate() < SecondSundayMedalIntroduced.getDate()) {
      return 0;
    }
  }
  const prevyear =
    (d.getFullYear() - SecondSundayMedalIntroduced.getFullYear()) *
      monthsInAYear -
    1;
  return prevyear + d.getMonth() + (IsCurrentMonthPastSecondSunday(d) ? 1 : 0);
};
