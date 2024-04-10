import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard05 from "../partials/dashboard/DashboardCard01";
import CourseSummary from "../partials/courses/CourseSummary";
import ResourceCompletion from "../partials/courses/ResourceCompletion";
import CompetencyProgress from "../partials/courses/CompetencyProgress";

import supabase from '../utils/SupaClient'
import { useParams } from "react-router-dom";

function CoursePage() {
  const { code } = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [courseData, setCourseData] = useState({})

  useEffect(() => {
    const getCourseData = async () => {
      let { data, error } = await supabase
        .from('Course')
        .select('*')
        .eq('course_code', code)
        .single();
  
      if (data) {
        setCourseData(data)
      }
    }

    getCourseData()
  }, [])

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              <CompetencyProgress />
              {courseData && <CourseSummary courseData={courseData}/>}
              <ResourceCompletion />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoursePage;
