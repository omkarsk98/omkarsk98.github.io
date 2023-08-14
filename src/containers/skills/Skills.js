import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const { theme, role } = props;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1
            className="skills-header"
            style={{ color: theme.text, marginTop: 0 }}
          >
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} role={role} />
    </div>
  );
}
