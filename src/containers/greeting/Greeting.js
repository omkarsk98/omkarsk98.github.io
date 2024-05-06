import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import LightTheme from "../../theme";
import { useParams, Link } from "react-router-dom";

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
              <div style={{ fontSize: "0.8em" }}>{greeting.locationTitle}</div>
            </p>
            <div className="social-media-links">
              <SocialMedia theme={LightTheme} />
            </div>
            <p
              className="greeting-text-p subTitle checkout-my-projects"
              style={{ color: LightTheme.secondaryText }}
            >
              <span className="checkout-my">{"Checkout my "}</span>
              <span className="checkout-my-projects-link">
                <Link
                  to={`/${role}/projects`}
                  style={{ textDecoration: "none" }}
                >
                  <span style={{ color: LightTheme.accentColor }}>
                    Projects
                  </span>
                </Link>
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
