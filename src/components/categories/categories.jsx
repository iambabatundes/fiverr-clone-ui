import React from "react";
import CategoriesNavbar from "./categoriesNavbar";

function Categories() {
  return (
    <section>
      <div>
        <CategoriesNavbar
          handleExploreClick
          setShowDropdown
          showDropdown
          setShowLanguageDialog
          showLanguageDialog
          handleOptionSelect
          selectedLanguage
          selectedCurrency
          selectedTab
          setSelectedTab
          setShowModal
          handleLoginClose
          showModal
          setOpenModal
          openModal
        />
      </div>
    </section>
  );
}

export default Categories;
