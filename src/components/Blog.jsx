import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Blog = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setdata(response.data));
  }, []);
  return (
    <div>
      <h1>This is blog page</h1>
      {data.map((item) => {
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
