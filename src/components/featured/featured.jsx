import React from "react";
import "./featured.css";
import services from "./service";
import Services from "./services";
import fiverr from "./video/fiverr.mp4";
import VideoCard from "./videoCard";

function Featured() {
  const thumbnailUrl = {
    image:
      "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_600,dpr_2.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png",
  };

  return (
    <section className="featured">
      <div className="featured__container">
        <div>
          <h1 className="featured__title">
            A whole world of <br />
            freelance talent at your <br />
            fingertips
          </h1>
          {services.map((service) => (
            <Services item={service} key={service.title} />
          ))}
        </div>
        <VideoCard thumbnailUrl={thumbnailUrl.image} videoUrl={fiverr} />
      </div>
    </section>
  );
}

export default Featured;
