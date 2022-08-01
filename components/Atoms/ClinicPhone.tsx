import Image from "next/image";
import React, { useState } from "react";

interface ClinicPhoneProps {
  phone: number;
}

const ClinicPhone = (props: ClinicPhoneProps) => {
  const [buttonText, setButtonText] = useState(
    "Pokaż numer"
  );
  const [hrefText, setHrefText] =
    useState(`tel:`);

  function handleClick() {
    setButtonText(props.phone.toString());
    setHrefText(`tel:${props.phone}`);
  }
  return (
    <div className="clinicIconP clinicsPhone">
      <div>
        <Image
          src={"/phone.png"}
          alt="phone"
          width={28}
          height={28}
        />
      </div>
      <React.Fragment>
        <a
          href={hrefText}
          className="phoneButtom"
          onClick={handleClick}
        >
          {buttonText}
        </a>
      </React.Fragment>
    </div>
  );
};

export default ClinicPhone;
