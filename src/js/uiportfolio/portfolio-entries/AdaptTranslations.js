import React from "react";

import UIPortfolioEntryBean from "../UIPortfolioEntryBean";
import gif from "../../../assets/portfolio/adapt/adapt-translations-2.gif";

export default class AdaptTranslations extends React.Component {
  render() {
    return (
      <UIPortfolioEntryBean
        image="portfolio/adapt/adapt-on-mac.png"
        subtitle="a course project for CS32 Software Engineering - Spring 2017"
        title="Adapt Translations"
        id="adapt"
        siteLink="http://adapt-translations.herokuapp.com/"
      >
        <div className="portfolio-header">The Problem</div>
        <div>
          Most translators work with a disorganized workspace with multiple
          documents and tabs. While some have attempted to find software that
          will assist them in translation, often these push automatic
          translations onto the translator that may only be a nuisance, and
          translators end up returning to the messy but familiar work
          configuration of multiple open windows.
        </div>

        <div className="portfolio-header">Research</div>
        <div>
          Our four-person team started the creation process by reaching out to
          faculty and students in the Comparative Literature department. By
          surveying them about their current translation-related behaviors, we
          learned that most just open two separate windows for their two
          documents, as well as other windows for online translation resources,
          but wish they had a better workflow.
        </div>

        <div className="portfolio-header">Technical Overview</div>
        <img src={gif} />
        <div>
          We decided to create a visual application that would display how two
          documents aligned without the user having to manually remember or find
          these links between documents.
        </div>
        <div>
          As the only person on the team with front-end experience, I became the
          lead front-end developer on the project. Here are some of the most
          interesting features of the front-end that I implemented:
        </div>
        <ul>
          <li>
            Optional matched scrolling through the two documents; scroll on one
            side and scroll proportionately through the other
          </li>
          <li>
            The ability to load documents from files, save and reload old
            projects
          </li>
          <li>
            Integration with the popular TinyMCE text editor for a familiar
            interface
          </li>
          <li>
            Integration with Google Open Authentication (OAuth 2.0) for user
            accounts
          </li>
        </ul>

        <div className="portfolio-header">Design and Technical Decisions</div>
        <div>
          Where most of the backend work was focused on computationally
          determining which paragraphs would link together (ie; which
          paragraph(s), if any, of the original document corresponded for a
          given translated paragraph), the front-end work involved showing and
          making use of this information in ways that would be intuitive to the
          user. This meant making the following functionality available to the
          user:
          <ul>
            <li>Adding or removing links between paragraphs</li>
            <li>
              Scrolling through both documents with the links in mind (ie;
              keeping linked paragraphs aligned), or scrolling through just one
              document
            </li>
            <li>
              Given one paragraph, finding the paragraph that corresponds to
              that paragraph in the other document
            </li>
          </ul>
          Here are some of the key design choices to facilitate and make users
          aware of these functionalities.
        </div>

        <div className="portfolio-subheader highlight-text">
          Key Design Choice 1: Parallelism
        </div>
        <div>
          From a technological point of view, the translation document should
          appear larger or more prominently than the original document: only the
          translation is editable or manipulable, and the editor's tools take up
          space, making the actual display area of the translation document even
          smaller than that of the original document.
        </div>
        <p>
          However, an explicit design decision was made to keep the two
          documents (original and translation) styled as similarly as possible.
          In the user's mental model, the two documents have a one-to-one
          correspondence of meaning, which means that the documents themselves
          should be comparable elements; that is, they should appear the same
          other than the text that is displayed within. To make the two
          documents, one is a simple div and the other an iframe text editor,
          appear to be of the same kind was a challenge.{" "}
        </p>
        <p>
          While most styling (titles, selectors, etc) could simply be matched
          between the two documents, there was not much to be done about a text
          height difference between the two documents because of the editor’s
          tools. Rather than adding width to the translation document (which
          would make the same amount of text have a different height between the
          two documents) or compensating by making the translation document
          longer, I decided to simply cut off the scroll bar and text area to
          keep the overall look the same. By filling in the missing part of the
          scroll bar with the background color, I keep the design cohesive and
          the two documents in parallel.
        </p>

        <div className="portfolio-subheader highlight-text">
          Key Design Choice 2: Color
        </div>
        <div>
          While the site overall uses mostly neutral colors (blue, beige,
          white), the paragraph links are generated colors. This coloring and
          central placement on the page allow the links to be the most prominent
          elements on the page.{" "}
        </div>
        <p>
          We utilized color in particular to display linkages because of the
          Gestalt laws of similarity. We knew there would be many links in each
          document, and the linkages between paragraphs would still need to be
          quickly apparent in this scenario. Color, rather than symbols or other
          categorization schema, are easily learned and intuitive.
        </p>

        <div className="portfolio-subheader highlight-text">
          Key Design Choice 3: Default States
        </div>
        <div>
          The applcation idea is not one with which users are already familiar,
          so using the app is in some ways a learning process for the user.
          Because we wanted to highlight the usefulness of the linkages, without
          which our application is just a dual-paneled text editor, we decided
          that links should be auto-generated at the start if documents are
          uploaded on both sides. In turn, scrolling would start "ON," so as to
          show the advantages of having aligned scrolling.{" "}
        </div>
        <p>
          Yet, given the translators' comments that technology has a tendency to
          overstep or be intrusive to the actual workflow, we decided that
          translation suggestions or the ability to have clicks add links by
          default would only confuse our users. Thus, the delete and add options
          start off, and can be used when needed by the user.{" "}
        </p>

        <div className="portfolio-header">Conclusion</div>
        <div>
          Adapt introduces a new way to consider translation, as linkages
          between paragraphs, while also staying attuned to translators'
          existing mental models that have been learned and reinforced through
          translation experience. The takeaway from this project, then, beyond
          additional JavaScript practice, becomes how to introduce helpful
          technology without necessarily disrupting existing industries or modes
          of thinking.{" "}
        </div>
      </UIPortfolioEntryBean>
    );
  }
}
