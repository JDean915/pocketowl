import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import CoursePage from "./pages/CoursePage";
import Aboutus from "./pages/AboutUs";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route exact path="/courses/:code" element={<CoursePage />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
          </Routes>
    </>
  );
}

export default App;
