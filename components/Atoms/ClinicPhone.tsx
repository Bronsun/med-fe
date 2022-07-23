import Image from "next/image";

interface ClinicPhoneProps {
  phone: number;
}

const ClinicPhone = (props: ClinicPhoneProps) => {
  return (
    <a href={`tel:${props.phone}`} className="clinicIconP clinicsPhone">
      <div>
        <Image src={"/phone.png"} alt="phone" width={28} height={28} />
      </div>
      <p>{props.phone}</p>
    </a>
  );
};

export default ClinicPhone;
