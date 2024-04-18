import React from "react";

import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import FeedbackRequest from "../partials/dashboard/FeedbackRequest";

function Dashboard() {

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Welcome banner */}
      <WelcomeBanner />

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card (Customers) */}
        <DashboardCard01 />
        <FeedbackRequest />
      </div>
    </div>

  );
}

export default Dashboard;
