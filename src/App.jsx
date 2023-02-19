import React, { useEffect, useState } from "react";
import { projects } from "./data/projects";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Inventory from "./components/Inventory";

function App() {
  const [selected, setSelected] = useState("all");
  const [count, setCount] = useState(0);

  const filtered = projects.filter((project) => {
    if (selected === "all") {
      return true;
    } else {
      let match = 0;
      project.technologies.forEach((item) => {
        if (item.toLowerCase() === selected) {
          match++;
        }
      });

      if (match > 0) return true;
    }
  });

  function handleChange(e) {
    e.preventDefault();
    const item = e.target.innerHTML.toLowerCase();
    setCount(0);
    if (selected !== item) {
      setSelected(item);
    } else {
      setSelected("all");
    }
  }

  function handleIncrement(e) {
    e.preventDefault();
    if (count < filtered.length - 1) {
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
      setCount(filtered.length - 1);
    }
  }
  return (
    <>
      <Profile />
      <Inventory selected={selected} handleChange={handleChange} />
      <Projects
        projects={filtered}
        count={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
    </>
  );
}

export default App;
