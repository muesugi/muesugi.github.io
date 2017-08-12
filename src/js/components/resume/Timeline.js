import React from 'react';
import {Layer, Circle, Line, Text, Stage, Group} from 'react-konva';


export default class Timeline extends React.Component {
    constructor(props) {
      super(props);
      this.state = Object.assign({
        timelineWidth: 1000,
        itemWidth: 1000 / props.data.length,
        selected: props.selected
      });

      this.updateTimelineWidth = this.updateTimelineWidth.bind(this);
    }
    componentWillReceiveProps(newProps){
      if (newProps.selected != this.props.selected){
        this.setState({selected: newProps.selected});
      }
    }
    componentDidMount() {
      this.updateTimelineWidth();
      window.addEventListener('resize', this.updateTimelineWidth);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateTimelineWidth);
    }
    updateTimelineWidth() {
      this.setState({
        timelineWidth: window.innerWidth - 100,
        itemWidth: (window.innerWidth - 100) / this.props.data.length
      });
    }
    render() {
        return (
          <div className="animated slideInLeft">
          <Stage width={this.state.timelineWidth} height={this.props.height}><Layer>
            <Line points={[0, 50, this.state.timelineWidth, 50]} dash={[4, 1]}
              strokeWidth="1" stroke="#88562d" />
            <Line points={
                [this.state.timelineWidth - 10, 40, this.state.timelineWidth - 1, 50,
                  this.state.timelineWidth - 10, 60]}
                dash={[4, 1]}
                strokeWidth="1" stroke="#88562d" />
            {this.props.data.map((item, index) => {
              return (
                <Group key={"group-" + index}
                  onMouseEnter={this.props.onSelect.bind(this, index)}
                  onMouseLeave={this.props.onSelect.bind(this, -1)}>
                  <Circle key={"circle-" + index}
                    radius={((item.larger) ? 15 : 8) + (5 * (this.state.selected == index))}
                    x={this.state.itemWidth * (index+.5)} y={50}
                    fill={item.color}/>
                  <Text key={"title-" + index} text={item.title} align="center"
                    fontFamily="Source Sans Pro" width={this.state.itemWidth - 10}
                    fontSize="14"
                    color={(this.state.selected == index) ? this.props.selectedColor : "black"}
                    x={this.state.itemWidth * index} y={80}/>

                  {(this.state.selected == index) &&
                    <Text key={"role-"+index}  align="center"
                      text={`${item.subtitle} \n(click for more)`}
                      x={this.state.itemWidth  * (index+.1)} y={100}/>}

                  <Text key={"date-" + index} text={item.date} align="center"
                    fontFamily="Source Sans Pro" width={this.state.itemWidth - 10}
                    x={this.state.itemWidth * index}  y={0}/>
                </Group>
              );
            })}
          </Layer></Stage>
          </div>
        );
    }
}
