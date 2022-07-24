import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APIservice } from "../api/APIservice";
import { ServiceState } from "../api/APIutilities";
import { GetClinicDetailsConfig } from "../api/ConfigCreator";
import ErrorComponent from "../components/Atoms/ErrorComponent";
import LoadingComponent from "../components/Atoms/LoadingComponents";
import CategoriesBar from "../components/Organisms/CategoriesBar";
import NavbarComponent from "../components/Organisms/Navbar";
import ClinicDetails from "../models/ClinicDetails";
import ClinicDetailsItem from "../components/Molecules/ClinicDetailsItem";
import ContactDetails from "../components/Molecules/ContactDetails";

const ClinicDetails: NextPage = () => {
  const service = APIservice();
  const router = useRouter();
  const [clinic, setClinic] = useState<ClinicDetails | undefined>(undefined);

  useEffect(() => {
    service.execute!(
      GetClinicDetailsConfig(
        window.location.pathname.slice(
          window.location.pathname.lastIndexOf("_") + 1
        )
      )
    );
  }, [router.query]);

  useEffect(() => {
    if (service.state === ServiceState.Fetched) setClinic(service.result);
  }, [service.state]);

  const flexStyle = {
    flex: "0 0 auto",
  };

  return (
    <div className="clinicsPageWrapper">
      <NavbarComponent style={flexStyle} />
      <CategoriesBar style={flexStyle} />
      <div className="clinicsDetailsPanelWrapper background-whole">
        <div>left</div>

        <div className="clinicDetailsMiddlePanel">
          {service.state === ServiceState.InProgress && <LoadingComponent />}
          {service.state === ServiceState.Error && <ErrorComponent />}
          {service.state === ServiceState.Fetched && clinic !== undefined && (
            <ClinicDetailsItem
              clinic_info={clinic.clinic_info}
              clinic_benefits={clinic.clinic_benefits}
            />
          )}
        </div>
        <div>
          <div className="contactWrapper">
            {service.state === ServiceState.InProgress && <LoadingComponent />}
            {service.state === ServiceState.Fetched && clinic !== undefined && (
              <ContactDetails clinic={clinic?.clinic_info} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
