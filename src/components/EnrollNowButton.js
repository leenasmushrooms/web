import React from "react";
const EnrollNowButton = () => {
  const isBrowser = () => typeof window !== "undefined";
  const lng = isBrowser()
    ? window.location.pathname.startsWith("/ml")
      ? "/ml"
      : ""
    : "";

  return (
    <div className="block has-text-centered">
      <a href="https://www.manoramahorizon.com/course/mushroom-farming-for-beginners/" target="_blank" className="button is-primary">
        {lng === "" ? "Enroll for course" : "കോഴ്‌സിന് രജിസ്റ്റർ ചെയ്യാം"}
      </a>
    </div>
  );
};
export default EnrollNowButton;
