import React from "react";
// Import the AddNewsForm component
// Import the AdminMenu component
import AdminMenu from "../../components/Admin/AdminMenu copy/AdminMenu.jsx";
import VacanciesList from "../../components/Dashbord/VacancyLists.jsx";

function VacancyList(props) {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <VacanciesList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyList;
