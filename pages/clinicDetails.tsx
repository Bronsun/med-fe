import { NextPage } from "next";
import { APIservice } from "../api/APIservice";
import { ServiceState } from "../api/APIutilities";
import ErrorComponent from "../components/Atoms/ErrorComponent";
import LoadingComponent from "../components/Atoms/LoadingComponents";
import CategoriesBar from "../components/Organisms/CategoriesBar";
import NavbarComponent from "../components/Organisms/Navbar";

const ClinicDetails: NextPage = () => {
  const service = APIservice();

  return (
    <div>
      <NavbarComponent />
      <CategoriesBar />
      {service.state === ServiceState.InProgress && <LoadingComponent />}
      {service.state === ServiceState.Error && <ErrorComponent />}
      {/* {service.state === ServiceState.Fetched && ( */}
      {true && (
        <div>
          <p>details</p>
        </div>
      )}
    </div>
  );
};

export default ClinicDetails;
