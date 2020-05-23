import React from "react";
import { IMAGE_DIR_PREFIX } from "../helpers/images";

export default class JsonImageLoader extends React.Component {
  render() {
    return <img src={IMAGE_DIR_PREFIX + this.props.children} />;
  }
}
