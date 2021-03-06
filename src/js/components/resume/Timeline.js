import React from "react";
import { Layer, Circle, Line, Text, Stage, Group } from "react-konva";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    const timelineWidth = this.timelineWidth();
    this.state = Object.assign({
      timelineWidth: timelineWidth,
      itemWidth: timelineWidth / props.data.length,
    });

    this.updateTimelineWidth = this.updateTimelineWidth.bind(this);
  }
  // componentWillReceiveProps(newProps){
  //   if (newProps.selected != this.props.selected){
  //     this.setState({selected: newProps.selected});
  //   }
  // }
  componentDidMount() {
    this.updateTimelineWidth();
    window.addEventListener("resize", this.updateTimelineWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTimelineWidth);
  }
  timelineWidth() {
    let timelineWidth = window.innerWidth;
    if (timelineWidth >= 767) timelineWidth -= 100;
    else timelineWidth -= 20;

    return timelineWidth;
  }
  updateTimelineWidth() {
    const twidth = this.timelineWidth();
    this.setState({
      timelineWidth: twidth,
      itemWidth: twidth / this.props.data.length,
    });
  }
  onHover(key, title) {
    dataLayer.push({
      event: "timelineHover",
      timeline: this.props.sectionTitle,
      timelineElement: title,
    });
    this.props.onHover(key);
  }
  onSelect(key, title) {
    dataLayer.push({
      event: "timelineClick",
      timeline: this.props.sectionTitle,
      timelineElement: title,
    });
    this.props.onSelect(key);
  }
  render() {
    return (
      <div className="timeline animated slideInLeft">
        <Stage width={this.state.timelineWidth} height={this.props.height}>
          <Layer>
            <Line
              points={[0, 50, this.state.timelineWidth, 50]}
              dash={[4, 1]}
              strokeWidth={1}
              stroke="#88562d"
            />
            <Line
              points={[
                this.state.timelineWidth - 10,
                40,
                this.state.timelineWidth - 1,
                50,
                this.state.timelineWidth - 10,
                60,
              ]}
              dash={[4, 1]}
              strokeWidth={1}
              stroke="#88562d"
            />
            {this.props.data.map((item, index) => {
              const circleBaseRadius = item.larger ? 15 : 8;
              return (
                <Group
                  key={"group-" + index}
                  className="timeline-entry"
                  onMouseEnter={this.onHover.bind(this, index, item.title)}
                  onMouseLeave={this.props.onHover.bind(this, -1)}
                  onClick={this.onSelect.bind(this, index, item.title)}
                >
                  <Circle
                    key={"circle-" + index}
                    radius={
                      circleBaseRadius + 5 * (this.props.hovered == index)
                    }
                    x={
                      this.state.itemWidth * (index + 0.5) -
                      circleBaseRadius / 2
                    }
                    y={50}
                    fill={item.color}
                  />
                  <Text
                    key={"title-" + index}
                    className="timeline-title"
                    text={item.title}
                    align="center"
                    fontFamily="Source Sans Pro"
                    width={this.state.itemWidth - 10}
                    fontSize={14}
                    ref={"titleText" + index}
                    fill={this.props.hovered == index ? "#984b43" : "black"}
                    // textDecoration={(this.props.hovered == index) ? "underline" : "none"}
                    x={this.state.itemWidth * index}
                    y={80}
                  />
                  <Text
                    key={"date-" + index}
                    text={item.date}
                    align="center"
                    fontFamily="Source Sans Pro"
                    width={this.state.itemWidth - 10}
                    x={this.state.itemWidth * index}
                    y={0}
                  />
                </Group>
              );
            })}
            {this.props.data.map((item, index) => {
              return (
                <Group key={"group-helptext-" + index}>
                  {this.props.hovered == index &&
                    this.refs["titleText" + index] && (
                      <Text
                        key={"role-" + index}
                        align="center"
                        fill="#984b43"
                        text={item.subtitle}
                        width={this.state.itemWidth - 10}
                        // textDecoration="underline"
                        x={this.state.itemWidth * index}
                        y={this.refs["titleText" + index].height() + 80 + 5}
                      />
                    )}
                </Group>
              );
            })}
          </Layer>
        </Stage>
      </div>
    );
  }
}
