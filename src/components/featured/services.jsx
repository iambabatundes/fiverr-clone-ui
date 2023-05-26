import React from "react";
import check from "./check.png";
import "./services.css";

function Services({ item, className }) {
  return (
    <article className="service">
      <section className="service__container">
        <ul className={`services ${className}`}>
          <li>
            <div className={`service__content ${className}`}>
              <img src={check} alt="" />
              <h2 className={`service__title ${className}`}>{item.title}</h2>
            </div>
            {item && <p className="service__details">{item.desc}</p>}
          </li>
        </ul>
      </section>
    </article>
  );
}

export default Services;
