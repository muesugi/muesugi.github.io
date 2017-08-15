import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

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
      hovered: -1
    });
  }

  keyTimeline(timelineData){
    var keyedTimeline = timelineData.data.map(function(datapoint, key){
      timelineData.data[key]["key"] = key;
      return timelineData.data[key];
    });

    return keyedTimeline;
  }
  onTimelineElementHover(key){
    if (key == -1 || !this.state.keyedTimelineData[key]["selectable"])
      this.setState({hovered: -1});
    else this.setState({hovered: key});
  }
  onTimelineElementSelect(key){
    if (key == -1 || !this.state.keyedTimelineData[key]["selectable"]){
      return;
    }
    else {
      this.onTimelineElementHover(key);
      const resumeEntry = this.refs.entrylist.refs["resume-entry-"+key];
      window.setTimeout(function(){
        this.onTimelineElementHover(-1);
      }, 2000);
      scrollToComponent(resumeEntry,{
        offset: -200,
        align: 'middle',
        duration: 1000
      });

    }
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

        <Timeline data={this.state.keyedTimelineData} hovered={this.state.hovered}
          height={this.props.timelineData.height}
          onHover={this.onTimelineElementHover.bind(this)}
          onSelect={this.onTimelineElementSelect.bind(this)}/>

        <InteractiveEntryList ref="entrylist"
         listTitle={this.props.experienceTitle}
          data={this.state.keyedTimelineData} hovered={this.state.hovered} />

        <RelevantSkillLists title={this.props.skillsTitle}
          description={this.props.skillsDescription}
          data={this.props.skillsData}/>

      </div>
    );
  }
}
