import React from "react";
import "./search.css";

function Search({ icon, search, placeholder, title }) {
  return (
    <section>
      <div className="background-search">
        <span className="search-icon">
          {icon && <i className="fa fa-search" aria-hidden="true" />}
        </span>
        <input type="search" placeholder={placeholder} />
        {search && <button>Search</button>}
      </div>
    </section>
  );
}

export default Search;
