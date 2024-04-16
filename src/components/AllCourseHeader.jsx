import React from "react";

function AllCourseHeader() {
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">
          All Courses for the B.S. Software Engineering
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start w-full flex-col gap-4">
          Below is a master list of all of the current courses in the BSSE degree path.
        </div>
      </div>
    </div>
  );
}

export default AllCourseHeader;