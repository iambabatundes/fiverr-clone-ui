import React, { useState } from "react";
import "./categories.css";
import NavbarRightbar from "./NavbarRightbar";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./navbarSearch";
import NavbarLogo from "./navbarLogo";

function CategoriesNavbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
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
    <section className="categories-navbar-container">
      <nav className="categories-navbar">
        <NavbarLogo />

        <div className="categories-search">
          <NavbarSearch />
        </div>

        <NavbarRightbar
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
        />
      </nav>

      <NavbarMenu
        showLeftChevron={showLeftChevron}
        handleRightClick={handleRightClick}
        handleLeftClick={handleLeftClick}
      />
    </section>
  );
}

export default CategoriesNavbar;
