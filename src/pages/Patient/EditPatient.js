import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import PageTitle from "../../components/PageTitle";
import { connect } from "react-redux";
 
const EditPatient = ({ editPatient, fetchPatient }) => {
  const [patientData, setPatientData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    email: "",
    date_of_birth: "",
    gender: "",
    marital_status: "",
    education_level: "",
    income_level: "",
    occupation: "",
    size_of_family: "",
    emergency_contact: "",
    salutation: "",
    height: "",
    weight: "",
    blood_group: "",
    underlying_conditions: [],
    is_active: false,
    updated_date: Date.now,
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  let params = useParams();

  const clear = () => {
    setStatus("");
    setMessage("");
  };

  const patient_id = params.patient_id;

  useEffect(() => {
    const handleAsync = async () => {
      if (patient_id) {
        fetchPatient(patient_id, (response) => {
          const { status } = response;

          if (status === "success") {
            const patient = response.data;
            setPatientData({
              first_name: patient.first_name,
              last_name: patient.last_name,
              address: patient.address,
              phone_number: patient.phone_number,
              email: patient.email,
              date_of_birth: patient.date_of_birth,
              gender: patient.gender,
              marital_status: patient.marital_status,
              education_level: patient.education_level,
              income_level: patient.income_level,
              occupation: patient.occupation,
              size_of_family: patient.size_of_family,
              emergency_contact: patient.emergency_contact,
              salutation: patient.salutation,
              height: patient.height,
              weight: patient.weight,
              blood_group: patient.blood_group,
              underlying_conditions: patient.underlying_conditions,
              is_active: false,
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
  }, [patient_id]);

  const newPatient = (e) => {
    e.preventDefault();
    setPatientData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");
    setMessage("Editing patient , please wait.....");

    editPatient(patient_id, patientData, (res) => {
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
        <PageTitle>Edit Patient</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/patients">
          <button>Patients</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  First Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="first_name"
                  placeholder="First name"
                  autoComplete="off"
                  name="first_name"
                  value={patientData.first_name}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      first_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Last Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="last_name"
                  placeholder="Last name"
                  autoComplete="off"
                  name="last_name"
                  value={patientData.last_name}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      last_name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Date of Birth
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="date"
                  id="date_of_birth"
                  placeholder="Date"
                  autoComplete="off"
                  name="date_of_birth"
                  value={patientData.date_of_birth}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      date_of_birth: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Phone Number
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="phone_number"
                  placeholder="Phone Number"
                  autoComplete="off"
                  name="phone_number"
                  value={patientData.phone_number}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      phone_number: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  name="email"
                  value={patientData.email}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Address
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id="address"
                  placeholder="Address"
                  autoComplete="off"
                  name="address"
                  value={patientData.address}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Gender
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Gender"
                  autoComplete="off"
                  name="gender"
                  value={patientData.gender}
                  id="gender"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      gender: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Marital Status
                </label>

                <select
                  name="marital_status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="marital_status"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      marital_status: e.target.value,
                    })
                  }
                >
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                  <option value="single">Single</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Education Level
                </label>

                <select
                  name="education_level"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="education_level"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      education_level: e.target.value,
                    })
                  }
                >
                  <option value="university">University</option>
                  <option value="high">High School</option>
                  <option value="primary">Primary School</option>
                  <option value="not-applicable">N/A</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Income Level
                </label>

                <select
                  name="income_level"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="income_level"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      income_level: e.target.value,
                    })
                  }
                >
                  <option value="above_100K">&gt; 100K</option>
                  <option value="70K_to_100K">70K to 100K</option>
                  <option value="50K_to_70K">50K to 70K</option>
                  <option value="30K_to50K">30K to 50K</option>
                  <option value="less_30K">&rt; 30K</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Occupation
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Occupation"
                  autoComplete="off"
                  name="occupation"
                  id="occupation"
                  value={patientData.occupation}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      occupation: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Size of Family
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  placeholder="Size of Family"
                  autoComplete="off"
                  name="size_of_family"
                  id="size_of_family"
                  value={patientData.size_of_family}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      size_of_family: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Emergency Contact
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Emergency Contact"
                  autoComplete="off"
                  name="emergency_contact"
                  id="emergency_contact"
                  value={patientData.emergency_contact}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      emergency_contact: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Salutation
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Salutation"
                  autoComplete="off"
                  name="salutation"
                  id="salutation"
                  value={patientData.salutation}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      salutation: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Height
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="number"
                  placeholder="Height"
                  autoComplete="off"
                  name="height"
                  id="height"
                  value={patientData.height}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      height: e.target.value,
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
                  value={patientData.weight}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      weight: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Blood Group
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Blood Group"
                  autoComplete="off"
                  name="blood_group"
                  id="blood_group"
                  value={patientData.blood_group}
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      blood_group: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Active
                </label>

                <select
                  name="is_active"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="is_active"
                  onChange={(e) =>
                    setPatientData({
                      ...patientData,
                      is_active: e.target.value,
                    })
                  }
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Blood Group (Separate values by commas)
              </label>

              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="underlying_conditions"
                name="underlying_conditions"
                rows={3}
                value={patientData.underlying_conditions}
                onChange={(e) =>
                  setPatientData({
                    ...patientData,
                    underlying_conditions: e.target.value.trim().split(","),
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

export default EditPatient;