import React from "react";
import ResumeSection from "../components/resume/ResumeSection";

const NonTechnicalSection = () => (
  <ResumeSection
    title="Me, Literarily (Significant Non-Technical Experiences)"
    experienceTitle="Leadership and Community Experience"
    timelineData={require("../../data/noncs-timeline.json")}
    skillsTitle="Relevant Skills"
    skillsData={require("../../data/noncs-skills.json")}
  />
);

export default NonTechnicalSection;
