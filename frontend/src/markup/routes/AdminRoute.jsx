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
import HealthTipList from "../components/Admin/HealthTipList/HealthTipList.jsx";
import AddHealthTipForm from "../components/Admin/addhealthtipForm/AddHealthTipForm.jsx";
import EditHealthTip from "../components/Admin/EditHealthTipForm/EditHealthTipForm.jsx";
//import AddTenderForm from "../components/Admin/AddTenderForm/AddTenderForm.jsx";
import AddJobForm from "../components/Admin/AddJobsForm/AddJobsForm.jsx";
import EditJobForm from "../components/Admin/JobsEditForm/EditJobForm.jsx";
const logOut = async () => {
  await localStorage.removeItem("access-token");
  window.location.href = "/";
};

const AdminRoute = () => {
 return (
   <div style={{ margin: 0, padding: 0, backgroundColor: "white" }}>
     {/* Fixed Header */}
     <div
       style={{
         height: "70px",
         position: "fixed",
         top: 0,
         width: "100%",
         zIndex: 1000,
       }}
       className="w-100 gradientCustom px-3 d-flex align-items-center justify-content-between"
     >
       <div>
         <img src={logo} className="logo" alt="Logo" />
       </div>
       <div>
         <button onClick={logOut} className="btn btn-danger">
           <img
             src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
             alt="Logout Icon"
             style={{ width: "20px", height: "20px" }}
           />
         </button>
         <img
           src="https://img.icons8.com/?size=100&id=65342&format=png&color=00a99e"
           alt="Profile Icon"
           style={{ width: "50px", height: "50px" }}
         />
       </div>
     </div>

     <div className="row" style={{ marginTop: "70px" }}>
       {/* Fixed Sidebar */}
       <div
         className="col-md-3 normalBg p-0 admin-left-side"
         style={{
           position: "fixed",
           top: "70px",
           left: 0,
           height: "calc(100vh - 70px)",
           overflowY: "auto",
           zIndex: 999,
         }}
       >
       <div><AdminMenu /></div>
       </div>

       {/* Main Content Area */}
       <div
         className="col-md-9 admin-right-side p-0"
         style={{
           marginLeft: "25%",
           paddingTop: "70px",
           overflowY: "auto",
           height: "calc(100vh - 70px)",
         }}
       >
         <div  className="m-3 normalBg">
           <Routes>
             <Route path="/" element={<AdminDashbord />} />
             <Route path="/applicant" element={<Applicants />} />
             <Route path="/applicant/:id" element={<ApplicantDetails />} />
             <Route path="/add-news" element={<AddNews />} />
             <Route path="/news" element={<Newss />} />
             <Route path="news/edit/:news_id" element={<EditNews />} />
             <Route path="/add-healthtip" element={<AddHealthTipForm />} />
             <Route path="/healthtipList" element={<HealthTipList />} />
             <Route
               path="/healthtip/edit/:healthtip_id"
               element={<EditHealthTip />}
             />
             <Route path="/add-job" element={<AddJobForm />} />
             <Route path="/job/edit/:job_id" element={<EditJobForm />} />
           </Routes>
         </div>
       </div>
     </div>
   </div>
 );

};

export default AdminRoute;
