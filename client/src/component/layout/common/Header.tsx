import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";

import { removeToken } from "@util/comm-util";
import { themeStore, sidebarStore } from "@store/index";

const ARR_THEME = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter"
];

function Header() {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useAtom(sidebarStore);
  const setTheme = useUpdateAtom(themeStore);

  function handleTheme(theme: string) {
    setTheme(theme);
  }

  function handleLogOut() {
    removeToken();
    localStorage.removeItem("email");
    navigate("/login");
  }

  return (
    <nav className="fixed z-30 w-full bg-neutral text-neutral-content">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 mr-2 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100"
              onClick={() => setSidebar(!sidebar)}
            >
              <svg
                id="toggleSidebarMobileHamburger"
                className={(!sidebar && "w-6 h-6") || "w-6 h-6 hidden"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className={(sidebar && "w-6 h-6") || "w-6 h-6 hidden"}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <a
              href="https://demo.themesberg.com/windster/"
              className="text-xl font-bold flex items-center lg:ml-2.5"
            >
              <img
                src="https://demo.themesberg.com/windster/images/logo.svg"
                className="h-6 mr-2"
                alt="Windster Logo"
              />
              <span className="self-center whitespace-nowrap">Test Page</span>
            </a>
            <form
              action="#"
              method="GET"
              className={
                (!sidebar && "lg:block lg:pl-32") || "hidden lg:block lg:pl-32"
              }
            >
              <label htmlFor="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center">
            <button
              id="toggleSidebarMobileSearch"
              type="button"
              className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="items-center hidden lg:flex">
              <div title="Change Theme" className="dropdown dropdown-end">
                <div tabIndex={0} className="gap-1 normal-case btn btn-ghost">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current md:h-6 md:w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                  <span className="hidden md:inline">Theme</span>
                  <svg
                    width="12px"
                    height="12px"
                    className="hidden w-3 h-3 ml-1 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <div className="dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
                  <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
                    {ARR_THEME.map((m, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-base-content"
                        data-set-theme="theme"
                        data-act-classname="outline"
                        onClick={() => handleTheme(m)}
                      >
                        <div
                          data-theme={m}
                          className="w-full font-sans cursor-pointer bg-base-100 text-base-content"
                        >
                          <div className="grid grid-cols-5 grid-rows-3">
                            <div className="flex col-span-5 row-span-3 row-start-1 gap-1 px-4 py-3">
                              <div className="flex-grow text-sm font-bold">
                                {m}
                              </div>
                              <div className="flex flex-wrap flex-shrink-0 gap-1">
                                <div className="w-2 rounded bg-primary"></div>
                                <div className="w-2 rounded bg-secondary"></div>
                                <div className="w-2 rounded bg-accent"></div>
                                <div className="w-2 rounded bg-neutral"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mb-1">
                <div
                  className="tooltip tooltip-bottom"
                  data-tip="Log out"
                  onClick={handleLogOut}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Header };
