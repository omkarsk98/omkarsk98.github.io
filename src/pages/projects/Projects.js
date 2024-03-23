import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Helmet } from "react-helmet";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import LightTheme from "../../theme";

function Projects(props) {
  const { role = "sde" } = useParams();
  return (
    <div className="projects-main">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Header theme={LightTheme} />
      <div className="basic-projects">
        {/* <Fade bottom duration={2000} distance="40px"> */}
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <ProjectsImg theme={LightTheme} />
          </div>
          <div className="projects-heading-text-div">
            <h1
              className="projects-heading-text"
              style={{ color: LightTheme.text }}
            >
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: LightTheme.secondaryText }}
            >
              {projectsHeader["description"]}
            </p>
          </div>
        </div>
        {/* </Fade> */}
      </div>

      <div className={`repo-cards-div-main two-col-grid`}>
        {projects[role].data.map((repo) => {
          return <ProjectCard repo={repo} theme={LightTheme} key={repo.name} />;
        })}
      </div>
      {role === "ds" ? (
        <div>
          <h1
            className="projects-heading-text"
            style={{ color: LightTheme.text }}
          >
            Tableau Dashboards
          </h1>
          <div className="tableau-dashboard-div-col">
            {projects.tableau.data.map((repo) => {
              return (
                <ProjectCard
                  repo={repo}
                  theme={LightTheme}
                  isDashboard={true}
                  key={repo.name}
                />
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
        style={{ color: LightTheme.accentColor }}
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
      <Footer theme={LightTheme} />
    </div>
  );
}

export default Projects;
