import { getNextInternalQuery } from "next/dist/server/request-meta";
import { ParsedUrlQuery } from "querystring";
import { GetBenefitQuery } from "../models/GetBenefitQuery";
import { GetClinicsQuery } from "../models/GetClinicsQuery";
import { ApiConfig, GetQueryParameters } from "./APIutilities";
import { GetBenefitsURL, GetClinicsURL } from "./URLcreator";

export const GetClinicsConfig = (query: GetClinicsQuery | ParsedUrlQuery) =>
  ({
    method: "get",
    header: {},
    url: GetClinicsURL() + "?" + GetQueryParameters(query),
  } as ApiConfig);

export const GetBenefitConfig = (query: GetBenefitQuery | ParsedUrlQuery) =>
({
  method: "get",
  header: {},
  url: GetBenefitsURL + "?" + GetQueryParameters(query),

}as ApiConfig)