import React from "react";
import { DEFAULT_SELECTED_SKILL, SkillsContext } from "../../helpers/portfolio";

const SkillFilter = () => {
  const { selectedSkill, skillsList, onFilterChange } = React.useContext(
    SkillsContext
  );

  return (
    <div className="skill-filter">
      <select
        value={selectedSkill}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value={DEFAULT_SELECTED_SKILL}>Filter by Skill</option>
        {skillsList.map((skill) => (
          <option key={skill.id} value={skill.name}>
            {skill.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SkillFilter;
