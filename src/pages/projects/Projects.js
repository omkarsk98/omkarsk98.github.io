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
      </div>

      <div
        className={
          role === `tableau`
            ? `tableau-dashboard-div-col`
            : `repo-cards-div-main two-col-grid`
        }
      >
        {projects[role].data.map((repo) => {
          return (
            <ProjectCard
              repo={repo}
              theme={LightTheme}
              key={repo.name}
              isDashboard={role === `tableau`}
            />
          );
        })}
      </div>
      <div className="other-projects-list">
        {Object.entries(projects)
          .filter(([key, _]) => key !== role)
          .map(([key, value]) => {
            return (
              <Link
                to={`/${key}/projects`}
                className="other-projects"
                style={{ color: LightTheme.accentColor }}
              >
                {value.title}
              </Link>
            );
          })}
      </div>
      <Footer theme={LightTheme} />
    </div>
  );
}

export default Projects;
