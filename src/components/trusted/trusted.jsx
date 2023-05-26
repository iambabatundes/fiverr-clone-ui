import React from "react";
import googleLogo from "./images/google.png";
import metaLogo from "./images/meta.png";
import paypalLogo from "./images/paypal.png";
import pandgLogo from "./images/pandg.png";
import netflixLogo from "./images/netflix.png";
import "./trusted.css";

function Trusted() {
  return (
    <section className="trusted">
      <div>
        <p style={{ fontWeight: 600, color: "#c5c5c5" }}>Trusted by:</p>
      </div>

      <div className="picture">
        <div className="">
          <picture>
            <source media="(max-width: 1920)" srcSet={googleLogo} />
            <img src={googleLogo} alt="" srcset="" />
          </picture>
        </div>

        <div>
          <picture>
            <source media="(max-width: 1920)" srcSet={googleLogo} />
            <img src={googleLogo} alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(max-width: 1920)" srcSet={paypalLogo} />
            <img src={paypalLogo} alt="" srcset="" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(max-width: 1920)" srcSet={pandgLogo} />
            <img src={pandgLogo} alt="" srcset="" />
          </picture>
        </div>
        <div>
          <picture>
            <source media="(max-width: 1920)" srcSet={netflixLogo} />
            <img src={netflixLogo} alt="" srcset="" />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
