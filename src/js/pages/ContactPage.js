import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import ProfileImage from '../components/ProfileImage';
import MainNavigation from '../components/MainNavigation';

export default class ContactPage extends React.Component {
  render(){
    return (
      <div className="contact-page">
        <MainNavigation />
        <div className="content">
          {/* <div>Keep in touch!</div> */}
          <img src={require('../../img/doggo.jpg')} width="25%" />
          <div className="contact-mediums">
          <div><a href="mailto:moie_uesugi@brown.edu">EMAIL // moie_uesugi@brown.edu</a></div>
          <div><a href="mailto:moie_uesugi@brown.edu">LINKEDIN // moieu</a></div>
          <div><a href="mailto:moie_uesugi@brown.edu">GITHUB // muesugi</a></div>
          <div><a href="mailto:moie_uesugi@brown.edu">PHONE // 718.974.7118</a></div>
          </div>
        </div>
      </div>
    );
  }
}
