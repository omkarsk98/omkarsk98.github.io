import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import DataScienceImg from "./DataScienceImg";
import LightTheme from "../../theme";
import { useParams } from "react-router-dom";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={LightTheme} />;
  else if (props.fileName === "CloudInfraImg")
    return <DataScienceImg theme={LightTheme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const { role = "sde" } = useParams();
  if (role === "ds") skills.data = skills.data.reverse();
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div">
              <Fade left duration={1000}>
                <div className="skills-image-div" style={{ marginTop: 0 }}>
                  <GetSkillSvg fileName={skill.fileName} theme={LightTheme} />
                </div>
              </Fade>

              <div
                className="skills-text-div"
                style={{ marginTop: 0, paddingTop: 0 }}
              >
                <Fade right duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{ color: LightTheme.text }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1000}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={1000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: LightTheme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div">
              <div className="skills-text-div" style={{ marginTop: 0 }}>
                <Fade left duration={1000}>
                  <h1
                    className="skills-heading"
                    style={{ color: LightTheme.text }}
                  >
                    {skill.title}
                  </h1>
                </Fade>
                <Fade left duration={1000}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade left duration={1000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: LightTheme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={1000}>
                <div className="skills-image-div" style={{ marginTop: 0 }}>
                  <GetSkillSvg fileName={skill.fileName} theme={LightTheme} />
                </div>
              </Fade>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;
