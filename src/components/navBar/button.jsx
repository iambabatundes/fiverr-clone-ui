import React from "react";
import "./navBar.css";

function Button({ children }) {
  return <button className={`nav-btn`}>{children}</button>;
}

export default Button;
