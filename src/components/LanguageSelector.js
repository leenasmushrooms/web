import { Link } from "gatsby";
import React from "react";
const LanguageSelector = () => {
  const isBrowser = () => typeof window !== "undefined"
  const getClass = (lang) => {
    const lng = isBrowser() ? window.location.pathname.startsWith('/ml')? 'ml': 'en': 'en';
    return lng === lang ? "button is-primary" : "button is-white";
  };
  return (
    <div className="navbar-item">
      <Link className={getClass("en")} to="/">
        English
      </Link>
      <Link className={getClass("ml")} to="/ml/">
        മലയാളം
      </Link>
    </div>
  );
};
export default LanguageSelector;
