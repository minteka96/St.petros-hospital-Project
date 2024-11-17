/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <nav>
          {/* <Link to="/admin-dashboard/addnews">Add News</Link>
          <Link to="/admin-dashboard/addnewsdetail">Add News Detail</Link>
          <Link to="/admin-dashboard/vacancy-list">Vacancy List</Link>
          <Link to="/admin-dashboard/application-list">Application List</Link>
          <Link to="/admin-dashboard/news-list">News List</Link>
          <Link to="/admin-dashboard/add-vacancy">Add Vacancy</Link>
          <Link to="/admin-dashboard/add-tender">Add Tender</Link>
          <Link to="/admin-dashboard/applicationform">Add Application</Link>  */}
          {/* Updated link */}
        </nav>
      </div>
      <div className="mainContent">
        <Outlet /> {/* This will render the matched child route */}
      </div>
    </div>
  );
};

export default AdminDashboard;
