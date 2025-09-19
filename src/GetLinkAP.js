import { BaseAP } from "./BaseAP.js";
export const GetLinkAP = (int_portals, AP = BaseAP.link) => {
  return (int_portals < 2 ? 0 : int_portals === 2 ? 1 : 3 * (int_portals - 2)) * AP;
};
