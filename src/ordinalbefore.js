const ordinalbefore = (ordinal) => {
  switch (ordinal.toLowerCase()) {
    case "first":
      return daysInAWeek;
    case "second":
      return daysInAWeek * 2;
    case "third":
      return daysInAWeek * 3;
    case "forth":
      return daysInAWeek * 4;
  }
};
module.exports = ordinalbefore;