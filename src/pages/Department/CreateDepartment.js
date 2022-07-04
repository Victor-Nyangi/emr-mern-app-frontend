import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { createDepartment } from "../../redux/departments/departmentSlice";
import PageTitle from "../../components/PageTitle";

const CreateDepartment = () => {
  const [departmentData, setDepartmentData] = useState({
    name: "",
    description: "",
    updated_date: Date.now,
  });

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()

  const clear = () => {
    setDepartmentData({
      name: "",
      description: "",
      updated_date: Date.now,
    });
    setStatus("");
    setMessage("");
  };

  const newDepartment = (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage("Creating department , please wait.....");

    dispatch(createDepartment( {...departmentData }))
    setTimeout(() => {
      clear();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Add Department</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/departments">
          <button>Departments</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  name="name"
                  value={departmentData.name}
                  onChange={(e) =>
                    setDepartmentData({
                      ...departmentData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="description"
                name="description"
                rows={3}
                value ={departmentData.description}
                onChange={(e) =>
                    setDepartmentData({
                      ...departmentData,
                      description: e.target.value,
                    })
                  }
              >
                </textarea>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <Link
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </Link>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default CreateDepartment;
