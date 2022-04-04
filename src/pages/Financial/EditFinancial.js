import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PageTitle from "../../components/PageTitle";

const EditDepartment = () => {
  const [departmentData, setDepartmentData] = useState({
    name: "",
    description: "",
    updated_date: Date.now,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  let params = useParams();

  const clear = () => {
    setStatus("");
    setMessage("");
  };

  const department_id = params.department_id;

  useEffect(() => {
    const handleAsync = async () => {
      if (department_id) {

      }
    };
    handleAsync();
    // eslint-disable-next-line
  }, [department_id]);

  const newDepartment = (e) => {
    e.preventDefault();
    setDepartmentData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");
    setMessage("Editing department , please wait.....");
    
    setTimeout(() => {
      clear();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Edit Department</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/departments">
          <button>Departments</button>
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
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Description
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="description"
                name="description"
                rows={3}
                value={departmentData.description}
                onChange={(e) =>
                  setDepartmentData({
                    ...departmentData,
                    description: e.target.value,
                  })
                }
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


export default EditDepartment;
