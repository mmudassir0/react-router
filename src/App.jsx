import { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  NavLink,
  Outlet,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/About";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import Download from "./components/Download";
import Home from "./components/Home";
import Layout from "./components/Layout";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/THree";
import NestedOne from "./components/NestedOne";
import NestedTwo from "./components/NestedTwo";
import Footer from "./components/Footer";
import InnerRoute from "./components/InnerRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {" "}
            {/*nested route */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />}>
              <Route index element={<One />} />
              <Route path="two" element={<Two />} />
              <Route path="three" element={<Three />}>
                <Route path="nested_one" element={<Outlet />}>
                  {/*when we want to see previous route then use it this is relitive path*/}
                  <Route index element={<NestedOne />} />
                  <Route path="inner" element={<InnerRoute />} />
                </Route>
                <Route path="nested_two" element={<NestedTwo />} />
              </Route>
            </Route>
            <Route path="blog" element={<Blog />} />
            <Route path="download" element={<Download />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
