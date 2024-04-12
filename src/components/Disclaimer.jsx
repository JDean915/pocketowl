import React from "react";

function Disclaimer() {
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">
          Notice of Non-Affiliation and Disclaimer
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start w-full flex-col gap-4">
          We are not affiliated, associated, authorized, endorsed by, or in any
          way officially connected with Western Governors University, or any of
          its subsidiaries or its affiliates. None of the links or information
          provided in this application are official Western Governors University
          resources or intellectual property. The resources and learning guides
          provided in this application are based off of student feedback and are
          not official Western Governors University course material. All direct
          links are third-party resources that we feel are helpful to the
          respective course.
          <br />
          <br />
          Furthermore, the team at Pocket Owl will NEVER ask for official WGU
          credentials and all authorization methods used are independent to WGU
          systems. The application uses Supbabase Auth and data handling to
          ensure a high-level of security at all times.
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
