import ClinicModel from "../../models/ClinicModel";
import Image from "next/image";
import { monthsArray } from "../../assets/months";

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

  return (
    <div className="clinicsItem">
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

      {props.clinic.visit_date !== undefined && props.clinic.visit_date.length !== 0 && (
        <div className="clinicsDate">
          {parseDateToString(props.clinic.visit_date)}
        </div>
      )}
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

        <div className="clinicIcons">
          {props.clinic.car_park && (
            <Image src={"/parking.png"} alt="phone" width={24} height={24} />
          )}
          {props.clinic.elevator && (
            <Image
              src={"/elevator.png"}
              alt="elevator"
              width={24}
              height={24}
            />
          )}
          {props.clinic.ramp && (
            <Image src={"/ramp.png"} alt="ramp" width={24} height={24} />
          )}
          {props.clinic.toilet && (
            <Image src={"/toilet.png"} alt="toilet" width={24} height={24} />
          )}
        </div>

        <div className="clinicsStatistics">
          <div>
            <div>
              <Image
                src={"/tileIcons/queue.png"}
                alt="queue"
                width={24}
                height={24}
              />
            </div>
            <p>{parseLengthOfTheQueue(1)}</p>
          </div>
          <div>
            <div>
              <Image src={"/clock.png"} alt="queue" width={24} height={24} />
            </div>
            <p>{parseDaysInTheQueue(1)}</p>
          </div>
        </div>
      </div>
      {props.clinic.visit_date.length === 0 && <button className="clinicsUnfold">
        <Image src="/expand-arrow.png" alt="rozwiń" width={34} height={24}/></button>}
    </div>
  );
};

export default ClinicItem;
