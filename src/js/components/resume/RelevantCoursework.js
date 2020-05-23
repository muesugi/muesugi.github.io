import React from "react";

export default class RelevantCoursework extends React.Component {
  render() {
    return (
      <div className="relevant-coursework resume-subsection">
        <div className="resume-subheader">Relevant Coursework</div>
        <div className="coursework-lists">
          {this.props.headers.map((header, i) => {
            return (
              <ul key={i}>
                <li className="resume-subsubheader">{this.props.headers[i]}</li>
                {this.props.data[i].map((course, key) => {
                  return <li key={i + "-" + key}>{course}</li>;
                })}
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
