import { Link } from "gatsby";
import React from "react";
const FaqButton = () => {
  const isBrowser = () => typeof window !== "undefined";
  const lng = isBrowser()
    ? window.location.pathname.startsWith("/ml")
      ? "/ml"
      : ""
    : "";

  return (
    <div className="block has-text-centered">
      <Link to={`${lng}/faq`} className="button is-primary">
        {lng === "" ? "FAQ" : "കൂടുതൽ വിവരങ്ങൾ"}
      </Link>
    </div>
  );
};
export default FaqButton;
