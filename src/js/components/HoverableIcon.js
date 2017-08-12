import React from "react";

export default class HoverableIcon extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({showText: false});

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(){
    var self = this;
    var timer = window.setTimeout(function(){
      self.setState({showText : true});
    },100);
    this.setState({timer: timer});
  }

  onMouseLeave(){
    this.setState({showText : false});
    if (this.state.timer){
      clearTimeout(this.state.timer);
      this.setState({timer: null});
    }
  }

  render(){
    return (
      <a className="hoverable-icon" href={this.props.link}>
        <img className="icon" src={this.props.icon}
          onMouseEnter={this.onMouseEnter.bind(this)}
          onMouseLeave={this.onMouseLeave.bind(this)} />
        <span className={!this.state.showText ? "hidden icon-caption" : "icon-caption"}>
          {this.props.text}</span>
      </a>
    );
  }
}
