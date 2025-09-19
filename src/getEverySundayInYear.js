import { getFirstSundayDateOfTheYear } from "./getFirstSundayDateOfTheYear.js";
export const getEverySundayInYear = (year = new Date().getFullYear()) => {
  let retArr = [];
  const firstSundayInYear = getFirstSundayDateOfTheYear(year);
  while (firstSundayInYear.getFullYear() == year) {
    retArr.push(new Date(firstSundayInYear));
    firstSundayInYear.setDate(firstSundayInYear.getDate() + 7);
  }
  return retArr;
};
