import React, { Suspense, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ThemedSuspense from "../components/ThemedSuspense";
import Sidebar from "../components/Sidebar";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import CreateService from "../pages/Service/CreateService";
import Services from "../pages/Service/Services";
import ViewPatient from "../pages/Patient/ViewPatient";
import EditService from "../pages/Service/EditService";
import Members from "../pages/Member/Members";
import CreateMember from "../pages/Member/CreateMember";
import CreateDepartment from "../pages/Department/CreateDepartment";
import Departments from "../pages/Department/Departments";
import EditDepartment from "../pages/Department/EditDepartment";
import CreateDrug from "../pages/Drug/CreateDrug";
import Drugs from "../pages/Drug/Drugs";
import EditDrug from "../pages/Drug/EditDrug";
import CreatePatient from "../pages/Patient/CreatePatient";
import Patients from "../pages/Patient/Patients";
import EditPatient from "../pages/Patient/EditPatient";
import EditMember from "../pages/Member/EditMember";

import CreateBilling from "../pages/Billing/CreateBilling";
import Billings from "../pages/Billing/Billings";
import EditBilling from "../pages/Billing/EditBilling";
import CreateVital from "../pages/Vital/CreateVital";
import Vitals from "../pages/Vital/Vitals";
import EditVital from "../pages/Vital/EditVital";
import CreateFinancial from "../pages/Financial/CreateFinancial";
import Financials from "../pages/Financial/Financials";
import EditFinancial from "../pages/Financial/EditFinancial";
import Board from "../pages/Chat/Board";
import Channel from "../pages/Chat/Channel";
import { useSelector, useDispatch } from 'react-redux'
import Spinner from "../components/Spinner";


const AuthLayout = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Header />
      <div
        className={`flex bg-gray-50 overflow-hidden font-sans`}
      >
        <Sidebar />

        <div className="flex flex-col flex-1 w-full">
          <main>
            <div className="container grid px-6 mx-auto">
                <Routes>
              {/* <Suspense fallback={<ThemedSuspense />}> */}

                  <Route path="" element={<Dashboard />}/>
                  <Route path="services" element={<Services />}/>
                  <Route path="/create/service" element={<CreateService />}/>
                  <Route path="/edit/service/:service_id" element={<EditService />}/>

                  <Route path="departments" element={<Departments />}/>
                  <Route path="/create/department" element={<CreateDepartment />}/>
                  <Route path="/edit/department/:department_id" element={<EditDepartment />}/>
                  <Route path="drugs" element={<Drugs />}/>
                  <Route path="/create/drug" element={<CreateDrug />}/>
                  <Route path="/edit/drug/:drug_id" element={<EditDrug />}/>
                  <Route path="patients" element={<Patients />}/>
                  <Route path="/create/patient" element={<CreatePatient />}/>
                  <Route path="/edit/patient/:patient_id" element={<EditPatient />}/>
                  <Route path="/view/patient/:patient_id" element={<ViewPatient />}/>
                  <Route path="medical-staff" element={<Members />}/>
                  <Route path="/create/medical-staff" element={<CreateMember />}/>
                  <Route path="/edit/medical-staff/:member_id" element={ <EditMember />}/>

                  <Route path="billings" element={<Billings />}/>
                  <Route path="/create/billing" element={<CreateBilling />}/>
                  <Route path="/edit/billing/:billing_id" element={<EditBilling />}/>
                  <Route path="financials" element={<Financials />}/>
                  <Route path="/create/financial" element={<CreateFinancial />}/>
                  <Route path="/edit/financial/:financial_id" element={<EditFinancial />}/>
                  <Route path="vitals" element={<Vitals />}/>
                  <Route path="/create/vital" element={<CreateVital />}/>
                  <Route path="/edit/vital/:vital_id" element={<EditVital />}/>

                  <Route path="/channel" element={<Channel />}/>
                  <Route path="/board" element={<Board />}/>

                  <Route path="*" element={<NotFound/>}/>


                  {/* <Redirect exact from="/app" to="/app/dashboard" /> */}
                  {/* <Route path="/not-found" element={<NotFound />} />
                 */}

                </Routes>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
