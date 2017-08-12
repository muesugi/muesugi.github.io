import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';

export default class LandingPage extends React.Component {
  render(){
    return (
      <div className="landing-page">
        <LandingContent />
        <LandingNavigation />
      </div>
    );
  }
}
