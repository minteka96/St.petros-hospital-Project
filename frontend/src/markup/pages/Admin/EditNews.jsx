import React from "react";
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu copy/AdminMenu.jsx";
import EditNews from "../../components/Admin/NewsEditForm/NewsEditForm";

function EditNewsPage(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <EditNews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNewsPage;
