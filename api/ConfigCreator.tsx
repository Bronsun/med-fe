import { GetClinicsQuery } from "../models/GetClinicsQuery";
import { ApiConfig, GetQueryParameters } from "./APIutilities";
import { GetClinicsURL } from "./URLcreator";


export const GetClinicsConfig = (query: GetClinicsQuery) =>
({
  method: "get",
  header: {},
  url: GetClinicsURL() + GetQueryParameters(query),
} as ApiConfig);

