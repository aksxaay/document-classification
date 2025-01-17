import React from "react";

const SidePanel = () => {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 max-h-screen w-60 bg-white shadow-md">
        <div className="flex h-full flex-col justify-between">
          <div className="flex-grow">
            <div className="border-b px-4 py-6 text-center">
              <h1 className="text-xl font-bold leading-none">
                <span className="text-yellow-700">Admin</span> Dashboard
              </h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="flex items-center rounded-xl bg-yellow-200 py-3 px-4 text-sm font-bold text-yellow-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="mr-4 text-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    Plan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidePanel;
