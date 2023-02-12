import React from "react";

function ProjectDetail(props) {
  const project = props.data;
  const githubLink = (
    <a className="github-link" href={project.github} target="_blank">
      Github
    </a>
  );
  return (
    <section className="project-detailed">
      <h1>{project.desc}</h1>
      <a href={project.link} target="_blank">
        Check it out here!
      </a>
      <div className="project-tech">
        Technologies:
        {project.technologies.map((tech) => (
          <p className="tech-type">{tech}</p>
        ))}
      </div>
      <p className="project-goal">{project.goal}</p>
      {project.github && githubLink}
    </section>
  );
}

export default ProjectDetail;
