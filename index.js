const ss = require("simple-statistics");
const cd = require("countdown");
const d3 = require('d3');


const GlobalChallenges = {
  buriedmem: {
    start: `12 Apr 2024 16:00:00 UTC`,
    end: `6 May 2024 16:00:00 UTC`,
  },
  sharedmem: {
    start: `12 Jul 2024 16:00:00 UTC`,
    end: `5 Aug 2024 16:00:00 UTC`,
  },
};

const CDGlobalChallenge = (GlobalChallenge = GlobalChallenges.sharedmem) => {
  const start = cd(new Date(), new Date(GlobalChallenge.start)).value;
  if (start > 0) {
    return (
      `Start in ` +
      cd(new Date(), new Date(GlobalChallenge.start)).toLocaleString()
    );
  }
  const end = cd(new Date(), new Date(GlobalChallenge.end)).value;
  if (end > 0) {
    return (
      `Ends in ` +
      cd(new Date(), new Date(GlobalChallenge.end)).toLocaleString()
    );
  } else {
    return (
      `Ended ` +
      cd(new Date(), new Date(GlobalChallenge.end)).toLocaleString() +
      ` Ago`
    );
  }
};

const EstimateGlobalChallengeScore = (now = new Date(), GlobalChallenge = GlobalChallenges.sharedmem, target=10000) => {
  const x = d3
    .scaleLinear()
    .domain([new Date(GlobalChallenge.start), new Date(GlobalChallenge.end)])
    .range([0, target]);
  let estimate = x(now);
  if (estimate < 0) {
    estimate = 0;
  } else if (estimate > target) {
    estimate = target;
  }
  return estimate;
}

const GetNoOfAgentsRequired = (resonatorsArr) => {
  if (!ss.sum(resonatorsArr)) return 0;
  let countL8 = resonatorsArr.filter((r) => r == 8).length;
  if (countL8 >= 4) return countL8;
  let countL7 = resonatorsArr.filter((r) => r == 7).length;
  if (countL7 >= 4) return countL7;
  let countL6 = Math.ceil(resonatorsArr.filter((r) => r == 6).length / 2);
  if (countL6 >= 3) return countL6;
  let countL5 = Math.ceil(resonatorsArr.filter((r) => r == 5).length / 2);
  if (countL5 >= 3) return countL5;
  let countL4 = Math.ceil(resonatorsArr.filter((r) => r == 4).length / 4);
  let countL3 = Math.ceil(resonatorsArr.filter((r) => r == 3).length / 4);
  let countL2 = Math.ceil(resonatorsArr.filter((r) => r == 2).length / 4);
  let countL1 = Math.ceil(resonatorsArr.filter((r) => r == 1).length / 8);
  return Math.max(
    countL1,
    countL2,
    countL3,
    countL4,
    countL5,
    countL6,
    countL7,
    countL8
  );
};

const ResonatorLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const NoOfResonatorsInAPortal = 8;
const rangeMod = ["", "LA", "SB"];

const SecondSundayMedalIntroduced = new Date(`13 Feb 2022`);

const daysbeforeFSLatesubmissions = 9;
const daysTillTuesday = 3;

const daysInAWeek = 7;
const monthsInAYear = 12;

const milliseconds = 1000;
const secondsInAMinute = 60;
const minutesInAnHour = 60;
const hoursInADay = 24;
const fiveHours = 5 * minutesInAnHour * secondsInAMinute * milliseconds;

const minutesFromCheckpoint =
  (Date.now() % fiveHours) / milliseconds / minutesInAnHour;
const OneDay = hoursInADay * minutesInAnHour * secondsInAMinute * milliseconds;
const OneWeek = OneDay * daysInAWeek;
const percentThisCheckpoint = ((Date.now() % fiveHours) / fiveHours) * 100;
const iMinutesToCheckpoint = minutesInAnHour * 5 - minutesFromCheckpoint;

const septiCycle = 35 * fiveHours;

const CycleProgress = Date.now() % septiCycle;
const CycleStart = Date.now() - CycleProgress;
const CycleEnd = CycleStart + septiCycle;
const minutesFromCycle = CycleProgress / milliseconds / minutesInAnHour;
const percentThisCycle = (CycleProgress / septiCycle) * 100;

const getFirstSaturdayFromYear = (year = new Date().getFullYear()) => {
  let fsArr = [];
  for (let month = 1; month <= monthsInAYear; month++) {
    let dow = new Date(`${year}-${month}`).getDay();
    let daystofs = daysInAWeek - dow;
    fsArr.push(new Date(`${year}-${month}-${daystofs}`));
  }
  return fsArr;
};

const getFirstSaturdayDeadLine = (year = new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map(
    (day) => new Date(day - daysbeforeFSLatesubmissions * OneDay)
  );
};

const getNextFirstSaturdayRegisterDate = (year = new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map(
    (day) => new Date(day + daysTillTuesday * OneDay)
  );
};

const getFirstSundayDateOfTheYear = (year = new Date().getFullYear()) => {
  let newYear = new Date(`${year}-01-01`).getDay();
  let FirstSundayFromNewYear = 8 - newYear;
  let FirstSundayDateOfTheYear = new Date(
    `${year}-01-${FirstSundayFromNewYear}`
  );
  return FirstSundayDateOfTheYear;
};

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

const unixTimestamp = (date = Date.now()) => {
  return Math.floor(date / milliseconds);
};

const Checkpoint = () => {
  const decimalPlaces = 2;
  const hours = Math.floor(iMinutesToCheckpoint / minutesInAnHour);
  const minutes = iMinutesToCheckpoint % minutesInAnHour;
  return `${percentThisCheckpoint.toFixed(decimalPlaces)} % (${
    hours > 0 ? `${hours} Hour${minutes > 1 ? `s` : ``}` : ``
  } ${
    minutes > 0
      ? `${minutes.toFixed(decimalPlaces)} Minute${minutes > 1 ? `s` : ``}`
      : ``
  } Till Next Checkpoint)`;
};

const getEverySundayInYear = (year = new Date().getFullYear()) => {
  let retArr = [];
  const firstSundayInYear = getFirstSundayDateOfTheYear(year);
  while (firstSundayInYear.getFullYear() == year) {
    retArr.push(new Date(firstSundayInYear));
    firstSundayInYear.setDate(firstSundayInYear.getDate() + 7);
  }
  return retArr;
};

const filterWeekOfMonth = (arr_days, ordinal) => {
  return arr_days.filter(
    (d) =>
      d.getDate() >= ordinalafter(ordinal) &&
      d.getDate() <= ordinalbefore(ordinal)
  );
};

const ordinalSundayInYear = (
  year = new Date().getFullYear(),
  ordinal = `second`
) => {
  return filterWeekOfMonth(getEverySundayInYear(year), ordinal);
};

const CycleInYear = (year = new Date().getFullYear()) => {
  let cycleArr = [];
  let bCycles = CycleStart;
  while (new Date(bCycles).getFullYear() > year) {
    bCycles -= septiCycle;
  }
  while (new Date(bCycles).getFullYear() < year) {
    bCycles += septiCycle;
  }
  let cCycles = bCycles + septiCycle;
  while (new Date(bCycles).getFullYear() == year) {
    cycleArr.unshift(bCycles);
    bCycles -= septiCycle;
  }
  while (new Date(cCycles).getFullYear() == year) {
    cycleArr.push(cCycles);
    cCycles += septiCycle;
  }
  return cycleArr;
};

const IsCurrentMonthPastSecondSunday = (d = new Date()) => {
  const SecondSundayThisMonth = ordinalSundayInYear(
    d.getFullYear(),
    `second`
  ).at(d.getMonth());
  return d >= SecondSundayThisMonth;
};

const MaxSecondSundayMedal = (d = new Date()) => {
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

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

function I2sDay(now = new Date(), start = 16, end = 21) {
  const dayOfWeek = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const Tuesday = 2;
  if (dayOfWeek === Tuesday) {
    if (hours >= start && hours < end) {
      return `I2sDay Ending in ${end - hours - 1} Hours ${
        minutesInAnHour - minutes
      } Minutes`;
    }
  }
  const daysUntilNextTuesday =
    (Tuesday + daysInAWeek - dayOfWeek) % daysInAWeek;
  let tuesday = now.addDays(daysUntilNextTuesday);
  return `Next I2sDay Starting in ${cd(
    new Date(
      tuesday.getFullYear(),
      tuesday.getMonth(),
      tuesday.getDate(),
      start
    )
  ).toString()}`;
}

const BaseAP = {
  deploy: 125,
  capture: 500,
  link: 313,
  field: 1250,
  lastres: 250,
  recapMachina: 1331,
  mod: 125,
  hack: 100,
  desres: 75,
  deslink: 187,
  desfield: 750,
};

const GetLinkAP = (int_portals, AP = BaseAP.link) => {
  return (int_portals < 2 ? 0 : int_portals === 2 ? 1 : 3 * (int_portals - 2)) *
    AP
}

const GetFieldAP = (int_portals, AP = BaseAP.field) => {
  return (int_portals < 3 ? 0 : 3 * (int_portals - 3) + 1) * AP;
};

const EsitmateBuriedmem = (arr_int_portals) => {
  const link = arr_int_portals.map((i) => GetLinkAP(i, 2));
  const field = arr_int_portals.map((i) => GetFieldAP(i, 5));
  return ss.sum(link) + ss.sum(field);
}

const EstimateAP = (int_portals, recapMachina = true, multiplier = 1) => {
  if (int_portals % 1 !== 0) return undefined;
  const portalAP =
    int_portals *
    (NoOfResonatorsInAPortal * BaseAP.deploy +
      BaseAP.capture +
      BaseAP.lastres +
      BaseAP.mod +
      BaseAP.hack +
      recapMachina ? BaseAP.recapMachina : 0 +
      BaseAP.desres * NoOfResonatorsInAPortal
    );
  const linkAP = GetLinkAP(int_portals);
  const fieldAP = GetFieldAP(int_portals)
  const Total = portalAP + linkAP + fieldAP;
  return Total * multiplier;
};

module.exports = {
  NoOfResonatorsInAPortal,
  ResonatorLevel,
  rangeMod,
  SecondSundayMedalIntroduced,
  daysbeforeFSLatesubmissions,
  daysTillTuesday,
  daysInAWeek,
  milliseconds,
  secondsInAMinute,
  minutesInAnHour,
  hoursInADay,
  fiveHours,
  minutesFromCheckpoint,
  OneDay,
  OneWeek,
  minutesFromCycle,
  percentThisCheckpoint,
  septiCycle,
  CycleProgress,
  percentThisCycle,
  getFirstSaturdayFromYear,
  getFirstSaturdayDeadLine,
  getNextFirstSaturdayRegisterDate,
  getFirstSundayDateOfTheYear,
  ordinalafter,
  ordinalbefore,
  unixTimestamp,
  CycleStart,
  CycleEnd,
  Checkpoint,
  GetNoOfAgentsRequired,
  getEverySundayInYear,
  filterWeekOfMonth,
  ordinalSundayInYear,
  CycleInYear,
  MaxSecondSundayMedal,
  I2sDay,
  CDGlobalChallenge,
  BaseAP,
  GetLinkAP,
  GetFieldAP,
  EstimateAP,
  EsitmateBuriedmem,
  EstimateGlobalChallengeScore,
};
