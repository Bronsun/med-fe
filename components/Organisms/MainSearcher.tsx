import Image from "next/image";
import { useState } from "react";
import InputComponent from "../Atoms/InputComponent";

const MainSearcher = () => {
  const [openedModal, setOpenedModal] = useState<boolean>(false);

  return (
    <div className="mainSearcherWrapper">
      <div className="nth1">
        <h1>Znajdź przychodnię i wolny termin</h1>
        <h3>Nie czekaj w kolejce i znajdź placówkę z najszybszym terminem.</h3>
      </div>
      <InputComponent
        className="nth3"
        placeholder="Zacznij wpisywać nazwę świadczenia..."
      />
      <InputComponent className="nth4" placeholder="Województwo" />
      <InputComponent className="nth5" placeholder="Miasto" />
      <div className="control nth6">
        <button className="button searchbutton">Wyszukaj</button>
      </div>
      <div className="control nth7">
        <button
          className="button moreoptionsbutton"
          onClick={(e: any) => setOpenedModal(true)}
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
      <div className={`modal ${openedModal ? "is-active" : ""}`}>
        <div className="modal-background" />
        <div className="mainSearcherWrapperModal">
          <button
            className="modalClose"
            aria-label="close"
            onClick={(e: any) => setOpenedModal(false)}
          >
            <Image src="/closeModal.png" width={28} height={28} alt="close" />
          </button>
          <div>
            <h1>Znajdź przychodnię i wolny termin</h1>
            <h3>
              Nie czekaj w kolejce i znajdź placówkę z najszybszym terminem.
            </h3>
          </div>
          <InputComponent placeholder="Zacznij wpisywać nazwę świadczenia..." />
          <InputComponent placeholder="Województwo" />
          <InputComponent placeholder="Miasto" />
          <InputComponent placeholder="Szpital/przychodnia" />
          <InputComponent placeholder="Nazwa miejsca udzielenia świadczenia" />
          <InputComponent placeholder="Ulica" />
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input className="checkbox" type="checkbox" /> Świadczenie dla
                dziecka
              </label>
            </div>
          </div>
          <div className="control">
            <button className="button searchbutton">Wyszukaj</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSearcher;
