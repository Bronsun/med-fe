import { ClinicBenefit } from "../../models/ClinicDetails";
import { parseDateToString } from "../utilities";

interface BenefitsListProps {
  benefits: ClinicBenefit[];
}

const BenefitsList = (props: BenefitsListProps) => {
  return (
    <div className="table">
      {props.benefits.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{parseDateToString(item.visit_date)}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
