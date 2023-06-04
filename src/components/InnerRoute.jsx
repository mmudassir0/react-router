import React from "react";
import { NavLink } from "react-router-dom";

const InnerRoute = () => {
  return (
    <div className="inner">
      <h1>this is inner route link</h1>
      <NavLink to="../" relative="path">
        Go back
      </NavLink>
      <NavLink to="/">Main</NavLink>
    </div>
  );
};

export default InnerRoute;
