import React from "react";
import { IMAGE_DIR_PREFIX } from "../helpers/images";

export default class ProfileImage extends React.Component {
  render(){
    return (
      <img src={IMAGE_DIR_PREFIX + "profile-redblue.png"}
        width={(this.props.width) ? this.props.width : "auto"}
        height={(this.props.height) ? this.props.height : "auto"} />
    );
  }
}
