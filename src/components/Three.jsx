import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const Three = () => {
  const linkstyle = {
    textDecoration: "underline",
    color: "red",
  };
  return (
    <div>
      <h1>This is page Three</h1>
      <NavLink
        to="nested_one"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Nested One
      </NavLink>
      <NavLink
        to="nested_two"
        style={({ isActive }) => (isActive ? linkstyle : null)}
      >
        Nested Two
      </NavLink>
      <NavLink to=".">parent link</NavLink>
      <Outlet />
    </div>
  );
};

export default Three;
