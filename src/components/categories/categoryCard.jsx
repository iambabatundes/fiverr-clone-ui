import React from "react";
import categoryCards from "./cardData";
import { NavLink } from "react-router-dom";
import Icon from "../icon";

function CategoryCards() {
  return (
    <div className="categoryCards-main">
      {categoryCards.map((card) => (
        <div className="category-card" key={card.id}>
          <img
            className="categoryCard-image"
            src={card.image}
            alt={card.title}
          />
          <h2>{card.title}</h2>
          <ul>
            {card.textList.map((textItem) => (
              <li key={textItem.text}>
                <NavLink
                  href={textItem.link}
                  className="categoryCard-textLists"
                >
                  <p>{textItem.text}</p>
                  <Icon arrow className="category-card-icon" />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;
