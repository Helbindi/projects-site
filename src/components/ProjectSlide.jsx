import React from "react";

function ProjectSlide(props) {
  return (
    <section
      className="project-item"
      style={{
        backgroundImage: `url(${props.data.image})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></section>
  );
}

export default ProjectSlide;
