import { ParsedUrlQuery } from "querystring";
import { GetClinicsQuery } from "../models/GetClinicsQuery";
import { ApiConfig, GetQueryParameters } from "./APIutilities";
import { GetClinicsURL, GetClinicDetailsURL } from "./URLcreator";

export const GetClinicsConfig = (query: GetClinicsQuery | ParsedUrlQuery) =>
  ({
    method: "get",
    header: {},
    url: GetClinicsURL() + "?" + GetQueryParameters(query),
  } as ApiConfig);

export const GetClinicDetailsConfig = (id: any) =>
  ({
    method: "get",
    header: {},
    url: GetClinicDetailsURL(id),
  } as ApiConfig);
