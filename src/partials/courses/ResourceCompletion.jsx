import React, { useEffect, useState } from "react";
import supabase from "../../utils/SupaClient";

function D326card2({ resourceData }) {
  const [selectedItems, setSelectedItems] = useState([]);

  function checkboxHandler(e) {
    let isSelected = e.target.checked;
    let value = parseInt(e.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }

  return (
    <div className="overflow-auto col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="mt-5 mx-5">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-medium text-black dark:text-white">
              Resource Completion
            </h1>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400">
          Hello, here are the resources for this course
        </p>
        <div className="my-5">
              <div
                className="py-3 px-2 border-b border-slate-200 dark:border-slate-700"
              >
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(resourceData.course_id)}
                    value={resourceData.course_id}
                    onChange={checkboxHandler}
                    className="rounded-full text-green-500"
                  />
                  <span className="pl-5 text-slate-600 dark:text-slate-400">
                  {resourceData.resource_link}
                  </span>
                </label>
              </div>
        </div>
      </div>
    </div>
  );
};

export default D326card2;
