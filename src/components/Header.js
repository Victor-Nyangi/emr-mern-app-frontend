import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {  MailIcon, DropdownIcon,   HomeIcon,
  OutlinePersonIcon,
  OutlineCogIcon, } from "../assets/icons";

import IconHeader from "../assets/images/HealthX-location.png";
import { logout, reset } from "../redux/auth/authSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="px-0 sm:px-4 py-5 mx-auto sm:max-w-xl md:max-w-full mx-4">
      <div className="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="HealthX"
          title="HealthX"
          className="inline-flex items-center -ml-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 strokeCurrent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <img src={IconHeader} alt="HealthX location" className="h-7 w-7" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            HealthX
          </span>
        </a>
        <div className="flex-1 grid grid-cols-4  mx-16 hidden sm:inline">
          <div className="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              className="w-full py-2 text-sm text-grey-800 border rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 transition-colors duration-200 ease-in-out"
              placeholder="Search for patients..."
              autoComplete="off"
            />
          </div>
        </div>
        <ul className="flex items-center hidden space-x-8 lg:flex">

          <li>
            <Link to="channel"
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </Link>
          </li>
          <li>
            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
              aria-label="Account"
              aria-haspopup="true"
            >
              <span className="flex">
                <>
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/doctor.jpg"
                    alt="EMR doctor"
                    aria-hidden="true"
                  />

                  <span
                    aria-hidden="true"
                    onClick={onLogout}
                    className={`absolute p-1 top-10 right-0 inline-block text-sm text-white transform rounded bg-black border-2 border-white rounded  ${
                      isClicked ? "" : "hidden"
                    }`}
                  >
                    Logout
                  </span>
                </>

                <span className="text-xs font-bold ml-2 inline-flex items-center">{`Dr ${
                  user && user?.name
                }`}</span>

                <DropdownIcon
                  onClick={() => setIsClicked(!isClicked)}
                  className="text-xs inline-flex items-center"
                  aria-hidden="true"
                />
              </span>
            </button>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 z-10 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                  <img src={IconHeader} alt="HealthX location" className="h-7 w-7" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            HealthX
          </span>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                <div>
                  <a
                    className="w-full text-blue-500 flex items-center my-4 transition-colors duration-200 justify-start"
                    href="/"
                  >
                    <span className="text-left">
                    <HomeIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">Dashboard</span>
                  </a>

                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start"
                   href="/dashboard/patients"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Patients
                    </span>

                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start"
                   href="/dashboard/vitals"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Vitals
                    </span>

                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start"
                   href="/dashboard/services"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Services
                    </span>

                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                   href="/dashboard/departments"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Departments
                    </span>
                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                   href="/dashboard/drugs"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Drugs
                    </span>
                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                   href="/dashboard/medical-staff"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Medical Staff
                    </span>
                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                   href="/dashboard/billings"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Billings
                    </span>
                  </a>
                  <a
                    className="w-full text-dark flex items-center my-4 transition-colors duration-200 justify-start hover:text-green-500 active:text-white active:bg-indigo-900 rounded-r-md"
                   href="/dashboard/financials"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Financials
                    </span>
                    {/* <span
                aria-hidden="true"
                className="relative top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"
              ></span> */}
                  </a>
                  <a
                    className="w-full text-gray-500 flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/"
                  >
                    <span className="text-left">
                    <OutlineCogIcon className="w-5 h-5" aria-hidden="true" />

                    </span>
                    <span className="mx-4 text-sm font-normal">Settings</span>
                  </a>
                  {/* <a
                    className="w-full text-gray-500 flex items-center my-4 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/"
                  >
                    <span className="text-left">
                    <CartIcon className="w-5 h-5" aria-hidden="true" />

                    </span>
                    <span className="mx-4 text-sm font-normal">Shop</span>
                  </a> */}
                </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
