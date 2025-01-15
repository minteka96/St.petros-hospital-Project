import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adminMenu.css"; // Import CSS file

function AdminMenuCpd() {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("zaccess-token");
    navigate("/cpd/login");
  };

  return (
    <div className="pb-4">
      {/* CPD Admin Menu */}
      <div className="admin-menu">
        <h2>CPD Menu</h2>
        <button onClick={logOut} className="logout-button">
          Log Out
        </button>
      </div>

      <div className="list-group">
        <Link to="/cpdadmin" className="list-group-item">
          Dashboard
        </Link>
        <Link to="/cpdadmin/TraineesDashboard" className="list-group-item">
          Available Training
        </Link>
        <Link to="/cpdadmin/certificate" className="list-group-item">
          Certificates
        </Link>
        <Link to="/cpdadmin/exam" className="list-group-item">
          Exams
        </Link>
      </div>
    </div>
  );
}

export default AdminMenuCpd;
