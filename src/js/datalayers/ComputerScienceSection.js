import React from "react";
import ResumeSection from "../components/resume/ResumeSection";

const ComputerScienceSection = () => (
  <ResumeSection
    title="Me, Technically"
    experienceTitle="Professional Experience"
    timelineData={require("../../data/cs-timeline.json")}
    skillsTitle="Relevant Skills"
    skillsDescription="Click the highlighted skills below to see relevant portfolio projects."
    skillsData={require("../../data/cs-skills.json")}
  />
);

export default ComputerScienceSection;
