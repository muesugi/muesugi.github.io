import React from 'react';

import SelfLightbox from '../SelfLightbox';
import UIPortfolioEntryBean from '../UIPortfolioEntryBean';

import OldHomeImage from '../../../assets/portfolio/unoportartfilms/old-home-scroll.gif';
import NewBuyImage from '../../../assets/portfolio/unoportartfilms/new-buy.png';
import NewArchives from '../../../assets/portfolio/unoportartfilms/new-through-archives-final.gif';

export default class UnoPortArtFilms extends React.Component {
  render(){
    return (

      <UIPortfolioEntryBean image='portfolio/unoportartfilms/upaf-many-devices.png'
        subtitle="a site for a summer outdoor film festival in Japan"
        title="Uno Port Art Films"
        id="upaf"
        siteLink="http://unoportinn.com" >

        <div className="portfolio-header">The Problem</div>
        <div>This project was to completely redo the website for an outdoor, international film festival in Japan-- in the span of one week! Before the redesign, it was a a data dump of past films, without any proper hierarchy or post structure.<br/>
          The home page, for example, looked like this:<br/>{
                <img src={OldHomeImage} height={300}/>}
        </div>

        <div className="portfolio-header">Design</div>
        <div>Overall, the new site is cleaner, more streamlined, and guided. From the ticket purchase page to the archive, everything was put together with the experience in mind, to make all of that great content actually accessible and managable.
        </div>
        <SelfLightbox
           images={[ { src: '/assets/upaf-home.png', caption: "Home Page" },
          { src: '/assets/screenshot-buy.png', caption: "Ticket Purchase Page" },
          { src: '/assets/screenshot-pastupaf.png', caption: "History Overview" },
          { src: '/assets/screenshot-archive.png', caption: "Archive Example (2016 films only)" }]}
          previewHeight={150}
        />
         <div className="portfolio-subheader highlight-text">Key Design Choice 1: Target and Exploration</div>
         <div>The archives were set up so that users could not only navigate easily to find what they were looking for but browse new films as well. The semi-annual film festival often has themes every year, so grouping films by year is not only intuitive but categorically useful as well.</div>
         <p>To this end, more summary text was added to guide the user through distinctions between films shown in different years. The 2016 page, for example, now features an introductory paragraph helping acclimate the user to themes that were pertinent in that year. </p> 

         <div className="portfolio-subheader highlight-text">Key Design Choice 2: Site Sustainability</div>
        <div>The taxonomy system was built explicitly for non-technical site administrators, so that moving the films from the current year to the archives would take three clicks: one to move all tags under the current year, 2016 for example, to 'Archives', one to change the menu link to reflect the new year, and one to save all of this configuration.</div>
        <p>This concern played out beyond the tab structure of the site. In some ways, the more pressing user interface concern was the managerial aspects of maintaining the website, and not the visitors to the website themselves. As such, my development of this website ended up taking the form of documentation-- a lengthy (13 pages!) but chapter-marked how-to manual on everything concerning the site, especially how to maintain and change it.</p>
        <div className="portfolio-header">Conclusion</div>
        <div>Technologists can easily fall into the trap of creating cool and appealing solutions to existing problems, but without ways to actively maintain and sustain these initatives, they do not last beyond the short period that the technologist can stay regularly involved. By developing on learnable platforms like Wordpress, creating intuitive documentation, and concerning oneself with the steps that will be necessary to update the site, we can create websites that have longer lives and eventually most effectively serve their audiences.</div>
      </UIPortfolioEntryBean>
    );
  }
}