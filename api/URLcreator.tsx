const apiURL = "http://localhost:8000";

export const GetClinicsURL = () =>
  apiURL + "/clinic/";

export const GetClinicDetailsURL = (id: string) =>
  apiURL + "/clinic/" + id;

export const GetBenefitsURL = (
  inputValue: string
) =>
  apiURL + "/search/benefit?name=" + inputValue;

export const GetCitiesURL = (
  inputValue: string
) => apiURL + "/search/city?name=" + inputValue;
