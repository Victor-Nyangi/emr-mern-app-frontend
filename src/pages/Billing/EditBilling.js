import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import {
  editBilling,
  fetchBilling,
} from "../../redux/servicess/billing";
import PageTitle from "../../components/PageTitle";
import { connect } from "react-redux";

const EditBilling = ({ editBilling, fetchBilling }) => {
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
        fetchBilling(billing_id, (response) => {
          const { status } = response;

          if (status === "success") {
            const billing = response.data;
            setBillingData({
              patient_name: billing.patient_name,
              service_charged: billing.service_charged,
              explanation: billing.explanation,
              amount: billing.amount,
              updated_date: billing.updated_date,
            });
          } else {
            setStatus("error");
            setMessage(
              response.message
                ? response.message
                : " Technical error ocurred , contact administrator."
            );
          }
        });
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

    editBilling(billing_id, billingData, (res) => {
      const { status, message } = res;
      setStatus(status);
      setMessage(message);
    });

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
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Patient Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Service Charged
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Amount
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Explanation
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

const mapDispatchToProps = (dispatch) => {
  return {
    editBilling: (data, onResponse) =>
      dispatch(editBilling(data, onResponse)),
    fetchBilling: (id, onResponse) =>
      dispatch(fetchBilling(id, onResponse)),
  };
};

export default connect(null, mapDispatchToProps)(EditBilling);
