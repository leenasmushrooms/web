import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../img/logo.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const isBrowser = () => typeof window !== "undefined";
  const lng = isBrowser()
  ? window.location.pathname.startsWith("/ml")
    ? "/ml"
    : ""
  : "";

  return (
    <nav
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container" style={{display:'flex', alignItems: 'center'}}>
        <div className="navbar-brand">
          <Link to={`${lng ?'/ml/' :'/'}`} className="navbar-item" title="Logo">
            <img src={logo} alt="Leenas" style={{ width: "100px", height: "100px" }} />
          </Link>
        </div>
        <ul id="navMenu" style={{display: 'flex', marginLeft: 'auto', alignItems: 'center'}}>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={`${lng}/products`}>
              Products
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={`${lng}/blog`}>
              Blog
            </Link>
          </li>
          <li className="navbar-end has-text-centered">
            <LanguageSelector/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
