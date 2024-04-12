import React from "react";
import { Link } from "react-router-dom";
import sections from "./Sections";

const Menu = () => {
  const sectionLinks = sections.map((section, index) => (
    <Link key={index} to={`/${section.toLowerCase()}`} className={`menu-items item-${index + 2}`}>
      {section}
    </Link>
  ));

  return (
    <div className="desktop-menu">
      <Link to="/" className="menu-items item-1">Home</Link>
      {sectionLinks}
      <Link to="/contact" className="menu-items item-5">Contact</Link>
      <Link to="/about" className="menu-items item-6">About</Link>
    </div>
  );
};

export default Menu;
