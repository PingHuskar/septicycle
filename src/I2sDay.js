import { addDays } from "./addDays.js";
import { minutesInAnHour } from "./minutesInAnHour.js";
import { daysInAWeek } from "./daysInAWeek.js";
import cd from "countdown";
export function I2sDay(now = new Date(), start = 16, end = 21) {
  const dayOfWeek = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const Tuesday = 2;
  if (dayOfWeek === Tuesday) {
    if (hours >= start && hours < end) {
      return `I2sDay Ending in ${end - hours - 1} Hours ${
        minutesInAnHour - minutes
      } Minutes`;
    }
  }
  const daysUntilNextTuesday =
    (Tuesday + daysInAWeek - dayOfWeek) % daysInAWeek;
  let tuesday = addDays(now, daysUntilNextTuesday);
  return `Next I2sDay Starting in ${cd(
    new Date(
      tuesday.getFullYear(),
      tuesday.getMonth(),
      tuesday.getDate(),
      start
    )
  ).toString()}`;
}
