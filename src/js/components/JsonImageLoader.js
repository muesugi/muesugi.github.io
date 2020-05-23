import React from "react";
import { IMAGE_DIR_PREFIX } from "../helpers/images";

const JsonImageLoader = ({ children: src }) => (
  <img src={IMAGE_DIR_PREFIX + src} />
);

export default JsonImageLoader;
