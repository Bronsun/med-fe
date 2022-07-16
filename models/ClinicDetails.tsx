import ClinicModel from "./ClinicModel";

export default interface ClinicDetails{
    clinic_info: ClinicModel;
    clinic_benefits: ClinicBenefit[];
}

interface ClinicBenefit{
    name: string;
    average_period: number;
    awaiting: number;
    visit_date: string;
}