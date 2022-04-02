import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import { createVital } from "../../redux/vitals/vitalSlice";
import { getPatients, reset } from "../../redux/patients/patientSlice";

import PageTitle from "../../components/PageTitle";

const CreateVital = () => {
  const [vitalData, setVitalData] = useState({
    patient_name: "",
    body_temperature: 0,
    pulse_rate: "",
    respiration_rate: "",
    blood_pressure: "",
    overall_status: "",
    weight: 0,
    blood_glucose: "",
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
    setVitalData({
      patient_name: "",
      body_temperature: 0,
      pulse_rate: "",
      respiration_rate: "",
      blood_pressure: "",
      overall_status: "",
      weight: 0,
      blood_glucose: "",
      updated_date: Date.now,
    });
    setStatus("");
  };

  const newVital = (e) => {
    e.preventDefault();
    setVitalData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");

    dispatch(createVital( {...vitalData }))

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
        <PageTitle>Add Vital</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/vitals">
          <button>Vitals</button>
        </Link>
      </div>
      <>
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
                    setVitalData({
                      ...vitalData,
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
                  Body Temperture
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  id="body_temperature"
                  placeholder="Body Temperture"
                  autoComplete="off"
                  name="body_temperature"
                  value={vitalData.body_temperature}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      body_temperature: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Pulse Rate
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="pulse_rate"
                  placeholder="Pulse Rate"
                  autoComplete="off"
                  name="pulse_rate"
                  value={vitalData.pulse_rate}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      pulse_rate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Respiration Rrate
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="string"
                  id="respiration_rate"
                  placeholder="Respiration Rate"
                  autoComplete="off"
                  name="respiration_rate"
                  value={vitalData.respiration_rate}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      respiration_rate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Blood Pressure
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="blood_pressure"
                  placeholder="Address"
                  autoComplete="off"
                  name="blood_pressure"
                  value={vitalData.blood_pressure}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      blood_pressure: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Overall Status
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Overall Status"
                  autoComplete="off"
                  name="overall_status"
                  value={vitalData.overall_status}
                  id="overall_status"
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      overall_status: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Weight
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  placeholder="Weight"
                  autoComplete="off"
                  name="weight"
                  id="weight"
                  value={vitalData.weight}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      weight: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Blood Glucose
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Blood Glucose"
                  autoComplete="off"
                  name="blood_glucose"
                  id="blood_glucose"
                  value={vitalData.blood_glucose}
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      blood_glucose: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Health Status
                </label>

                <select
                  name="health_status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="health_status"
                  onChange={(e) =>
                    setVitalData({
                      ...vitalData,
                      health_status: e.target.value,
                    })
                  }
                >
                  <option value="good">Good</option>
                  <option value="normal">Normal</option>
                  <option value="false">Bad</option>
                </select>
              </div>
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

export default CreateVital;
