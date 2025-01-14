import React from "react";
// import AdminMenu from "../../components/Admin/AdminMenu/AdminMenu";
import AdminMenuCpd from "../../components/Admin/AdminMenuCPD/AdminMenuCpd.jsx";
import AdminCpd from "../../components/Admin/AdminDashbordCPD/AdminCpd.jsx";

export default function AdminDashboardCpd() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenuCpd />
          </div>
          <div className="col-md-9 admin-right-side">
            <AdminCpd />
          </div>
        </div>
      </div>
    </div>
  );
}
