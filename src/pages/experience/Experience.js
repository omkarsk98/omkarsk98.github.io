import React from "react";
import Header from "../../components/header/Header";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Helmet } from "react-helmet";
import ExperienceImg from "./ExperienceImg";
import LightTheme from "../../theme";

function Experience(props) {
  return (
    <div className="experience-main">
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <Header theme={LightTheme} />
      <div className="basic-experience">
        {/* <Fade bottom duration={2000} distance="40px"> */}
        <div className="experience-heading-div">
          <div className="experience-heading-img-div">
            <ExperienceImg theme={LightTheme} />
          </div>
          <div className="experience-heading-text-div">
            <h1
              className="experience-heading-text"
              style={{ color: LightTheme.text }}
            >
              {experience.title}
            </h1>
            <h3
              className="experience-heading-sub-text"
              style={{ color: LightTheme.text }}
            >
              {experience["subtitle"]}
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: LightTheme.secondaryText }}
            >
              {experience["description"]}
            </p>
          </div>
        </div>
        {/* </Fade> */}
      </div>
      <ExperienceAccordion
        sections={experience["sections"]}
        theme={LightTheme}
      />
    </div>
  );
}

export default Experience;
