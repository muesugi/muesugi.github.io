import React from "react";
import ReactJsonSchema from "react-json-schema";

import PortfolioEntry from "../components/portfolio/PortfolioEntry";

//content for portfolio entries
import JsonImageLoader from "../components/JsonImageLoader";
import JsonLinkLoader from "../components/JsonLinkLoader";
import ProfileImage from "../components/ProfileImage";

const projects = require("../../data/portfolio-projects.json").projects;
const projectIdToContent = {};

const view = new ReactJsonSchema();
view.setComponentMap({ ProfileImage, JsonLinkLoader, JsonImageLoader });
projects.forEach((project) => {
  projectIdToContent[project.id] = view.parseSchema(project.content);
});

const PortfolioContent = () => (
  <React.Fragment>
    {projects.map((project) => (
      <PortfolioEntry
        key={project.id}
        title={project.title}
        id={project.id}
        siteLink={project.siteLink}
        codeLink={project.codeLink}
        subtitle={project.subtitle}
        description={project.description}
        skills={project.skills}
        image={project.image}
      >
        {projectIdToContent[project.id]}
      </PortfolioEntry>
    ))}
  </React.Fragment>
);

export default PortfolioContent;
