import React from "react";

function LanguageModel({ handleLanguageSelection, selectedLanguage }) {
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    // add more languages as needed
  ];
  return (
    <section>
      <div>
        {languages.map((language) => (
          <div key={language.code}>
            <input
              type="radio"
              id={language.code}
              name="language"
              value={language.code}
              checked={selectedLanguage === "en" && <span>✓</span>}
              onChange={() => handleLanguageSelection(language.code)}
            />
            <label htmlFor={language.code}>{language.label}</label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguageModel;
