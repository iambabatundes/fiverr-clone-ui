import React, { useState } from "react";
import "./videoCard.css";

function VideoCard({ thumbnailUrl, videoUrl, title }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="videocard">
      {!isPlaying && (
        <div className="videocard__thumbnail" onClick={handlePlayVideo}>
          <img src={thumbnailUrl} alt={title} />
          <div className="videocard__play">
            <i className="fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      )}
      {isPlaying && (
        <div className="videocard__player">
          <video src={videoUrl} controls autoPlay onEnded={handleVideoEnded} />
        </div>
      )}
    </div>
  );
}

export default VideoCard;
