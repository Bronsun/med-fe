import ClinicModel from "../../models/ClinicModel";
import ClinicItem from "../Molecules/ClinicItem";

interface ClinicsListProps {
  clinicsList: ClinicModel[];
}

const ClinicsList = (props: ClinicsListProps) => {
  return (
    <div className="clinicsList">
      {props.clinicsList.map((clinic: ClinicModel, index) => (
        <ClinicItem key={index} clinic={clinic} />
      ))}
    </div>
  );
};

export default ClinicsList;
