import React from "react";
import Icon from "../icon";

function CategoryAccordion({ item, isOpen, toggleAccordion }) {
  return (
    <section>
      <article className="accordion-item">
        <div className="accordion-heading" onClick={toggleAccordion}>
          <h3>{item.title}</h3>
          {isOpen ? <Icon chevronUp /> : <Icon chevronDown />}
        </div>
        {isOpen && (
          <div className={`accordion-description ${isOpen ? "open" : ""}`}>
            {item.description}
          </div>
        )}
      </article>
    </section>
  );
}

export default CategoryAccordion;
