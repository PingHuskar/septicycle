const daysInAWeek = require("./daysInAWeek.js");
const ordinalafter = (ordinal) => {
  switch (ordinal.toLowerCase()) {
    case "first":
      return 1;
    case "second":
      return 1 + daysInAWeek;
    case "third":
      return 1 + daysInAWeek * 2;
    case "forth":
      return 1 + daysInAWeek * 3;
  }
};

module.exports = ordinalafter;