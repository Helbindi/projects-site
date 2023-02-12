import { useState } from "react";
import { projects } from "./data/projects";
import ProjectSlide from "./components/ProjectSlide";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement(e) {
    e.preventDefault();
    if (count < projects?.length - 1) {
      setCount((prev) => {
        return prev + 1;
      });
    } else {
      setCount(0);
    }
  }
  function handleDecrement(e) {
    e.preventDefault();
    if (count > 0) {
      setCount((prev) => {
        return prev - 1;
      });
    } else {
      setCount(projects?.length - 1);
    }
  }
  return (
    <div className="projects-body">
      <section className="project-slider">
        <button className="prev-btn btn" onClick={(e) => handleDecrement(e)}>
          &larr;
        </button>
        <button className="next-btn btn" onClick={(e) => handleIncrement(e)}>
          &rarr;
        </button>
        <ProjectSlide data={projects[count]} />
      </section>
      <ProjectDetail data={projects[count]} />
    </div>
  );
}

export default App;
