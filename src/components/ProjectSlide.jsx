import React from "react";

function ProjectSlide({ project }) {
  return (
    <section
      className="project-item"
      style={{
        backgroundImage: `url(${project.image})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></section>
  );
}

export default ProjectSlide;
