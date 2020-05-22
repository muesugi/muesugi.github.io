import React from 'react';
import queryString from 'query-string';
import scrollToComponent from 'react-scroll-to-component';

import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import ProfileImage from '../components/ProfileImage';
import UIPortfolioContent from '../uiportfolio/UIPortfolioContent';
import SkillFilter from '../components/portfolio/SkillFilter';

export default class UIPortfolioPage extends React.Component {
  constructor(props){
    super(props);
    window.scrollTo(0,0);

    const params = queryString.parse(props.location.search);
    this.state = Object.assign({
      filterSkill: (params.filter) ? decodeURIComponent(params.filter) : "",
      anchor: (params.anchor) ? decodeURIComponent(params.anchor) : "",
    });
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }
  scrollToAnchor(){
    if (this.state.anchor){
      // console.log(document.getElementById(this.state.anchor));
      scrollToComponent(document.getElementById(this.state.anchor),{
        align: 'top',
        duration: 100
      });
    }
  }
  componentDidMount(){
    // console.log(document.getElementById(this.state.anchor));
    // window.scrollTo(0, 0);
    this.scrollToAnchor();
  }
  componentWillReceiveProps(newProps){
    const newParams = queryString.parse(newProps.location.search);
    console.log(newParams);
    if (newParams.filter && newParams.filter != this.props.filter){
      this.setState({filterSkill: (newParams.filter) ? decodeURIComponent(newParams.filter) : ""});
    }
    if (newParams.anchor && newParams.anchor != this.props.anchor){
      this.setState({anchor: (newParams.anchor) ? decodeURIComponent(newParams.anchor) : ""});
    }
    this.scrollToAnchor();
  }
  onFilterSkillChange(newValue){
    if (!newValue){
      history.pushState(null, null, '#/ui-portfolio/');
      this.setState({filterSkill: ""});
    } else {
      history.pushState(null, null, '#/ui-portfolio/?filter='+encodeURIComponent(newValue));
      this.setState({filterSkill: newValue});
    }
     window.scrollTo(0, 0);
  }
  render(){
    const possibleSkills = [];
    require('../../data/ui-cs-skills.json').map((skillList) => {
      skillList.skills.map((skill) => {
        if (skill.name.length > 0 && skill.link_portfolio)
          possibleSkills.push(skill);
      });
    });

    return (
      <div>
        <MainNavigation uiPortfolio={true}/>
        <div className="skill-filter-container">
          <SkillFilter skills={possibleSkills}
            filterSkill={this.state.filterSkill}
            onChange={this.onFilterSkillChange.bind(this)} />
        </div>

        <UIPortfolioContent filterSkill={this.state.filterSkill}
          onFilter={this.onFilterSkillChange.bind(this)}/>

        <MainFooter back="resume" next="contact"/>
      </div>
    );
  }
}