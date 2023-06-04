import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NestedOne = () => {
  return (
    <div>
      <h1>This is nested route One</h1>
      <NavLink to="inner">inner</NavLink>
      <NavLink to="../" relative="path">
        parent link
      </NavLink>
      {/* <Outlet /> */}
    </div>
  );
};

export default NestedOne;
