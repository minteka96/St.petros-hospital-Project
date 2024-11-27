/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Applicants from "../components/Admin/Applicant/Applicant.jsx";
import ApplicantDetails from "../components/Admin/Applicant/ApplicantDetail.jsx";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu.jsx";
import logo from "../../assets/img/logo copy.png";
import AdminDashbord from "../components/Admin/AdminDashbord/AdminDashbord.jsx";

/* ************ News Components Start Here about news ********************  */
import AddNews from "../components/Admin/AddNewsForm/AddNewsForm.jsx";
import EditNews from "../components/Admin/NewsEditForm/NewsEditForm.jsx";
import Newss from "../components/Admin/NewsList/NewsList.jsx";
/* **************** News Components End Here about news  ******************/

const logOut = async () => {
  await localStorage.removeItem("access-token");
  window.location.href = "/";
}


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
            <button onClick={logOut} className=" btn btn-danger" href="">
              <img
                src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            </button>
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
                <Route path="/" element={<AdminDashbord />} />
                {/***************** applicant routes ************/}
                <Route path="/applicant" element={<Applicants />} />
                <Route path="/applicant/:id" element={<ApplicantDetails />} />
                {/************************ end *****************/}

                {/******************* News Routes Start Here ****************/}
                <Route path="/add-news" element={<AddNews />} />
                <Route path="/news" element={<Newss />} />
                <Route path="news/edit/:news_id" element={<EditNews />} />
                {/* ******************** News Routes Start Here End Here *****************/}

                {/******************* healthtip Routes Start Here ****************/}
                <Route path="/add-healthtip" element={<AddHealthTipForm />} />
                <Route path="/healthtipList" element={<HealthTipList />} />
                <Route path="/healthtip/edit/:healthtip_id" element={<EditHealthTip />} />
                {/* ******************** tender Routes Start Here End Here *****************/}

{/* ********************add job post*********************************** */}
 <Route path="/add-job" element={<AddJobForm/>} />
                  {/* <Route path="/joblist" element={<JobList />} />  */}
                 <Route path="/job/edit/:job_id" element={<EditJobForm />} />       
                        </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoute;
