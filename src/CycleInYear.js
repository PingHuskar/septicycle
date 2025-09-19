import { CycleStart } from "./cycleVars.js";
import { septiCycle } from "./septiCycle.js";
export const CycleInYear = (year = new Date().getFullYear()) => {
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
