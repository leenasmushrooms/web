import { Link } from "gatsby";
import React from "react";
const ExploreProductsButton = () => {
  const isBrowser = () => typeof window !== "undefined";
  const lng = isBrowser()
    ? window.location.pathname.startsWith("/ml")
      ? "/ml"
      : ""
    : "";

  return (
    <div className="block has-text-centered">
      <Link to={`${lng}/products`} className="button is-primary">
        {lng === "" ? "Explore our products" : "ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ"}
      </Link>
    </div>
  );
};
export default ExploreProductsButton;
