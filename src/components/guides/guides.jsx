import React from "react";
import "./guides.css";
import Header from "../header";
import GuideList from "./guideList";
import guides from "./guide";

function Guides() {
  return (
    <section className="guides">
      <Header title="Fiverr guides" subtitle="See More Projects" />

      <div className={`guides-card `}>
        {guides.map((guide) => (
          <GuideList item={guide} key={guide._id} />
        ))}
      </div>
    </section>
  );
}

export default Guides;
