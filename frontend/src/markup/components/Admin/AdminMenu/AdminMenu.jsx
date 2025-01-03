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
  }, [user]);

  // Helper functions for role-based visibility
  const isSuperAdmin = role === "superadmin";
  const isAdminOrHigher = isSuperAdmin || role === "Admin";
  const isComm = isAdminOrHigher || role === "Comm";
  const isHR = isAdminOrHigher || role === "HR";
  const isHE = isAdminOrHigher || role === "HE";
  const isCPD = isAdminOrHigher || role === "CPD";

  return (
    <div className="pb-4">
      <div className="admin-menu p-3">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group gap-2 mx-2 mb-4 d-flex align-items-center">
        <Link to="/admin" className="list-group-item">
          Dashboard
        </Link>

        {/* Superadmin-only links */}
        {isSuperAdmin && (
          <>
            <Link to="/admin/admins" className="list-group-item">
              List of Admins
            </Link>
            <Link to="/admin/new" className="list-group-item">
              Add New Admin
            </Link>
            <Link to="/admin/contact" className="list-group-item">
              See Feedback Messages
            </Link>
          </>
        )}

        {/* Comm roles */}
        {isComm && (
          <>
            <Link to="/admin/add-news" className="list-group-item">
              Add News
            </Link>
            <Link to="/admin/news" className="list-group-item">
              List of News
            </Link>
          </>
        )}

        {/* Health tips (visible to all roles) */}
        {isHE && (
          <>
            <Link to="/admin/add-healthtip" className="list-group-item">
              Add Health Tip
            </Link>
            <Link to="/admin/healthtiplist" className="list-group-item">
              List of Health Tips
            </Link>
          </>
        )}

        {/* HR roles */}
        {isHR && (
          <>
            <Link to="/admin/add-job" className="list-group-item">
              Add Job
            </Link>
            <Link to="/admin/all-job" className="list-group-item">
              List of Jobs
            </Link>
            <Link to="/admin/applicant" className="list-group-item">
              List of Applicants
            </Link>
          </>
        )}

        {/* CPD roles */}
        {isCPD && (
          <>
            <Link to="/admin/add-cpd-news" className="list-group-item">
              Add CPD News
            </Link>
            <Link to="/admin/cpd-news-list" className="list-group-item">
              List of CPD News
            </Link>
         
            <Link to="/admin/add-trainee" className="list-group-item">
                Add Trainee
              </Link>

           <Link to="/admin/trainees" className="list-group-item">
             <i className="fas fa-users"></i> Trainees info
               </Link>
    
      
          </>
        )}

        <Link to="/admin/video" className="list-group-item">
          Video
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
