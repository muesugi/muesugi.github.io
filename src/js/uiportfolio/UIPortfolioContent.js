import React from "react";
import ReactJsonSchema from "react-json-schema";

import UIProjectSummary from "./UIProjectSummary";

//content for portfolio entries
import JsonImageLoader from "../components/JsonImageLoader";
import JsonLinkLoader from "../components/JsonLinkLoader";
import ProfileImage from "../components/ProfileImage";

const projects = require("../../data/uiportfolio-projects.json").projects;
const projectIdToContent = {};

const view = new ReactJsonSchema();
view.setComponentMap({ ProfileImage, JsonLinkLoader, JsonImageLoader });
projects.forEach((project) => {
  projectIdToContent[project.id] = view.parseSchema(project.content);
});

const UIPortfolioContent = () => {
  const extras = new Array(
    projects.length % 2 == 0 ? 0 : 2 - (projects.length % 2)
  ).fill(undefined);

  return (
    <div className="uiprojects-list">
      {projects.map((project, i) => (
        <UIProjectSummary
          key={i}
          title={project.title}
          id={project.id}
          date={project.date}
          internalLink={project.internalLink ? project.internalLink : ""}
          siteLink={project.siteLink}
          codeLink={project.codeLink}
          subtitle={project.subtitle}
          description={project.description}
          skills={project.skills}
          image={project.image}
        >
          {projectIdToContent[project.id]}
        </UIProjectSummary>
      ))}
      {extras.map((a, i) => {
        return <div className="ui-portfolio-summary empty" key={i}></div>;
      })}
    </div>
  );
};

export default UIPortfolioContent;
