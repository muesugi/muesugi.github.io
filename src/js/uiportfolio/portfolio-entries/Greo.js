import React from 'react';

import SelfLightbox from '../SelfLightbox';
import UIPortfolioEntryBean from '../UIPortfolioEntryBean';

export default class Greo extends React.Component {
  render(){
    return (

      <UIPortfolioEntryBean image='portfolio/greo/greo-on-iphone.png'
        subtitle="an app redesign for CS1300 User Interfaces and Experiences - Fall 2017"
        title="Greo"
        id="greo">
        
        <div className="portfolio-header">The Problem</div>
        Greo is a social media platform for socially conscious conversations, fascilitated purely through short-form video. In this app design, my group of three took this startup idea and created our own designs while keeping in mind this original vision.

        <div className="portfolio-header">Design Phase I: Sketches</div>
        <div>As we sat down to brainstorm, each team member created their own set of sketches to communicate how we each thought of the problem. The following is my own interpretation of the task at hand, converted into a set of sketches.</div>
        <SelfLightbox
           images={[
          { src: '/assets/greosketch-1.png', caption: "Greo Home page" },
          { src: '/assets/greosketch-2.png', caption: "Greo Home page on interaction" },
          { src: '/assets/greosketch-3.png', caption: "Topic page" },
          { src: '/assets/greosketch-4.png', caption: "Post page" },
          { src: '/assets/greosketch-7.png', caption: "Reply Preview page" },
          { src: '/assets/greosketch-9.png', caption: "Notifications page" },
          { src: '/assets/greosketch-10.png', caption: "Social page" },
          { src: '/assets/greosketch-11.png', caption: "Profile page" },
          ]}
          previewImages={['/assets/greosketch-1.png', '/assets/greosketch-2.png', '/assets/greosketch-3.png', '/assets/greosketch-4.png']}
          previewHeight={200}
        />
        <div className="portfolio-subheader highlight-text">Key Design Choice 1: Personhood above Opinion</div>
        <div>In the conceptions of this app, the issues discussed via video are often contentious and can easily escalate into divisive argument, contrary to the mission of the app. The easiest way to prevent extremism along idealogical lines, I think, is to humanize the people behind the idea. This, in part, is also the philosophy of Greo; this is why users are asked to bare their names and images to have frank conversations. </div>
        <div>The Social tab in this app allows users to find people who discuss the same topics. They may not always fall on the same sides of these discussions, but by characterizing similarity between users by interest in a topic and not a particular opinion about it, this app can become one that users find central to having important and transparent discussion.</div>


        <div className="portfolio-subheader highlight-text">Key Design Choice 2: Thumbnail Use</div>
        <div>While this would ultimately change in later iterations, I initially opted to keep the home screen as a pure list of topics and opinions, ranked by views and the user's own interests. While removing the thumbnail may ultimately seem counter to Decision 1, which emphasizes humans (and therefore their faces as well), this decision works to circumvent unconscious biases that may serve to have some opinions valued over others.</div>

        <div className="portfolio-header">Design Phase II: High Fidelity Mockup</div>
        <div>Sitting down with our different conceptions of the project, we ulitmately came up with one cohesive set of sketches that pulled from all members' sketches. We then created a high fidelity mockup of this project, visible here.</div>
        <SelfLightbox
           images={[
          { src: '/assets/greomockup-home.png', caption: "Mockup of new home page" },
          { src: '/assets/greomockup-post.png', caption: "Mockup of a post" },
          { src: '/assets/greomockup-post2.png', caption: "Mockup of an expanded reply in a post" },
          { src: '/assets/greomockup-videostart.png', caption: "Video start..." },
          { src: '/assets/greomockup-videostop.png', caption: "...video stop" },
          { src: '/assets/greomockup-preview.png', caption: "Mockup of response preview" },
          { src: '/assets/greomockup-notifications.png', caption: "Mockup of notifications page" },
          { src: '/assets/greomockup-profileself.png', caption: "Mockup of the current user's profile" },
          { src: '/assets/greomockup-profileother.png', caption: "Mockup of a profile (not the current user)" }
          ]}
          previewImages={['/assets/greomockup-home.png', '/assets/greomockup-post.png', '/assets/greomockup-videostart.png', '/assets/greomockup-profileself.png']}
          previewHeight={200}
        />

        <div className="portfolio-subheader highlight-text">Key Design Choice 3: Conversation Design</div>
        <div>Greo is innovative in that it allows users to interact with one another only through short-form video. As such, a crucial part of the design was in facilitating streamlined conversation and making the navigation of existing conversations intuitive and easy to understand. In our design, top level posts are given their own pages, but responses to these posts are all displayed on the same page. To facilitate easy navigation on a small mobile screen, we make these responses collapsible. </div>
        <div>As compared to giving each video response its own page as initially conceived, we wanted the app experience to feel more like a conversation instead of isolated responses. This choice also had the added bonus of reducing the number of clicks needed to navigate around.</div>

        <div className="portfolio-subheader highlight-text">Key Design Choice 4: Tags</div>
        <div>Tags are for users to quickly locate the topics in which they may be interested. They are yellow and shaped differently to contrast with the overall white-grey-blue color scheme. They can also easily chain in the case of multiple categories for one video.
        We chose this format over the original tags under the video so it would be more noticeable, add some flair to the design of the app, and allow for some whitespace between topics.</div>

        <div className="portfolio-header">Conclusion</div>
        <div>Part of the learning process for the creation of this app design was in how differently the same mission statement could be interepreted into different interfaces and experiences. While the actual sketches are central to the design process, perhaps the ability to let go of your own design choices in favor of making the app cleaner or more useable is a valuable aspect of the design process as well.</div>
      </UIPortfolioEntryBean>     
    );
  }
}