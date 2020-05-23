import React from "react";
import { Link } from "react-router-dom";

const MainFooter = ({ back, next }) => (
  <div className="main-footer">
    {back && (
      <Link className="back-page" to={"/" + back}>
        ‹ {back}
      </Link>
    )}

    {next && (
      <Link className="next-page" to={"/" + next}>
        {next} ›
      </Link>
    )}
  </div>
);

export default MainFooter;
