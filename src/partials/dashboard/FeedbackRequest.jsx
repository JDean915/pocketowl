import React from "react";

function FeedbackRequest() {
  return (
    <div className="relative col-span-full xl:col-span-full bg-blue-200 dark:bg-blue-700 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div>
        <p className="flex justify-center dark:text-indigo-200">
          Please help improve our application by submitting feedback under the
          settings tab and rating the courses upon completion!
        </p>
      </div>
    </div>
  );
}

export default FeedbackRequest;
