import React from "react";

export const DEFAULT_SELECTED_SKILL = "default";

export const SkillsContext = React.createContext({
  isDefaultSelected: true,
  selectedSkill: DEFAULT_SELECTED_SKILL,
  skillsList: [],
  onFilterChange: (skill) => {},
});
