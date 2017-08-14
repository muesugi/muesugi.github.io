import React from 'react';
import ReactJsonSchema from 'react-json-schema';

import PortfolioEntry from '../components/portfolio/PortfolioEntry';

//content for portfolio entries
import JsonImageLoader from '../components/JsonImageLoader';
import JsonLinkLoader from '../components/JsonLinkLoader';
import ProfileImage from '../components/ProfileImage';

export default class PortfolioContent extends React.Component {
  render(){
    const projects =
      require('json-loader!../../data/portfolio-projects.json').projects;
    const view = new ReactJsonSchema();
    view.setComponentMap({ ProfileImage , JsonLinkLoader, JsonImageLoader});

    return (
      <div>
        {require('json-loader!../../data/portfolio-projects.json').projects.map((proj, i) => {
          return (<PortfolioEntry key={i} title={proj.title}
            siteLink={proj.siteLink}
            codeLink={proj.codeLink}
            subtitle={proj.subtitle} description={proj.description}
            skills={proj.skills} image={proj.image}
            filterSkill={this.props.filterSkill} onFilter={this.props.onFilter}>
            {view.parseSchema(proj.content)}
          </PortfolioEntry>);
        })}
      </div>
    );
  }
}
