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
          <Image src={"/NFZlogo.png"} alt="nfz-logo" width={60} height={25} />
        </div>
        <div>
          <p className="clinicNfzName">{props.clinic.nfz_name}</p>
          <p className="clinicPrivateName">{props.clinic.private_name}</p>
        </div>
      </div>
      {props.clinic.phone !== undefined && (
        <a
          href={`tel:${props.clinic.phone}`}
          className="clinicIconP clinicsPhone"
        >
          <div>
            <Image src={"/phone.png"} alt="phone" width={28} height={28} />
          </div>
          <p>{props.clinic.phone}</p>
        </a>
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
        <div className="clinicIconP">
          <div>
            <Image src={"/map-marker.png"} alt="phone" width={28} height={28} />
          </div>
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
