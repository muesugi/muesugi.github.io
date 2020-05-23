import React from "react";
import ProfileImage from "../ProfileImage";

import pronounceAudio from "../../../assets/pronounce.mp3";
import audioIcon from "../../../assets/audio-icon.png";

export default class LandingContent extends React.Component {
  constructor(props) {
    super(props);

    //create new audio and add ended callback
    const pronounceMe = new Audio(pronounceAudio);
    pronounceMe.addEventListener("ended", () => {
      this.setState({
        pronounce: false,
      });
    });

    this.state = Object.assign({
      pronounce: false,
      audio: pronounceMe,
      showAudioIcon: false,
    });

    this.showAudioIcon = this.showAudioIcon.bind(this);
    this.hideAudioIcon = this.hideAudioIcon.bind(this);
  }

  togglePronounce(ev) {
    ev.preventDefault();

    this.setState({ pronounce: !this.state.pronounce }, function () {
      if (this.state.pronounce) {
        console.log(this.state.audio);
        this.state.audio.play();
      } else {
        this.state.audio.pause();
        this.state.audio.currentTime = 0;
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
              className={`${this.state.pronounce ? "to-stop" : "to-play"}`}
              onClick={this.togglePronounce.bind(this)}
              onMouseEnter={this.showAudioIcon}
              onMouseLeave={this.hideAudioIcon}
            >
              {!this.state.pronounce ? "this" : "Moh-yay OOH-eh-SOO-gee"}
            </a>
            {(this.state.showAudioIcon || this.state.pronounce) && (
              <img id="audio-icon" src={audioIcon} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
