/* eslint-disable no-undef */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
//import { notification } from "antd";
import App from "../../../screens/App/index";
import Login from "./Login";
import Forgetpassword from "./Forgetpassword";
//import { loginCheckReducer } from "../../../@app/master/authSlice";
//import { useDispatch } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // eslint-disable-next-line no-undef
  //console.log(!localStorage.getItem("loginStatus"),);
  const loginStato = localStorage.getItem("loginStatus") == "true";
  console.log(loginStato, "loginStato");
  if (!loginStato) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function Auth() {
  //const dispatch = useDispatch();
  //const [api] = notification.useNotification();
  //const logout = async () => {
  // let params = {};
  // params = { emp_date: localStorage.getItem("datetime") };
  //dispatch(loginCheckReducer({ data: { params }, api }));
  //};

  return (
    <div
      style={{ height: "100vh", backgroundColor: "#F4F5F7", overflow: "auto" }}>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route index element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
        <Route path="/changepassword" element={<Forgetpassword />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }></Route>
      </Routes>
    </div>
  );
}

export default Auth;
