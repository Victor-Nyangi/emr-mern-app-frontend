import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBillings, reset } from "../../redux/billings/billingSlice";

import moment from 'moment';
import SectionHeader from "../../components/SectionHeader";
// import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
// let PageSize = 10;

const Billings = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentTableData, setTableData] = useState([])
  const [status, setStatus] = useState("");

  // const onPageChangeTable = (p) => {
  //   setPageTable(p);
  // };

  const dispatch = useDispatch();
  const { billings, isLoading, isError, message } = useSelector(
    (state) => state.billings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getBillings());
    // updateBillings(billings)

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // const updateBillings = async (data) => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   setTableData(
  //     data.slice(firstPageIndex, lastPageIndex)
  //   );
  // };

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return billings.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  // console.log(currentTableData,"curretnTable")

  setTimeout(() => {
    setStatus("");
  }, 2000);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
      <SectionHeader title={'Billings'} main_page={'billing'} data_title={'billings'} />

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
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Patient Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Service Charged
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Explanation
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Amount
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Date
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {billings &&
                billings.map((billing) => (
                  <tr key={billing._id}>
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
                      {billing.patient_name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {billing.service_charged}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {billing.explanation}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {billing.amount}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {moment(billing?.updated_date).format("MMMM Do YYYY")}
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
                      to={`/dashboard/edit/billing/${billing._id}`}
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
        {/* <Pagination
        currentPage={currentPage}
        totalCount={billings.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      /> */}
      </section>
    </>
  );
};

export default Billings
