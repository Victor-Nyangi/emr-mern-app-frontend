import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getVitals, reset } from "../../redux/vitals/vitalSlice";
import SectionHeader from '../../components/SectionHeader';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

const Vitals = ({fetchVitals}) => {
  const [status, setStatus] = useState("");

  const dispatch = useDispatch();
  const { vitals, isLoading, isError, message } = useSelector(
    (state) => state.vitals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getVitals());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  setTimeout(() => {
    setStatus("");
  }, 2000);

  if (isLoading) {
    return <Spinner />;
  }

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

export default Vitals;
