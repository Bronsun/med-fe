import { ClinicBenefit } from "../../models/ClinicDetails";
import { parseDateToString } from "../utilities";

interface BenefitsListProps {
  benefits: ClinicBenefit[];
}

const BenefitsList = (props: BenefitsListProps) => {
  return (
    <table>
      {props.benefits.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{parseDateToString(item.visit_date)}</td>
        </tr>
      ))}
    </table>
  );
};

export default BenefitsList;
