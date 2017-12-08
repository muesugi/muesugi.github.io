import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';

import SelfLightbox from '../SelfLightbox';

import CropNavigation from '../../../assets/portfolio/suzanne-collins/crop-navigation.png';
import CropCarousel from '../../../assets/portfolio/suzanne-collins/crop-carousel.png';
import CropQuote from '../../../assets/portfolio/suzanne-collins/crop-quote.png';
import CropSeries from '../../../assets/portfolio/suzanne-collins/crop-series.png';

export default class SuzanneCollins extends React.Component {
  render() {
    const sketch_preview_height = 200;
    const crop_width = 300;
    return (

      <UIPortfolioEntryBean image='portfolio/suzanne-collins/high-fidelity-homepage.png'
        subtitle="a redesign for CS1300 User Interfaces and Experiences - Fall 2017"
        title="Writers with Websites: Suzanne Collins Redesign"
        id="suzannecollins">
        
        <div className="portfolio-header">The Problem</div>
        <div>Suzanne Collins is a very well-known author of the Hunger Games series and other famous work, but her site is barely navigable and does not set clear objectives. In this project for User Interfaces and Experiences, I completely redesign her website to be mobile-friendly and cognizant of the user’s objectives. </div>
        <p>As an example, this is a partial screenshot from <a href="http://suzannecollinsbooks.com">Collins' existing site</a>. All of the pages feature a messy sidebar and excessively long main content.</p>
        <img src='/assets/original-home.png' height={200}/>

        <div className="portfolio-header">Research</div>
        <div>I identified two distinct interface goals (corresponding to specific user types). The site functions both as a press release as well as a tool for book exploration. That is, two important groups of visitors to the site are users in the industry—either organizing book signings or critiquing the book—to more everyday users, who may be parents or children looking for more books from an author they have already enjoyed. The original site appears to attend to both of these goals, so the redesign considers and weighs both for each decision. </div>
        <p>While streamlining the content in the website was a priority, especially given the state of the existing website, I also identified a distinctive personality and friendliness to Collins’ authorial image that I did not want to lose within the redesign. Maintaining this playfulness for the loyal reader while making the site more professional for the reviewer was a central theme recurring throughout this redesign.</p>
        
        <div className="portfolio-header">Design Phase I: Sketches</div>
        <SelfLightbox
           images={[{ src: '/assets/sketch-home.png', caption: "Sketch of Suzanne Collins home page" },
          { src: '/assets/sketch-home-hovered.png', caption: "Sketch of Suzanne Collins home page with hover action on carousel" },
          { src: '/assets/sketch-works.png', caption: "Sketch of works page" },
          { src: '/assets/sketch-underland-chronicles.png', caption: "Sketch of a series page" },
          { src: '/assets/sketch-year-jungle.png', caption: "Sketch of an individual book page" },
          { src: '/assets/sketch-about.png', caption: "Sketch of the About page" },
          { src: '/assets/sketch-contact.png', caption: "Sketch of the Contact page" }]}
          previewHeight={sketch_preview_height}
        />
        <div className="portfolio-subheader highlight-text">Key Design Choice 1: Navigation</div>
        <img className="content-image" src={CropNavigation} width={crop_width}/>
        <div>The main changes throughout the site were in the navigation, as can be seen here. The old navigational system was unclear; its formatting only differentiated it from the standard text in its bolding, and the menu items were tucked away in the top right corner of each page. By moving it into the center, the menu becomes much more intuitive and easy to learn.</div>
        
        <div className="portfolio-subheader highlight-text" >Key Design Choice 2: Carousel</div>
        <img src={CropCarousel} width={crop_width}/>
        <div>A carousel was added to the home page to make the book covers themselves, already familiar to many readers and reviewers, the most prominent visual language on the page. </div>
        <div>As compared to the previous sidebar, this carousel allows for users to more quickly perceive book information, as similar book attributes (title, cover, etc) are grouped together by style.The carousel also retains the information, such as reviews and accolades, while cleaning up the cluttered appearance that was present in the sidebar.</div>
        

        <div className="portfolio-subheader highlight-text">Key Design Choice 3: Collapsible Quotes</div>
        <img src={CropQuote} width={crop_width}/>
        <div>The click-to-open structure for quotes allows the user to see an overview of all of the quotes available for a given book. The quick visual cues (publisher, first line, etc) facilitate easier recall and memorability. The content needed for the reviewer is kept on the page, but readers no longer need to scroll through blocks of text to get an overview of the content accessible on the page.</div>

        <div className="portfolio-subheader highlight-text">Key Design Choice 4: Books Hierarchy</div>
        <img src={CropSeries} width={crop_width}/>
        <div>One of the most important basic tasks for the reader is to confirm that this author is the correct one; that is, that this author has in fact written a book with which they are familiar. The reader would then like to find new books written by the same author. By grouping the books together by series, the site mimics the user’s mental model and quickly shows them which books they have or have not read.  </div>

        <p>&nbsp;</p>
        <div>The sketches were then turned into a high fidelity prototype, seen below. </div>
        <div className="portfolio-header">Design Phase II: High Fidelity Mockup</div>
        <SelfLightbox
          images={[{ src: '/assets/high-fidelity-homepage.png', caption: "High Fidelity Mockup" }]}
          previewHeight={sketch_preview_height}
        />

        <div className="portfolio-subheader highlight-text">Key Design Choice 5: Color</div>
        <div>The primary colors of this redesign are a standard black and white, which communicate the intended streamlined effect. A highlight color was needed to bring in the more playful and approachable aspects of the site. The dark purple used in this mockup was chosen because of this dual professionalism and playfulness, as well as its ability to complement many of the images already used on the site. The book covers are the main visual language on this site, most of which feature light orange or gold highlights, as visible in the covers sampled in the mockup.</div>
        
        <div className="portfolio-subheader highlight-text">Key Design Choice 6: Typography</div>
        <div>Collins’ name is prominently displayed on the existing site. Although not to the point of professional branding, the use of typography and color give the site a distinctive personality—that, as we have said before, is both professional and interactive. In this vein, I wanted to ensure that the author’s name showed something about the author as a person and about the interactivity intended for the site. This manifested as the use of a slab serif typeface, “Jubilat”—which, just like Collins’ presents her personality on the website, is clean, unique, and fun. </div>
        <div>For all of the body text, Source Sans Pro was used. The site is not intended for print consumption, so web legibility at different sizes was the largest priority in choosing this font. </div>


        <div className="portfolio-header">Design Phase III: Responsive Prototype</div>
        <div>View the responsive prototype <a href="https://muesugi-responsive-redesign.herokuapp.com/index.html">here</a>.</div>

        <div className="portfolio-subheader highlight-text">Key Design Choice 7: Mobile Menu and Carousel Flattening</div>
        <div>On mobile, it is difficult to precisely select elements that are placed close together. Because of this, a horizontal spanning menu is less viable on smaller screens. There are only four elements in this menu, however, so the menu does not have to be collapsed on a tablet device. </div>
        <div>The other standard option, over keeping the menu open vertically, would be to include a hamburger menu. However, because the purpose of a home page is to redirect to the correct next pages within the site, the decision was made to keep the menu items displayed. </div>
        <p>By the nature of a mobile device, the width of the screen is smaller; there are less items (in this case, books/book covers) visible on the screen. If the carousel is not dismantled, this reduced space makes it even more important for the user to know that they should scroll horizontally. Without mouse interactions, however, the user cannot reliably be expected to try to scroll horizontally on the carousel to see more options. Because of this flaw, and because scrolling vertically is much more intuitive on a mobile device, flattening the carousel to body content is recommended. </p>
        <SelfLightbox
          images={[{ src: '/assets/homepage-annotated.png', caption: "Annotated homepage with changes at different screen sizes" }]}
          previewHeight={sketch_preview_height}
        />
        <div className="portfolio-header">Conclusion</div>
        <div>Creating a new redesign from a cluttered website is not as easy as simply removing content; the site must retain, or in some cases cultivate, its image as it tries to refine the information it provides. This exercise, while not used beyond the scope of the course for which it was made, this concept extends into many other domains in which technologists intervene. As technologists redesign the web presence of less web-focused professionals, we must be cognizant of what image we create and the distance between the user and technology that is sometimes inadvertently created through streamlining and oversimplification.</div>
      </UIPortfolioEntryBean>
    );
  }
}