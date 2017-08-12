import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProfileImage from './ProfileImage';

export default class MainNavigation extends React.Component {
  render(){
    return (
      <div className="main-nav">
        <Link to='/' className="nav-left">
          <ProfileImage width="50" />
          <span className="name">Moie Uesugi</span>
        </Link>
        <nav className="nav-right">
          <Link to='/'>about</Link>
          <NavLink to='/resume'>resume</NavLink>
          <NavLink to='/portfolio'>portfolio</NavLink>
          <NavLink to='/contact'>contact</NavLink>
        </nav>
      </div>
    );
  }
}
