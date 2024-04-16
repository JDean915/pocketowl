import React from "react";
import Icon from "../../images/icon-01.svg";
import { NavLink } from "react-router-dom";

function AboutUsCard2() {
  return (
    <div className="overflow-auto max-h-[850px] col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-bold text-3xl text-slate-800 dark:text-slate-100 mb-1">
          Meet the Team.
        </h2>
      </header>
      <div className="flex flex-col col-span-4 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        <div className="px-5 pt-5">
          <header className="flex justify-between items-start mb-2">
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
              Jacob Dean
            </h2>
            <div className="flex flex-row gap-3">
              <NavLink
                end
                to="https://www.linkedin.com/in/jacob-dean-b9ba11260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <button class="bg-blue-600 p-2 font-semibold text-white  flex- space-x-2 rounded">
                  <svg
                    class="w-5 h-5 fill-current"
                    role="img"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                    </g>
                  </svg>
                </button>
              </NavLink>
              <NavLink end to="https://github.com/JDean915" target="_blank">
                <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="w-5"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </button>
              </NavLink>
            </div>
          </header>

          <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1">
            Biography 👋
            <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ex
              tortor, tincidunt et ante sit amet, molestie tristique tortor.
              Phasellus egestas nisi nisi, sit amet fermentum leo laoreet eget.
              Nulla vel pellentesque risus. Ut mi elit, iaculis a molestie eu,
              consequat a lectus. Praesent eu porta mi, eu auctor nisi. Vivamus
              leo magna, rhoncus in nisl et, congue malesuada tortor. Maecenas
              vehicula lorem id enim consequat convallis.
            </p>
          </div>

          <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1 mt-2">
            Projects
            <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2 mb-3">
              Project #1
              <br />
              Project #2
              <br />
              Project #3
              <br />
            </p>
          </div>
        </div>

        <div className="flex flex-col col-span-4 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="px-5 pt-5">
            <header className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Diego Marrs
              </h2>
              <div className="flex flex-row gap-3">
                <NavLink
                  end
                  to="https://www.linkedin.com/in/diego-marrs/"
                  target="_blank"
                >
                  <button class="bg-blue-600 p-2 font-semibold text-white  flex- space-x-2 rounded">
                    <svg
                      class="w-5 h-5 fill-current"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                      </g>
                    </svg>
                  </button>
                </NavLink>
                <NavLink end to="https://github.com/StaticCloud" target="_blank">
                  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </NavLink>
              </div>
            </header>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1">
              Biography 👋
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex tortor, tincidunt et ante sit amet, molestie tristique
                tortor. Phasellus egestas nisi nisi, sit amet fermentum leo
                laoreet eget. Nulla vel pellentesque risus. Ut mi elit, iaculis
                a molestie eu, consequat a lectus. Praesent eu porta mi, eu
                auctor nisi. Vivamus leo magna, rhoncus in nisl et, congue
                malesuada tortor. Maecenas vehicula lorem id enim consequat
                convallis.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1 mt-2">
              Projects
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2 mb-3">
                Project #1
                <br />
                Project #2
                <br />
                Project #3
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col col-span-4 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="px-5 pt-5">
            <header className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Cole Turjanica
              </h2>
              <div className="flex flex-row gap-3">
                <NavLink
                  end
                  to="https://www.linkedin.com/in/cole-turjanica-19487720b/"
                  target="_blank"
                >
                  <button class="bg-blue-600 p-2 font-semibold text-white  flex- space-x-2 rounded">
                    <svg
                      class="w-5 h-5 fill-current"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                      </g>
                    </svg>
                  </button>
                </NavLink>
                <NavLink end to="https://github.com/McFlanky" target="_blank">
                  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </NavLink>
              </div>
            </header>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1">
              Biography 👋
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex tortor, tincidunt et ante sit amet, molestie tristique
                tortor. Phasellus egestas nisi nisi, sit amet fermentum leo
                laoreet eget. Nulla vel pellentesque risus. Ut mi elit, iaculis
                a molestie eu, consequat a lectus. Praesent eu porta mi, eu
                auctor nisi. Vivamus leo magna, rhoncus in nisl et, congue
                malesuada tortor. Maecenas vehicula lorem id enim consequat
                convallis.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1 mt-2">
              Projects
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2 mb-3">
                Project #1
                <br />
                Project #2
                <br />
                Project #3
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-4 sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
          <div className="px-5 pt-5">
            <header className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                Unknown
              </h2>
              <div className="flex flex-row gap-3">
                <NavLink
                  end
                  to="https://www.linkedin.com/in/cole-turjanica-19487720b/"
                  target="_blank"
                >
                  <button class="bg-blue-600 p-2 font-semibold text-white  flex- space-x-2 rounded">
                    <svg
                      class="w-5 h-5 fill-current"
                      role="img"
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                      </g>
                    </svg>
                  </button>
                </NavLink>
                <NavLink end to="https://github.com/McFlanky" target="_blank">
                  <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      class="w-5"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </NavLink>
              </div>
            </header>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1">
              Biography 👋
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ex tortor, tincidunt et ante sit amet, molestie tristique
                tortor. Phasellus egestas nisi nisi, sit amet fermentum leo
                laoreet eget. Nulla vel pellentesque risus. Ut mi elit, iaculis
                a molestie eu, consequat a lectus. Praesent eu porta mi, eu
                auctor nisi. Vivamus leo magna, rhoncus in nisl et, congue
                malesuada tortor. Maecenas vehicula lorem id enim consequat
                convallis.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-400 dark:text-white uppercase mb-1 mt-2">
              Projects
              <p className="text-slate-800 dark:text-slate-300 normal-case text-xs mt-2 mb-3">
                Project #1
                <br />
                Project #2
                <br />
                Project #3
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutUsCard2;
