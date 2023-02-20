import React from "react";

function MobileMenu({ selected, handleChange }) {
  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "Figma",
    "Group",
  ];
  return (
    <div className="mobile-menu">
      <h2>Inventory</h2>
      <ul className="inv-items">
        {items.map((item) => (
          <li
            className={selected == item.toLowerCase() ? "selected" : ""}
            onClick={handleChange}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu;
