import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import AuthLayout from "./layout/AuthLayout";
// import NotFound from "./pages/NotFound";
// const loggedIn = true;
const App = () => {

//   import { useNavigate } from "react-router-dom";
// let navigate = useNavigate();

// useEffect(() => {
//    if (LoggedIn){
//       return navigate("/");
//    }
// },[LoggedIn]);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="" element={<Navigate to="/dashboard" />}/>
            <Route path="*" element={<Navigate to="/dashboard" />}/>
            <Route path="dashboard/*" element={<AuthLayout />} />
          </>
        ) : (
          <>
            <Route path="" element={<Navigate to="/login" />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
