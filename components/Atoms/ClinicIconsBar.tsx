import Image from "next/image";

interface ClinicIconsBarProps {
  elevator: boolean;
  car_park: boolean;
  ramp: boolean;
  toilet: boolean;
}

const ClinicIconsBar = (
  props: ClinicIconsBarProps
) => {
  return (
    <div className="clinicIcons">
      <Image
        src={"/parking.png"}
        alt="parking"
        width={24}
        height={24}
        title={
          props.car_park
            ? "Parking"
            : "Brak parkingu"
        }
        className={
          !props.car_park ? "iconNotActive" : ""
        }
      />
      <Image
        src={"/elevator.png"}
        alt="elevator"
        width={24}
        height={24}
        title={
          props.elevator ? "Winda" : "Brak windy"
        }
        className={
          !props.elevator ? "iconNotActive" : ""
        }
      />
      <Image
        src={"/ramp.png"}
        alt="ramp"
        width={24}
        height={24}
        title={
          props.ramp ? "Rampa" : "Brak rampy"
        }
        className={
          !props.ramp ? "iconNotActive" : ""
        }
      />
      <Image
        src={"/toilet.png"}
        alt="toilet"
        width={24}
        height={24}
        title={
          props.toilet
            ? "Toaleta"
            : "Brak toalety"
        }
        className={
          !props.toilet ? "iconNotActive" : ""
        }
      />
    </div>
  );
};

export default ClinicIconsBar;
