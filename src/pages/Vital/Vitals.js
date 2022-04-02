import React, {useState, useEffect} from 'react'
import { fetchVitals } from '../../redux/servicess/vital'
import { connect } from 'react-redux';
import SectionHeader from '../../components/SectionHeader';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';

const Vitals = ({fetchVitals}) => {
  const [vitals, setVitals] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pageTable, setPageTable] = useState(1);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const resultsPerPage = 10;

  useEffect(() => {
   const handleAsync = async () => {
        fetchVitals((res) => {
          const { message, status, data } = res;

if(status === "success") {
  updateVitals(data);
  setTotalResults(data.length); 
}

if (status === "error") {
  setStatus("error");
  setMessage(message);
}
 
        })
   }
   handleAsync();
    // eslint-disable-next-line
  }, []);

  const updateVitals = async (data) => {
    setVitals(
      data.slice((pageTable - 1) * resultsPerPage, pageTable * resultsPerPage)
    );
  };

  setTimeout(() => {
    setStatus("");
    setMessage("");
  }, 2000);

  return (
    <>
    <SectionHeader title={'Vital'} main_page={'vital'} data_title={'vitals'}/>
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
                Patient Name
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Body Temperature
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Pulse Rate
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Blood Pressure
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Weight
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Blood glucose
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Health Status
              </th>
              <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {
              vitals && vitals.map((vital) => (

              
            <tr>
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
                {`${vital?.patient_name}`}
              </td>
              <td className="px-4 py-2 text-gray-700">
                {vital?.body_temperature}
              </td>
              <td className="px-4 py-2 text-gray-700">
               {vital?.pulse_rate}
              </td>
              <td className="px-4 py-2 text-gray-700">
              {vital?.blood_pressure}
              </td>
              
              <td className="px-4 py-2 text-gray-700">
                {vital?.weight}
              </td>
              <td className="px-4 py-2 text-gray-700">
              {vital?.blood_glucose}
              </td>
              <td className="px-4 py-2 text-gray-700">
               {vital?.health_status}
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
                      to={`/dashboard/edit/vital/${vital._id}`}
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
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVitals: (callbackfunction) =>
      dispatch(fetchVitals(callbackfunction))
  };
};
export default connect(null, mapDispatchToProps)(Vitals);
