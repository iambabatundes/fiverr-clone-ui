import React from "react";

function Button({ title, children }) {
  return (
    <section>
      <div>
        <button className={`${children}`}>{title}</button>
      </div>
    </section>
  );
}

export default Button;
