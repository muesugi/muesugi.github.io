import React from 'react';
import ProfileImage from '../ProfileImage';

export default class LandingContent extends React.Component {
  render(){
    return (
      <div className="landing-content animated zoomIn">
        <ProfileImage className="profile-image"/>
        <div className="profile">
          <div className="name">Moie Uesugi</div>
          <div className="about-item">Computer Science and Comparative Literature Student at Brown University</div>
          <div className="about-item">Born and bred New Yorker and Japanese-American</div>
          <div className="about-item">Pronounces her name like <a href="/">this</a></div>
        </div>
      </div>
    );
  }
}
