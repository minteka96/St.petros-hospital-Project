import React, { useEffect } from "react";
import bg from "../../assets/img/banner/icon.png";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/img/logo copy.png";
import TraineesDashboard from "../../markup/components/TraineesDashboard/TraineesDashboard.jsx";
import AdminDashboardCpd from "../components/Admin/AdminDashbordCPD/AdminCpd.jsx";
import TrainInfoList from "../components/Admin/Trainer/TrainInfoList.jsx";
import TraineeAddForm from "../components/Admin/Trainer/TraineeAddForm.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import Test2 from "../pages/test/Test2.jsx";
import styles from "./CpdTraineesRoute.module.css";

const CpdTraineesRoute = () => {
  const navigate = useNavigate();

  const { trainee } = useAuth();
  const token = trainee?.token;

  useEffect(() => {
    if (!token) {
      navigate("/cpd/login");
    }
  }, [token]);

  const logOut = () => {
    sessionStorage.removeItem("zaccess-token");
    // navigate("/");
    window.location.href = "/";
  };

  return (
    <div
      // style={{ backgroundImage: `url(${bg})` }}
      className={`${styles.bg} container-fluid admin-pages`}
    >
      <div className="row">
        {/* Top Bar */}
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
            <a href="/">
              <img src={logo} className="logo" alt="Logo" />
            </a>
          </div>
          <div className="d-flex align-items-center gap-5">
            <Link className={`${styles["logout-button"]} btn`} to="/cpd">
              Dashboard
            </Link>
            <Link
              className={`${styles["logout-button"]} btn`}
              to="/cpd/TraineesDashboard"
            >
              Available Training
            </Link>
            <Link
              className={`${styles["logout-button"]} btn`}
              to="/cpd/Training"
            >
              Applied Training
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-end position-relative">
            <button
              onClick={logOut}
              className="btn  me-3"
              style={{ display: "flex", alignItems: "center", gap: "10px",border:"1px solid white" }}
            >
              <span>Log Out</span>
              <img
                src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
                alt="Logout Icon"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
            <img
              src="https://img.icons8.com/?size=100&id=65342&format=png&color=00a99e"
              alt="Profile Icon"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
            />
          </div>
        </div>

        <img
          style={{
            position: "fixed",
            width: "20%",
            height: "70%",
            zIndex: "0",
            rotate: "90deg",
            top: "400px",
            opacity: "0.2",
          }}
          src={bg}
          alt=""
        />
        <img
          style={{
            position: "fixed",
            width: "20%",
            height: "50%",
            zIndex: "0",
            rotate: "-90deg",
            top: "50px",
            right: "0",
            opacity: "0.2",
          }}
          src={bg}
          alt=""
        />
        {/* Page Content */}
        <div style={{ marginTop: "70px", flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<AdminDashboardCpd />} />
            <Route path="status" element={<Test2 />} />
            <Route path="TraineesDashboard" element={<TraineesDashboard />} />
            <Route path="certificate" element={<TrainInfoList />} />
            <Route path="exam" element={<TraineeAddForm />} />
            <Route path="training" element={<Test2 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default CpdTraineesRoute;
