import { iMinutesToCheckpoint } from "./iMinutesToCheckpoint.js";
import { percentThisCheckpoint } from "./percentThisCheckpoint.js";
import { minutesInAnHour } from "./minutesInAnHour.js";
export const Checkpoint = () => {
  const decimalPlaces = 2;
  const hours = Math.floor(iMinutesToCheckpoint / minutesInAnHour);
  const minutes = iMinutesToCheckpoint % minutesInAnHour;
  return `${percentThisCheckpoint.toFixed(decimalPlaces)} % (${hours > 0 ? `${hours} Hour${minutes > 1 ? `s` : ``}` : ``} ${minutes > 0 ? `${minutes.toFixed(decimalPlaces)} Minute${minutes > 1 ? `s` : ``}` : ``} Till Next Checkpoint)`;
};
