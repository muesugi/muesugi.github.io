import React from "react";
import queryString from "query-string";
import scrollToComponent from "react-scroll-to-component";

import MainNavigation from "../components/MainNavigation";
import MainFooter from "../components/MainFooter";
import ProfileImage from "../components/ProfileImage";
import PortfolioContent from "../datalayers/PortfolioContent";
import SkillFilter from "../components/portfolio/SkillFilter";

import { DEFAULT_SELECTED_SKILL, SkillsContext } from "../helpers/portfolio";

const possibleSkills = [];
require("../../data/cs-skills.json").map((skillList) => {
  skillList.skills.map((skill, i) => {
    if (skill.name.length > 0 && skill.link_portfolio)
      possibleSkills.push({
        ...skill,
        id: possibleSkills.length,
      });
  });
});

const PortfolioPage = ({ location }) => {
  const [scrollAnchor, setScrollAnchor] = React.useState(null);
  const [filterSkill, setFilterSkill] = React.useState(DEFAULT_SELECTED_SKILL);

  React.useEffect(() => {
    const params = queryString.parse(location.search);
    if (params.anchor) {
      scrollToComponent(document.getElementById(params.anchor), {
        align: "top",
        duration: 100,
      });
    }

    if (params.filter) {
      setFilterSkill(decodeURIComponent(params.filter));
    }
  }, [location]);

  const onFilterSkillChange = (newSkill) => {
    setFilterSkill(newSkill);
    if (newSkill === DEFAULT_SELECTED_SKILL) {
      history.pushState(null, null, "#/portfolio/");
    } else {
      history.pushState(
        null,
        null,
        "#/portfolio/?filter=" + encodeURIComponent(newSkill)
      );
    }
    window.scrollTo(0, 0);
  };

  const skillsContextValue = {
    selectedSkill: filterSkill,
    skillsList: possibleSkills,
    onFilterChange: onFilterSkillChange,
  };

  return (
    <SkillsContext.Provider value={skillsContextValue}>
      <MainNavigation />

      <div className="skill-filter-container">
        <SkillFilter />
      </div>

      <PortfolioContent />

      <MainFooter back="resume" next="contact" />
    </SkillsContext.Provider>
  );
};

export default PortfolioPage;
