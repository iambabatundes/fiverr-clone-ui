import React from "react";
import "./popular.css";

function Popular() {
  return (
    <section>
      <div
        className="background-popular"
        style={{ marginTop: "1rem", gap: 23 }}
      >
        <h3 className="background-popular-heading">Popular: </h3>
        <div className="background-popular-content">
          <span>Website Design</span>
          <span>WordPress</span>
          <span>Logo Design</span>
          <span>AI Services</span>
        </div>
      </div>
    </section>
  );
}

export default Popular;
