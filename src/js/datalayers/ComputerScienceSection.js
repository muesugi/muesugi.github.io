import React from 'react';
import ResumeSection from '../components/resume/ResumeSection';

export default class ComputerScienceSection extends React.Component {
  render(){
    return (
      <ResumeSection title="Me, Technically"
        experienceTitle="Professional Experience"
        timelineData={require('json-loader!../../data/cs-timeline.json')}
        // courseData={require('json-loader!../../data/cs-courses.json')}
        skillsData={require('json-loader!../../data/cs-skills.json')} />
    );
  }
}
