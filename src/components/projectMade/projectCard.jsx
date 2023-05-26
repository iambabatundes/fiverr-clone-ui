import React from "react";
import "./projectCard.css";

function ProjectCard({ item }) {
  return (
    <section className="projectCard">
      <img className="ProjectCard__image" src={item.image} alt="" />
      <div className="ProjectCard__content">
        <img className="profileImage" src={item.profileImage} alt="" />
        <div className="projectCard__details">
          <h4>{item.profession}</h4>
          <span>{item.username}</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
