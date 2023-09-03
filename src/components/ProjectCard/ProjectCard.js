import React, { useEffect } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import ProjectLinks from "../ProjectLinks/ProjectLinks";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
// const file = require(`src/assets/tableau/temp.html`);

export default function ProjectCard({ repo, theme, isDashboard }) {
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

  useEffect(() => {
    //
    const divElement = document.getElementById(repo.divId);
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "100%";
    vizElement.style.height = "100%";
    // if (divElement.offsetWidth > 800) {
    //   // vizElement.style.width = "1142px";
    //   vizElement.style.height = "2020px";
    // } else if (divElement.offsetWidth > 500) {
    //   // vizElement.style.width = "1142px";
    //   vizElement.style.height = "2020px";
    // } else {
    //   // vizElement.style.width = "100%";
    //   vizElement.style.height = "2527px";
    // }
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });
  const getDashboard = () => (
    <div
      dangerouslySetInnerHTML={{ __html: repo.content }}
      style={{ height: "100%" }}
    />
  );

  // check if desktop or phone
  const isDesktop = window.innerWidth > 800;

  return (
    <div>
      {/* <Fade bottom duration={2000} distance="40px"> */}
      <div
        className={`project-card-div ${
          isDashboard ? "tableau-project-card-div" : ""
        }`}
        key={repo.id}
        style={{
          backgroundColor: theme.projectCard,
          // ":hover": { boxShadow: `${theme.imageDark} 0 2px 15px` },
          // ...styles,
          height: isDesktop ? repo.height : repo.phoneHeight,
        }}
      >
        <div className="repo-name-div">
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
        {isDashboard && (
          <div className="watch-on-desktop">
            <p
              style={{
                color: theme.text,
                fontSize: "0.8em",
                textAlign: "left",
              }}
            >
              (Watch on desktop for better view)
            </p>
          </div>
        )}
        {isDashboard ? (
          getDashboard()
        ) : (
          <p className="repo-description" style={{ color: theme.text }}>
            {typeof repo.description === "string"
              ? repo.description
              : getDescriptionList()}
          </p>
        )}
        {!isDashboard && (
          <div className="flexDiv">
            <div className="repo-details Leftitem">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <div className="repo-details Rightitem">
              <ProjectLinks logos={repo.links} />
            </div>
          </div>
        )}
      </div>
      {/* </Fade> */}
    </div>
  );
}
