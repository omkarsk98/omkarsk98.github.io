import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import LightTheme from "../../theme";
import { useParams } from "react-router-dom";

export default function Greeting(props) {
  const { role } = useParams();

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text">{greeting.title}</h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: LightTheme.secondaryText }}
            >
              <span>I'm </span>
              <span style={{ color: LightTheme.accentColor }}>
                {greeting.full_name}.{" "}
              </span>
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <p
              className="greeting-text-p subTitle"
              style={{ color: LightTheme.secondaryText }}
            >
              <span style={{ fontSize: "0.8em" }}>{"Checkout my "}</span>
              <span style={{ fontSize: "0.9em" }}>
                <a
                  href={`/${role}/projects`}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: LightTheme.accentColor }}>
                    Projects
                  </span>
                </a>
              </span>
            </p>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={LightTheme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
