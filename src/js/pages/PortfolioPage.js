import React from 'react';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import PortfolioContent from '../datalayers/PortfolioContent';
import SkillFilter from '../components/portfolio/SkillFilter';

export default class PortfolioPage extends React.Component {
  constructor(props){
    super(props);

    const paramSkill = this.props.match.params.skill;

    this.state = Object.assign({
      filterSkill: (paramSkill) ? decodeURIComponent(paramSkill) : ""
    });
  }
  onFilterSkillChange(newValue){
    if (!newValue){
      history.pushState(null, null, '#/portfolio/');
      this.setState({filterSkill: ""});
    } else {
      history.pushState(null, null, '#/portfolio/'+encodeURIComponent(newValue));
      this.setState({filterSkill: newValue});
    }
  }
  render(){
    const possibleSkills = [];
    require('json-loader!../../data/cs-skills.json').map((skillList) => {
      skillList.skills.map((skill) => {
        if (skill.name.length > 0 && skill.link_portfolio)
          possibleSkills.push(skill);
      });
    });

    return (
      <div>
        <MainNavigation />
        <div className="skill-filter-container">
          <SkillFilter skills={possibleSkills}
            filterSkill={this.state.filterSkill}
            onChange={this.onFilterSkillChange.bind(this)} />
        </div>

        <PortfolioContent filterSkill={this.state.filterSkill}
          onFilter={this.onFilterSkillChange.bind(this)}/>

        <MainFooter back="resume" next="contact"/>
      </div>
    );
  }
}
