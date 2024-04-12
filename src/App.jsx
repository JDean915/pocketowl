import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import CoursePage from "./pages/CoursePage";
import Aboutus from "./pages/AboutUs";

const supabase = createClient(
  "https://tqofpvsbigvicndmdnna.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb2ZwdnNiaWd2aWNuZG1kbm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxNzg3MzQsImV4cCI6MjAyNzc1NDczNH0.pXo0Xbj7845kvNixJDt4kZI70mj8tT5IIEPny5aZMjw"
);

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
