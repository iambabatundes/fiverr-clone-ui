import React, { useState, useEffect } from "react";
import Popular from "../popular/popular";
import Search from "../search/search";
import "./slider.css";

function Slider() {
  const [bgIndex, setBgIndex] = useState(0);
  const [backgrounds, setBackgrounds] = useState([
    { image: "./images/bg-hero-1-900-x2.webp", text: "Emmanuel Babatunde" },
    { image: "./images/bg-hero-2-900-x2.webp", text: "Emmolyine" },
    { image: "./images/bg-hero-3-900-x1.webp", text: "John Smith" },
    { image: "./images/bg-hero-4-900-x2.webp", text: "Water Paul" },
    { image: "./images/bg-hero-5-900-x2.webp", text: "Mary Joe" },
    { image: "./images/bg-hero-6-900-x2.webp", text: "Mat Smith" },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((bgIndex) => (bgIndex + 1) % backgrounds.length);
    }, 40000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="background-container">
        {/* <div className="backgroundName">{backgrounds[bgIndex].text}</div> */}
        <div
          className={`background-image ${bgIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${backgrounds[bgIndex].image})` }}
        />
        {/* <div className="backgroundName">{backgrounds[bgIndex].text}</div> */}
        <div className="background-content">
          <h1 className="background-heading">
            Find the perfect <i>freelance</i> services for your business
          </h1>

          <Search icon placeholder="Try 'building mobile app'" search />

          <Popular />
        </div>
      </div>
    </>
  );
}

export default Slider;
