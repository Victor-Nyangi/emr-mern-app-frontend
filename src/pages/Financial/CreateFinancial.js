import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { createFinancial } from "../../redux/financials/financialSlice";
import { getPatients, reset } from "../../redux/patients/patientSlice";
import PageTitle from "../../components/PageTitle";

const CreateFinancial = () => {
  const [financialData, setFinancialData] = useState({
    patient_name: "",
    account_name: "",
    account_number: "",
    account_type: "",
    updated_date: Date.now,
  });
 
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()
  const { patients, isLoading, isError, message } = useSelector(
    (state) => state.patients
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getPatients());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  const clear = () => {
    setFinancialData({
      patient_name: "",
      account_name: "",
      account_number: "",
      account_type: "",
      updated_date: Date.now,
    });
    setStatus("");
  };

  const newFinancial = (e) => {
    e.preventDefault();
    setFinancialData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");

    dispatch(createFinancial( {...financialData }))

    setTimeout(() => {
      clear();
    }, 2000);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Add Financial</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/financials">
          <button>Financials</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Patient Name
                </label>

                <select
                  name="patient_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="patient_name"
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      patient_name: e.target.value,
                    })
                  }
                >
                  <option value="">-- Select patient --</option>
                  {patients &&
                    patients.map((patient, id) => (
                      <option
                        key={id}
                        value={`${patient.first_name} ${patient.last_name}`}
                      >{`${patient.first_name} ${patient.last_name}`}</option>
                    ))}
                </select>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Account Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="account_name"
                  placeholder="Account Name"
                  autoComplete="off"
                  name="account_name"
                  value={financialData.account_name}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      account_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Account Number
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="account_number"
                  id="account_number"
                  placeholder="Account Number"
                  autoComplete="off"
                  name="account_number"
                  value={financialData.account_number}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      account_number: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Account Type
              </label>
              <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="account_type"
                  id="account_type"
                  placeholder="Account type"
                  autoComplete="off"
                  name="account_type"
                  value={financialData.account_type}
                  onChange={(e) =>
                    setFinancialData({
                      ...financialData,
                      account_type: e.target.value,
                    })
                  }
                />
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

export default CreateFinancial;
