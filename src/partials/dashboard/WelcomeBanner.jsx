import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-blue-200 dark:bg-blue-800 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      </div>
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, Evan Stevens! 👋</h1>
        <p className="dark:text-indigo-200">Here is an overview of your dashboard:</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
