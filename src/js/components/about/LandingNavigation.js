import React from 'react';
import {Link} from 'react-router-dom';
import ProfileImage from '../ProfileImage';

export default class LandingNavigation extends React.Component {
  render(){
    return (
      <div className="landing-menu animated zoomInDown">
        <nav>
          <Link className="landing-menu-item" to='/resume'>resume</Link>
          <Link className="landing-menu-item" to='/portfolio'>portfolio</Link>
          <Link className="landing-menu-item" to='/contact'>contact</Link>
        </nav>
      </div>
    );
  }
}
