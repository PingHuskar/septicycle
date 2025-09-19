import cd from "countdown";
import { GlobalChallenges } from "./GlobalChallenges.js";

const CDGlobalChallenge = (GlobalChallenge = GlobalChallenges.sharedmem) => {
  const start = cd(new Date(), new Date(GlobalChallenge.start)).value;
  if (start > 0) {
    return (
      `Start in ` +
      cd(new Date(), new Date(GlobalChallenge.start)).toLocaleString()
    );
  }
  const end = cd(new Date(), new Date(GlobalChallenge.end)).value;
  if (end > 0) {
    return (
      `Ends in ` +
      cd(new Date(), new Date(GlobalChallenge.end)).toLocaleString()
    );
  } else {
    return (
      `Ended ` +
      cd(new Date(), new Date(GlobalChallenge.end)).toLocaleString() +
      ` Ago`
    );
  }
};

export { CDGlobalChallenge };
