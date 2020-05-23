import React from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../ProfileImage";

const LandingNavigation = () => (
  <div className="landing-menu animated zoomInDown">
    <nav>
      <Link className="landing-menu-item" to="/resume">
        resume
      </Link>
      <Link className="landing-menu-item" to="/portfolio">
        portfolio
      </Link>
      <Link className="landing-menu-item" to="/contact">
        contact
      </Link>
    </nav>
  </div>
);

export default LandingNavigation;
