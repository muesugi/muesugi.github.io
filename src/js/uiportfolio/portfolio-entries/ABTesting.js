import React from 'react';

import UIPortfolioEntryBean from '../UIPortfolioEntryBean';
import report from '../../../assets/portfolio/abtesting/writeup.pdf'

export default class ABtesting extends React.Component {
  render(){
    return (

      <UIPortfolioEntryBean image='portfolio/abtesting/heatmapb.png'
        subtitle="a project for CS1300 User Interfaces and Experiences - Fall 2017"
        title="A/B Testing and Eye Tracking"
        id="abtesting">
        <div>
            <h4>Context / Problem</h4>
            <div>Two versions of a taxi site were created; they were compared with A/B Testing using eye tracking data. The following presents the details of the study and visualizations that were produced as a result.
            </div>
          </div>
          <div>
            <h4>Hypotheses</h4>
             <p>The created site is <a href="csci1300-ab-testing.herokuapp.com"> here</a>, and randomly chooses version A or B to display.</p>
             Our two interface designs were such that the layout and titles were different. <br/>
              <ul><li>Interface A: Button text is “Reserve” + company name; not in a grid; no titles</li>
              <li>Interface B: Button text is “More Information”; in a grid layout; titles</li>
              </ul>
           </div>
           <p>The following is a report compiling the results of the experiment. </p>
           <embed src={report} width="500" height="375" type='application/pdf' />
          <div>
           <h4>Conclusion</h4>
           A/B Testing did not ultimately produce actionable results in this project, but the visualizations allow us to see what elements are most attended to by users.
          </div>
      </UIPortfolioEntryBean>
    );
  }
}