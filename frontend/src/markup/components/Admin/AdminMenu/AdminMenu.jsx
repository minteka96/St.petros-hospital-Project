/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminMenu.css";
import { useAuth } from "../../../../contexts/AuthContext";

function AdminMenu() {
  const [role, setRole] = useState("");
  const { user } = useAuth();
  useEffect(() => {
    const token = user ? user.token : null;
    if (token) {
      setRole(user.role);
    } else {
      setRole("");
    }
  }, []);
  return (
    <div>
      <div className="admin-menu p-3">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group gap-2 mx-2 d-flex align-items-center">
        <Link to="/admin" className="list-group-item">
          Dashboard
        </Link>

        {role === "admin" && (
          <Link to="/admin/admins" className="list-group-item">
            List of Admins
          </Link>
        )}

        {role === "admin" && (
          <Link to="/admin/new" className="list-group-item">
            Add New Admin
          </Link>
        )}
        
        {role === "admin" && (
          <Link to="/admin/add-news" className="list-group-item">
            Add News
          </Link>
        )}

        <Link to="/admin/news" className="list-group-item">
          List of News
        </Link>
        <Link to="/admin/add-healthtip" className="list-group-item">
          Add Health Tip
        </Link>
        <Link to="/admin/healthtiplist" className="list-group-item">
          List of Health Tips
        </Link>
        <Link to="/admin/add-job" className="list-group-item">
          Job Post
        </Link>
        <Link to="/admin/joblist" className="list-group-item">
          List of Jobs
        </Link>
        <Link to="/admin-dashboard/applicationform" className="list-group-item">
          Application
        </Link>
        {role === "admin" && (
          <Link to="/admin/applicant" className="list-group-item">
            List of Applicants
          </Link>
        )}
        <Link to="/admin-dashboard/add-tender" className="list-group-item">
          Add Tender
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
