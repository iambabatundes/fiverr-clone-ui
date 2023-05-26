import React, { useState, useEffect } from "react";
import "../../fonts/MacanPanWeb-Extrabold.ttf";
import "./navBar.css";
import Search from "./search";
import FiverrLogo from "./fiverrLogo";
import NavbarMenu from "./navbarMenu";
import RightNavbar from "./rightNavbar";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [showLanguageDialog, setShowLanguageDialog] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const handleOptionSelect = (type, value) => {
    if (type === "language") {
      setSelectedLanguage(value);
    } else if (type === "currency") {
      setSelectedCurrency(value);
    }
  };

  const handleExploreClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLoginClose = () => {
    setShowModal(false);
  };

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleLeftClick = () => {
    const menu = document.querySelector(".menu");
    const menuWidth = menu.getBoundingClientRect().width;
    const scrollWidth = menu.scrollWidth;
    const scrollAmount =
      scrollPosition - menuWidth > 0 ? scrollPosition - menuWidth : 0;
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

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <section
      className={active ? "container-navbar active" : "container-navbar"}
    >
      <nav className="navbar">
        <FiverrLogo active={active} />

        {active && (
          <div className="search">
            <Search />
          </div>
        )}

        <div className={active ? "nav__link active" : "nav__link"}>
          <RightNavbar
            handleExploreClick={handleExploreClick}
            setOpenModal={setOpenModal}
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
            setShowLanguageDialog={setShowLanguageDialog}
            showLanguageDialog={showLanguageDialog}
            handleOptionSelect={handleOptionSelect}
            selectedLanguage={selectedLanguage}
            selectedCurrency={selectedCurrency}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            setShowModal={setShowModal}
            handleLoginClose={handleLoginClose}
            showModal={showModal}
            openModal={openModal}
            active={active}
          />
        </div>
      </nav>

      {active && (
        <NavbarMenu
          showLeftChevron={showLeftChevron}
          handleRightClick={handleRightClick}
          handleLeftClick={handleLeftClick}
        />
      )}
    </section>
  );
}

export default NavBar;
