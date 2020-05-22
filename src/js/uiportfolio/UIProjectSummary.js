import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default class UIProjectSummary extends React.Component {
  render(){
    const image = require('../../assets/' + this.props.image);
    return (
      <React.Fragment>
        <div className="shortbio">Moie is a Computer Science and Comparative Literature student who likes learning and creating at the intersection of technology and culture.<br/>This is a Design\/UI portfolio that she created in Fall 2017 for her User Interfaces and Experiences class.</div>
        <Link to={this.props.internalLink} className="ui-portfolio-summary">
           <img className="portfolio-img" src={image}
              width={(this.props.width) ? this.props.width : "50%"}
              height={(this.props.height) ? this.props.height : "auto"}/>
            <div className="portfolio-title">{this.props.title}</div>
            <div className="portfolio-subtitle">{this.props.subtitle}</div>
            <div className="portfolio-skills-container">Skills used:
                {this.props.skills.map((skill, i) => {
                  return (
                    <span key={i} className="portfolio-skill openPrevent"
                      onClick={this.props.onFilter.bind(this, skill)}>{skill}</span>
                  );
                })}
              </div>
           {(this.props.date) ? <div className="portfolio-date">{this.props.date}</div> : ""}
      </Link>
      </React.Fragment>
    );
  }
}
