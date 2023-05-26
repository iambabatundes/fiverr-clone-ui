import React from "react";
import "./bannerBusiness.css";

import Services from "../featured/services";

function BannerBusiness() {
  const banners = [
    { title: "Connect to freelancers with proven business experience" },
    {
      title:
        "Get matched with the perfect talent by a customer success manager",
    },
    { title: "Connect to freelancers with proven business experience" },
  ];
  return (
    <section className="banner__container">
      <section className="banner">
        <div className="banner__content">
          <article className="banner-business">
            <h1 className="banner-title">
              fiverr<span>business.</span>
            </h1>
            <span className="banner__new">NEW</span>
          </article>
          <h2 className="banner__title">
            A business solution <br /> designed for <span>teams</span>
          </h2>
          <p className="banner-content">
            Upgrade to a curated experience packed with tools <br /> and
            benefits, dedicated to businesses
          </p>

          <div className="banner__servies">
            {banners.map((banner) => (
              <Services
                className={"banners-title"}
                item={banner}
                key={banner.title}
              />
            ))}
          </div>

          <button className="banner__btn">Explore Fiverr Business</button>
        </div>

        <img
          className="banner__img"
          src={
            "https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
          }
        />
      </section>
    </section>
  );
}

export default BannerBusiness;
