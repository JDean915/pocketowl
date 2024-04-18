import React from "react";
import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function D326card2() {
  const [status, setStatus] = useState(false);

  function handleChange(e) {
    setStatus(e.target.checked);
  }

  return (
    <div class="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="mt-5 mx-5">
        <div class="flex flex-row justify-between items-center">
          <div>
            <h1 class="text-3xl font-medium text-black dark:text-white">
              Resource Completion
            </h1>
          </div>
          <div class="inline-flex space-x-2 items-center"></div>
        </div>
        <p class="text-slate-600 dark:text-slate-400">
          Hello, here are the resources for this course
        </p>

        <div id="tasks" class="my-5">
          <div
            id="task"
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
          >
            <div class="inline-flex items-center space-x-2">
              <input
                id={1}
                type="checkbox"
                checked={status}
                onChange={handleChange}
                className="h-5 w-5 rounded-full bg-transparent border-slate-400 text-green-500 focus:ring-slate-400"
              />
              <div class="text-slate-600 dark:text-slate-400">
                Practice Assessment Attempt #1
              </div>
            </div>
          </div>
          <div
            id="task"
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
          >
            <div class="inline-flex items-center space-x-2">
              <input
                id={2}
                type="checkbox"
                checked={status}
                onChange={handleChange}
                className="h-5 w-5 rounded-full bg-transparent border-slate-400 text-green-500 focus:ring-slate-400"
              />
              <div class="text-slate-600 dark:text-slate-400">
                Practice Assessment Attempt #1
              </div>
            </div>
          </div>
          <div
            id="task"
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
          >
            <div class="inline-flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-slate-400 hover:text-green-500 hover:cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Practice Quiz #1
              </div>
            </div>
          </div>
          <div
            id="task"
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
          >
            <div class="inline-flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-slate-400 hover:text-green-500 hover:cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Udemy Course
              </div>
            </div>
          </div>
          <div
            id="task"
            class="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent"
          >
            <div class="inline-flex items-center space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-slate-400 hover:text-green-500 hover:cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Practice Assessment Attempt #2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default D326card2;
