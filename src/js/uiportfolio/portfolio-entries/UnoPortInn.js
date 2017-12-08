import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';
import SelfLightbox from '../SelfLightbox';
import Mockup from '../../../assets/portfolio/unoportinn/upinn-mockup-home.png';
import UpinnDemo from '../../../assets/portfolio/unoportinn/upinn-demo.gif';

export default class UnoPortInn extends React.Component {
  render(){
    return (
      <UIPortfolioEntryBean image='portfolio/unoportinn/unoportinn-rooms.png'
        subtitle="a site for a B&B in Japan"
        title="Uno Port Inn"
        id="upinn"
        siteLink="http://unoportinn.com" >
         <div className="portfolio-header">The Problem</div>
         <div>Uno Port Inn, a quirky inn in Uno Port, Japan, needed a website to reach its main clientele: English speakers who visit the area to see famous art spots like the Naoshima Museum. </div>

         <div className="portfolio-header">Research</div>
          <div>
           The creation of this website started with the research of over 35 payment gateways, including Stripe and PayPal as well as integration tools with hotel services. Combinations of these options were presented alongside the estimated cost to the client.
          </div>

         <div className="portfolio-header">Design</div>
          <div>
            After the decision about the integration tool had been made, I mocked up the site, as shown here:<br/>
            <SelfLightbox
              images={[{ src: '/assets/upinn-mockup-home.png', caption: "High Fidelity Mockup" }]}
              previewImages={['/assets/upinn-mockup-home-crop.png']}
              previewHeight={200}
            />
          </div>
         <div className="portfolio-header">Product</div>
          <div>
           The following is a screen capture of the resulting website, after a few rounds of revision and additional content population:<br/>
            <img src={UpinnDemo}/>
          </div>
         <div className="portfolio-header">Conclusion</div>
      </UIPortfolioEntryBean>
    );
  }
}