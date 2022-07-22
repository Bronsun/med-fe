import ClinicModel from "../../models/ClinicModel";
import { parseDateToString } from "../utilities";

interface ClinicItemProps {
  clinic: ClinicModel;
}

const ClinicItem = (props: ClinicItemProps) => {
  return (
    <div className="popupsMarkerItem">
      <div className="clinicsTitle">
        <div>
          <p className="clinicPrivateName">
            {props.clinic.private_name}
          </p>
        </div>
      </div>
      <div className="clinicsDate">
        {props.clinic.visit_date !== undefined &&
          props.clinic.visit_date.length !==
            0 && (
            <p>
              {parseDateToString(
                props.clinic.visit_date
              )}
            </p>
          )}
      </div>
      <div className="clinicsAddress">
        <div className="clinicIconP">
          <p>
            {props.clinic.address}
            <br />
            {props.clinic.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClinicItem;
