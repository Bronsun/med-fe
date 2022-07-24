import dynamic from "next/dynamic";
import ClinicModel from "../../models/ClinicModel";
import ClinicAddress from "../Atoms/ClinicAddress";
import ClinicIconsBar from "../Atoms/ClinicIconsBar";
import ClinicPhone from "../Atoms/ClinicPhone";

interface ContactDetailsProps{
    clinic: ClinicModel;
}

const ContactDetails=(props:ContactDetailsProps)=>{
    const MyMap = dynamic(() => import('../Organisms/Map'), { ssr: false });
    return <>
        <p className="description">Udogodnienia:</p>
        <ClinicIconsBar elevator={props.clinic.elevator} car_park={props.clinic.car_park} ramp={props.clinic.ramp} toilet={props.clinic.toilet} />
        <p className="description">Telefon:</p>
        <ClinicPhone phone={props.clinic.phone}/>
        <p className="description">Adres:</p>
        <ClinicAddress address={props.clinic.address} city={props.clinic.city}/>
        <MyMap clinicsList={[props.clinic]} />
    </>
}

export default ContactDetails;