import React from 'react';
import ResumeSection from '../components/resume/ResumeSection';

export default class NonTechnicalSection extends React.Component {
  render(){
    return (
      <ResumeSection title="Me, Literarily (Significant Non-Technical Experiences)"
        experienceTitle="Leadership and Community Experience"
        timelineData={require('json-loader!../../data/noncs-timeline.json')}
        skillsTitle="Relevant Skills"
        skillsData={require('json-loader!../../data/noncs-skills.json')} />
    );
  }
}
