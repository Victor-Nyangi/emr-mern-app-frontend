import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getMembers, reset } from "../../redux/members/memberSlice";

import { createMember } from "../../redux/members/memberSlice";
import PageTitle from "../../components/PageTitle";
import Spinner from "../../components/Spinner";

const CreateMember = () => {
  const [memberData, setMemberData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone_number: "",
    email: "",
    address: "",
    gender: "",
    salutation: "",
    member: "",
    role: "",
    is_active: false,
    updated_date: Date.now,
  });

  const dispatch = useDispatch();
  const { members, isLoading, isError, message } = useSelector(
    (state) => state.members
  );

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    // if (!user) {
    //   navigate('/login')
    // }

    dispatch(getMembers());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  const clear = () => {
    setMemberData({
      first_name: "",
      last_name: "",
      date_of_birth: "",
      phone_number: "",
      email: "",
      address: "",
      gender: "",
      salutation: "",
      member: "",
      role: "",
      is_active: false,
      updated_date: Date.now,
    });
    setStatus("");
  };

  const newMember = (e) => {
    e.preventDefault();
    setStatus("success");

    dispatch(createMember({ ...memberData }));

    setTimeout(() => {
      clear();
    }, 2000);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex justify-between">
        <PageTitle>Add Member</PageTitle>

        <Link className="my-6 text-sm" to="/dashboard/member-staff">
          <button>Members</button>
        </Link>
      </div>
      <>
        {/* {status !== "" && <Alert status={status} message={message} />}  */}
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md">
          <form action="post" onSubmit="">
            <div className="grid grid-cols-3 gap-6">
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Date of Birth
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Phone Number
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Gender
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Role
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Salutation
                </label>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Member
                </label>

                <select
name="member"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
id="member"
value={memberData.member}
onChange={(e) =>
  setMemberData({
    ...memberData,
    member: e.target.value,
  })
}
>
<option value="">-- Select member --</option>
{members &&
  members.map((member, id) => (
    <option
      key={id}
      value={member.name}
    >{member.name}</option>
  ))}
</select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Active
                </label>

                <select
                  name="is_active"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

export default CreateMember;
