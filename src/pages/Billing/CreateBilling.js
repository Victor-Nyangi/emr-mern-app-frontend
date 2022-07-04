import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { createBilling } from "../../redux/billings/billingSlice";
import { getPatients, reset } from "../../redux/patients/patientSlice";
import { getServices } from "../../redux/services/serviceSlice";

import PageTitle from "../../components/PageTitle";

const CreateBilling = () => {
  const [billingData, setBillingData] = useState({
    patient_name: "",
    service_charged: "",
    explanation: "",
    amount: 0,
    updated_date: Date.now,
  });
  const [status, setStatus] = useState("");

  const dispatch = useDispatch()
  const { services, isLoading, isError, message } = useSelector(
    (state) => state.services
  );

  const { patients } = useSelector(
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
    dispatch(getServices());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);


  const clear = () => {
    setBillingData({
      patient_name: "",
      service_charged: "",
      explanation: "",
      amount: 0,
      updated_date: Date.now,
    });
    setStatus("");
  };

  const newBilling = (e) => {
    e.preventDefault();
    setBillingData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");

    dispatch(createBilling( {...billingData }))

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
        <PageTitle>Add Billing</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/billings">
          <button>Billings</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Patient Name
                </label>

                <select
                  name="patient_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="patient_name"
                  onChange={(e) =>
                    setBillingData({
                      ...billingData,
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Service
                </label>
              <select
                  name="service_charged"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="service_charged"
                  onChange={(e) =>
                    setBillingData({
                      ...billingData,
                      service_charged: e.target.value,
                    })
                  }
                >
                  <option value="">-- Select service --</option>
                  {services &&
                    services.map((service, id) => (
                      <option
                        key={id}
                        value={`${service.name}`}
                      >{`${service.name}`}</option>
                    ))}
                </select>
                </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Amount
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="number"
                  id="amount"
                  placeholder="Amount"
                  autoComplete="off"
                  name="amount"
                  value={billingData.amount}
                  onChange={(e) =>
                    setBillingData({
                      ...billingData,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Explanation
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="explanation"
                name="explanation"
                rows={3}
                value={billingData.explanation}
                onChange={(e) =>
                  setBillingData({
                    ...billingData,
                    explanation: e.target.value,
                  })
                }
              ></textarea>
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

export default CreateBilling