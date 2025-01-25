/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./AdminDashboard.module.css";
import CpdNews from "../../../pages/CPD/Cpdnews";

const AdminCpd = () => {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div
          className="sec-title style-two"
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          <h2>CPD Menu Dashboard</h2>
          {/* <div
            className="text"
            style={{ backgroundColor: "#1F867E", borderRadius: "5px" }}
          >
            Welcome to the CPD Menu Dashboard
          </div> */}
          <CpdNews />
        </div>
      </div>
      <div className="mainContent">
        <Outlet /> {/* This will render the matched child route */}
      </div>
    </div>
  );
};

export default AdminCpd;
