/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import "./adminMenu.css";

function AdminMenu() {
  return (
    <div>
      <div className="admin-menu">
        <h2>Admin Menu</h2>
      </div>
      <div className="list-group gap-2 mx-2 d-flex align-items-center">
        <Link to="/admin" className="list-group-item">
          Dashboard
        </Link>

        <Link to="/admin/add-news" className="list-group-item">
          Add News
        </Link>
        <Link to="/admin/news" className="list-group-item">
          List of News
        </Link>

        <Link to="/admin-dashboard/add-vacancy" className="list-group-item">
          Job Post
        </Link>
        <Link
          to="/admin-dashboard/list-of-vacancies"
          className="list-group-item"
        >
          List of Jobs
        </Link>
        <Link to="/admin-dashboard/applicationform" className="list-group-item">
          Application
        </Link>
        <Link to="/admin/applicant" className="list-group-item">
          List of Applicants
        </Link>
        <Link to="/admin-dashboard/add-tender" className="list-group-item">
          Add Tender
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;