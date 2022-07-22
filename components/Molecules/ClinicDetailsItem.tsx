import ClinicIconsBar from "../Atoms/ClinicIconsBar";
import ClinicDetails from "../../models/ClinicDetails";
import ClinicTitle from "../Atoms/ClinicTitle";
import ClinicPhone from "../Atoms/ClinicPhone";
import ClinicAddress from "../Atoms/ClinicAddress";
import BenefitsList from "../Atoms/BenefitsList";

const ClinicDetailsItem = (clinic: ClinicDetails) => {
  return (
    <div className="clinicDetailsWrapper">
      <ClinicTitle
        nfz_name={clinic.clinic_info.nfz_name}
        private_name={clinic.clinic_info.private_name}
      />

      <div className="detailsInfo">
      {clinic.clinic_info.phone !== undefined && (
        <ClinicPhone phone={clinic.clinic_info.phone} />
      )}
      <div className="clinicsAddress">
        <ClinicAddress
          city={clinic.clinic_info.city}
          address={clinic.clinic_info.address}
        />
      </div>

        <ClinicIconsBar
          elevator={clinic.clinic_info.elevator}
          car_park={clinic.clinic_info.car_park}
          ramp={clinic.clinic_info.ramp}
          toilet={clinic.clinic_info.toilet}
        />
      </div>
      <BenefitsList benefits={clinic.clinic_benefits} />
      <div className="detailsMap">Map</div>
    </div>
  );
};

export default ClinicDetailsItem;
