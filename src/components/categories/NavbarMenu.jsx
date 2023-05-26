import React from "react";
import "./categories.css";

function NavbarMenu({ showLeftChevron, handleLeftClick, handleRightClick }) {
  return (
    <section>
      <div className="categories-menu-border">
        <div className="categories-menu-container">
          {showLeftChevron && (
            <span
              className="categories-menu-chevron-left"
              onClick={handleLeftClick}
            >
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </span>
          )}
          <section className="categories-menu">
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Lifestyle</span>

            <span className="categories-menu-AI">
              AI Services
              <p className="categories-menu-new">new</p>
            </span>
          </section>

          <span
            className="categories-menu-chevron-right"
            onClick={handleRightClick}
          >
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default NavbarMenu;
