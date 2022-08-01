import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { useRouter } from "next/router";
import CategoriesBar from "../components/Organisms/CategoriesBar";
import NavbarComponent from "../components/Organisms/Navbar";
import ClinicDetailsItem from "../components/Molecules/ClinicDetailsItem";
import ContactDetails from "../components/Molecules/ContactDetails";
import LoadingComponent from "../components/Atoms/LoadingComponents";
import NearByDetails from "../components/Molecules/NearByDetalis";
import dynamic from "next/dynamic";
import ClinicDetails from "../models/ClinicDetails";

export const getStaticPaths: GetStaticPaths =
  async () => {
    if (
      process.env.SKIP_BUILD_STATIC_GENERATION
    ) {
      return {
        paths: [],
        fallback: "blocking",
      };
    }
    const res = await fetch(
      `http://localhost:8000/clinic`
    );
    const data = await res.json();
    const paths = data.response.data.map(
      (clinic: { slug: string }) => ({
        params: { slug: clinic.slug },
      })
    );
    return {
      paths,
      fallback: true,
    };
  };

export const getStaticProps: GetStaticProps =
  async (context: any) => {
    const slug = context.params.slug;
    const res = await fetch(
      `http://localhost:8000/clinic/` + slug
    );
    const data: ClinicDetails[] =
      await res.json();
    return {
      props: { clinic: data },
    };
  };

const ClinicDetails = ({
  clinic,
}: InferGetStaticPropsType<
  typeof getStaticProps
>) => {
  const flexStyle = {
    flex: "0 0 auto",
  };

  const router = useRouter();
  if (router.isFallback)
    return <LoadingComponent />;
  const MyMap = dynamic(
    () =>
      import(
        "../components/Organisms/DetailsMap"
      ),
    { ssr: false }
  );
  return (
    <div className="clinicsPageWrapper">
      <NavbarComponent style={flexStyle} />
      <CategoriesBar style={flexStyle} />
      <div className="clinicsDetailsPanelWrapper background-whole">
      <div className="contactWrapper">
        <NearByDetails   clinic_info={
              clinic.response.clinic_info
            }
            clinic_benefits={
              clinic.response.clinic_benefits
            }/>
      </div>

        <div className="clinicDetailsMiddlePanel">
         
          <ClinicDetailsItem
            clinic_info={
              clinic.response.clinic_info
            }
            clinic_benefits={
              clinic.response.clinic_benefits
            }
          />
        </div>
        <div className="contactWrapper">
          
            <ContactDetails
              clinic={clinic.response.clinic_info}
            />
          
          <MyMap
            clinic={clinic.response.clinic_info}
          ></MyMap>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetails;
