import ClinicDetails from "../../models/ClinicDetails";
import ClinicTitle from "../Atoms/ClinicTitle";
import BenefitsList from "../Atoms/BenefitsList";

const ClinicDetailsItem = (clinic: ClinicDetails) => {
  return (
    <div className="clinicDetailsWrapper">
      
      <ClinicTitle
        nfz_name={clinic.clinic_info.nfz_name}
        private_name={clinic.clinic_info.private_name}
      />
      <div className="reklama" />
      <div className="tableWrapper">
        <h5>Świadczone usługi:</h5>
        <BenefitsList benefits={clinic.clinic_benefits} />
      </div>
    </div>
  );
};

export default ClinicDetailsItem;
