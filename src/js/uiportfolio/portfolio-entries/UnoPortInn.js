import React from "react";

import UIPortfolioEntryBean from "../UIPortfolioEntryBean";
import SelfLightbox from "../SelfLightbox";
import Mockup from "../../../assets/portfolio/unoportinn/upinn-mockup-home.png";
import CropAmmenities from "../../../assets/portfolio/unoportinn/upinn-mockup-home-crop-ammenities.png";
import CropHeader from "../../../assets/portfolio/unoportinn/upinn-mockup-home-crop-header.png";
import CropRooms from "../../../assets/portfolio/unoportinn/upinn-mockup-home-crop-rooms.png";
import UpinnDemo from "../../../assets/portfolio/unoportinn/upinn-demo.gif";

export default class UnoPortInn extends React.Component {
  render() {
    return (
      <UIPortfolioEntryBean
        image="portfolio/unoportinn/upinn-on-ipad.png"
        subtitle="a site for a B&B in Japan"
        title="Uno Port Inn"
        id="upinn"
        siteLink="http://unoportinn.com"
      >
        <div className="portfolio-header">The Problem</div>
        <div>
          Uno Port Inn, a quirky inn in Uno Port, Japan, needed a website to
          reach its main clientele: English speakers who visit the area to see
          famous art spots like the nearby Naoshima Museum.{" "}
        </div>

        <div className="portfolio-header">Research</div>
        <div>
          The creation of this website started with the research of over 35
          payment gateways, including Stripe and PayPal as well as integration
          tools with hotel services. Combinations of these options were
          presented alongside the estimated cost to the client. After payment
          gateway, platform, and content management system decisions were made,
          remaining cognizant of the owner's business strategy as well as prior
          technical familiarities, we talked about the users who the site would
          target.
        </div>
        <p>
          The main user persona is a middle-aged to retirement-aged tourist from
          an English-speaking country, accustomed to travelling. They are likely
          booking for themselves and their significant other, and their priority
          is an interesting and enhanced overall travel experience. As such,
          rather than necessarily looking for the cheapest or most convenient
          location, they are more excited to meet interesting people, whether
          that be staff or other guests.
        </p>
        <p>
          As is clear from the persona, the business selling points are clearly
          defined to be the personability and language skills of the staff, as
          well as the overall experience. The inn is not as close to the typical
          tourist/art attractions-- in fact, the attractions are on different
          islands off of the mainland on which the inn is located-- so the
          business has taken that as an opportunity to brand itself as offering
          a unique overall experience, rather than quick access or cost
          effectiveness.
        </p>

        <div className="portfolio-header">Design</div>
        <div>
          With these decisions and users in mind, we iterated on a few mockups,
          an example of which can be found below.
          <br />
          <SelfLightbox
            images={[
              {
                src: "/assets/upinn-mockup-home.png",
                caption: "High Fidelity Mockup",
              },
            ]}
            previewImages={["/assets/upinn-mockup-home-crop.png"]}
            previewHeight={200}
          />
        </div>
        <div className="portfolio-subheader highlight-text">
          Key Design Choice 1: Photograph Use to Promote the Stay as an
          Experience
        </div>
        <div>
          In light of the business priorities, one decision that was central to
          the design was the header image. Where many similar sites use
          photographs of the lodgings or of the art that makes the attractions,
          the choice was made to display a photograph of the sea separating the
          inn from the art on the islands. While this distance to be crossed may
          seem like a negative aspect of the inn, the portrayal of this beauty
          is metonymic for the overall more engaging and rounded experience
          staying at Uno Port Inn would afford.{" "}
        </div>
        <img src={CropHeader} style={{ display: "block" }} width={250} />

        <p>
          The ammenities were featured using photographs as well. While many
          quick and easy lodgings near the art locations are simply a bed and
          nothing more, Uno Port Inn emphasizes the food (and thus good
          experience) that it serves through its homepage.
          <img src={CropAmmenities} style={{ display: "block" }} width={250} />
        </p>

        <div className="portfolio-subheader highlight-text">
          Key Design Choice 2: Page Layout and Site Hierarchy
        </div>
        <div>
          Where the staff thought about each room as a distinct and bookable
          unit, as is necessary for the day-to-day proceedings of the place, a
          decision was made for the site to show them as three main type of
          rooms. Instating this mental model in the user allows them to predict
          that rooms that fall under the same category would be under the same
          price and value range. In turn, rather than directly linking users to
          individual room pages from the home page, a "Rooms" page was created
          to allow the user to browse other rooms even after making an initial
          selection
        </div>
        <img src={CropRooms} style={{ display: "block" }} width={250} />
        <div>
          <div className="portfolio-header">Product</div>
          <SelfLightbox
            images={[
              { src: "/assets/screenshot-full.png", caption: "Full Home Page" },
              {
                src: "/assets/upinn-demo.gif",
                caption: "Scroll through of full home page",
              },
            ]}
            previewImages={["/assets/screenshot-home.png"]}
            previewHeight={200}
          />

          <div className="portfolio-subheader highlight-text">
            Key Design Choice 3: Aestheticizing Business Goals
          </div>
          <div>
            The presentation of rooms on the home page was changed to reflect
            buisness goals and subtly lead the user to make specific choices. By
            emphasizing the upper floor rooms and showing multiple rooms within
            the category, we guide users to see the variety and appeal that this
            category of rooms can have.{" "}
          </div>
          <img
            src="/assets/unoportinn-rooms.png"
            style={{ display: "block" }}
            width={250}
          />
          <div className="portfolio-subheader highlight-text">
            Key Design Choice 4: Language Options
          </div>
          <div>
            Japanese language translations were provided for all pages, but the
            target is very clearly English speakers. In fact, having an influx
            of Japanese-native (non tourists) would change the overall
            epxerience of the inn to be less international. By showing the
            option of language change but making English the default language
            and deemphasizing the option on the home page, the target user is
            implicitly identified.{" "}
          </div>
        </div>
        <div className="portfolio-header">Conclusion</div>
        <div>
          In this project, we reach a specific audience in order to make the
          best of Uno Port Inn's strengths and faults to reach the target user.
          While reaching the widest possible audience may sometimes seem to be
          the best option, in cases such as these, filtering the users down to
          the target can be in the business' interests.
        </div>
      </UIPortfolioEntryBean>
    );
  }
}
