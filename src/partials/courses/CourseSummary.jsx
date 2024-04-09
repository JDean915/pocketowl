import React from 'react';
import { RatingWithText } from '../../components/RatingWithText';

function D326card({ courseData }) {

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100 mb-1">{courseData.course_code} - {courseData.course_name}</h2><RatingWithText />
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2">Summary</div>
        </div>
        <div className="text-1xl text-slate-800 dark:text-slate-100 mr-2 mt-2">{courseData.summary}</div>
        <div className="text-2xl font-bold text-slate-800 dark:text-slate-100 mr-2 mt-3">Path to Competency</div>
        <div className="text-1xl text-slate-800 dark:text-slate-100 mr-2 mt-2">{courseData.path_to_competency}</div>
        
      </div>
    </div>
  );
}

export default D326card;