import { Link } from "gatsby";
import React from "react";
const LanguageSelector = () => {
  const isBrowser = () => typeof window !== "undefined"
  const getClass = (lang) => {
    const lng = isBrowser() ? window.location.pathname.startsWith('/ml')? 'ml': 'en': 'en';
    return lng === lang ? "button is-primary" : "button is-white";
  };
  const barePath = isBrowser() ? window.location.pathname.replace('/ml/', '/'): '/'
  return (
    <div className="navbar-item">
      <Link className={getClass("en")} to={`${barePath}`}>
        English
      </Link>
      <Link className={getClass("ml")} to={`/ml${barePath}`}>
        മലയാളം
      </Link>
    </div>
  );
};
export default LanguageSelector;
