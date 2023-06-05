import React, { useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Blog = () => {
  const [data, setdata] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();
  const filterType = searchParam.get("userId");
  console.log(filterType, "filtertype");
  const displayData = data;
  console.log(
    data.filter((item) => console.log(item.userId === "1")),
    "filter id"
  );
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setdata(response.data));
  }, []);
  return (
    <div>
      <h1>This is blog page</h1>
      <h1>{filterType}</h1>
      {/* {data.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/blog/${item.id}`} className="Link">
              <h2>
                {item.id}. {item.title}
              </h2>
            </Link>
          </div>
        );
      })} */}
    </div>
  );
};

export default Blog;
