import {
  ResonatorLevel,
  NoOfResonatorsInAPortal,
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
  percentThisCheckpoint,
  iMinutesToCheckpoint,
  septiCycle,
  CycleProgress,
  CycleStart,
  CycleEnd,
  minutesFromCycle,
  percentThisCycle,
  getFirstSaturdayFromYear,
  getFirstSaturdayDeadLine,
  getNextFirstSaturdayRegisterDate,
  getFirstSundayDateOfTheYear,
  ordinalafter,
  ordinalbefore,
  unixTimestamp,
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
  EstimateBuriedmem,
  EstimateGlobalChallengeScore,
  checkpointNumberAtTime
} from "./index.js";

describe("septicycle exports", () => {
  test("ResonatorLevel is array of 9 levels", () => {
    expect(ResonatorLevel).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("NoOfResonatorsInAPortal is 8", () => {
    expect(NoOfResonatorsInAPortal).toBe(8);
  });

  test("rangeMod contains LA and SB", () => {
    expect(rangeMod).toContain("LA");
    expect(rangeMod).toContain("SB");
  });

  test("SecondSundayMedalIntroduced is a Date", () => {
    expect(SecondSundayMedalIntroduced instanceof Date).toBe(true);
  });

  test("daysbeforeFSLatesubmissions is a number", () => {
    expect(typeof daysbeforeFSLatesubmissions).toBe("number");
  });

  test("daysTillTuesday is a number", () => {
    expect(typeof daysTillTuesday).toBe("number");
  });

  test("daysInAWeek is a number", () => {
    expect(typeof daysInAWeek).toBe("number");
  });

  test("milliseconds is a number", () => {
    expect(typeof milliseconds).toBe("number");
  });

  test("secondsInAMinute is 60", () => {
    expect(secondsInAMinute).toBe(60);
  });

  test("minutesInAnHour is 60", () => {
    expect(minutesInAnHour).toBe(60);
  });

  test("hoursInADay is 24", () => {
    expect(hoursInADay).toBe(24);
  });

  test("fiveHours is a number", () => {
    expect(typeof fiveHours).toBe("number");
  });

  test("minutesFromCheckpoint is a number", () => {
    expect(typeof minutesFromCheckpoint).toBe("number");
  });

  test("OneDay is a number", () => {
    expect(typeof OneDay).toBe("number");
  });

  test("OneWeek is a number", () => {
    expect(typeof OneWeek).toBe("number");
  });

  test("percentThisCheckpoint is a number", () => {
    expect(typeof percentThisCheckpoint).toBe("number");
  });

  test("iMinutesToCheckpoint is a number", () => {
    expect(typeof iMinutesToCheckpoint).toBe("number");
  });

  test("septiCycle is a number", () => {
    expect(typeof septiCycle).toBe("number");
  });

  test("CycleProgress is a number", () => {
    expect(typeof CycleProgress).toBe("number");
  });

  test("CycleStart is a number", () => {
    expect(typeof CycleStart).toBe("number");
  });

  test("CycleEnd is a number", () => {
    expect(typeof CycleEnd).toBe("number");
  });

  test("minutesFromCycle is a number", () => {
    expect(typeof minutesFromCycle).toBe("number");
  });

  test("percentThisCycle is a number", () => {
    expect(typeof percentThisCycle).toBe("number");
  });

  test("getFirstSaturdayFromYear returns array of Dates", () => {
    const arr = getFirstSaturdayFromYear(2025);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr[0] instanceof Date).toBe(true);
  });

  test("getFirstSaturdayDeadLine returns array of Dates", () => {
    const arr = getFirstSaturdayDeadLine(2025);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr[0] instanceof Date).toBe(true);
  });

  test("getNextFirstSaturdayRegisterDate returns array of Dates", () => {
    const arr = getNextFirstSaturdayRegisterDate(2025);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr[0] instanceof Date).toBe(true);
  });

  test("getFirstSundayDateOfTheYear returns a Date", () => {
    expect(getFirstSundayDateOfTheYear(2025) instanceof Date).toBe(true);
  });

  test("ordinalafter returns a number", () => {
    expect(typeof ordinalafter("second")).toBe("number");
  });

  test("ordinalbefore returns a number", () => {
    expect(typeof ordinalbefore("second")).toBe("number");
  });

  test("unixTimestamp returns a number", () => {
    expect(typeof unixTimestamp(new Date())).toBe("number");
  });

  test("Checkpoint returns a string", () => {
    expect(typeof Checkpoint()).toBe("string");
  });

  test("checkpointNumberAtTime returns a number between 1 and 35", () => {
    const num = checkpointNumberAtTime();
    expect(typeof num).toBe("number");
    expect(num).toBeGreaterThanOrEqual(1);
    expect(num).toBeLessThanOrEqual(35);
  });

  test("checkpointNumberAtTime at cycle start returns 1", () => {
    expect(checkpointNumberAtTime(CycleStart)).toBe(1);
  });

  test("checkpointNumberAtTime at 5 hours into cycle returns 2", () => {
    expect(checkpointNumberAtTime(CycleStart + fiveHours)).toBe(2);
  });

  test("checkpointNumberAtTime at 10 hours into cycle returns 3", () => {
    expect(checkpointNumberAtTime(CycleStart + 2 * fiveHours)).toBe(3);
  });

  test("checkpointNumberAtTime near cycle end returns 35", () => {
    expect(checkpointNumberAtTime(CycleEnd - 1)).toBe(35);
  });

  test("GetNoOfAgentsRequired returns a number", () => {
    expect(typeof GetNoOfAgentsRequired(10)).toBe("number");
  });

  test("getEverySundayInYear returns array of Dates", () => {
    const arr = getEverySundayInYear(2025);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr[0] instanceof Date).toBe(true);
  });

  test("filterWeekOfMonth returns array", () => {
    const arr = getEverySundayInYear(2025);
    const filtered = filterWeekOfMonth(arr, "second");
    expect(Array.isArray(filtered)).toBe(true);
  });

  test("ordinalSundayInYear returns array", () => {
    const arr = ordinalSundayInYear(2025, "second");
    expect(Array.isArray(arr)).toBe(true);
  });

  test("CycleInYear returns array", () => {
    const arr = CycleInYear(2025);
    expect(Array.isArray(arr)).toBe(true);
  });

  test("MaxSecondSundayMedal returns a number", () => {
    expect(typeof MaxSecondSundayMedal(new Date())).toBe("number");
  });

  test("I2sDay returns a string", () => {
    expect(typeof I2sDay(new Date())).toBe("string");
  });

  test("CDGlobalChallenge is defined", () => {
    expect(CDGlobalChallenge).toBeDefined();
  });

  test("BaseAP is an object", () => {
    expect(typeof BaseAP).toBe("object");
  });

  test("GetLinkAP returns a number", () => {
    expect(typeof GetLinkAP(3)).toBe("number");
  });

  test("GetFieldAP returns a number", () => {
    expect(typeof GetFieldAP(3)).toBe("number");
  });

  test("EstimateAP returns a number", () => {
    expect(typeof EstimateAP(3)).toBe("number");
  });

  test("EstimateBuriedmem returns a number", () => {
    expect(typeof EstimateBuriedmem([3, 4, 5])).toBe("number");
  });

  test("EstimateGlobalChallengeScore returns a number", () => {
    expect(typeof EstimateGlobalChallengeScore(new Date(), CDGlobalChallenge, 10000)).toBe("number");
  });
});