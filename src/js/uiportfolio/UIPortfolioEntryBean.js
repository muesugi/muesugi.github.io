import React from "react";
import { Link, NavLink } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

export default class UIPortfolioEntryBean extends React.Component {
  // <Link to="/ui-portfolio" className="back-to-portfolio">|| Back to Portfolio ||</Link>
  render() {
    // const image = require('../../assets/' + this.props.image);
    return (
      <div className="ui-portfolio-full">
        <MainNavigation uiPortfolio={true} />
        <div className="portfolio-content">
          <div className="portfolio-img-holder">
            <img
              className="portfolio-img"
              src={"../../assets/" + this.props.image}
              width={this.props.width ? this.props.width : "50%"}
              height={this.props.height ? this.props.height : "auto"}
            />
          </div>
          <div className="portfolio-title">{this.props.title}</div>
          <div className="portfolio-subtitle">{this.props.subtitle}</div>
          <span className="portfolio-links">
            {this.props.codeLink ? (
              <a
                className="openPrevent"
                target="_blank"
                href={this.props.codeLink}
              >
                code
              </a>
            ) : (
              ""
            )}
            {this.props.siteLink && this.props.codeLink ? <br /> : ""}
            {this.props.siteLink ? (
              <a
                className="openPrevent"
                target="_blank"
                href={this.props.siteLink}
              >
                site
              </a>
            ) : (
              ""
            )}
          </span>

          <div className="portfolio-description">{this.props.description}</div>
          <div className="portfolio-more">{this.props.children}</div>
        </div>
        <MainFooter back="resume" next="contact" />
      </div>
    );
  }
}
