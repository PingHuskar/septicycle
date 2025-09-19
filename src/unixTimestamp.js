import { milliseconds } from './milliseconds.js';

export const unixTimestamp = (date = Date.now()) => {
  return Math.floor(date / milliseconds);
};