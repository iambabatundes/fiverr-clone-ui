import React from "react";
import "./categories.css";
import CategoriesButton from "./categoriesButton";

function NavbarSearch() {
  return (
    <div className="categories-navbar__search">
      <input
        className="categories-nav-search"
        type="search"
        placeholder="What service are you looking for today?"
      />
      <div className="categories-btn">
        <CategoriesButton>
          <i className="fa fa-search" aria-hidden="true"></i>
        </CategoriesButton>
      </div>
    </div>
  );
}

export default NavbarSearch;
