import React from "react";

import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard10 from "../partials/dashboard/DashboardCard01";

function Dashboard() {

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Welcome banner */}
      <WelcomeBanner />

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card (Customers) */}
        <DashboardCard10 />
      </div>
    </div>

  );
}

export default Dashboard;
