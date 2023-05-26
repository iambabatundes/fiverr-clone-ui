import React from "react";
import "./style.css";
import FeaturedSlider from "./featuredSlider";

function Featured() {
  return (
    <section>
      <div className="featured-main">
        <div className="featured-user">
          <div className="featured-user-content">
            <h1>Hi Babatundeemma,</h1>
            <p>Get matched with sellers for your project.</p>
            <button>Post a request</button>
          </div>
        </div>

        <div className="featured-banner">
          <FeaturedSlider />
        </div>
      </div>
    </section>
  );
}

export default Featured;
