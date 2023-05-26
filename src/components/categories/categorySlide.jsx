import React from "react";
import Icon from "../icon";
import "./categories.css";

function CategorySlide({ item }) {
  return (
    <section>
      <div className="categorySlide-main">
        <div className="categorySlide-container">
          <img src={item.image} alt="" className="categorySlide-image" />
          <h1>{item.text}</h1>
          <Icon arrow />
        </div>
      </div>
    </section>
  );
}

export default CategorySlide;
