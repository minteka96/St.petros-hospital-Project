import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminMenuCpd from "../components/Admin/AdminMenuCPD/AdminMenuCpd.jsx";
import TraineesDashboard from "../../markup/components/TraineesDashboard/TraineesDashboard.jsx";
import AdminDashboardCpd from "../components/Admin/AdminDashbordCPD/AdminCpd.jsx";
import TrainInfoList from "../components/Admin/Trainer/TrainInfoList.jsx";
import TraineeAddForm from "../components/Admin/Trainer/TraineeAddForm.jsx";
import Test2 from "../pages/test/Test2.jsx";
import styles from "./CpdTraineesRoute.module.css";
const CpdTraineesRoute = () => {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("zaccess-token");
    navigate("/cpd/login");
  };

  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-2 admin-left-side">
          <AdminMenuCpd />
        </div>
        <div className="col-md-10 admin-right-side">
          <div
            className={`top-bar d-flex justify-content-end align-items-center ${styles["top-bar"]}`}
            style={{ paddingTop: "10px", marginTop: "10px" }}
          >
            <button
              onClick={logOut}
              className={`${styles["logout-button"]} btn`}
            >
              Log Out
            </button>
          </div>
          <Routes>
            <Route path="/" element={<AdminDashboardCpd />} />
            <Route path="status" element={<Test2 />} />
            <Route path="TraineesDashboard" element={<TraineesDashboard />} />
            <Route path="certificate" element={<TrainInfoList />} />
            <Route path="exam" element={<TraineeAddForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CpdTraineesRoute;
