import * as d3 from "d3";
import { GlobalChallenges } from "./GlobalChallenges.js";
export const EstimateGlobalChallengeScore = (now = new Date(), GlobalChallenge = GlobalChallenges.sharedmem, target = 10000) => {
  const x = d3
    .scaleLinear()
    .domain([new Date(GlobalChallenge.start), new Date(GlobalChallenge.end)])
    .range([0, target]);
  let estimate = x(now);
  if (estimate < 0) {
    estimate = 0;
  } else if (estimate > target) {
    estimate = target;
  }
  return estimate;
};
