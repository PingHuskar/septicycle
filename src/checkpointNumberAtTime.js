import { septiCycle } from "./septiCycle.js";
import { fiveHours } from "./fiveHours.js";

export const checkpointNumberAtTime = (timestamp = Date.now()) => {
    const cycleStart = timestamp - (timestamp % septiCycle);
    const progress = timestamp - cycleStart;
    return Math.floor(progress / fiveHours) + 1;
};