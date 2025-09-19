export const getFirstSundayDateOfTheYear = (year = new Date().getFullYear()) => {
  let newYear = new Date(`${year}-01-01`).getDay();
  let FirstSundayFromNewYear = 8 - newYear;
  let FirstSundayDateOfTheYear = new Date(
    `${year}-01-${FirstSundayFromNewYear}`
  );
  return FirstSundayDateOfTheYear;
};
