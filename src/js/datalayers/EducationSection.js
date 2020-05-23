import React from "react";
import ResumeEntry from "../components/resume/ResumeEntry";

export default class EducationSection extends React.Component {
  render() {
    return (
      <section>
        <div className="resume-header">Education</div>
        <ResumeEntry
          date="Fall 2015 - Spring 2019 (Projected)"
          title="Brown University"
          subtitle="Bachelor of Arts in Computer Science and Comparative Literature"
          location="Providence, RI"
        />
      </section>
    );
  }
}
