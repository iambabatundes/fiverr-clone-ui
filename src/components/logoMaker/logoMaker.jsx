import React from "react";
import "./logoMaker.css";
import LogoMake from "./images/logo-maker1.png";

function LogoMaker() {
  return (
    <section className="main">
      <article>
        <h5 className="main__title">
          fiverr <span>logomaker</span>
        </h5>

        <h1 className="title">Make an incredible logo</h1>
        <h3 className="main__desc">in minutes</h3>
        <p>Pre-designed by top talent. Just add your touch.</p>
        <button>Try Fiverr Logo Maker</button>
      </article>
    </section>
  );
}

export default LogoMaker;
