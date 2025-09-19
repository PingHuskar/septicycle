import { fiveHours } from "./fiveHours.js";
import { milliseconds } from "./milliseconds.js";
import { minutesInAnHour } from "./minutesInAnHour.js";
export const minutesFromCheckpoint = (Date.now() % fiveHours) / milliseconds / minutesInAnHour;
