import React from 'react';
import ResumeEntry from './ResumeEntry';
import RelevantCoursework from './RelevantCoursework';
import RelevantSkillLists from './RelevantSkillLists';
import Timeline from './Timeline';
import TimelineLegend from './TimelineLegend';
import InteractiveEntryList from './InteractiveEntryList';

export default class ResumeSection extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({
      keyedTimelineData: this.keyTimeline(props.timelineData),
      selected: -1,
    });
  }

  keyTimeline(timelineData){
    var keyedTimeline = timelineData.data.map(function(datapoint, key){
      timelineData.data[key]["key"] = key;
      return timelineData.data[key];
    });

    return keyedTimeline;
  }

  onTimelineElementSelect(key){
    if (key == -1 || !this.state.keyedTimelineData[key]["selectable"])
      this.setState({selected: -1});
    else this.setState({selected: key});
  }
//  <RelevantCoursework headers={this.props.courseData.headers}
    // data={this.props.courseData.data} />
    //<RelevantSkillList title="Test skills"
      // skills={} />
      
      // {this.props.courseData ?
      //   <RelevantCoursework headers={this.props.courseData.headers}
      //     data={ this.props.courseData.data} /> : ""}
  render(){
    return (
      <div className="resume-section">
        <div className="resume-header">
          <span>{this.props.title}</span>
          <TimelineLegend data={this.props.timelineData.categories} />
        </div>

        <Timeline data={this.state.keyedTimelineData} selected={this.state.selected}
          height={this.props.timelineData.height}
          onSelect={this.onTimelineElementSelect.bind(this)}/>

        <RelevantSkillLists title={this.props.skillsTitle}
            data={this.props.skillsData}/>

        <InteractiveEntryList listTitle={this.props.experienceTitle}
          data={this.state.keyedTimelineData} selected={this.state.selected} />
      </div>
    );
  }
}
