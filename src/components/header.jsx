import React from "react";
import "../App.css";

function Header({ title, subtitle, className }) {
  return (
    <section>
      <article>
        <div className={`heading ${className}`}>
          <h1 className="heading-title">{title}</h1>

          <h4>
            {subtitle}
            <span>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </span>
          </h4>
        </div>
      </article>
    </section>
  );
}

export default Header;
