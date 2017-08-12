import React from 'react';
import {Link} from 'react-router-dom';

export default class MainFooter extends React.Component {
  render(){
    return (
        <div className="main-footer">
        {(this.props.back) ?
          <Link className="back-page" to={"/"+this.props.back}>{this.props.back}</Link> :
          <div></div>
        }
        {(this.props.next) ?
          <Link className="next-page" to={"/"+this.props.next}>{this.props.next}</Link> :
          <div></div>
        }
      </div>
    );
  }
}
