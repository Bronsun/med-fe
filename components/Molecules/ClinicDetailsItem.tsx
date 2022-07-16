import ClinicIconsBar from "../Atoms/ClinicIconsBar";
import Image from "next/image";
import ClinicDetails from "../../models/ClinicDetails";
import ClinicTitle from "../Atoms/ClinicTitle";
import ClinicPhone from "../Atoms/ClinicPhone";
import ClinicStatistics from "../Atoms/ClinicStatistics";
import ClinicAddress from "../Atoms/ClinicAddress";

const ClinicDetailsItem = (clinic: ClinicDetails) => {
  return (
    <div className="clinicDetailsWrapper">
      <ClinicTitle
        nfz_name={clinic.clinic_info.nfz_name}
        private_name={clinic.clinic_info.private_name}
      />

      {clinic.clinic_info.phone !== undefined && (
        <ClinicPhone phone={clinic.clinic_info.phone} />
      )}
      <div className="clinicsAddress">
        <ClinicAddress
          city={clinic.clinic_info.city}
          address={clinic.clinic_info.address}
        />

        <ClinicIconsBar
          elevator={clinic.clinic_info.elevator}
          car_park={clinic.clinic_info.car_park}
          ramp={clinic.clinic_info.ramp}
          toilet={clinic.clinic_info.toilet}
        />

        <ClinicStatistics queue={1} days={12} />
      </div>
    </div>
  );
};

export default ClinicDetailsItem;
