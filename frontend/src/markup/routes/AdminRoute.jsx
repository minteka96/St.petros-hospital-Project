// src/routes/AdminRoute.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Applicants from "../components/Admin/Applicant/Applicant.jsx";
import ApplicantDetails from "../components/Admin/Applicant/ApplicantDetail.jsx";
import AdminMenu from "../components/Admin/AdminMenu copy/AdminMenu.jsx";
import logo from "../../assets/img/logo copy.png";
import Admin from "../components/Admin/AdminDashbord/Admin.jsx";
const AdminRoute = () => {
  return (
    <div>
      <div
        style={{ margin: 0, padding: 0, backgroundColor: "white" }}
        className="container-fluid admin-pages"
      >
        <div
          style={{ height: "70px" }}
          className="w-100 gradientCustom px-3 d-flex align-items-center justify-content-between "
        >
          <div>
            <img src={logo} className="logo" alt="" />
          </div>
          <div>
            <a className="" href="">
              <img
                src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </a>
            <img
              src="https://img.icons8.com/?size=100&id=65342&format=png&color=00a99e"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </div>

        <div className="row">
          <div
            style={{ height: "calc(100vh - 35px)" }}
            className="col-md-3 normalBg p-0 admin-left-side"
          >
            <div style={{}} className="">
              <AdminMenu />
            </div>
          </div>
          <div className="col-md-9 admin-right-side p-0 ">
            <div
              style={{ height: "calc(100vh - 50px)" }}
              className="m-3 normalBg"
            >
              <Routes>
                {/****************** admin routes *************/}
                <Route path="/" element={<Admin />} />
                {/***************** applicant routes ************/}
                <Route path="/applicant" element={<Applicants />} />
                <Route path="/applicant/:id" element={<ApplicantDetails />} />
                {/************************ end *****************/}

                {/* Add more admin routes here */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoute;
