import React from "react";
import "./categories.css";
import Icon from "../icon";

function CategoryBanner({
  title,
  subtitle,
  works,
  showVideo,
  handleVideoClick,
  videoUrl,
  imageUrl,
}) {
  return (
    <section className="categorybanner">
      <div
        className="categorybanner-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="categorybanner-content">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <button className="categorybanner-btn" onClick={handleVideoClick}>
            <Icon videoIcon />
            <div>{works}</div>
          </button>
        </div>
        {showVideo && (
          <div className="video-popup" onClick={handleVideoClick}>
            <video src={videoUrl} controls autoPlay></video>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryBanner;
