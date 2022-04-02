import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {  editService, reset } from "../../redux/services/serviceSlice";

import PageTitle from "../../components/PageTitle";

const EditService = () => {

  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    charge: "",
    main_purpose: "",
    updated_date: Date.now,
  });
  
  const dispatch = useDispatch()
  
  const [status, setStatus] = useState("");
  let params = useParams();

  const service_id = params.service_id;
  
  // const { service, isLoading, isError, message } = useSelector(
  //   (state) => state.services);
    
    
  //   useEffect(() => {
      
  //     // if (isError) {
  //     //   console.log(message);
  //     // }

  //     // dispatch(getService(service_id ))
      
  //     return () => {
  //       dispatch(reset());
  //     };
  //   // eslint-disable-next-line
    
  // }, [service_id, isError, message, dispatch]);

  const newService = (e) => {
    e.preventDefault();
    setServiceData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    dispatch(editService( service_id, serviceData ))

    setStatus("success");

    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  // const submitValue = (e) => {
  //   // e.preventDefault();
  //   setServiceData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // if (isLoading) {
  //   return <p>Loading</p>
  // }

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Edit Service</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/services">
          <button>Services</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  name="name"
                  value={serviceData.name}
                  onChange={(e) => setServiceData({
                    ...serviceData,
                    name: e.target.value,
                  })}
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Charge
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  id="charge"
                  placeholder="Charge"
                  autoComplete="off"
                  name="charge"
                  value={serviceData.charge}
                  onChange={(e) => setServiceData({
                    ...serviceData,
                    charge: e.target.value,
                  })}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Main Purpose
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="main_purpose"
                name="main_purpose"
                rows={3}
                value={serviceData.main_purpose}
                onChange={(e) => setServiceData({
                  ...serviceData,
                  main_purpose: e.target.value,
                })}
              ></textarea>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="description"
                name="description"
                rows={3}
                value={serviceData.description}
                onChange={(e) => setServiceData({
                  ...serviceData,
                  description: e.target.value,
                })}
              ></textarea>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <Link to=""
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Edit
              </Link>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default EditService;
