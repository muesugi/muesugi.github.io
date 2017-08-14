import React from "react";
export default class PortfolioEntry extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({showMore: false});
  }
  clickSummary(ev){
    if (!ev.target.classList.contains('openPrevent'))
      this.setState({showMore: !this.state.showMore});
  }
  render(){
    const image = require('../../../img/' + this.props.image);
    if ((this.props.filterSkill == "")
      || (typeof this.props.skills != "undefined"
          && this.props.skills != null
          && this.props.skills.length > 0
          && this.props.skills.indexOf(this.props.filterSkill) != -1)){
        return (
      <div id={this.props.id}
        className={`portfolio-entry ${(this.state.showMore) ? "expanded" : "closed"}`} >
        <div className="portfolio-summary" onClick={this.clickSummary.bind(this)}>
          <img className="portfolio-img" src={image}
            width={(this.props.width) ? this.props.width : "50%"}
            height={(this.props.height) ? this.props.height : "auto"}/>
          <div className="portfolio-profile">
            <div className="portfolio-title" onClick={this.clickSummary.bind(this)}>
            {this.props.title}
            </div>
            <span className="portfolio-links">
              {this.props.siteLink || this.props.codeLink ? "(" : ""}
              {this.props.codeLink ? <a className="openPrevent" target="_blank" href={this.props.codeLink}>code</a> : ""}
              {this.props.siteLink && this.props.codeLink ? "|" : ""}
              {this.props.siteLink ? <a className="openPrevent" target="_blank" href={this.props.siteLink}>site</a> : ""}
              {this.props.siteLink || this.props.codeLink ? ")" : ""}
            </span>

            <div className="portfolio-subtitle">{this.props.subtitle}</div>

            <div className="portfolio-description">{this.props.description}</div>
            <div className="portfolio-skills-container">Skills used:
              {this.props.skills.map((skill, i) => {
                return (
                  <span key={i} className="portfolio-skill openPrevent"
                    onClick={this.props.onFilter.bind(this, skill)}>{skill}</span>
                );
              })}
            </div>
          </div>
          <div className="view-more" onClick={this.clickSummary.bind(this)}>
            {(!this.state.showMore) ? "view more" : "hide details"}
          </div>
        </div>
        <div className={`portfolio-more
          ${(!this.state.showMore) ? "hidden": ""}`} >
          {this.props.children}
        </div>
      </div>);
    } else {
      return (null);
    }
  }
}
