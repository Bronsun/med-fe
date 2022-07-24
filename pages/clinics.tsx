import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APIservice } from "../api/APIservice";
import { GetQueryParameters, ServiceState } from "../api/APIutilities";
import { GetClinicsConfig } from "../api/ConfigCreator";
import LoadingComponent from "../components/Atoms/LoadingComponents";
import ClinicsList from "../components/Organisms/ClinicsList";
import Pagination from "../components/Molecules/Pagination";
import CategoriesBar from "../components/Organisms/CategoriesBar";
import NavbarComponent from "../components/Organisms/Navbar";
import ClinicModel from "../models/ClinicModel";
import ErrorComponent from "../components/Atoms/ErrorComponent";
import Map from "../components/Organisms/Map";
import dynamic from "next/dynamic";

const Clinics: NextPage = () => {
  const router = useRouter();
  const service = APIservice();

  const [clinicsList, setClinicsList] = useState<ClinicModel[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    service.execute!(GetClinicsConfig(router.query));
  }, [router.query]);

  useEffect(() => {
    const query = { ...router.query, ...{ page: currentPage } };
    router.push({ pathname: "/clinics", query: GetQueryParameters(query) });
  }, [currentPage]);

  useEffect(() => {
    if (service.state === ServiceState.Fetched)
      setClinicsList(service.result.data);
  }, [service.state]);

  const flexStyle = {
    flex: "0 0 auto",
  };

  const MyMap = dynamic(() => import("../components/Organisms/Map"), {
    ssr: false,
  });
  return (
    <div className="clinicsPageWrapper">
      <NavbarComponent style={flexStyle} />
      <CategoriesBar style={flexStyle} />
      <div className="clinicsContentWrapper">
        <div className="reklama">Reklama</div>
        <div className="clinicsMiddlePanel">
          <div className="clinicsMiddleContentWrapper">
            {service.state === ServiceState.InProgress && <LoadingComponent />}
            {service.state === ServiceState.Error && <ErrorComponent />}
            {service.state === ServiceState.Fetched && (
              <ClinicsList clinicsList={clinicsList} />
            )}
          </div>
          {service.result !== undefined && service.result.total_page > 1 && (
            <Pagination
              totalPages={service.result.total_page}
              currentPage={currentPage}
              setCurrentPage={(value: number) => setCurrentPage(value)}
              style={flexStyle}
            />
          )}
        </div>
        <div>
          <MyMap clinicsList={clinicsList} />
        </div>
      </div>
    </div>
  );
};

export default Clinics;
