import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';
import gif from '../../../assets/portfolio/adapt/adapt-translations-2.gif';

export default class AdaptTranslations extends React.Component {
  render(){
    return (

      <UIPortfolioEntryBean image='portfolio/adapt/adapt-translations-1.png'
        subtitle="a course project for CS32 Software Engineering - Spring 2017"
        title="Adapt Translations"
        id="adapt"
        siteLink="http://adapt-translations.herokuapp.com/" >
          <div>
            Our four-person team started the creation process by reaching out to faculty and students in the Comparative Literature department. By surveying them about their current translation-related behaviors, we learned that most just open two separate windows for their two documents, as well as other windows for online translation resources, but wish they had a better workflow.
          </div>
          <img src={gif}/>
          <div>
            We decided to create a visual application that would display how two documents aligned without the user having to manually remember or find these links between documents.
          </div>
          <div>
           As the only person on the team with front-end experience, I became the lead front-end developer on the project. Here are some of the most interesting features of the front-end that I implemented:
          </div>
          <ul>
            <li>Optional matched scrolling through the two documents; scroll on one side and scroll proportionately through the other</li>
            <li>The ability to load documents from files, save and reload old projects</li>
            <li>Integration with the popular TinyMCE text editor for a familiar interface</li>
            <li>Integration with Google Open Authentication (OAuth 2.0) for user accounts</li>
          </ul>
      </UIPortfolioEntryBean>
    );
  }
}
