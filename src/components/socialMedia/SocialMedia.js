import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia(props) {
  const { theme } = props;
  return socialMediaLinks.map((site) => {
    return (
      <div className="social-media-link" key={site.tag}>
        <a href={site.url} target="_blank" style={{ color: "inherit" }}>
          <div
            key={site.name}
            className={`iconify icon-button`}
            data-icon={site.icon}
            style={{ width: "2em", height: "2em", marginInline: "10px" }}
          ></div>
        </a>
        {site.tag && (
          <div className="site-tag" style={{ color: theme.accentColor }}>
            {site.tag}
          </div>
        )}
      </div>
    );
  });
}
