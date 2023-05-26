import React from "react";

function FooterHeader({ title, className }) {
  return (
    <section>
      <div className={`${className}`}>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default FooterHeader;
