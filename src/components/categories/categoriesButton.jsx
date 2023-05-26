import React from "react";
import "./categories.css";

function CategoriesButton({ children }) {
  return <button className={`nav-btn`}>{children}</button>;
}

export default CategoriesButton;
