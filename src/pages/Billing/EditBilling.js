import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PageTitle from "../../components/PageTitle";

const EditBilling = () => {
  const [billingData, setBillingData] = useState({
    patient_name: "",
    service_charged: "",
    explanation: "",
    amount: 0,
    updated_date: Date.now,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  let params = useParams();

  const clear = () => {
    setStatus("");
    setMessage("");
  };

  const billing_id = params.billing_id;

  useEffect(() => {
    const handleAsync = async () => {
      if (billing_id) {
      }
    };
    handleAsync();
    // eslint-disable-next-line
  }, [billing_id]);

  const newBilling = (e) => {
    e.preventDefault();
    setBillingData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");
    setMessage("Editing billing , please wait.....");


    setTimeout(() => {
      clear();
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Edit Billing</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/billings">
          <button>Billings</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Patient Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="text"
                  id="patient_name"
                  placeholder="Patient Name"
                  autoComplete="off"
                  name="patient_name"
                  value={billingData.patient_name}
                  onChange={(e) =>
                    setBillingData({
                      ...billingData,
                      patient_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Service Charged
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="text"
                  id="service_charged"
                  placeholder="Service Charged"
                  autoComplete="off"
                  name="service_charged"
                  value={billingData.service_charged}
                  onChange={(e) =>
                    setBillingData({
                      ...billingData,
                      service_charged: e.target.value,
                    })
                  }
                />
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
        </div>
      </>
    </>
  );
};



export default EditBilling;
