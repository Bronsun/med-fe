import Image from "next/image";

interface ClinicAddressProps {
  address: string;
  city: string;
}

const ClinicAddress = (props: ClinicAddressProps) => {
  return (
    <div className="clinicIconP">
      <div>
        <Image src={"/map-marker.png"} alt="phone" width={28} height={28} />
      </div>
      <p>
        {props.address}
        <br />
        {props.city}
      </p>
    </div>
  );
};

export default ClinicAddress;
