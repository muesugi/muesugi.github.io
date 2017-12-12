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
        <div>The website for this outdoor, international film festival in Japan was a data dump of past films, without any proper hierarchy or post structure.</div>
        <p>The following gif, for example, demonstrates this lack as well as the sheer length of the home page of the old site. 
        <img src={OldHomeImage} />
        </p>

        <div className="portfolio-header">Research</div>
        <div className="portfolio-header">Design</div>
        <div>Overall, the new site is cleaner, more streamlined, and guided.</div>
        <SelfLightbox
           images={[ { src: '/assets/upaf-home.png', caption: "Home Page" },
          { src: '/assets/screenshot-buy.png', caption: "Ticket Purchase Page" },
          { src: '/assets/screenshot-pastupaf.png', caption: "History Overview" },
          { src: '/assets/screenshot-archive.png', caption: "Archive Example (2016 films only)" }]}
          previewHeight={150}
        />
        <div> From the ticket purchase page to the archive, everything was put together with the experience in mind, to make all of that great content actually accessible and managable.
        </div>
        <div>
        The archives in particular were set up so that users could not only navigate easily to find what they were looking for but browse new films as well. In turn, the taxonomy system was built explicitly for non-technical site administrators, so that moving the films from the current year to the archives would take three clicks: one to move all tags under the current year, 2016 for example, to 'Archives', one to change the menu link to reflect the new year, and one to save all of this configuration.
        </div>
        <div className="portfolio-header">Conclusion</div>
      </UIPortfolioEntryBean>
    );
  }
}