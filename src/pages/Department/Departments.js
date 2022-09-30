import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDepartments, reset } from "../../redux/departments/departmentSlice";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";

const Departments = () => {
  // const [totalResults, setTotalResults] = useState(0);
  // const [pageTable, setPageTable] = useState(1);
  const [status, setStatus] = useState("");

  // const resultsPerPage = 10;

  // const onPageChangeTable = (p) => {
  //   setPageTable(p);
  // };

  const dispatch = useDispatch();
  const { departments, isLoading, isError, message } = useSelector(
    (state) => state.departments
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getDepartments());

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
  <SectionHeader title={"Department"} main_page={'department'} data_title={'departments'}/>
        <ul className="bg-slate-50 p-4 sm:px-8 sm:pt-6 sm:pb-8 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 text-sm leading-6">
          {departments &&
            departments.map((department) => (
              <li
                key={department._id}
                className="hover:bg-gray-100 hover:ring-gray-100 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm"
              >
                <dl className="grid sm:block xl:block grid-cols-2 grid-rows-2 items-center">
                  <div className="flex items-center justify-between">
                    <div>
                      <dt className="sr-only">Title</dt>
                      <dd className="group-hover:text-dark font-semibold text-slate-900">
                        {department.name}
                      </dd>
                    </div>
                    <Link
                      className="my-6 text-sm"
                      to={`/dashboard/edit/department/${department._id}`}
                    >
                      <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div>
                    <dt className="sr-only">Description</dt>
                    <dd className="group-hover:text-gray-900">
                      {department.description}
                    </dd>
                  </div>
                  {/* <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd
                      x-for="user in project.users"
                      className="flex justify-end sm:justify-start xl:justify-start -space-x-1.5"
                    >
                      <img
                        src="user.avatar"
                        alt="user.name"
                        className="w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white"
                        loading="lazy"
                      />
                    </dd>
                  </div> */}
                </dl>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};


export default Departments;
