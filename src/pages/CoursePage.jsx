import React, { useEffect, useState } from "react";

import CourseSummary from "../partials/courses/CourseSummary";
import ResourceCompletion from "../partials/courses/ResourceCompletion";
import CompetencyProgress from "../partials/courses/CompetencyProgress";

import supabase from '../utils/SupaClient'
import { useParams } from "react-router-dom";

function CoursePage() {
  const { code } = useParams()
  const [courseData, setCourseData] = useState({})
  const [resourceData, setResourceData] = useState({})

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
  }, [code])

  useEffect(() => {
    const getResourceData = async () => {
      let { data, error } = await supabase
        .from('Resource')
        .select('*')
        .eq('course_code', code)
        .single();

      if (data) {
        setResourceData(data)
      }
    }

    getResourceData()
  }, [code])


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        <CompetencyProgress />
        {courseData && <CourseSummary courseData={courseData} />}
        {resourceData && <ResourceCompletion resourceData={resourceData} />}
      </div>
    </div>
  );
}

export default CoursePage;
