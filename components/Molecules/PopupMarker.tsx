import ClinicModel from "../../models/ClinicModel";
import Image from "next/image";
import { monthsArray } from "../../assets/months";
import router from "next/router";

interface ClinicItemProps {
  clinic: ClinicModel;
}

const ClinicItem = (props: ClinicItemProps) => {
  const parseDateToString = (value: string) => {
    const valArr = value.split("-");
    valArr[1] = monthsArray[parseInt(valArr[1]) - 1];
    return valArr.reverse().join(" ");
  };

  const parseLengthOfTheQueue = (value: number) => {
    const noun = [1, 5, 6, 7, 8, 9, 0].includes(value % 10)
      ? value == 1
        ? " osoba"
        : " osób"
      : " osoby";
    return value.toString() + noun;
  };

  const parseDaysInTheQueue = (value: number) => {
    const noun = value == 1 ? " dzień" : " dni";
    return value.toString() + noun;
  };

  const goToClinicDetails = () => {
    router.push(
      { pathname: "/clinicDetails", query: `id=${props.clinic.id}` },
      props.clinic.id
    );
  };

  return (
    <div className="popupsMarkerItem">
      <div className="clinicsTitle">
        <div> 
          <p className="clinicPrivateName">{props.clinic.private_name}</p>
        </div>
      </div>
      <div className="clinicsDate">
        {props.clinic.visit_date !== undefined &&
          props.clinic.visit_date.length !== 0 && (
            <p>{parseDateToString(props.clinic.visit_date)}</p>
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
