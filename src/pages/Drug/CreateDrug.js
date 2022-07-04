import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'

import { createDrug } from "../../redux/drugs/drugSlice";
import PageTitle from "../../components/PageTitle";

const CreateDrug = () => {
  const [drugData, setDrugData] = useState({
    name: "",
    description: "",
    manufacter_date: "",
    expiry_date: "",
    updated_date: Date.now,
  });

  const dispatch = useDispatch()

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const clear = () => {
    setDrugData({
      name: "",
      description: "",
      manufacter_date: "",
      expiry_date: "",
      updated_date: Date.now,
    });
    setStatus("");
    setMessage("");
  };

  const newDrug = (e) => {
    e.preventDefault();
    setStatus("success");
    setMessage("Creating drug , please wait.....");

    dispatch(createDrug( {...drugData }))
    setTimeout(() => {
      clear();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Add Drug</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/drugs">
          <button>Drugs</button>
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
                  value={drugData.name}
                  onChange={(e) =>
                    setDrugData({
                      ...drugData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Manufacture date
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="date"
                  id="manufacter_date"
                  placeholder="Manufacture Date"
                  required
                  autoComplete="off"
                  name="manufacter_date"
                  value={drugData.manufacter_date}
                  onChange={(e) =>
                    setDrugData({
                      ...drugData,
                      manufacter_date: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Expiry date
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="date"
                  id="expiry_date"
                  placeholder="Expiry date"
                  autoComplete="off"
                  name="expiry_date"
                  value={drugData.expiry_date}
                  onChange={(e) =>
                    setDrugData({
                      ...drugData,
                      expiry_date: e.target.value,
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
                value ={drugData.description}
                onChange={(e) =>
                    setDrugData({
                      ...drugData,
                      description: e.target.value,
                    })
                  }
              >
                </textarea>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <Link to=""
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

export default CreateDrug;
