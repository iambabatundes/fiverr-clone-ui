import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

function FeaturedSlider() {
  const slides = [
    {
      id: 1,
      image: "bg-signup.webp",
      title: "Put your talent to the test",
      subtitle:
        "Enter Fiverr's Work Life Photo Contest and take your shot at picture-perfect prizes.",
      link: "/page/talented",
    },
    {
      id: 2,
      image: "Dropshipping.webp",
      title: "Moving from offline to online?",
      subtitle:
        "Resources, guides, services & videos to help you on your journey.",
      link: "/page/talented",
    },
    {
      id: 3,
      image: "graphics-design.webp",
      title: "Meet Fiverr Business",
      subtitle:
        "Connect with our top freelancers, vetted for experience & quality.",
      link: "/page/talented",
    },
    {
      id: 4,
      image: "design.webp",
      title: "Take a look at these",
      subtitle: "We've gathered some personal recommendations just for you.",
      link: "/page/talented",
    },
  ];
  return (
    <section className="featured-slider">
      <div>
        <img src="./bg-signup.webp" alt="" className="featured-slider-img" />
        <div className="featured-content">
          <h1>Put your talent to the test</h1>
          <p>
            Enter Fiverr's Work Life Photo Contest and take your shot at
            picture-perfect prizes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSlider;
