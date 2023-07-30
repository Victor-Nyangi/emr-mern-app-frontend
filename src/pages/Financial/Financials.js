import React, { useState, useEffect } from "react";
import { getFinancials, reset } from "../../redux/financials/financialSlice";
import SectionHeader from "../../components/SectionHeader";
// import Pagination from "../../components/Pagination";
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment'
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Financials = () => {
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const { financials, isLoading, isError, message } = useSelector(
    (state) => state.financials
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getFinancials());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  setTimeout(() => {
    setStatus("");
  }, 2000);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
      <SectionHeader title={'Financials'} main_page={'financial'} data_title={'financial'} />

        <div className="overflow-hidden overflow-x-auto border border-gray-100 rounded">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="sticky left-0 px-4 py-2 text-left bg-gray-50">
                  <label className="sr-only" htmlFor="row_all">
                    Select All
                  </label>
                  <input
                    className="w-5 h-5 border-gray-200 rounded"
                    type="checkbox"
                    id="row_all"
                  />
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Patient Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Account Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Account Number
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Account Type
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Date
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {financials &&
                financials.map((financial) => (
                  <tr key={financial._id}>
                    <td className="sticky left-0 px-4 py-2 bg-white">
                      <label className="sr-only" htmlFor="row_1">
                        Row 1
                      </label>
                      <input
                        className="w-5 h-5 border-gray-200 rounded"
                        type="checkbox"
                        id="row_1"
                      />
                    </td>
                    <td className="px-4 py-2 font-medium text-gray-900">
                      {financial?.patient_name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {financial?.account_name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {financial?.account_number}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {financial?.account_type}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                    {moment(financial?.updated_date).format("MMMM Do YYYY")}

                    </td>
                    <td className="px-4 py-2 text-gray-700">
                    <Link
                      className="my-6 text-xs"
                      to=""
                    >
                      <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                        View
                      </button>
                    </Link>
                    <Link
                      className="my-6 text-xs"
                      to={`/dashboard/edit/financial/${financial._id}`}
                    >
                      <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                        Edit
                      </button>
                    </Link>
                  </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

      </section>
    </>
  );
};


export default Financials;
