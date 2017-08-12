import React from 'react';
import PortfolioEntry from '../components/portfolio/PortfolioEntry';

export default class PortfolioContent extends React.Component {
  render(){
    let projects =
      require('json-loader!../../data/portfolio-projects.json').projects;
    return (
      <div>
        {require('json-loader!../../data/portfolio-projects.json').projects.map((proj, i) => {
          return (<PortfolioEntry key={i} title={proj.title}
            subtitle={proj.subtitle} description={proj.description}
            skills={proj.skills} image={proj.image}
            filterSkill={this.props.filterSkill} onFilter={this.props.onFilter}>
            <div dangerouslySetInnerHTML={{__html: proj.content}} />
          </PortfolioEntry>);
        })}
      </div>
    );
  }
}
