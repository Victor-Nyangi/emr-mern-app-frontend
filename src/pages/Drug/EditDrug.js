import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PageTitle from "../../components/PageTitle";

const EditDrug = () => {
  const [drugData, setDrugData] = useState({
    name: "",
    description: "",
    manufacter_date: "",
      expiry_date: "",
    updated_date: Date.now,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  let params = useParams();

  const clear = () => {
    setStatus("");
    setMessage("");
  };

  const drug_id = params.drug_id;

  useEffect(() => {
    const handleAsync = async () => {
      if (drug_id) {

      }
    };
    handleAsync();
    // eslint-disable-next-line
  }, [drug_id]);

  const newDrug = (e) => {
    e.preventDefault();
    setDrugData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");
    setMessage("Editing drug , please wait.....");

    setTimeout(() => {
      clear();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Edit Drug</PageTitle>

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
                value={drugData.description}
                onChange={(e) =>
                  setDrugData({
                    ...drugData,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <Link
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



export default EditDrug;
