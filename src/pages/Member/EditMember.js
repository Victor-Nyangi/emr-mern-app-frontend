import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { editMember, fetchMember } from "../../redux/servicess/member";
import PageTitle from "../../components/PageTitle";
import { connect } from "react-redux";

const EditMember = ({ editMember, fetchMember }) => {
  const [memberData, setMemberData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    email: "",
    address: "",
    gender: "",
    salutation: "",
    department: "",
    role: "",
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

  const member_id = params.member_id;

  useEffect(() => {
    const handleAsync = async () => {
      if (member_id) {
        fetchMember(member_id, (response) => {
          const { status } = response;

          if (status === "success") {
            const member = response.data;
            setMemberData({
              first_name: member.first_name,
              last_name: member.last_name,
              date_of_birth: member.date_of_birth,
              phone_number: member.phone_number,
              email: member.email,
              address: member.address,
              gender: member.gender,
              salutation: member.salutation,
              department: member.department,
              role: member.role,
              is_active: false,
              updated_date: Date.now,
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
  }, [member_id]);

  const newMember = (e) => {
    e.preventDefault();
    setMemberData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setStatus("success");
    setMessage("Editing member, please wait.....");

    editMember(member_id, memberData, (res) => {
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
        <PageTitle>Edit Member</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/members">
          <button>Members</button>
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
                  value={memberData.first_name}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.last_name}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.date_of_birth}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.phone_number}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.email}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.address}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
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
                  value={memberData.gender}
                  id="gender"
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
                      gender: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Role
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Role"
                  autoComplete="off"
                  name="role"
                  id="role"
                  value={memberData.role}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
                      role: e.target.value,
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
                  value={memberData.salutation}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
                      salutation: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Department
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  placeholder="Department"
                  autoComplete="off"
                  name="department"
                  id="department"
                  value={memberData.department}
                  onChange={(e) =>
                    setMemberData({
                      ...memberData,
                      department: e.target.value,
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
                    setMemberData({
                      ...memberData,
                      is_active: e.target.value,
                    })
                  }
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
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

const mapDispatchToProps = (dispatch) => {
  return {
    editMember: (data, onResponse) => dispatch(editMember(data, onResponse)),
    fetchMember: (id, onResponse) => dispatch(fetchMember(id, onResponse)),
  };
};

export default connect(null, mapDispatchToProps)(EditMember);
