import React from "react";

function ProjectDetail({ project }) {
  const githubLink = (
    <a
      className="project-link"
      href={project.github}
      target="_blank"
      title="Github"
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-github-squared-64.png?alt=media"
        alt="github-icon"
      />
    </a>
  );
  const figmaLink = (
    <a
      className="project-link"
      href={project.figma}
      target="_blank"
      title="Figma"
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-figma-48.png?alt=media"
        alt="figma-icon"
      />
    </a>
  );
  const websiteLink = (
    <a href={project.link} target="_blank" title="Deployment">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/front-end-glossary.appspot.com/o/icons%2Ficons8-web-design-48.png?alt=media"
        alt="deployment-link"
      />
    </a>
  );

  return (
    <section className="project-detailed">
      <h1 className="project-title">{project.desc}</h1>
      <div className="project-links">
        {project.link && websiteLink}
        {project.github && githubLink}
        {project.figma && figmaLink}
      </div>
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <p className="tech-type" key={tech}>
            {tech}
          </p>
        ))}
      </div>
      <p className="project-goal">{project.goal}</p>
    </section>
  );
}

export default ProjectDetail;
