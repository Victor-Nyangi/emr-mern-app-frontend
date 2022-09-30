import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  OutlineCogIcon,
  HeartIcon,
  RadioIcon,
  DropIcon,
  HeartBeatIcon,
  MessageIcon,
  VideoIcon,
  TimeIcon,
} from "../../assets/icons";
import { getPatient } from "../../redux/patients/patientSlice";
import PageTitle from "../../components/PageTitle";

const ViewPatient = () => {
  let params = useParams();

  const patient_id = params.patient_id;

  const [patient, setPatient] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    email: "",
    date_of_birth: "",
    gender: "",
    marital_status: "",
    education_level: "",
    income_level: "",
    occupation: "",
    size_of_family: "",
    emergency_contact: "",
    salutation: "",
    height: "",
    weight: "",
    blood_group: "",
    underlying_conditions: [],
    is_active: false,
    updated_date: Date.now,
  });


useEffect(() => {
  const handleAsync = async () => {
    if (patient_id) {

    }
  };
  handleAsync();
  // eslint-disable-next-line
}, [patient_id]);

  return (
    <>
         <div className="flex justify-between">
        <PageTitle></PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/patients">
          <button>Patients</button>
        </Link>
      </div>

        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <section className="grid grid-cols-7 gap-3 mt-5">
    <div className="py-3 col-span-4 flex-col mx-8 transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white rounded-md">

        <div className="border-gray-400">
            <div className="flex flex-1 justify-between items-center p-4">
              <span className="flex">
                <>
                  <img
                    className="mx-auto object-cover rounded-full h-12 w-12 "
                    src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    alt=""
                    aria-hidden="true"
                  />
                  <span
                    aria-hidden="true"
                    className="relative bottom-0 right-0 inline-block w-3 h-3 transform -translate-x-2 translate-y-7 bg-green-300 border-2 border-white rounded-full"
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
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24">
              <div className="grid gap-4 sm:grid-cols-2">

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
    </div>
    <div className="col-span-4 transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg bg-white rounded-md">
<div className="card">
  <div className="flex justify-between">
<span>Name</span>
<span>                {`${patient.last_name}`}
</span>
  </div>
</div>
</div>
    </section>
    </>
  )
}

export default ViewPatient;