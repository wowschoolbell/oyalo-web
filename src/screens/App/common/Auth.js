/* eslint-disable no-undef */
import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "../../../screens/App/index";
import Login from "./Login";

const ProtectedRoute = ( { children } ) => {
  const { loginStatus } = useSelector( ( state ) => state.auth );
  // eslint-disable-next-line no-undef
  if ( !loginStatus ) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function Auth() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#F4F5F7", overflow: "auto" }}>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route index element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Auth;
