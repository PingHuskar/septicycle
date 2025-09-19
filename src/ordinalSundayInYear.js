import { filterWeekOfMonth } from "./filterWeekOfMonth.js";
import { getEverySundayInYear } from "./getEverySundayInYear.js";
export const ordinalSundayInYear = (
  year = new Date().getFullYear(),
  ordinal = `second`
) => {
  return filterWeekOfMonth(getEverySundayInYear(year), ordinal);
};
