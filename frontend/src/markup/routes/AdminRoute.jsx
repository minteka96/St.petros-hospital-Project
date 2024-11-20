// src/routes/AdminRoute.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Applicants from "../components/Admin/Applicant/Applicant.jsx";
import ApplicantDetails from "../components/Admin/Applicant/ApplicantDetail.jsx";
import AdminMenu from "../components/Admin/AdminMenu copy/AdminMenu.jsx";

const AdminRoute = () => {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <Routes>
              {/*********************** applicant routes *****************/}
              <Route path="/applicant" element={<Applicants />} />
              <Route path="/applicant/:id" element={<ApplicantDetails />} />
              {/************************ end *****************/}

              {/* Add more admin routes here */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoute;
