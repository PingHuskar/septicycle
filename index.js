const ss = require('simple-statistics')

const GetNoOfAgentsRequired = (resonatorsArr) => {
  if (!(ss.sum(resonatorsArr))) return 0
  let countL8 = resonatorsArr.filter(r => r == 8).length
  if (countL8 >= 4) return countL8
  let countL7 = resonatorsArr.filter(r => r == 7).length
  if (countL7 >= 4) return countL7
  let countL6 = Math.ceil(resonatorsArr.filter(r => r == 6).length / 2)
  if (countL6 >= 3) return countL6
  let countL5 = Math.ceil(resonatorsArr.filter(r => r == 5).length / 2)
  if (countL5 >= 3) return countL5
  let countL4 = Math.ceil(resonatorsArr.filter(r => r == 4).length / 4)
  let countL3 = Math.ceil(resonatorsArr.filter(r => r == 3).length / 4)
  let countL2 = Math.ceil(resonatorsArr.filter(r => r == 2).length / 4)
  let countL1 = Math.ceil(resonatorsArr.filter(r => r == 1).length / 8)
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
}

const ResonatorLevel = [0,1,2,3,4,5,6,7,8]
const NoOfResonatorsInAPortal = 8
const rangeMod = ["", "LA", "SB"]

const SecondSundayMedalIntroduced = new Date(`13 Feb 2022`)

const daysbeforeFSLatesubmissions = 9
const daysTillTuesday = 3

const daysInAWeek = 7
const monthsInAYear = 12

const milliseconds = 1000
const secondsInAMinute = 60
const minutesInAnHour = 60
const hoursInADay = 24;
const fiveHours = 5 * minutesInAnHour * secondsInAMinute * milliseconds

const minutesFromCheckpoint = Date.now() % fiveHours / milliseconds / minutesInAnHour
const OneDay = hoursInADay * minutesInAnHour * secondsInAMinute * milliseconds
const percentThisCheckpoint = Date.now() % fiveHours / fiveHours * 100
const iMinutesToCheckpoint = minutesInAnHour*5 - minutesFromCheckpoint

const septiCycle = 35 * fiveHours

const CycleProgress = Date.now() % septiCycle
const CycleStart = Date.now() - CycleProgress
const CycleEnd = CycleStart + septiCycle
const minutesFromCycle = CycleProgress / milliseconds / minutesInAnHour
const percentThisCycle = CycleProgress / septiCycle * 100

const getFirstSaturdayFromYear = (year=new Date().getFullYear()) => {
    let fsArr = [];
    for (let month = 1; month <= monthsInAYear; month++) {
      let dow = new Date(`${year}-${month}`).getDay();
      let daystofs = daysInAWeek - dow;
      fsArr.push(new Date(`${year}-${month}-${daystofs}`));
    }
    return fsArr;
}

const getFirstSaturdayDeadLine = (year=new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map((day) => new Date(day - daysbeforeFSLatesubmissions * OneDay))
}

const getNextFirstSaturdayRegisterDate = (year=new Date().getFullYear()) => {
  return getFirstSaturdayFromYear(year).map((day) => new Date(day + daysTillTuesday * OneDay))
}

const getFirstSundayDateOfTheYear = (year=new Date().getFullYear()) => {
  let newYear = new Date(`${year}-01-01`).getDay();
  let FirstSundayFromNewYear = 8 - newYear;
  let FirstSundayDateOfTheYear = new Date(`${year}-01-${FirstSundayFromNewYear}`);
  return FirstSundayDateOfTheYear;
}

const ordinalafter = (ordinal) => {
  switch (ordinal.toLowerCase()) {
    case "first": return 1
    case "second": return 1+daysInAWeek
    case "third": return 1+daysInAWeek*2
    case "forth": return 1+daysInAWeek*3
  }
}
const ordinalbefore = (ordinal) => {
  switch (ordinal.toLowerCase()) {
    case "first": return daysInAWeek
    case "second": return daysInAWeek*2
    case "third": return daysInAWeek*3
    case "forth": return daysInAWeek*4
  }
}

const unixTimestamp = (date = Date.now()) => {
  return Math.floor(date / milliseconds);
}

const Checkpoint = () => {
  const decimalPlaces = 2
  const hours = Math.floor(iMinutesToCheckpoint / minutesInAnHour)
  const minutes = iMinutesToCheckpoint % minutesInAnHour
  return `${percentThisCheckpoint.toFixed(decimalPlaces)} % (${hours > 0 ? `${hours} Hour${minutes > 1 ? `s`: ``}` : ``} ${minutes > 0 ? `${minutes.toFixed(decimalPlaces)} Minute${minutes > 1 ? `s`: ``}` : ``} Till Next Checkpoint)`
}


const getEverySundayInYear = (year=new Date().getFullYear()) => {
  let retArr = []
  const firstSundayInYear = getFirstSundayDateOfTheYear(year)
  while (firstSundayInYear.getFullYear() == year) {
    retArr.push(new Date(firstSundayInYear))
    firstSundayInYear.setDate(firstSundayInYear.getDate() + 7)
  }
  return retArr
}

const filterWeekOfMonth = (arr_days, ordinal) => {
  return arr_days.filter(d => 
                            d.getDate() >= ordinalafter(ordinal) 
                        &&  d.getDate() <= ordinalbefore(ordinal)
                        )
}

const ordinalSundayInYear = (year=new Date().getFullYear(), ordinal=`second`) => {
  return filterWeekOfMonth(getEverySundayInYear(year), ordinal)
}

const CycleInYear = (year=new Date().getFullYear()) => {
  let cycleArr = []
  let bCycles = CycleStart
  while (new Date(bCycles).getFullYear() > year) {
    bCycles -= septiCycle
  }
  while (new Date(bCycles).getFullYear() < year) {
    bCycles += septiCycle
  }
  let cCycles = bCycles + septiCycle
  while (new Date(bCycles).getFullYear() == year) {
    cycleArr.unshift(bCycles)
    bCycles -= septiCycle
  }
  while (new Date(cCycles).getFullYear() == year) {
    cycleArr.push(cCycles)
    cCycles += septiCycle
  }
  return cycleArr
}

const IsCurrentMonthPastSecondSunday = (d = new Date()) => {
  const SecondSundayThisMonth = ordinalSundayInYear(d.getFullYear() ,`second`).at(d.getMonth())
  return d > SecondSundayThisMonth
}

const MaxSecondSundayMedal = (d = new Date()) => {
  const prevyear = (d.getFullYear() - SecondSundayMedalIntroduced.getFullYear()) * monthsInAYear -1
  return prevyear + d.getMonth() + (IsCurrentMonthPastSecondSunday() ? 1 : 0)
}

module.exports = {
    NoOfResonatorsInAPortal
    ,ResonatorLevel
    ,rangeMod
    ,SecondSundayMedalIntroduced
    ,daysbeforeFSLatesubmissions
    ,daysTillTuesday
    ,daysInAWeek
    ,milliseconds
    ,secondsInAMinute
    ,minutesInAnHour
    ,hoursInADay
    ,fiveHours
    ,minutesFromCheckpoint
    ,OneDay
    ,minutesFromCycle
    ,percentThisCheckpoint
    ,septiCycle
    ,CycleProgress
    ,percentThisCycle
    ,getFirstSaturdayFromYear
    ,getFirstSaturdayDeadLine
    ,getNextFirstSaturdayRegisterDate
    ,getFirstSundayDateOfTheYear
    ,ordinalafter
    ,ordinalbefore
    ,unixTimestamp
    ,CycleStart
    ,CycleEnd
    ,Checkpoint
    ,GetNoOfAgentsRequired
    ,getEverySundayInYear
    ,filterWeekOfMonth
    ,ordinalSundayInYear
    ,CycleInYear
    ,MaxSecondSundayMedal
}