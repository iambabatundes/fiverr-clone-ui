import React from "react";
import NavBar from "../components/navBar/navBar";
import Slider from "../components/navBar/slider";
import Trusted from "../components/trusted/trusted";
import Slides from "../components/cards/slides";
import Featured from "../components/featured/featured";
import Category from "../components/category/category";
import BannerBusiness from "../components/bannerBusiness/bannerBusiness";
import Testimony from "../components/testimony/testimony";
import LogoMaker from "../components/logoMaker/logoMaker";
import ProjectSlide from "../components/projectMade/projectSlide";
import Guides from "../components/guides/guides";
import GetStarted from "../components/getStarted/getStarted";
import Footer from "../components/footer/footer";

function Home() {
  return (
    <>
      <section className="container">
        <div className="container-navbar">
          <NavBar />
        </div>
        <div className="container-slider">
          <Slider />
        </div>
      </section>
      <Trusted />
      <Slides />
      <Featured />
      <Category />
      <BannerBusiness />
      <Testimony />
      <LogoMaker />
      <ProjectSlide />
      <Guides />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
