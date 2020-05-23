import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IMAGE_DIR_PREFIX } from "../helpers/images";
import { DEFAULT_SELECTED_SKILL, SkillsContext } from "../helpers/portfolio";

const UIProjectSummary = ({
  date,
  id,
  image,
  width,
  height,
  title,
  subtitle,
  skills,
  internalLink,
}) => {
  const { selectedSkill, onFilterChange } = React.useContext(SkillsContext);

  // The portfolio entry should be visible if there is no current filter
  // or one of the portfolio entry's skills matches the filtered skill.
  const isVisible =
    selectedSkill === DEFAULT_SELECTED_SKILL ||
    (skills && skills.includes(selectedSkill));

  if (!isVisible) return null;

  return (
    <Link to={internalLink} className="ui-portfolio-summary">
      <img
        className="portfolio-img"
        src={IMAGE_DIR_PREFIX + image}
        width={width ? width : "50%"}
        height={height ? height : "auto"}
      />
      <div className="portfolio-title">{title}</div>
      <div className="portfolio-subtitle">{subtitle}</div>
      <div className="portfolio-skills-container">
        Skills used:
        {skills.map((skill, i) => {
          return (
            <span
              key={i}
              className="portfolio-skill openPrevent"
              onClick={() => onFilterChange(skill)}
            >
              {skill}
            </span>
          );
        })}
      </div>
      {date && <div className="portfolio-date">{date}</div>}
    </Link>
  );
};

export default UIProjectSummary;
