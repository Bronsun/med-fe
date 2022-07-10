import ClinicModel from "../../models/ClinicModel";
import Image from "next/image";

interface ClinicItemProps {
  clinic: ClinicModel;
}

const ClinicItem = (props: ClinicItemProps) => {
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

      <div className="clinicsDate">12 sierpnia 2022</div>
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
      </div>
      {/* <p>{props.clinic.address}</p>
      <p>{props.clinic.benefits_for_children}</p>
      <p>{props.clinic.city}</p>
      <p>{props.clinic.covid_19}</p>
      <p>{props.clinic.registry_number}</p> */}
    </div>
  );
};

export default ClinicItem;
