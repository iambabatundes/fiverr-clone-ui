import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../icon";
import "./style.css";

function GigHeading({ heading }) {
  return (
    <section>
      <div className="browsing-content">
        <NavLink to="/recommendation/page/">
          <div className="browsing-heading">
            <h1>{heading}</h1>
            <Icon arrow />
          </div>
        </NavLink>
        <div className="browsing-chevron">
          <Icon chevronLeft />
          <Icon chevronRight />
        </div>
      </div>
    </section>
  );
}

export default GigHeading;
