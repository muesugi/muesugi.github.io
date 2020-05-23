import React from "react";
import ProfileImage from "../ProfileImage";

import audioIcon from "../../../assets/audio-icon.png";
import pronounceAudio from "../../../assets/pronounce.mp3";

export default class LandingContent extends React.Component {
  constructor(props) {
    super(props);

    this.pronounceMe = new Audio(pronounceAudio);
    this.pronounceMe.addEventListener("ended", () => {
      this.setState({
        isPronouncing: false,
      });
    });

    this.state = Object.assign({
      isPronouncing: false,
      showAudioIcon: false,
    });

    this.showAudioIcon = this.showAudioIcon.bind(this);
    this.hideAudioIcon = this.hideAudioIcon.bind(this);
  }

  togglePronounce(ev) {
    ev.preventDefault();

    this.setState({ isPronouncing: !this.state.isPronouncing }, function () {
      if (this.state.isPronouncing) {
        this.pronounceMe.play();
      } else {
        this.pronounceMe.pause();
        this.pronounceMe.currentTime = 0;
      }
    });
  }

  showAudioIcon() {
    this.setState({ showAudioIcon: true });
  }

  hideAudioIcon() {
    this.setState({ showAudioIcon: false });
  }

  render() {
    return (
      <div className="landing-content animated zoomIn">
        <ProfileImage className="profile-image" />
        <div className="profile">
          <div className="name">Moie Uesugi</div>
          <div className="about-item">
            Computer Science and Comparative Literature Student at Brown
            University
          </div>
          <div className="about-item">
            Born and bred New Yorker and Japanese-American
          </div>
          <div className="about-item">
            Pronounces her name like{" "}
            <a
              href="#"
              id="pronounce-me"
              className={`${this.state.isPronouncing ? "to-stop" : "to-play"}`}
              onClick={this.togglePronounce.bind(this)}
              onMouseEnter={this.showAudioIcon}
              onMouseLeave={this.hideAudioIcon}
            >
              {!this.state.isPronouncing ? "this" : "Moh-yay OOH-eh-SOO-gee"}
            </a>
            {(this.state.showAudioIcon || this.state.isPronouncing) && (
              <img id="audio-icon" src={audioIcon} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
