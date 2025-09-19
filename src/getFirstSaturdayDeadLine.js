import { OneDay } from "./OneDay.js";
import { daysbeforeFSLatesubmissions } from "./daysbeforeFSLatesubmissions.js";
import { getFirstSaturdayFromYear } from "./getFirstSaturdayFromYear.js";
export const getFirstSaturdayDeadLine = (year = new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map(
    (day) => new Date(day - daysbeforeFSLatesubmissions * OneDay)
  );
};
