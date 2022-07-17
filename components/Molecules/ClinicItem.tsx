import ClinicModel from "../../models/ClinicModel";
import Image from "next/image";
import router from "next/router";
import { parseDateToString } from "../utilities";
import ClinicIconsBar from "../Atoms/ClinicIconsBar";
import ClinicTitle from "../Atoms/ClinicTitle";
import ClinicPhone from "../Atoms/ClinicPhone";
import ClinicStatistics from "../Atoms/ClinicStatistics";
import ClinicAddress from "../Atoms/ClinicAddress";

interface ClinicItemProps {
  clinic: ClinicModel;
}

const ClinicItem = (props: ClinicItemProps) => {
  const goToClinicDetails = () => {
    router.push({
      pathname:
        props.clinic.private_name.replaceAll(" ", "-") +
        "_" +
        props.clinic.id,
    });
  };

  return (
    <div className="clinicsItem">
      <ClinicTitle
        nfz_name={props.clinic.nfz_name}
        private_name={props.clinic.private_name}
      />
      {props.clinic.phone !== undefined && (
        <ClinicPhone phone={props.clinic.phone} />
      )}

      <div className="clinicsDate">
        {props.clinic.visit_date !== undefined &&
          props.clinic.visit_date.length !== 0 && (
            <p>{parseDateToString(props.clinic.visit_date)}</p>
          )}
        {(props.clinic.visit_date == undefined ||
          props.clinic.visit_date.length === 0) && (
          <button onClick={goToClinicDetails}>Dostępne usługi</button>
        )}
      </div>
      <div className="clinicsAddress">
        <ClinicAddress
          city={props.clinic.city}
          address={props.clinic.address}
        />

        <ClinicIconsBar
          elevator={props.clinic.elevator}
          car_park={props.clinic.car_park}
          ramp={props.clinic.ramp}
          toilet={props.clinic.toilet}
        />

        <ClinicStatistics queue={1} days={12} />
      </div>
    </div>
  );
};

export default ClinicItem;
