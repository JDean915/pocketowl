import React from "react";

import { Progress, Typography } from "@material-tailwind/react";

function D326card3() {
  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100">
          Competency Progress
        </h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start w-full flex-col gap-4"></div>
      <Progress value={100} size="lg" label="Completed" variant="gradient"/>
    </div>
    </div>
  );
}

export default D326card3;
