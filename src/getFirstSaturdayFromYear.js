const getFirstSaturdayFromYear = (year = new Date().getFullYear()) => {
  let fsArr = [];
  for (let month = 1; month <= monthsInAYear; month++) {
    let dow = new Date(`${year}-${month}`).getDay();
    let daystofs = daysInAWeek - dow;
    fsArr.push(new Date(`${year}-${month}-${daystofs}`));
  }
  return fsArr;
};

module.exports = getFirstSaturdayFromYear;