import Image from "next/image";
import { useState } from "react";
import { GetQueryParameters } from "../../api/APIutilities";
import { GetClinicsQuery } from "../../models/GetClinicsQuery";
import { useRouter } from "next/router";
import SelectSearchComponent from "../Atoms/SelectSearchComponent";
import { GetBenefitsURL, GetCitiesURL, GetPrivateNameURL, GetAddressURL, GetVoivodeshipURL } from "../../api/URLcreator";

const MainSearcher = () => {
  const router = useRouter();
  const [openedModal, setOpenedModal] =
    useState<boolean>(false);
  const [query, setQuery] =
    useState<GetClinicsQuery>({
      benefit: "",
      city: "",
      address: "",
      voivodeship: "",
      private_name: "",
      benefits_for_children: false,
      page: 0,
      limit: 25,
    });

  const setFields = (fields: any) => {
    setQuery({ ...query, ...fields });
  };

  const searchClinics = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/clinics",
      query: GetQueryParameters(query),
    });
  };

  return (
    <div className="mainSearcherWrapper">
      <div>
        <h1>Znajdź przychodnię i wolny termin</h1>
        <h3>
          Nie czekaj w kolejce i znajdź placówkę z
          najszybszym terminem.
        </h3>
      </div>

      <SelectSearchComponent
        URLcreator={GetBenefitsURL}
        placeholder="Wpisz nazwę świadczenia..."
        onChange={(value: string) =>
          setFields({ benefit: value })
        }
        selectedValue={query.benefit}
      />
      
      <div className="mainSearcherGrid">
        
      <SelectSearchComponent
        URLcreator={GetVoivodeshipURL}
        placeholder="Województwo"
        onChange={(value: string) =>
          setFields({voivodeship: value })
        }
        selectedValue={query.voivodeship}
      />
       
          <SelectSearchComponent
        URLcreator={GetCitiesURL}
        placeholder="Miasto"
        onChange={(value: string) =>
          setFields({ city: value })
        }
        selectedValue={query.city}
      />
        <div className="control">
          <button
            className="button searchbutton"
            onClick={searchClinics}
          >
            Wyszukaj
          </button>
        </div>
        <div className="control">
          <button
            className="button moreoptionsbutton"
            onClick={(e: any) =>
              setOpenedModal(true)
            }
          >
            {" "}
            <Image
              src="/settings.png"
              alt="Więcej opcji wyszukiwania"
              width={30}
              height={30}
            />
            Dodatkowe opcje wyszukiwania
          </button>
        </div>
      </div>
      <div
        className={`modal ${
          openedModal ? "is-active" : ""
        }`}
      >
        <div className="modal-background" />
        <div className="mainSearcherWrapperModal">
          <button
            className="modalClose"
            aria-label="close"
            onClick={(e: any) =>
              setOpenedModal(false)
            }
          >
            <Image
              src="/closeModal.png"
              width={28}
              height={28}
              alt="close"
            />
          </button>
          <div>
            <h1>
              Znajdź przychodnię i wolny termin
            </h1>
            <h3>
              Nie czekaj w kolejce i znajdź
              placówkę z najszybszym terminem.
            </h3>
          </div>
          <SelectSearchComponent
        URLcreator={GetBenefitsURL}
        placeholder="Wpisz nazwę świadczenia..."
        onChange={(value: string) =>
          setFields({ benefit: value })
        }
        selectedValue={query.benefit}
      />
     <SelectSearchComponent
        URLcreator={GetVoivodeshipURL}
        placeholder="Województwo"
        onChange={(value: string) =>
          setFields({voivodeship: value })
        }
        selectedValue={query.voivodeship}
      />
             <SelectSearchComponent
        URLcreator={GetCitiesURL}
        placeholder="Miasto"
        onChange={(value: string) =>
          setFields({ city: value })
        }
        selectedValue={query.city}
      />
           <SelectSearchComponent
        URLcreator={GetPrivateNameURL}
        placeholder="Nazwa przychodni/kliniki"
        onChange={(value: string) =>
          setFields({ private_name: value })
        }
        selectedValue={query.private_name}
      />
        <SelectSearchComponent
        URLcreator={GetAddressURL}
        placeholder="Ulica"
        onChange={(value: string) =>
          setFields({ address: value })
        }
        selectedValue={query.address}
      />
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  className="checkbox"
                  type="checkbox"
                  onChange={(e: any) =>
                    setFields({
                      benefits_for_children:
                        !query.benefits_for_children,
                    })
                  }
                  checked={
                    query.benefits_for_children ??
                    false
                  }
                />{" "}
                Świadczenie dla dziecka
              </label>
            </div>
          </div>
          <div className="control">
            <button
              className="button searchbutton"
              onClick={searchClinics}
            >
              Wyszukaj
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSearcher;
