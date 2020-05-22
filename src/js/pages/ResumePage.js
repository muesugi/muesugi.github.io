import React from 'react';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import HoverableIcon from '../components/HoverableIcon';
import EducationSection from '../datalayers/EducationSection';
import ComputerScienceSection from '../datalayers/ComputerScienceSection';
import NonTechnicalSection from '../datalayers/NonTechnicalSection';
import { IMAGE_DIR_PREFIX } from '../helpers/images';

//icon images
const mailIcon = IMAGE_DIR_PREFIX + 'icon-mail.png';
const linkedInIcon = IMAGE_DIR_PREFIX + 'icon-linkedin.png';
const githubIcon = IMAGE_DIR_PREFIX + 'icon-github.png';
const downloadIcon = IMAGE_DIR_PREFIX + 'icon-download.png';
const resumePdf = IMAGE_DIR_PREFIX + 'moie_uesugi-resume.pdf';

export default class ResumePage extends React.Component {
  render(){
    return (
      <div className="resume-page">
        <MainNavigation />

        <div className="icon-set">
          <HoverableIcon icon={mailIcon} text="Send me an email!"
            link="mailto:moie.uesugi@gmail.com"/>
          <HoverableIcon icon={linkedInIcon} text="Connect with me!"
            link="https://www.linkedin.com/in/moieu/"/>
          <HoverableIcon icon={githubIcon} text="Check out my GitHub!"
            link="https://github.com/muesugi"/>
          <a href={resumePdf} className="float-right" download>
            <span className="icon-caption">download</span>
            <img className="icon" src={downloadIcon} />
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
