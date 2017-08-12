import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import {Link, NavLink} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default class LandingPage extends React.Component {
  render(){
    return (
      <div className="landing-page">
        <div id="hamburger-container">
          <Menu right width="250">
            <Link to='/' className="active">about</Link>
            <NavLink to='/resume'>resume</NavLink>
            <NavLink to='/portfolio'>portfolio</NavLink>
            <NavLink to='/contact'>contact</NavLink>
          </Menu>
        </div>
        <LandingContent />
        <LandingNavigation />
      </div>
    );
  }
}
