const NoOfResonatorsInAPortal = 8

const milliseconds = 1000
const secondsInAMinute = 60
const minutesInAnHour = 60
const hoursInADay = 24;
const fiveHours = 5 * minutesInAnHour * secondsInAMinute * milliseconds

const minutesFromCheckpoint = Date.now() % fiveHours / milliseconds / minutesInAnHour
const OneDay = hoursInADay * minutesInAnHour * secondsInAMinute * milliseconds
const percentThisCheckpoint = Date.now() % fiveHours / fiveHours * 100

const septiCycle = 35 * fiveHours

const CycleProgress = Date.now() % septiCycle
const minutesFromCycle = CycleProgress / milliseconds / minutesInAnHour
const percentThisCycle = CycleProgress / septiCycle * 100

const getFirstSaturdayFromYear = (year=new Date().getFullYear()) => {
    let fsArr = [];
    for (let month = 1; month <= 12; month++) {
      let dow = new Date(`${year}-${month}`).getDay();
      let daystofs = 7 - dow;
      fsArr.push(new Date(`${year}-${month}-${daystofs}`).toLocaleDateString());
    }
    return fsArr;
}

module.exports = {
    NoOfResonatorsInAPortal
    , milliseconds
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
}