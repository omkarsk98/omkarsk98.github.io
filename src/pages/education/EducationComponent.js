import React from "react";
import Header from "../../components/header/Header";
import Educations from "../../containers/education/Educations";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Helmet } from "react-helmet";
import LightTheme from "../../theme";

function Education(props) {
  return (
    <div className="education-main">
      <Helmet>
        <title>Education</title>
      </Helmet>
      <Header theme={LightTheme} />
      <div className="basic-education">
        {/* <Fade bottom duration={2000} distance="40px"> */}
        <div className="heading-div">
          <div className="heading-img-div">
            <EducationImg theme={LightTheme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: LightTheme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: LightTheme.text }}>
              Basic Qualification and Certifications
            </h3>
            <p
              className="experience-header-detail-text subTitle"
              style={{ color: LightTheme.secondaryText }}
            >
              I actively learn and experiment open sourced tools and
              technologies.
            </p>
          </div>
        </div>
        {/* </Fade> */}
        <Educations theme={LightTheme} />
      </div>
    </div>
  );
}

export default Education;
