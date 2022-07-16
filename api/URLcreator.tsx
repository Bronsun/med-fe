const apiURL = "http://localhost:8000";

export const GetClinicsURL = () => apiURL + "/clinic/";

export const GetClinicDetailsURL = (id:string) => apiURL + "/clinic/" + id;
