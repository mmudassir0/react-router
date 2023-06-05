import React, { useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Blog = () => {
  const [data, setdata] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const filterType = searchParam.get("userId");
  const displayData = filterType
    ? data.filter((item) => item.userId == filterType)
    : data;
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setdata(response.data));
  }, []);
  // this function is use to merge parameter
  const searchParamFilter = (key, value) => {
    setSearchParam((prev) => {
      if (value === null) {
        prev.delete(key);
      } else {
        prev.set(key, value);
      }
      return prev;
    });
  };
  return (
    <div>
      <h1>This is blog page</h1>
      <Link to="?userId=1">1</Link>
      <Link to="?userId=2">2</Link>
      <Link to="?userId=3">3</Link>
      <Link to="/blog">All</Link>
      <button onClick={() => setSearchParam("?userId=1")}>1</button>
      <button onClick={() => searchParamFilter("usreId", 2)}>2</button>
      <button onClick={() => setSearchParam({ userId: 3 })}>3</button>
      <button onClick={() => setSearchParam({ userId: "" })}>all</button>
      <button onClick={() => searchParamFilter("usreId", null)}>reset</button>

      {displayData.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/blog/${item.id}`} className="Link">
              <h2>
                {item.id}. {item.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
