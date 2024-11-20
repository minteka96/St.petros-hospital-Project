/* eslint-disable no-unused-vars */
// src/components/Dashboard.jsx

import React from 'react';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import VacancyList from './VacancyList';
import AddVacancyForm from './AddVacancyForm';
import ApplicationList from './ApplicationList';
import NewsList from './NewsList';
import AddNewsForm from './AddNewsForm';
import classes from './Dashboard.module.css'; // Import CSS module as "classes"

const Dashboard = () => {
  return (
    <div className={classes.dashboardContainer}>
      <h1 className={classes.title}>Admin Dashboard</h1>
      
      <div className={classes.userManagement}>
        <h2 className={classes.sectionTitle}>User Management</h2>
        <AddUserForm />
        <UserList />
      </div>

      <div className={classes.vacancyManagement}>
        <h2 className={classes.sectionTitle}>Vacancy Management</h2>
        <AddVacancyForm />
        <VacancyList />
      </div>

      <div className={classes.applicationManagement}>
        <h2 className={classes.sectionTitle}>Application Management</h2>
        <ApplicationList />
      </div>

      <div className={classes.newsManagement}>
        <h2 className={classes.sectionTitle}>News Management</h2>
        <AddNewsForm />
        <NewsList />
      </div>
    </div>
  );
};

export default Dashboard;
