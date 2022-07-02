import { useState } from "react";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";

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
          <a className="navbar-item navbar-itemCustom" href="\">
            NFZ
          </a>
          <a className="navbar-item navbar-itemCustom" href="\">
            O nas
          </a>
          <a className="navbar-item navbar-itemCustom" href="\">
            Kontakt
          </a>
          <a className="navbar-item navbar-itemCustom shopButton" href="\">
          <span className="icon-text">
  <span className="icon">
    <ShoppingCartIcon/>
  </span>
  <span>Shop</span>
</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
