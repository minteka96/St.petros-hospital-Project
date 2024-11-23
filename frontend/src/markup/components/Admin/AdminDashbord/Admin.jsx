/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './AdminDashboard.module.css';

const AdminDashboard = () => {
  return (
    <div className="dashboardContainer">
      <div className="sidebar">
        <div className="sec-title style-two">
          <h2>Admin Dashboard</h2>
          <div
            className="text"
            style={{ backgroundColor: "#1F867E", borderRadius: "5px" }}
          >
            Welcome to the Admin Dashboard! Here, you'll find all the tools and
            insights you need to manage our hospital efficiently.
          </div>
        </div>
        <nav>
          {/* <Link to="/admin-dashboard/add-news">Add News</Link>
          <Link to="/admin-dashboard/news">News List</Link>
          <Link to="/admin/news/edit/:news_id">News Edit</Link> */}
          {/* <Link to="/admin-dashboard/addnewsdetail">Add News Detail</Link> */}

          {/*********************/}
          {/* <Link to="/admin/add-news">Add News</Link> */}
          {/* <Link to="/admin/news">News List</Link> */}
          {/* <Link to="/admin/news/edit/:news_id">News Edit</Link> */}
          {/*********************/}

          {/* <Link to="/admin-dashboard/vacancy-list">Vacancy List</Link>
          <Link to="/admin-dashboard/application-list">Application List</Link>
          <Link to="/admin-dashboard/add-vacancy">Add Vacancy</Link>
          <Link to="/admin-dashboard/add-tender">Add Tender</Link>
          <Link to="/admin-dashboard/applicationform">Add Application</Link> */}
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
