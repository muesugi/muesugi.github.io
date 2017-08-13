import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProfileImage from './ProfileImage';
import { slide as Menu } from 'react-burger-menu';


export default class MainNavigation extends React.Component {

  render(){
    return (
      <div className="main-nav">
        <Link to='/' className="nav-left desktop-nav">
          <ProfileImage width="50" />
          <span className="name">Moie Uesugi</span>
        </Link>
        <nav className="nav-right desktop-nav">
          <Link to='/'>about</Link>
          <NavLink to='/resume'>resume</NavLink>
          <NavLink to='/portfolio'>portfolio</NavLink>
          <NavLink to='/contact'>contact</NavLink>
        </nav>
        <div id="hamburger-container">
          <Menu right width="250px">
            <Link to='/'>about</Link>
            <NavLink to='/resume'>resume</NavLink>
            <NavLink to='/portfolio'>portfolio</NavLink>
            <NavLink to='/contact'>contact</NavLink>
          </Menu>
        </div>
      </div>
    );
  }
}
