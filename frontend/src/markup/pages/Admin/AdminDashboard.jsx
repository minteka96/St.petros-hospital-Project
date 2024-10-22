import React from "react";
import { Link } from "react-router-dom";
import classes from "./admin.module.css";

function AdminDashboard() {
  return (
    <div className={classes.container}>
      <header className={classes.adminHeader}>
        <h1>Hospital Admin Dashboard</h1>
      </header>

      <nav className={classes.sidebar}>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="../Doctors/Doctors.jsx">Doctors</Link>
          </li>
          <li>
            <Link to="../Add Doctor/AddDoctor.jsxl">Add Doctor</Link>
          </li>
          <li>
            <Link to="../Patients/Patients.jsx">Patients</Link>
          </li>
          <li>
            <Link to="../AddPatient/AddPatient.jsx">Add Patient</Link>
          </li>
        </ul>
        <button
          className={classes.logoutBtn}
          onClick="location.to='./index.html';"
        >
          Logout
        </button>
      </nav>

      <main className={classes.content}>
        <section className={classes.dashboardOverview}>
          <h2>Overview</h2>
          <div className={classes.cards}>
            <div className={classes.card}>
              <h3>Total Doctors</h3>
              <p>45</p>
            </div>
            <div className={classes.card}>
              <h3>Total Patients</h3>
              <p>120</p>
            </div>
            <div className={classes.card}>
              <h3>Appointments Today</h3>
              <p>8</p>
            </div>
          </div>
        </section>

        <section className={classes.recentActivity}>
          <h2>Recent Activities</h2>
          <ul>
            <li>Dr. Smith added to the Surgery Department</li>
            <li>New patient registered: John Doe</li>
            <li>3 appointments scheduled for Dr. Taylor</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
