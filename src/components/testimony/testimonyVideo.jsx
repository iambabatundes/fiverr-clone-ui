import React, { useState } from "react";
import testimonies from "./testimonyList";
import "./testimony.css";

function TestimonyVideo() {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(!showVideo);
  };

  const handleMouseLeave = () => {
    setShowVideo(false);
  };

  const handlePrev = () => {
    const newIndex =
      currentTestimonyIndex === 0
        ? testimonies.length - 1
        : currentTestimonyIndex - 1;
    setCurrentTestimonyIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentTestimonyIndex === testimonies.length - 1
        ? 0
        : currentTestimonyIndex + 1;
    setCurrentTestimonyIndex(newIndex);
  };

  const currentTestimony = testimonies[currentTestimonyIndex];

  return (
    <section className="testimony-container">
      <button className="arrow left-arrow" onClick={handlePrev}>
        <span className="slider-button-icon">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </span>
      </button>

      <button className="arrow right-arrow" onClick={handleNext}>
        <span className="slider-button-icon">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </span>
      </button>

      <div key={currentTestimony._id} className="testimony">
        <div
          className="video-container"
          style={{ backgroundImage: `url(${currentTestimony.bgImg})` }}
          onClick={handleClick}
        >
          {!showVideo && (
            <>
              <div className="play-icon"></div>
              <div className="overlay"></div>
            </>
          )}
          {showVideo && (
            <div className="video-popup">
              <video controls autoPlay>
                <source src={currentTestimony.testiVideo} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        <div className="content">
          <blockquote className="person-info">
            {currentTestimony.name}, {currentTestimony.post}
            <img src={currentTestimony.companyImg} alt="" />
          </blockquote>

          <blockquote className="testimony-text">
            {currentTestimony.testimony}
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default TestimonyVideo;
