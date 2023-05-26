import React from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";

function NavbarMenu({ showLeftChevron, handleLeftClick, handleRightClick }) {
  return (
    <section>
      <div className="menu-border">
        <div className="menu-container">
          {showLeftChevron && (
            <span className="menu-chevron-left" onClick={handleLeftClick}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </span>
          )}
          <section className="menu">
            <NavLink to="/categories/graphics-design">
              <span>Graphics & Design</span>
            </NavLink>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Lifestyle</span>

            <span className="menu-AI">
              AI Services
              <p className="menu-new">new</p>
            </span>
          </section>

          <span className="menu-chevron-right" onClick={handleRightClick}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default NavbarMenu;
