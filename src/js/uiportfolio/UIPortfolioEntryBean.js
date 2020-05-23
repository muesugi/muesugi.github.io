import React from "react";
import { Link, NavLink } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";

import { IMAGE_DIR_PREFIX } from "../helpers/images";

const UIPortfolioEntryBean = ({
  image,
  width,
  height,
  title,
  subtitle,
  codeLink,
  siteLink,
  description,
  children,
}) => (
  <div className="ui-portfolio-full">
    <MainNavigation uiPortfolio={true} />
    <div className="portfolio-content">
      <div className="portfolio-img-holder">
        <img
          className="portfolio-img"
          src={image}
          width={width ? width : "50%"}
          height={height ? height : "auto"}
        />
      </div>
      <div className="portfolio-title">{title}</div>
      <div className="portfolio-subtitle">{subtitle}</div>
      <span className="portfolio-links">
        {codeLink && (
          <a className="openPrevent" target="_blank" href={codeLink}>
            code
          </a>
        )}
        {siteLink && codeLink && <br />}
        {siteLink && (
          <a className="openPrevent" target="_blank" href={siteLink}>
            site
          </a>
        )}
      </span>

      <div className="portfolio-description">{description}</div>
      <div className="portfolio-more">{children}</div>
    </div>
    <MainFooter back="resume" next="contact" />
  </div>
);

export default UIPortfolioEntryBean;
