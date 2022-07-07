import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APIservice } from "../api/APIservice";
import { GetQueryParameters, ServiceState } from "../api/APIutilities";
import { GetClinicsConfig } from "../api/ConfigCreator";
import LoadingComponent from "../components/Atoms/LoadingComponents";
import SelectSearchComponent from "../components/Atoms/SelectSearchComponent";
import Pagination from "../components/Molecules/Pagination";
import CategoriesBar from "../components/Organisms/CategoriesBar";
import NavbarComponent from "../components/Organisms/Navbar";
import ClinicModel from "../models/ClinicModel";

const ClinicsList: NextPage = () => {
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
    //if(service.state===ServiceState.Error)  zrób coś fajnego
  }, [service.state]);

  return (
    <div>
      <NavbarComponent />
      <CategoriesBar />
      <SelectSearchComponent />
      {service.state === ServiceState.InProgress && <LoadingComponent />}
      {service.state === ServiceState.Fetched && (
        <div>
          <p>
            data:
            {clinicsList.map((clinic: ClinicModel, index) => (
              <p key={index}>{clinic.id}</p>
            ))}
          </p>

          {service.result.total_page > 1 && (
            <Pagination
              totalPages={service.result.total_page}
              currentPage={currentPage}
              setCurrentPage={(value: number) => setCurrentPage(value)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ClinicsList;
