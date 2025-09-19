import { minutesInAnHour } from "./minutesInAnHour.js";
import { minutesFromCheckpoint } from "./minutesFromCheckpoint.js";
export const iMinutesToCheckpoint = minutesInAnHour * 5 - minutesFromCheckpoint;
