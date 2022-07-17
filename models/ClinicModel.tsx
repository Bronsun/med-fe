export default interface ClinicModel {
  id: string;
  private_name: string;
  nfz_name: string;
  address: string;
  city: string;
  voivodeship: string;
  registry_number: string;
  benefits_for_children: boolean;
  covid_19: boolean;
  toilet: boolean;
  ramp: boolean;
  car_park: boolean;
  elevator: boolean;
  latitude: number;
  longitude: number;
  visit_date: string;
  phone: number;
  nip: string;
  regon: string;
}
