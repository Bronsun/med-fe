import Image from "next/image";

const MainSearcher = () => {
  return (
    <div className="mainSearcherWrapper">
      <div className="nth1">
        <h1>Znajdź przychodnię i wolny termin</h1>
        <h3>Nie czekaj w kolejce i znajdź placówkę z najszybszym terminem.</h3>
      </div>
      <div className="field nth3">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Zacznij wpisywać nazwę świadczenia..."
          />
        </div>
      </div>
      <div className="field nth4">
        <div className="control">
          <input className="input" type="text" placeholder="Województwo" />
        </div>
      </div>
      <div className="field nth5">
        <div className="control">
          <input className="input" type="text" placeholder="Miasto" />
        </div>
      </div>
      <div className="control nth6">
        <button className="button searchbutton">Wyszukaj</button>
      </div>
      <div className="control nth7">
        <button className="button moreoptionsbutton">
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
  );
};

export default MainSearcher;
