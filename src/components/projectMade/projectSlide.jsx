import React, { useState } from "react";
import "./projectSlides.css";
import projectList from "./projectList";
import ProjectCard from "./projectCard";
import Header from "../header";

function ProjectSlide() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const nextIndex = (currentCardIndex + 4) % (projectList.length - 4);
    setCurrentCardIndex(nextIndex);
  };

  const handlePrevCard = () => {
    const prevIndex =
      (currentCardIndex + projectList.length - 1) % (projectList.length - 4);
    setCurrentCardIndex(prevIndex);
  };

  const projectToDisplay = projectList.slice(
    currentCardIndex,
    currentCardIndex + 4
  );

  return (
    <section className="mainProject">
      <article className="main-content-area">
        <Header
          title="Get inspired with projects made by our freelancers"
          subtitle="See More Projects"
        />

        <button
          className="project-button project-button-prev"
          onClick={handlePrevCard}
        >
          <span className="slider-button-icon">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
        </button>

        <div className="project-card">
          {projectToDisplay.map((project) => (
            <ProjectCard item={project} key={project._id} />
          ))}
        </div>

        <button
          className="project-button project-button-next"
          onClick={handleNextCard}
        >
          <span className="slider-button-icon">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
        </button>
      </article>
    </section>
  );
}

export default ProjectSlide;
