import React from "react";
import Button from "../button";
import "./getStarted.css";

function GetStarted() {
  return (
    <section className="getStarted-container">
      <div className="getStarted-content">
        <img
          className="getStarted-image"
          src="bg-signup.webp"
          alt=""
          srcset=""
        />
      </div>

      <article className="getStarted-details">
        <h2>
          Find the <i>talent</i> needed to get your business <i>growing</i>.
        </h2>

        <Button title="Get Started" children={"getStarted-btn"} />
        {/* <hr /> */}
      </article>
    </section>
  );
}

export default GetStarted;
