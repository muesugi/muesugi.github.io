import React from "react";

export default class TimelineLegend extends React.Component {
  render() {
    return (
      <span className="timeline-legend">
        {Object.keys(this.props.data).map((keyName, keyIndex) => {
          return (
            <span key={keyIndex} className="legend-pair">
              <span
                className="circle"
                style={{ backgroundColor: this.props.data[keyName] }}
              >
                &nbsp;
              </span>
              <span>{keyName}</span>
            </span>
          );
        })}
      </span>
    );
  }
}
