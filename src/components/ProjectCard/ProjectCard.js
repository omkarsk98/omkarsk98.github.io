import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  // console.log(repo);
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  const styles = style({
    color: "rgb(88, 96, 105)",
    // backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
  });

  const getDescriptionList = () => {
    return (
      <ul>
        {repo.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <div
        className="project-card-div"
        key={repo.id}
        style={{
          backgroundColor: theme.projectCard,
          // ":hover": { boxShadow: `${theme.imageDark} 0 2px 15px` },
        }}
      >
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        <p className="repo-description" style={{ color: theme.text }}>
          {typeof repo.description === "string"
            ? repo.description
            : getDescriptionList()}
        </p>
        <div className="flexDiv">
          <div className="repo-details Leftitem">
            <ProjectLanguages logos={repo.languages} />
          </div>
          <div className="repo-details Rightitem">
            <ProjectLinks logos={repo.links} />
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}
