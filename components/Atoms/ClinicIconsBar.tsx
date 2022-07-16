import Image from "next/image";

interface ClinicIconsBarProps {
  elevator: boolean;
  car_park: boolean;
  ramp: boolean;
  toilet: boolean;
}

const ClinicIconsBar = (props: ClinicIconsBarProps) => {
  return (
    <div className="clinicIcons">
      {props.car_park && (
        <Image src={"/parking.png"} alt="phone" width={24} height={24} />
      )}
      {props.elevator && (
        <Image src={"/elevator.png"} alt="elevator" width={24} height={24} />
      )}
      {props.ramp && (
        <Image src={"/ramp.png"} alt="ramp" width={24} height={24} />
      )}
      {props.toilet && (
        <Image src={"/toilet.png"} alt="toilet" width={24} height={24} />
      )}
    </div>
  );
};

export default ClinicIconsBar;
