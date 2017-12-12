import React from 'react';
import ReactJsonSchema from 'react-json-schema';

import UIProjectSummary from './UIProjectSummary';

//content for portfolio entries
import JsonImageLoader from '../components/JsonImageLoader';
import JsonLinkLoader from '../components/JsonLinkLoader';
import ProfileImage from '../components/ProfileImage';

export default class UIPortfolioContent extends React.Component {
  render(){
    const projects =
      require('json-loader!../../data/uiportfolio-projects.json').projects;
    const view = new ReactJsonSchema();
    view.setComponentMap({ ProfileImage , JsonLinkLoader, JsonImageLoader});

    const extras = new Array((projects.length % 3 == 0) ? 0 : 3 - (projects.length % 3)).fill(undefined)
    console.log(extras.length)

    return (
      <div className="uiprojects-list">
        {projects.map((proj, i) => {
          if ((this.props.filterSkill == "") || 
            (typeof proj.skills != "undefined" && proj.skills != null
            && proj.skills.length > 0
            && proj.skills.indexOf(this.props.filterSkill) != -1)
            ){
          return (<UIProjectSummary key={i} title={proj.title} id={proj.id}
            date={proj.date}
            internalLink={proj.internalLink ? proj.internalLink : ""}
            siteLink={proj.siteLink}
            codeLink={proj.codeLink}
            subtitle={proj.subtitle} description={proj.description}
            skills={proj.skills} image={proj.image}
            filterSkill={this.props.filterSkill} onFilter={this.props.onFilter}>
            {view.parseSchema(proj.content)}
          </UIProjectSummary>);
        }})}
        {extras.map((a, i) => {
          console.log(i)
            return (<div className="ui-portfolio-summary empty" key={i}></div>);
          } 
        )}
      </div>
    );
  }
}
