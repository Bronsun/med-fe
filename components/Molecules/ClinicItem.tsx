import ClinicModel from "../../models/ClinicModel";

interface ClinicItemProps {
  clinic: ClinicModel;
}

const ClinicItem = (props: ClinicItemProps) => {
  return (
    <div className="clinicsItem">
      <p>{props.clinic.nfz_name}</p>
      <p>{props.clinic.private_name}</p>
      <p>{props.clinic.address}</p>
      <p>{props.clinic.benefits_for_children}</p>
      <p>{props.clinic.car_park}</p>
      <p>{props.clinic.city}</p>
      <p>{props.clinic.covid_19}</p>
      <p>{props.clinic.elevator}</p>
      <p>{props.clinic.ramp}</p>
      <p>{props.clinic.registry_number}</p>
      <p>{props.clinic.toilet}</p>
    </div>
  );
};

export default ClinicItem;
