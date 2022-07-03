import { useState } from "react";
import Image from 'next/image';

const NavbarComponent = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  return (
    <nav
      className="navbar navbarCustom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="\">
          NAZWA
        </a>

        <a
          role="button"
          className={`navbar-burger ${isNavbarOpened ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={(e: any) => setIsNavbarOpened(!isNavbarOpened)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isNavbarOpened ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <a className="navbar-item navbar-itemCustom is-clickable hoverLightBlue" href="\">
            NFZ
          </a>
          <a className="navbar-item navbar-itemCustom is-clickable hoverLightBlue" href="\">
            O nas
          </a>
          <a className="navbar-item navbar-itemCustom is-clickable hoverLightBlue" href="\">
            Kontakt
          </a>
          <a className="navbar-item navbar-itemCustom is-clickable shopButton hoverDarkBlue" href="\">
            <span className="icon-text">
              <span className="icon">
                <Image src="/shoppingCart.svg" alt="Sklep" width={32} height={32}/>
              </span>
              <span>Sklep</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
