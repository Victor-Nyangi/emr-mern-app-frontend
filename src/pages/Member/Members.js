import React, { useState, useEffect } from "react";
import { fetchMembers } from "../../redux/servicess/member";
import { connect } from "react-redux";
import Pagination from "../../components/Pagination";
import SectionHeader from "../../components/SectionHeader";
import { Link } from "react-router-dom";
import moment from "moment";

const Members = ({ fetchMembers }) => {
  const [members, setMembers] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pageTable, setPageTable] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const resultsPerPage = 10;

  useEffect(() => {
    const handleAsync = async () => {
      fetchMembers((res) => {
        const { message, status, data } = res;

        if (status === "success") {
          updateMembers(data);
          setTotalResults(data.length);
        }

        if (status === "error") {
          setStatus("error");
          setMessage(message);
        }
      });
    };
    handleAsync();
    // eslint-disable-next-line
  }, []);

  const updateMembers = async (data) => {
    setMembers(
      data.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
    );
  };

  setTimeout(() => {
    setStatus("");
    setMessage("");
  }, 2000);

  return (
    <>
   
      <SectionHeader
        title={"Staff"}
        main_page={"medical-staff"}
        data_title={"staff members"}
      />
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
            {members &&
              members.map((member) => (
                <tr key={member?._id}>
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
                    {`${member.salutation} ${member.first_name} ${member.last_name}`}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{member.address}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {member.phone_number}
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {moment(member.date_of_birth).toNow(true)}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{member.email}</td>
                  <td className="px-4 py-2 text-gray-700">
                    {member.department}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{member.role}</td>

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
                      to={`/dashboard/edit/member/${member._id}`}
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
      
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembers: (callbackfunction) =>
      dispatch(fetchMembers(callbackfunction)),
  };
};
export default connect(null, mapDispatchToProps)(Members);
