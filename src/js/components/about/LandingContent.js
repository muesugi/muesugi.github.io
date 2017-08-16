import React from 'react';
import ProfileImage from '../ProfileImage';

import pronounceAudio from '../../../assets/pronounce.mp3';

export default class LandingContent extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({
      pronounce: false,
      audio: new Audio(pronounceAudio)
    });
  }
  togglePronounce(ev){
    ev.preventDefault();

    this.setState({pronounce: !this.state.pronounce}, function(){
      if (this.state.pronounce) {
        this.state.audio.play();
      } else {
        this.state.audio.pause();
        this.state.audio.currentTime = 0;
      }
    });
  }
  render(){
    return (
      <div className="landing-content animated zoomIn">
        <ProfileImage className="profile-image"/>
        <div className="profile">
          <div className="name">Moie Uesugi</div>
          <div className="about-item">Computer Science and Comparative Literature Student at Brown University</div>
          <div className="about-item">Born and bred New Yorker and Japanese-American</div>
          <div className="about-item">Pronounces her name like <a href="#" id="pronounce-me"
            className={`${this.state.pronounce ? "to-stop" : "to-play"}`}
            onClick={this.togglePronounce.bind(this)}>
            {(!this.state.pronounce) ? "this" : "Moh-yay OOH-eh-SOO-gee"}</a>
          </div>
        </div>
      </div>
    );
  }
}
