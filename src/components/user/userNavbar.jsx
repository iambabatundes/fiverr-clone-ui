import React, { useState } from "react";
import NavbarLogo from "../categories/navbarLogo";
import Search from "../navBar/search";
import "./style.css";
import Icon from "../icon";
import { NavLink } from "react-router-dom";
import NavbarMenu from "../categories/NavbarMenu";

function UserNavbar({ username }) {
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    const menu = document.querySelector(".menu");
    const menuWidth = menu.getBoundingClientRect().width;
    const scrollWidth = menu.scrollWidth;
    const scrollAmount =
      scrollPosition - menuWidth > "" ? scrollPosition - menuWidth : "";
    menu.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setScrollPosition(scrollAmount);
    setShowLeftChevron(scrollAmount > 0);
  };

  const handleRightClick = () => {
    const menu = document.querySelector(".menu");
    const menuWidth = menu.getBoundingClientRect().width;
    const scrollWidth = menu.scrollWidth;
    const scrollAmount =
      scrollPosition + menuWidth < scrollWidth
        ? scrollPosition + menuWidth
        : scrollWidth - menuWidth;
    menu.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
    setScrollPosition(scrollAmount);
    setShowLeftChevron(true);
  };

  return (
    <section>
      <div className="user-navbar">
        <NavbarLogo />
        <Search className="user-search" userNav__search="userNav__search" />
        <div className="user-left">
          <div className="tooltip user-search-bell">
            <img
              className="image userSearch-bell"
              src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/bell.78d6546.svg"
              alt="notification"
            />
            <span className="tooltip-text">Notification</span>
          </div>
          <div className="tooltip user-search-letter">
            <img
              className="image userSearch-letter"
              src="https://fiverr-res.cloudinary.com/npm-assets/layout-server/letter.07c989b.svg"
              alt="message"
            />

            <span className="tooltip-text">Message</span>
          </div>

          <div className="tooltip">
            <Icon heart className="heart" />
            <span className="tooltip-text">List</span>
          </div>
        </div>
        <NavLink>
          <span className="userNavber-over">Order</span>
        </NavLink>
        <NavLink>
          <span className="userNavber-switch tooltip">Switch to Selling</span>
          {/* <span className="tooltip-text">
            Access all the tools you need to sell your services. We'll set this
            as your default mode.
          </span> */}
        </NavLink>

        <div className="user-attached-image">
          <figure>
            <figcaption>{username}</figcaption>
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0c2123102c1aecf82935127abdd69b44-1590787088333/bf163ffb-bf63-445b-b9b8-a73754edf8ba.jpg"
              alt="Profile Picture"
            />
          </figure>
          <div className="user-img-online"></div>
        </div>
      </div>

      <NavbarMenu
        showLeftChevron={showLeftChevron}
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
    </section>
  );
}

export default UserNavbar;
