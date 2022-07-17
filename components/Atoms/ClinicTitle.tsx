import Image from "next/image";

interface ClinicTitleProps {
  nfz_name: string;
  private_name: string;
}

const ClinicTitle = (props: ClinicTitleProps) => {
  return (
    <div className="clinicsTitle">
      <div>
        <Image src={"/NFZlogo.png"} alt="nfz-logo" width={60} height={25} />
      </div>
      <div>
        <p className="clinicNfzName">{props.nfz_name}</p>
        <p className="clinicPrivateName">{props.private_name}</p>
      </div>
    </div>
  );
};

export default ClinicTitle;
