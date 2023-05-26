import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./tabModal.css";
import Icon from "../icon";

function TabModal({ onClick }) {
  const languages = [
    { name: "English", code: "en", link: "/" },
    { name: "Español", code: "es", link: "/es" },
    { name: "Français", code: "fr", link: "/fr" },
    { name: "Deutsch", code: "de", link: "/de" },
    { name: "Português", code: "po", link: "/po" },
    { name: "Italiano", code: "it", link: "/it" },
    { name: "Nederlands", code: "nl", link: "/nl" },
    { name: "Yoruba", code: "yo", link: "/yo" },
  ];

  const currencies = [
    { title: "United States Dollar", name: "USD - ", symbol: "$" },
    { title: "Euro", name: "EUR - ", symbol: "€" },
    { title: "British Pound", name: "GBP - ", symbol: "£" },
    { title: "Australian Dollar", name: "AUD - ", symbol: "A$" },
    { title: "Canadian Dollar", name: "CAD - ", symbol: "CA$" },
    { title: "Israeli Shekel", name: "ILS - ", symbol: "₪" },
    { title: "Brazilian Real", name: "BRL - ", symbol: "R$" },
    { title: "Hong Kong Dollar", name: "HKD - ", symbol: "HK$" },
    { title: "Swedish Krona", name: "SEK - ", symbol: "SEK" },
    { title: "New Zealand Dollar", name: "NZD - ", symbol: "NZ$" },
    { title: "Singapore Dollar", name: "SGD - ", symbol: "SGD" },
    { title: "Swiss Franc", name: "CHF - ", symbol: "CHF" },
    { title: "South African Rand", name: "ZAR - ", symbol: "ZAR" },
    { title: "Chinese Renminbi Yuan", name: "CNY - ", symbol: "CN¥" },
    { title: "Indian Rupee", name: "INR - ", symbol: "₹" },
    { title: "Malaysian Ringgit", name: "MYR - ", symbol: "MYR" },
    { title: "Mexican Peso", name: "MXN - ", symbol: "MX$" },
    { title: "Pakistani Rupee", name: "PKR - ", symbol: "PKR" },
    { title: "Philippine Peso", name: "PHP - ", symbol: "₱" },
    { title: "New Taiwan Dollar", name: "TWD - ", symbol: "NT$" },
    { title: "Thai Baht", name: "THB - ", symbol: "THB" },
    { title: "Turkish New Lira", name: "TRY - ", symbol: "TRY" },
    { title: "United Arab Emirates Dirham", name: "AED - ", symbol: "AEDs" },
  ];

  const [languageOpen, setLanguageOpen] = useState(true);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setLanguageOpen(true);
    setCurrencyOpen(false);
  };

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyOpen(true);
    setLanguageOpen(false);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section>
      <div className="modal-body" onClick={onClick}>
        <div className="tabmodal-container" onClick={handleClick}>
          <div className="tabmodal-header">
            <h5 className="tabmodal-title">Select your preferences</h5>
            <Icon onClick={onClick} closed className="btn-close" />
          </div>
          <div className="tab-main">
            <ul className="">
              <li
                onClick={handleLanguageClick}
                className={`tab-language ${languageOpen ? "tab-active" : ""}`}
              >
                Language
              </li>
            </ul>
            <ul>
              <li
                onClick={handleCurrencyClick}
                className={`tab-currency ${currencyOpen ? "tab-active" : ""}`}
              >
                Currency
              </li>
            </ul>
          </div>

          <div className="tabmodal-content">
            {languageOpen ? (
              <div className="language-container">
                {languages.map((language) => (
                  <NavLink to={language.link}>
                    <div
                      className={`languagese ${
                        selectedLanguage.code === language.code ? "active" : ""
                      }`}
                      key={language.code}
                      onClick={() => handleLanguageClick(language)}
                    >
                      <Icon checked className="checked-icon" />

                      <div className="language-name">{language.name}</div>
                    </div>
                  </NavLink>
                ))}
              </div>
            ) : (
              <div>
                {currencyOpen && (
                  <div className="currency-container">
                    {currencies.map((currency) => (
                      <div
                        className={`currency ${
                          selectedCurrency.symbol === currency.symbol
                            ? "active"
                            : ""
                        }`}
                        key={currency.title}
                        onClick={() => handleCurrencyClick(currency)}
                      >
                        <Icon checked className="checked-icon" />
                        <div className="currency-content">
                          <h2>{currency.title}</h2>
                          <p className="currency-name">
                            {currency.name} {currency.symbol}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabModal;
