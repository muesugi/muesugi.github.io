import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';
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
          <div>
           The creation of this website started with the research of over 35 payment gateways, including Stripe and PayPal as well as integration tools with hotel services. Combinations of these options were presented alongside the estimated cost to the client.
          </div>
          <div>
            After the decision about the integration tool had been made, I mocked up the site, as shown here:<br/>
            <img src={Mockup}/>
          </div>
          <div>
           The following is a screen capture of the resulting website, after a few rounds of revision and additional content population:<br/>
            <img src={UpinnDemo}/>
          </div>
      </UIPortfolioEntryBean>
    );
  }
}