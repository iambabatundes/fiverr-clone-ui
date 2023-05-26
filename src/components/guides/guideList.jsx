import React from "react";
import "./guideList.css";

function GuideList({ item, className }) {
  return (
    <section>
      <div className={`guide-container ${className}`}>
        <img className="guide-image" src={item.image} alt="" srcset="" />
        <article className={`guide-content ${className}`}>
          {item.title && <h3>{item.title}</h3>}
          <p>{item.desc}</p>
        </article>
      </div>
    </section>
  );
}

export default GuideList;
