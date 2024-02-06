import { Link } from "gatsby";
import React from "react";
const VideoLinkButton = () => {
  const isBrowser = () => typeof window !== "undefined";
  const lng = isBrowser()
    ? window.location.pathname.startsWith("/ml")
      ? "/ml"
      : ""
    : "";

  return (
    <div className="block has-text-centered">
      <a href="https://www.youtube.com/@LeenasMushroom/playlists" target="_blank" className="button">
        {lng === "" ? "Video Tutorials" : "വീഡിയോ ട്യൂട്ടോറിയലുകൾ"}
      </a>
    </div>
  );
};
export default VideoLinkButton;
