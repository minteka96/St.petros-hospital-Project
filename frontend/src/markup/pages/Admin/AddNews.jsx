import React from "react";
// Import the AddNewsForm component
import AddNewsForm from "../../components/Admin/AddNewsForm/AddNewsForm.jsx";
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu copy/AdminMenu.jsx";

function AddNews(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <AddNewsForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
