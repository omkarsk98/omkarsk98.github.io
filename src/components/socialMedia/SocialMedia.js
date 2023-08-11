import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return socialMediaLinks.map((site) => {
    return (
      <a href={site.url} target="_blank" style={{ color: "inherit" }}>
        <span
          key={site.name}
          className={`iconify icon-button ${site.className} ${site.faClassName}`}
          data-icon={site.icon}
          style={{ width: "2em", height: "2em", marginInline: "10px" }}
        ></span>
      </a>
    );
  });
}
