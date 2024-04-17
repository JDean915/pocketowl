import React from "react";

import AllCoursesCard from "../partials/courses/AllCoursesCard";
import AllCourseHeader from "../components/AllCourseHeader";

function AllCourses() {
  return (

    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Card (Customers) */}
        <AllCourseHeader />
        <AllCoursesCard />
      </div>
    </div>
  );
}

export default AllCourses;