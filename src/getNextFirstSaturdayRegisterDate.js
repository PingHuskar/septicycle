import { OneDay } from "./OneDay.js";
import { daysTillTuesday } from "./daysTillTuesday.js";
import { getFirstSaturdayFromYear } from "./getFirstSaturdayFromYear.js";
export const getNextFirstSaturdayRegisterDate = (year = new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map(
    (day) => new Date(day + daysTillTuesday * OneDay)
  );
};
