import { milliseconds } from "./milliseconds.js";
import { septiCycle } from "./septiCycle.js";
export const CycleProgress = Date.now() % septiCycle;
export const CycleStart = Date.now() - CycleProgress;
export const CycleEnd = CycleStart + septiCycle;
export const minutesFromCycle = CycleProgress / milliseconds / 60;
export const percentThisCycle = (CycleProgress / septiCycle) * 100;
