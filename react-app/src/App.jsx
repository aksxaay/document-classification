import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ModalPage from "./pages/ModalPage.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="modal" element={<ModalPage />} />
        <Route path="adminDashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route
          path="signup"
          element={
            <>
              <p>signup</p>
            </>
          }
        />
        <Route
          path="admin"
          element={
            <>
              <p>admin</p>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
