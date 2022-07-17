import { ParsedUrlQuery } from "querystring";
import { GetClinicsQuery } from "../models/GetClinicsQuery";
<<<<<<< HEAD
import {
  ApiConfig,
  GetQueryParameters,
} from "./APIutilities";
import { GetClinicsURL } from "./URLcreator";
=======
import { ApiConfig, GetQueryParameters } from "./APIutilities";
import { GetClinicsURL, GetClinicDetailsURL } from "./URLcreator";
>>>>>>> develop

export const GetClinicsConfig = (
  query: GetClinicsQuery | ParsedUrlQuery
) =>
  ({
    method: "get",
    header: {},
    url:
      GetClinicsURL() +
      "?" +
      GetQueryParameters(query),
  } as ApiConfig);

export const GetClinicDetailsConfig = (id: any) =>
  ({
    method: "get",
    header: {},
    url: GetClinicDetailsURL(id),
  } as ApiConfig);
