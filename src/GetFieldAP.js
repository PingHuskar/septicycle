import { BaseAP } from "./BaseAP.js";
export const GetFieldAP = (int_portals, AP = BaseAP.field) => {
  return (int_portals < 3 ? 0 : 3 * (int_portals - 3) + 1) * AP;
};
