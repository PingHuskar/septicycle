import { NoOfResonatorsInAPortal } from "./NoOfResonatorsInAPortal.js";
import { BaseAP } from "./BaseAP.js";
import { GetLinkAP } from "./GetLinkAP.js";
import { GetFieldAP } from "./GetFieldAP.js";
export const EstimateAP = (int_portals, recapMachina = true, multiplier = 1) => {
  if (int_portals % 1 !== 0) return undefined;
  const portalAP =
    int_portals *
    (NoOfResonatorsInAPortal * BaseAP.deploy +
      BaseAP.capture +
      BaseAP.lastres +
      BaseAP.mod +
      BaseAP.hack +
      (recapMachina ? BaseAP.recapMachina : 0) +
      BaseAP.desres * NoOfResonatorsInAPortal
    );
  const linkAP = GetLinkAP(int_portals);
  const fieldAP = GetFieldAP(int_portals);
  const Total = portalAP + linkAP + fieldAP;
  return Total * multiplier;
};
