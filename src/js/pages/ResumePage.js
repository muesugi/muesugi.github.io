import React from 'react';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import HoverableIcon from '../components/HoverableIcon';
import EducationSection from '../datalayers/EducationSection';
import ComputerScienceSection from '../datalayers/ComputerScienceSection';
import NonTechnicalSection from '../datalayers/NonTechnicalSection';
// import {SectionsContainer, ScrollToTopOnMount, Section} from 'react-fullpage';

//icon images
import MailIcon from '../../img/icon-mail.png';
import LinkedInIcon from '../../img/icon-linkedin.png';
import GithubIcon from '../../img/icon-github.png';
import DownloadIcon from '../../img/icon-download.png';

export default class ResumePage extends React.Component {
  render(){
    return (
      <div className="resume-page">
        <MainNavigation />

        <div className="icon-set">
          <HoverableIcon icon={MailIcon} text="Send me an email!"
            link="mailto:moie_uesugi@brown.edu"/>
          <HoverableIcon icon={LinkedInIcon} text="Connect with me!"
            link="https://www.linkedin.com/in/moieu/"/>
          <HoverableIcon icon={GithubIcon} text="Check out my GitHub!"
            link="https://github.com/muesugi"/>
          <a href="download" className="float-right">
            <span className="icon-caption">download</span>
            <img className="icon" src={DownloadIcon} />
          </a>
        </div>
        <EducationSection />
        <ComputerScienceSection />
        <NonTechnicalSection />


      <MainFooter next="portfolio"/>
      </div>
    );
  }
}
