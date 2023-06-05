import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Download = () => {
  const [input, setinput] = useState("");
  const detail = [
    { name: "mudassir", gender: "male" },
    { name: "Ali", gender: "male" },
    { name: "fatima", gender: "female" },
    { name: "iqra", gender: "female" },
    { name: "hina", gender: "female" },
  ];
  const [searchParam, setSearchParam] = useSearchParams();
  const getType = searchParam.get("gender");
  const displayName = getType
    ? detail.filter((name) => name.gender === getType)
    : detail;
  console.log(input);
  return (
    <div>
      <h1>This is Download page</h1>
      <input type="text" onChange={(event) => setinput(event.target.value)} />
      <p>{searchParam.get("type")}</p>
      <p>{searchParam.get("name")}</p>
      <p>{searchParam.get("email")}</p>
      <p>{searchParam.get("password")}</p>
      {/* <p>{searchParam.toString()}</p> */}
      {displayName.map((item) => (
        <>
          <h1 style={{ color: item.gender === "male" ? "red" : "blue" }}>
            {item.name}
          </h1>
        </>
      ))}
    </div>
  );
};

export default Download;
