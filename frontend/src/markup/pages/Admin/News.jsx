import React from "react";
// Import the NewsTable component
import NewsList from "../../components/Admin/NewsList/NewsList.jsx";
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu copy/AdminMenu.jsx";
// import NewsList from "../../components/Dashbord/NewsList.jsx";

function News(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <NewsList className="pl-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
