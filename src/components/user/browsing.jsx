import React from "react";
import "./style.css";
import Icon from "../icon.jsx";
import { NavLink } from "react-router-dom";

const Browsing = React.forwardRef((props, ref) => {
  const {
    image,
    video,
    vidImg,
    price,
    proVerifiedImg,
    profileImg,
    starRate,
    gigTitle,
    username,
    userLevel,
    level,
    progress,
    bgImg,
    gigVideo,
    isPlaying,
    progressPercentage,
    togglePlay,
    onCanPlayThrough,
    starPoint,
    gigData,
    isOnline,
    currentVideo,
    handleLiked,
  } = props;

  return (
    <section>
      <section className="browsing-gigs">
        {vidImg && (
          <div className="gigCard-media">
            {image && <img src={image} alt={image} loading="lazy" />}
            <div
              className="gigCard-main play-btn"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <span
                className={`video-btn-wrapper ${
                  currentVideo === video ? "active" : ""
                }`}
                onClick={() => togglePlay(video)}
              >
                <span
                  className={`video-btn ${isPlaying ? "pause" : "play"}`}
                ></span>
                {video && progress && (
                  <svg
                    className={`videoPlayerProgress ${
                      !isPlaying ? "pause" : "play"
                    }`}
                    viewBox="-2 -4 40 40"
                  >
                    <circle
                      className="progressBarBackground"
                      r="14"
                      cx="18"
                      cy="14"
                    ></circle>
                    <circle
                      className="progressBar"
                      r="14"
                      cx="18"
                      cy="14"
                      style={{
                        strokeDasharray: `${progressPercentage}, 100`,
                      }}
                    ></circle>
                  </svg>
                )}
              </span>

              {video && (
                <video
                  className="gigVideo"
                  onEnded={togglePlay}
                  onCanPlayThrough={onCanPlayThrough}
                  ref={ref}
                  src={gigVideo}
                  style={{ objectFit: "cover" }}
                ></video>
              )}
            </div>
          </div>
        )}

        <div className="profile-img-section">
          <div className="profile-img-online">
            <img
              src={profileImg}
              className="profile-img"
              alt={profileImg}
              loading="lazy"
            />
            {isOnline ? <div className="isOnline"></div> : null}
          </div>
          <article>
            <NavLink to="/profile/${username}/">
              <h4>{username}</h4>
            </NavLink>
            {userLevel && <span>{level}</span>}
          </article>
        </div>

        <NavLink to="/profile/${username}/title">
          <h2 className="gigTitle">{gigTitle}</h2>
        </NavLink>

        <div className="gig-icon-section">
          <div className="gigRate">
            <Icon
              rated
              className={`gigRate ${!proVerifiedImg ? "" : "green"}`}
            />
            <span className={`gigRate ${!proVerifiedImg ? "" : "green"}`}>
              {starRate}
            </span>
            <p>{starPoint}</p>
          </div>

          <div className="gig-pro">
            {proVerifiedImg && (
              <img src={proVerifiedImg} alt={proVerifiedImg} />
            )}
          </div>
        </div>

        <div className="gigIcons-section">
          <div className="gigIcons">
            <section className="tooltip">
              <Icon list />
              <span className="tooltip-text">Save to list</span>
            </section>

            <section className="tooltip">
              <Icon
                love
                isLiked={gigData.liked}
                onLiked={() => handleLiked(gigData)}
              />
              <span className="tooltip-text">Save to my first list</span>
            </section>
          </div>

          <div className="gigPrice">
            <p>Starting at</p>
            <span>${price}</span>
          </div>
        </div>
      </section>
    </section>
  );
});

export default Browsing;
