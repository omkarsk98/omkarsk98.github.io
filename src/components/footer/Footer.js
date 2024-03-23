import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
import LightTheme from "../../theme";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: LightTheme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
        <p className="footer-text" style={{ color: LightTheme.secondaryText }}>
          I am a Trojan and so is the{" "}
          <span style={{ color: LightTheme.accentColor }}>color</span>{" "}
          <span style={{ color: LightTheme.accentColor }}>theme</span>.
        </p>
      </Fade>
    </div>
  );
}
