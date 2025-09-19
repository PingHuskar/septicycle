import { fiveHours } from "./fiveHours.js";
export const percentThisCheckpoint = ((Date.now() % fiveHours) / fiveHours) * 100;
