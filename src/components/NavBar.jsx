import React from "react";
import menuImg from "../assets/menu.png";
import closeImg from "../assets/close.png";

function NavBar({ projects, count, navOpen, handleNav }) {
  const hamburgerBtn = (
    <img
      className="nav-img"
      src={menuImg}
      alt="menu-image"
      onClick={(e) => handleNav(e)}
    />
  );
  const closeBtn = (
    <img
      className="nav-img"
      src={closeImg}
      alt="close-image"
      onClick={(e) => handleNav(e)}
    />
  );

  return (
    <nav className="nav-bar">
      {!navOpen && hamburgerBtn}
      {navOpen && closeBtn}
      <div className="nav-content">
        <h2>Projects</h2>
        <h2>
          {count + 1} / {projects.length}
        </h2>
      </div>
    </nav>
  );
}

export default NavBar;
