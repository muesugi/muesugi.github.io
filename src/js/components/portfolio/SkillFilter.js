import React from "react";
export default class SkillFilter extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({showMore: false, value: props.filterSkill});
  }
  onChange(ev){
    if (ev.target.value == "-1") this.props.onChange(null);
    else this.props.onChange(ev.target.value);
  }
  render(){
    return (
      <div className="skill-filter">
      <select value={this.props.filterSkill || -1}
        onChange={this.onChange.bind(this)}>
        <option value={"-1"}>Filter by Skill</option>
        {this.props.skills.map((skill, index) => {
          return (<option key={index} value={skill.name}>{skill.name}</option>);
        })}
      </select>
      </div>
    )
  }
}
