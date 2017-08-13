import React from 'react';
import ResumeEntry from './ResumeEntry';

export default class InteractiveEntryList extends React.Component {
  componentDidMount(){
    console.log(this.refs);
  }
  render(){
    return (
      <div className="resume-subsection">
      <div className="resume-subheader">{this.props.listTitle}</div>
        {this.props.data.slice().reverse().map((item, index) => {
          if (item.selectable){
            return <ResumeEntry ref={"resume-entry-"+item.key}
              selected={this.props.hovered == item.key}
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
