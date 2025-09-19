import { ordinalafter } from "./ordinalafter.js";
import { ordinalbefore } from "./ordinalbefore.js";
export const filterWeekOfMonth = (arr_days, ordinal) => {
  return arr_days.filter(
    (d) =>
      d.getDate() >= ordinalafter(ordinal) &&
      d.getDate() <= ordinalbefore(ordinal)
  );
};
