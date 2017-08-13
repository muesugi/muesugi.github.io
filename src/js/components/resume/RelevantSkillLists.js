import React from 'react';
import RelevantSkillList from './RelevantSkillList';

export default class RelevantSkillLists extends React.Component {
  render(){
    return (
      <div className="relevant-skill-lists resume-subsection">
        <div className="resume-subheader">Relevant Skills</div>
        <div className="relevant-skill-list-container">
          {this.props.data.map((list, i) => {
           return ( <RelevantSkillList key={i} title={list.title} skills={list.skills} />);
          })}
        </div>
      </div>
    );
  }
}
