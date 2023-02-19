import React from "react";
import ProjectSlide from "./ProjectSlide";
import ProjectDetail from "./ProjectDetail";

function Projects({ projects, count, handleIncrement, handleDecrement }) {
  return (
    <div className="projects-body">
      <section className="project-slider">
        <button className="prev-btn btn" onClick={(e) => handleDecrement(e)}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-back-to-50.png?alt=media"
            alt="previous-button"
          />
        </button>
        <button className="next-btn btn" onClick={(e) => handleIncrement(e)}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-next-page-50.png?alt=media"
            alt="next-button"
          />
        </button>
        <ProjectSlide project={projects[count]} />
      </section>
      <ProjectDetail project={projects[count]} />
    </div>
  );
}

export default Projects;
