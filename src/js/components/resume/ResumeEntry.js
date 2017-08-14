import React from 'react';
import {Link} from 'react-router-dom';

export default class ResumeEntry extends React.Component {
  render(){
    return (
      <div className={
        `resume-entry
        ${this.props.selected ? "selected " : ""}
        ${this.props.description ? "has-description" : "no-description"}`}>
        <div className="resume-date">{this.props.date}</div>
        <div className={"resume-main"}>
          <div className="title">{this.props.title}</div>
          <div className="subtitle">{this.props.subtitle}</div>
          <div className="location">{this.props.location}</div>
          {(this.props.portfolioId) ?
            <Link to={"/portfolio?anchor="+this.props.portfolioId} className="resume-portfolio-link">view in porfolio ></Link> :
            ""}
        </div>
        <div className="resume-description">
          <ul>
          {(this.props.description) ?
            this.props.description.map(function(point, key){
              return (<li key={key}>{point}</li>);
            }) : ""}
          </ul>
        </div>
      </div>
    );
  }
}
