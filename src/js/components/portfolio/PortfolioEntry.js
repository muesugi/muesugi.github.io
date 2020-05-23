import React from "react";
import { IMAGE_DIR_PREFIX } from "../../helpers/images";
import { DEFAULT_SELECTED_SKILL, SkillsContext } from "../../helpers/portfolio";

const PortfolioEntry = ({
  id,
  image,
  width,
  height,
  title,
  subtitle,
  description,
  skills,
  codeLink,
  siteLink,
  children,
}) => {
  const [showMore, setShowMore] = React.useState(false);
  const { selectedSkill, onFilterChange } = React.useContext(SkillsContext);

  const handleClickSummary = (event) => {
    if (!event.target.classList.contains("openPrevent")) {
      setShowMore(!showMore);
    }
  };

  // The portfolio entry should be visible if there is no current filter
  // or one of the portfolio entry's skills matches the filtered skill.
  const isVisible =
    selectedSkill === DEFAULT_SELECTED_SKILL ||
    (skills && skills.includes(selectedSkill));

  if (!isVisible) return null;

  return (
    <div
      id={id}
      className={`portfolio-entry ${showMore ? "expanded" : "closed"}`}
    >
      <div className="portfolio-summary" onClick={(e) => handleClickSummary(e)}>
        <img
          className="portfolio-img"
          src={IMAGE_DIR_PREFIX + image}
          width={width ? width : "50%"}
          height={height ? height : "auto"}
        />
        <div className="portfolio-profile">
          <div
            className="portfolio-title"
            onClick={(e) => handleClickSummary(e)}
          >
            {title}
          </div>
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
          <div className="portfolio-skills-container">
            Skills used:
            {skills.map((skill, i) => {
              return (
                <span
                  key={i}
                  className="portfolio-skill openPrevent"
                  onClick={() => {
                    onFilterChange(skill);
                  }}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
        <div className="view-more" onClick={(e) => handleClickSummary(e)}>
          {!showMore ? "view more" : "hide details"}
        </div>
      </div>
      <div className={`portfolio-more ${!showMore && "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default PortfolioEntry;
