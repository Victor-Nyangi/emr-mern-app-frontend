import React from "react";
import Chart from "../assets/features/Chart";

import {
  ControlsIcon,
  ShareIcon,
  OutlineCogIcon,
  HeartIcon,
  RadioIcon,
  DropIcon,
  HeartBeatIcon,
  MessageIcon,
  VideoIcon,
  TimeIcon,
} from "../assets/icons";

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-7 gap-3 mt-5">
        <div className="container col-span-3 flex-col mx-auto w-full items-center justify-center">
          <div className="py-5 mx-auto">
            <div className="relative flex items-center justify-between">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Patients
              </h3>
              <ul className="flex items-center">
                <li className="flex items-center">
                  <span
                    aria-hidden="true"
                    className="absolute ml-2 w-3 h-3 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>

                  <a
                    href="/"
                    className="text-xs inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Out of range"
                    title="Out of range"
                  >
                    In Range
                  </a>
                </li>
                <li className="flex items-center">
                  <span
                    aria-hidden="true"
                    className="absolute ml-2 w-3 h-3 bg-green-600 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>

                  <a
                    href="/"
                    className="text-xs inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Out of range"
                    title="Out of range"
                  >
                    Out of Range
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="/"
                    className="text-xs inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Filter"
                    title="Filter"
                  >
                    Filter
                    <ControlsIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-xs inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Export"
                    title="Export"
                  >
                    Export
                    <ShareIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-col">
          <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-red-600 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user6.jpg"
                    alt="EMR patient"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Erica Rodrigues</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2 text-red-600"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-red-600" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-red-600 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user1.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Sipamia Pogba</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-red-600 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user3.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Andrew T.</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-red-600" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-gray-400 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user4.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Maria Anestakova</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2 text-gray-300"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-green-400 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user5.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Phil Maine</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-green-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2 text-indigo-800"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
          </ul>
          <div className="text-sm my-3 text-gray-400">
              Yesterday
          </div>
          <ul className="flex flex-col">
          <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-red-600 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user7.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Aneta Banger</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-red-600" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-red-600 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                    src="/images/user2.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">Stu Paul</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2 text-gray-300"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
            <li className="border-gray-400 flex flex-row space-between mb-2">
              <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                <span
                  aria-hidden="true"
                  className="w-3 h-3 bg-gray-400 border-2 border-white rounded-full mr-4"
                ></span>

                <div className="flex justify-center items-center mr-4">
                  <img
                    className="mx-auto object-cover rounded-full h-10 w-10"
                    src="/images/user8.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                </div>
                <div className="pl-1 md:mr-6">
                  <div className="text-gray-600 text-xs">
                    Assigned on Nov 23, 19
                  </div>
                  <div className="font-medium text-sm">John Doe</div>
                  <div className="text-gray-600 text-xs">Cycle starts 31st</div>
                </div>
                <div className="pl-1 md:mr-3 text-right">
                  <div className="text-gray-600 text-left text-xs">
                    Vital Status
                  </div>
                  <div className="flex text-between text-right">
                    <RadioIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <DropIcon className="w-6 h-6 mr-2 text-gray-300" aria-hidden="true" />
                    <HeartBeatIcon
                      className="w-6 h-6 mr-2 text-gray-300"
                      aria-hidden="true"
                    />
                    <HeartIcon className="w-6 h-6 mr-2 text-indigo-800" aria-hidden="true" />
                  </div>
                </div>
                <span className="w-14 text-right flex justify-end">
                  <OutlineCogIcon className="w-6 h-6 text-gray-300" aria-hidden="true" />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-span-4 transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white rounded-md">
          <div className="border-gray-400">
            <div className="flex flex-1 justify-between items-center p-4">
              <span className="flex">
                <>
                  <img
                    className="mx-auto object-cover rounded-full h-12 w-12 "
                    src="/images/user6.jpg"
                    alt="EMR user"
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="relative bottom-0 right-0 inline-block w-3 h-3 transform -translate-x-2 translate-y-7 bg-green-300 border-2 border-white rounded-full dark:border-gray-800"
                  ></span>
                </>
              </span>
              <div className="pl-1 md:mr-">
                <div className="text-gray-600 text-xs flex items-center">
                <TimeIcon className="w-2 h-2 mr-2" aria-hidden="true" /> 2:32 hours spent
                  <span>
                    <a href="/" className="text-xs text-indigo-700 font-medium ml-2">
                      See Time Logs
                    </a>
                  </span>
                </div>
                <div className="font-medium text-indigo-700 text-sm flex items-center">
                  Erica Rodrigues <TimeIcon className="w-2 h-2 ml-1" aria-hidden="true" /></div>
                <div className="text-gray-600 text-xs">23 years | Female</div>
              </div>
              <div className="pl-1 md:mr-3 text-right">
                <div className="flex text-between text-right items-center">
                  <MessageIcon className="w-7 h-7 mr-2" aria-hidden="true" />
                  <VideoIcon className="w-7 h-7 mr-2" aria-hidden="true" />
                    <a
                      href="/"
                      className="text-xs inline-flex items-center justify-center h-8 px-2 mr-3 border border-gray-400 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Filter"
                      title="Filter"
                    >
                      Vital Logs
                    </a>
                    <a
                      href="/"
                      className="text-xs inline-flex items-center justify-center h-8 px-2 border border-gray-400 font-medium tracking-wide text-dark transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Export"
                      title="Export"
                    >
                      Assign
                      <OutlineCogIcon className="w-4 h-4 ml-2" aria-hidden="true" />
                    </a>
                </div>
                <div className="text-gray-600 text-right text-xs mt-2">
                  Assign on Nov 23, 19
                </div>
              </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
                <div className="pl-1 md:mr-1">
                <div className="text-gray-600 text-xs font-medium flex items-center">
                <HeartIcon className="w-5 h-5 mr-2" aria-hidden="true" /> Blood Pressure
                </div>
                <div className="text-gray-400 text-xs flex items-center">
                  Assigned 7 days ago</div>
                <div className="text-red-600 text-xl font-bold mt-2">120/80</div>
                <div className="text-gray-400 text-xs flex items-center">
                  5 hours ago</div>
                  <div className="text-gray-400 text-xs flex items-center">
                 May 23 09:00 AM</div>
              </div>
              <div className="pl-1 md:mr-1">
                <div className="text-gray-600 text-xs font-medium flex items-center">
                <HeartBeatIcon className="w-5 h-5 mr-2" aria-hidden="true" /> Heart Beat
                </div>
                <div className="text-gray-400 text-xs flex items-center">
                  Assigned 7 days ago</div>
                <div className="text-green-600 text-xl font-bold mt-2">76</div>
                <div className="text-gray-400 text-xs flex items-center">
                  4 days ago</div>
              </div>
              <div className="pl-1 md:mr-1">
                <div className="text-gray-600 text-xs font-medium flex items-center">
                <RadioIcon className="w-5 h-5 mr-2" aria-hidden="true" /> Weight
                </div>
                <div className="text-gray-400 text-xs flex items-center">
                  Assigned 12 days ago</div>
                <div className="text-gray-400 text-md mt-3">Waiting</div>
              </div>
              <div className="pl-1 md:mr-1">
                <div className="text-gray-600 text-xs font-medium flex items-center">
                <DropIcon className="w-5 h-5 mr-2" aria-hidden="true" /> Blood Glucose
                </div>
                <div className="text-gray-400 text-xs flex items-center">
                  Assigned 2 days ago</div>
                <div className="text-gray-400 text-md mt-3">Waiting</div>
              </div>
              </div>
            </div>
          </div>
          <div>
            <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
              
              <Chart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
