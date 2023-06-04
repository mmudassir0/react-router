import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const linkstyle = {
    textDecoration: "underline",
    textUnderlineOffset: "10px",
    color: "red",
  };
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => (isActive ? linkstyle : null)}>
        Home
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Blog
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        About
      </NavLink>
      <NavLink
        to="/download"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Download
      </NavLink>
    </nav>
  );
};

export default Navbar;
