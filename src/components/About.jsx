import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";

const About = () => {
  const linkstyle = {
    textDecoration: "underline",
    color: "red",
  };
  return (
    <div>
      <h1>This is about page</h1>
      <NavLink
        to="/about"
        end
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Dashboard
      </NavLink>
      <NavLink to="two" style={({ isActive }) => (isActive ? linkstyle : null)}>
        Two
      </NavLink>
      <NavLink
        to="three"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Three
      </NavLink>
      <Outlet />
    </div>
  );
};

export default About;
