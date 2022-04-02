import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionHeader from "../../components/SectionHeader";
// import Pagination from "../../components/Pagination";
import { Link } from "react-router-dom";
import { getDrugs, reset } from "../../redux/drugs/drugSlice";
import moment from "moment";

const Drugs = () => {
  // const [totalResults, setTotalResults] = useState(0);
  // const [pageTable, setPageTable] = useState(1);
  const [status, setStatus] = useState("");

  // const resultsPerPage = 10;

  // const onPageChangeTable = (p) => {
  //   setPageTable(p);
  // };

  const dispatch = useDispatch();
  const { drugs, isLoading, isError, message } = useSelector(
    (state) => state.drugs
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getDrugs());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  setTimeout(() => {
    setStatus("");
  }, 2000);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <section>
        <SectionHeader title={'Drugs'} main_page={'drug'} data_title={'drugs'} />
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
                  Name
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Description
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Manufacture date
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Expiry Date
                </th>
                <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {drugs &&
                drugs.map((drug) => (
                  <tr key={drug?._id} className="text-sm">
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
                      {drug?.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {drug?.description}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {moment(drug?.manufacture_date).format("MMMM Do YYYY")}
                    </td>
                    <td className="px-4 py-2 text-gray-700">
                      {moment(drug?.expiry_date).format("MMMM Do YYYY")}
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
                      to=""
                      // to={`/dashboard/edit/drug/${drug?._id}`}
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

export default Drugs;
