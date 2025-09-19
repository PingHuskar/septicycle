import { GetLinkAP } from "./GetLinkAP.js";
import { GetFieldAP } from "./GetFieldAP.js";
import * as ss from "simple-statistics";
export const EsitmateBuriedmem = (arr_int_portals) => {
  const link = arr_int_portals.map((i) => GetLinkAP(i, 2));
  const field = arr_int_portals.map((i) => GetFieldAP(i, 5));
  return ss.sum(link) + ss.sum(field);
};
