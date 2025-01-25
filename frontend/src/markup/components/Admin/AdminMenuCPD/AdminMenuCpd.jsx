import React from "react";
import { Link } from "react-router-dom";
import "./adminMenu.css"; // Import CSS file

function AdminMenuCpd() {
  return (
    <div className="pb-4">
      {/* CPD Admin Menu */}
      <div className="admin-menu">
        <h2>CPD Menu</h2>
      </div>

      <div className="list-group">
        <Link to="/cpd" className="list-group-item">
          Dashboard
        </Link>
        <Link to="/cpd/TraineesDashboard" className="list-group-item">
          Available Training
        </Link>
        <Link to="/cpd/Training" className="list-group-item">
          Applied Training
        </Link>
       
      </div>
    </div>
  );
}

export default AdminMenuCpd;
