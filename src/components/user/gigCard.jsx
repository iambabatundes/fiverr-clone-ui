import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import GigHeading from "./gigHeading";
import Browsing from "./browsing";
import { getGigDatas } from "./gigData";

function GigCard() {
  const [gigDatas, setGigDatas] = useState([]);
  const videoRef = useRef([]);

  const [isPlaying, setIsPlaying] = useState(
    new Array(gigDatas.length).fill(false)
  );
  const [progressPercentage, setProgressPercentage] = useState(
    new Array(gigDatas.length).fill(0)
  );
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    const gigDatas = getGigDatas();
    setGigDatas(gigDatas);
  }, []);

  useEffect(() => {
    videoRef.current = videoRef.current.slice(0, gigDatas.length);
  }, [gigDatas]);

  useEffect(() => {
    videoRef.current.forEach((videoEl, index) => {
      if (videoEl) {
        videoEl.addEventListener("timeupdate", handleTimeUpdate(index));
      }
    });

    return () => {
      videoRef.current.forEach((videoEl, index) => {
        if (videoEl) {
          videoEl.removeEventListener("timeupdate", handleTimeUpdate(index));
        }
      });
    };
  }, [videoRef]);

  // function handleLiked(index) {
  //   const updatedGigData = [...gigDatas];
  //   updatedGigData[index] = {
  //     ...gigDatas[index],
  //     liked: !gigDatas[index].liked,
  //   };
  //   setGigDatas(updatedGigData);
  // }

  function handleLiked(gigData) {
    const gigDataId = [...gigDatas];
    const index = gigDataId.findIndex((gig) => gig.id === gigData.id);
    gigDataId[index] = { ...gigDataId[index] };
    gigDataId[index].liked = !gigDataId[index].liked;
    setGigDatas(gigDataId);
  }

  // function handleLiked(gigData) {
  //   const gigDataId = [...gigDatas];
  //   const index = gigDatas.indexOf(gigData);
  //   gigDataId[index] = { ...gigDatas[index] };
  //   gigDataId[index].liked = !gigDataId[index].liked;
  //   setGigDatas(gigDataId);
  // }

  const handleTimeUpdate = (index) => (event) => {
    const videoEl = event.target;
    const { currentTime, duration } = videoEl;
    const percentage = (currentTime / duration) * 100;
    setProgressPercentage((prevProgress) => {
      const newProgress = [...prevProgress];
      newProgress[index] = percentage;
      return newProgress;
    });
  };

  const togglePlay = (index) => {
    const videoEl = videoRef.current[index];
    if (videoEl) {
      if (isPlaying[index]) {
        videoEl.pause();
        setIsPlaying((prevPlaying) => {
          const newPlaying = [...prevPlaying];
          newPlaying[index] = false;
          return newPlaying;
        });
      } else {
        // pause the currently playing video
        const currentIndex = currentVideo;
        if (currentIndex !== null && currentIndex !== index) {
          const currentVideoEl = videoRef.current[currentIndex];
          if (currentVideoEl) {
            currentVideoEl.pause();
            setIsPlaying((prevPlaying) => {
              const newPlaying = [...prevPlaying];
              newPlaying[currentIndex] = false;
              return newPlaying;
            });
          }
        }
        videoEl.play();
        setIsPlaying((prevPlaying) => {
          const newPlaying = [...prevPlaying];
          newPlaying[index] = true;
          return newPlaying;
        });
        setCurrentVideo(index);
      }
    }
  };

  const handleCanPlayThrough = (index) => {
    if (isPlaying[index] && videoRef.current[index].paused) {
      videoRef.current[index].play();
    }
  };

  return (
    <section>
      <div className="browsing-container">
        <GigHeading heading="Continue Browsing" />
        <div className="gig-container">
          {gigDatas.map((gigData, index) => (
            <Browsing
              key={gigData.id}
              gigVideo={gigData.gigVideo}
              bgImg={gigData.bgImg}
              gigTitle={gigData.gigTitle}
              profileImg={gigData.profileImg}
              username={gigData.username}
              level={gigData.level}
              userLevel
              vidImg
              video
              progress
              togglePlay={() => togglePlay(index)}
              isPlaying={isPlaying[index]}
              progressPercentage={progressPercentage[index]}
              ref={(el) => (videoRef.current[index] = el)}
              onCanPlayThrough={() => handleCanPlayThrough(index)}
              starRate={gigData.starRate}
              proVerifiedImg={gigData.proVerifiedImg}
              starPoint={gigData.starPoint}
              price={gigData.price}
              rated
              isOnline={gigData.isOnline}
              currentVideo={currentVideo}
              gigData={gigData}
              handleLiked={handleLiked}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GigCard;
