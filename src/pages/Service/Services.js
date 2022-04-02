import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import Pagination from "../../components/Pagination";
import { getServices, reset } from "../../redux/services/serviceSlice";

const Services = () => {
  // const [totalResults, setTotalResults] = useState(0);
  // const [services_data, setServices] = useState([]);
  const [pageTable, setPageTable] = useState(1);
  const [status, setStatus] = useState("");

  // const onPageChangeTable = (p) => {
  //   setPageTable(p);
  // };

  const dispatch = useDispatch();
  const { services, isLoading, isError, message } = useSelector(
    (state) => state.services
  );

  const resultsPerPage = 10;

  // useEffect(() => {
  //   updateServices(services)
  // })

  // useEffect(() => {
  //   const handleAsync = async () => {
  //     fetchServices((res) => {
  //       const { message, status, data } = res;

  //       if (status === "success") {
  //         updateServices(data);
  //         setTotalResults(data.length);
  //       }

  //       if (status === "error") {
  //         setStatus("error");
  //         // setMessage(message);
  //       }
  //     });
  //   };
  //   handleAsync();
  //   // eslint-disable-next-line
  // }, []);

  // const updateServices = async (data) => {
  //   setServices(
  //     data.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
  //   );
  // };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getServices());

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
      <SectionHeader
        title={"Service"}
        main_page={"service"}
        data_title={"services"}
      />

      <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
        {services &&
          services.map((service) => (
            <li
              key={service._id}
              className="hover:bg-gray-100 hover:ring-gray-100 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm"
            >
              <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                <div className="flex items-center justify-between">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="group-hover:text-dark font-semibold text-slate-900">
                      {service?.name}{" "}
                      <span className="text-red-600">{`Ksh ${service?.charge}`}</span>
                    </dd>
                  </div>
                  <Link
                    className="my-6 text-sm"
                    to=""
                  >
                    <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                      Edit
                    </button>
                  </Link>
                </div>
                <div>
                  <dt className="text-blue-500">Description</dt>
                  <dd className="group-hover:text-gray-900 text-xs">
                    {service.description}
                  </dd>
                </div>
                <div className="mt-2">
                  <dt className="text-blue-500">Purpose</dt>
                  <dd className="group-hover:text-gray-900 text-xs">
                    {service.main_purpose}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
      </ul>
      {/* <Pagination
       totalResults={totalResults}
       resultsPerPage={resultsPerPage}
       onChange={onPageChangeTable}
       label="Services" /> */}
    </>
  );
};

export default Services;
