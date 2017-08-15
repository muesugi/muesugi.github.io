import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import ProfileImage from '../components/ProfileImage';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';


export default class ContactPage extends React.Component {
  render(){
    return (
      <div className="contact-page">
        <MainNavigation />
        <div className="content">
          <h4>Get in touch!</h4>
        {  /*<img src={require('../../assets/doggo.jpg')} />*/}
          <div className="contact-mediums">
          <div><a href="mailto:moie_uesugi@brown.edu">EMAIL // moie_uesugi@brown.edu</a></div>
          <div><a target="_blank" href="https://www.linkedin.com/in/moieu/">LINKEDIN // moieu</a></div>
          <div><a target="_blank" href="https://github.com/muesugi">GITHUB // muesugi</a></div>
          </div>
        </div>
        <MainFooter back="portfolio"/>
      </div>
    );
  }
}
