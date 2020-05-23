import React from "react";
import LandingContent from "../components/about/LandingContent";
import LandingNavigation from "../components/about/LandingNavigation";
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const LandingPage = () => (
  <div className="landing-page">
    <div id="hamburger-container">
      <Menu right width="250px">
        <Link to="/" className="active">
          about
        </Link>
        <NavLink to="/resume">resume</NavLink>
        <NavLink to="/portfolio">portfolio</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </Menu>
    </div>
    <LandingContent />
    <LandingNavigation />
  </div>
);

export default LandingPage;
