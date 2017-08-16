import React from 'react';

export default class JsonLinkLoader extends React.Component {

  render(){
    return (<a href={ this.props.children[0].props.children}>{this.props.children[1].props.children}</a>);
  }
}
