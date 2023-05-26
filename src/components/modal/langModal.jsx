import React from "react";

function LangModal({ languages }) {
  return (
    <section>
      <div>
        <ul>
          {languages.map((language) => (
            <li key={language.code}>{language.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LangModal;
