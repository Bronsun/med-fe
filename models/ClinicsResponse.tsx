import { ClinicModel } from "./ClinicModel";

export interface ClinicsResponse {
  total_record: number;
  total_page: number;
  offset: number;
  limit: number;
  page: number;
  prev_page: number;
  next_page: number;
  data: ClinicModel[];
}
