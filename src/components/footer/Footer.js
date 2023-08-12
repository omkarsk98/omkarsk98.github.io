import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */
import { themes } from "../../theme.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          I am a Trojan and so is the{" "}
          <span style={{ color: themes.light.accentColor }}>color</span>{" "}
          <span style={{ color: themes.dark.accentColor }}>theme</span>.
        </p>
      </Fade>
    </div>
  );
}
