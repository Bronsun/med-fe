export interface GetClinicsQuery {
  benefit: string;
  city: string;
  address: string; //street
  voivodeship: string;
  private_name: string;
  benefits_for_children: boolean;
  page: number;
  limit: number;
}
