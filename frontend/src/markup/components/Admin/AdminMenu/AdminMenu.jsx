/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./adminMenu.css";
import { useAuth } from "../../../../contexts/AuthContext";

function AdminMenu() {
  const [role, setRole] = useState("");
  const { user, privileges } = useAuth();
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
  const isComm = isAdminOrHigher || role === "Communication";
  const isHR = isAdminOrHigher || role === "HR";
  const isHE = isAdminOrHigher || role === "HE";
  // "Post Vacancy",
  // "Approve Applicants",
  // "Screen Applicants",
  // "Archive Vacancy",
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
          </>
        )}

        {/* Comm roles */}
        {isComm && privileges && (
          <>
            {privileges.includes("Post News") && (
              <Link to="/admin/add-news" className="list-group-item">
                Add News
              </Link>
            )}

            {privileges.includes("Approve News") && (
              <Link to="/admin/Approve-News" className="list-group-item">
                Approve News
              </Link>
            )}
            <Link to="/admin/news" className="list-group-item">
              List of News
            </Link>
          </>
        )}

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
        {isHR && privileges && (
          <>
            {privileges.includes("Archive Vacancy") && (
              <Link to="/admin/JobArchivePage" className="list-group-item">
                Archive Vacancy
              </Link>
            )}

            {privileges.includes("Post Vacancy") && (
              <Link to="/admin/add-job" className="list-group-item">
                Post Vacancy
              </Link>
            )}
            {privileges.includes("Screen Applicants") && (
              <Link to="/admin/applicant" className="list-group-item">
                Screen Applicants
              </Link>
            )}
            {privileges.includes("Manage Applicants") && (
              <Link to="/admin/HRManagerApplicants" className="list-group-item">
                Manager Applicants
              </Link>
            )}

            <Link to="/admin/all-job" className="list-group-item">
              List of Jobs
            </Link>
            {privileges.includes("Show Applicants") && (
              <Link to="/admin/applicant" className="list-group-item">
                List of Applicants
              </Link>
            )}
          </>
        )}

        <Link to="/admin/cpd/newCourse" className="list-group-item">
          Add CPD Course
        </Link>
        <Link to="/admin/cpd/list" className="list-group-item">
          List of CPD Courses
        </Link>
        <Link to="/admin/video" className="list-group-item">
          Video
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
