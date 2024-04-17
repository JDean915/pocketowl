import React, { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";

import "./css/style.css";

import "./charts/ChartjsConfig";
import Banner from "./partials/Banner";

function App() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <Outlet />
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default App;
