import React from "react";
import "./category.css";
import categories from "./categories";

function Category() {
  return (
    <section className="category__section">
      <h1 className="category__title">Explore the marketplace</h1>
      <section className="category">
        {categories.map((category) => (
          <div className="category__item" key={category.name}>
            <img
              src={`/${category.icon}`}
              alt={`${category.name} icon`}
              className="category__icon"
              loading={"lazy"}
            />

            <hr className="category__line" />
            <h2 className="category__name">{category.name}</h2>
          </div>
        ))}
      </section>
    </section>
    // <section className="category">
    //   <h1 className="category__title">Explore the marketplace</h1>
    //   <div className="container">
    //     {categories.map((category) => (
    //       <div className="catetory__details" key={category.name}>
    //         <img src={graphic} alt="" />
    //         <h1>{category.name}</h1>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

export default Category;
