import React from "react";
import { IMAGE_DIR_PREFIX } from "../helpers/images";

const ProfileImage = ({ width, height }) => (
  <img
    src={IMAGE_DIR_PREFIX + "profile-redblue.png"}
    width={width ? width : "auto"}
    height={height ? height : "auto"}
  />
);

export default ProfileImage;
