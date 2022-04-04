import React, { useState, useEffect } from "react";
import { getPatients, reset } from "../../redux/patients/patientSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import moment from 'moment';

const Patients = () => {
  const [status, setStatus] = useState("");
  
  const dispatch = useDispatch();
  const { patients, isLoading, isError, message } = useSelector(
    (state) => state.patients
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getPatients());

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
    <SectionHeader title={'Patient'} main_page={'patient'} data_title={'patients'}/>
   
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
                Address
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Phone Number
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Age
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Weight
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Blood group
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {
              patients && patients.map((patient) => (

              
            <tr key={patient._id}>
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
                {`${patient.salutation} ${patient.first_name} ${patient.last_name}`}
              </td>
              <td className="px-4 py-2 text-gray-700">
                {patient.address}
              </td>
              <td className="px-4 py-2 text-gray-700">
               {patient.phone_number}
              </td>
              <td className="px-4 py-2 text-gray-700">
              { moment(patient.date_of_birth).toNow(true)}

              </td>
              <td className="px-4 py-2 text-gray-700">
                {patient.weight}
              </td>
              <td className="px-4 py-2 text-gray-700">
               {patient.blood_group}
              </td>
             
              <td className="px-4 py-2 text-gray-700">
              <Link
                      className="my-6 text-sm"
                      to=""
                    >
                      <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                        View
                      </button>
                    </Link>
              <Link
                      className="my-6 text-sm"
                      to={`/dashboard/edit/patient/${patient._id}`}
                    >
                      <button className="bg-green-700 p-2 font-bold text-white border rounded hover:bg-black">
                        Edit
                      </button>
                    </Link>
              </td>
            </tr>
            ))
          }
          </tbody>
        </table>
      </div>
     
    </>
  );
};

export default Patients;
