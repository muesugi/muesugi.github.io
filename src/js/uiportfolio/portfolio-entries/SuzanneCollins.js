import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';

//images
import OldHomeImage from '../../../assets/portfolio/suzanne-collins/original-home.png';
import HomeSketch from '../../../assets/portfolio/suzanne-collins/sketch-home.png';
import HomeHoveredSketch from '../../../assets/portfolio/suzanne-collins/sketch-home-hovered.png';
import YearJungleSketch from '../../../assets/portfolio/suzanne-collins/sketch-year-jungle.png';
import ContactSketch from '../../../assets/portfolio/suzanne-collins/sketch-contact.png';
import HighFidelity from '../../../assets/portfolio/suzanne-collins/high-fidelity-homepage.png';

export default class SuzanneCollins extends React.Component {
  render(){
    return (

      <UIPortfolioEntryBean image='portfolio/suzanne-collins/high-fidelity-homepage.png'
        subtitle="a redesign for CS1300 User Interfaces and Experiences - Fall 2017"
        title="Writers with Websites: Suzanne Collins Redesign"
        id="suzannecollins">
          <div>
            <h4>Context / Problem</h4>
            <div>Suzanne Collins is a very well-known author of the Hunger Games series and other famous work, but her site is barely navigable and does not set clear objectives. In this project for User Interfaces and Experiences, I completely redesign her website to be mobile-friendly and cognizant of the user’s objectives. 
            <br/>
            As an example, <a href="/assets/original-home.png" target="_blank">this</a> is a partial screenshot from Collins' existing site. All of the pages feature a messy sidebar and excessively long main content.<br/>
            </div>
          </div>
          <div>
            <h4>Research</h4>
            While streamlining the content in the website was a priority, especially given the state of the existing website, I also identified a distinctive personality and friendliness to Collins’ authorial image that I did not want to lose within the redesign. <br/> I also identified two distinct interface goals (corresponding to specific user types). The site functions both as a press release as well as a tool for book exploration. That is, two important groups of visitors to the site are users in the industry—either organizing book signings or critiquing the book—to more everyday users, who may be parents or children looking for more books from an author they have already enjoyed. The original site appears to attend to both of these goals, so the redesign considers and weighs both for each decision. 
          </div>
          <div>
           <h4>Designs</h4>
           <p>
            The main changes throughout the site were in the navigation, as can be seen here. The old navigational system was unclear; its formatting only differentiated it from the standard text in its bolding, and the menu items were tucked away in the top right corner of each page. By moving it into the center, the menu becomes much more intuitive and easy to learn.
            </p>
            <p>
            A carousel was added to the home page to make the book covers themselves, already familiar to many readers and reviewers, the most prominent visual language on the page. In turn, as can be seen in the second image below, each of the items in the carousel is hoverable, thereby retaining the information that was contained in the original site while organizing the clutter.
            </p>
            <div className="flex">
              <img src={HomeSketch} /> <img src={HomeHoveredSketch} />
            </div>
            <p>
            All of the other pages in the site were redesigned with usability principles in mind as well. The following is a page for a single book. Where much of the information, again, was sprawled across the original page, this new design allows for visual grouping by headers as well as collapsible elements for quick navigation.
            </p>
            <p>
            Throughout this redesign, I considered the dual goals of the website to serve reviewers and readers. This contact page (a completely new addition to the site) demonstrates how a single page can both be personable and playful for loyal readers but still have a professional advantage as well.
            </p>
            <div className="flex">
              <img src={YearJungleSketch} /> <img src={ContactSketch} />
            </div>
            <p>
            The sketches were then turned into a high fidelity prototype, seen below. 
            </p>
            <img src={HighFidelity} />
            <div> 
              A few key considerations were made in designing this prototype.
              <h5>Color</h5>
              <p>As we have described in previous sections, the site should retain its approachability and informality while remaining clean. The existing site uses a color palette of only two or three colors, all shades of what one might call peach. The color itself is warm and does not make the site too official, but this variant use of shades and tints makes the site feel less cohesive. The primary colors of this redesign are a standard black and white, which communicates the intended streamlined effect, but a highlight color was needed to bring in the more playful aspect of the site. The book covers are the main visual language on this site, most of which feature light orange or gold highlights, as visible in the covers sampled in Figure 4. The dark purple used in this mockup was thus chosen because of its dual professionalism and playfulness, as well as its ability to complement many of the images already used on the site.</p>

             <h5> Typeface</h5>
              <p>Collins’ name is prominently displayed on the existing site, as visible on the right. Although not to the point of professional branding, the use of typography and color give the site a distinctive personality—that, as we have said before, is both professional and interactive. 
              In this vein, I wanted to ensure that the author’s name showed something about the author as a person and about the interactivity intended for the site. This manifested as the use of a slab serif typeface, “Jubilat”—which, just like Collins’ presents her personality on the website, is clean, unique, and fun. 
              For all of the body text, Source Sans Pro was used. The site is not intended for print consumption, so web legibility at different sizes was the largest priority in choosing this font. A number of readings, such as that of Salminen, recommend Source Sans Pro for its legibility and letter differentiation. Since it complemented Jubilat well, a combination of the two fonts was used throughout the site. </p>

              <h5>Active Menu Item</h5>
              <p>Many styles were considered for displaying the activity of a given element in the main navigational menu. Initially, activity was shown only with bolding or a single underline. However, this rendition of the redesign active menu styling (Figure 4) was chosen for two reasons. One, this design ensures that the user knows their current place within the architecture. Two, this design makes the entire redesign more cohesive through the use of horizontal bars. Because both the carousel area and the footer area are colored blocks, the site appears to communicate that the important information is contained in a colored block. By housing the active element within two colored lines, the menu is contextualized and made to feel similar to other elements already on the page. </p>
              
            </div>
           <h4>Conclusion</h4>
           Creating a new redesign from a cluttered website is not as easy as simply removing content; the site must retain, or in some cases cultivate, its image as it tries to refine the information it provides. This exercise, while not used beyond the scope of the course for which it was made, this concept extends into many other domains in which technologists intervene. As technologists redesign the web presence of less web-focused professionals, we must be cognizant of what image we create and the distance between the user and technology that is sometimes inadvertently created through streamlining and oversimplification.
          </div>
      </UIPortfolioEntryBean>
    );
  }
}