/* eslint-disable no-unused-vars */
import React from 'react'
import Admin from '../../components/Admin/AdminDashbord/Admin';
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu copy/AdminMenu";

export default function AdminDashboard() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <Admin />
          </div>
        </div>
      </div>
    </div>
  );
}
