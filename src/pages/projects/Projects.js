import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Redirect, Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

const customStyles = {
  ds: "two-col-grid",
  tableau: "tableau-dashboard-div-col",
};

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentColor}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
  });
  // get :role from url params
  const { role } = props.match.params;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        {/* <Fade bottom duration={2000} distance="40px"> */}
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader["description"]}
            </p>
          </div>
        </div>
        {/* </Fade> */}
      </div>

      <div
        className={`repo-cards-div-main ${
          role === "ds" ? "two-col-grid" : null
        }`}
      >
        {projects[role].data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      {role === "ds" ? (
        <div>
          <h1 className="projects-heading-text" style={{ color: theme.text }}>
            Tableau Dashboards
          </h1>
          <div className="tableau-dashboard-div-col">
            {projects.tableau.data.map((repo) => {
              return (
                <ProjectCard repo={repo} theme={theme} isDashboard={true} />
              );
            })}
          </div>
        </div>
      ) : null}
      <br />
      <br />
      <br />
      <Link
        to={role === "sde" ? "/ds/projects" : "/sde/projects"}
        className="other-projects"
      >{`${role === "ds" ? "Software" : "Data Science"} Projects`}</Link>
      {/* <span
        // {...styles}
        className="general-btn"
        onClick={() => {<Redirect to={`/${role === "ds" ? "sde" : "ds"}/projects`} />}}
      >
        {`${role === "ds" ? "Software" : "Data Science"} Projects`}
      </span> */}
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
