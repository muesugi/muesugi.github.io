import React from 'react';
import ResumeEntry from './ResumeEntry';

export default class InteractiveEntryList extends React.Component {
  render(){
    return (
      <div className="resume-subsection">
      <div className="resume-subheader">{this.props.listTitle}</div>
        {this.props.data.slice().reverse().map((item, index) => {
          if (item.selectable){
            return <ResumeEntry
              selected={this.props.selected == item.key}
              key={index}
              date={item.date} title={item.title}
              subtitle={item.subtitle} location={item.location}
              description={item.description}/>
          }
        })}
      </div>
    );
  }
}
