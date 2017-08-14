import React from 'react';

export default class JsonImageLoader extends React.Component {

  render(){
    return (<img src={require("../../img/" + this.props.children)} />);
  }
}
