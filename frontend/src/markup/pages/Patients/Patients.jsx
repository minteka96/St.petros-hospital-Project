import React from "react";
import { Link } from "react-router-dom";
import classes from "./Patients.module.css";

function Patients() {
  return (
    <div className={classes.container}>
      <header className={classes.adminHeader}>
        <h1>Patients Management</h1>
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
            <Link to="../AddDoctor/AddDoctor.jsx">Add Doctor</Link>
          </li>
          <li>
            <Link to="../Patients/Patients.jsx" className={classes.active}>
              Patients
            </Link>
          </li>
          <li>
            <Link to="../AddPatient/AddPatient.jsx">Add Patient</Link>
          </li>
        </ul>
        <button
          className={classes.logoutBtn}
          onclick="location.to='./index.html';"
        >
          Logout
        </button>
      </nav>

      <main className={classes.content}>
        <section className={classes.patientsList}>
          <h2>Patients</h2>
          <div className={classes.searchBar}>
            <input
              type="text"
              placeholder="Search by patient name..."
              id="search"
            />
            <button type="button">Search</button>
          </div>

          <table className={classes.patientsTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Treated By</th>
                <th>Appointment Day</th>
                <th>Treatment Status</th>
                <th>Medical History</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>Male</td>
                <td>(123) 456-7890</td>
                <td>123 Main St, Springfield</td>
                <td>Dr. Jane Smith</td>
                <td>2024-10-10</td>
                <td>Completed</td>
                <td>History of hypertension.</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Female</td>
                <td>(987) 654-3210</td>
                <td>456 Elm St, Springfield</td>
                <td>Dr. John Doe</td>
                <td>2024-10-12</td>
                <td>In Progress</td>
                <td>No significant history.</td>
              </tr>
              <tr>
                <td>Emily Davis</td>
                <td>40</td>
                <td>Female</td>
                <td>(555) 123-4567</td>
                <td>789 Oak St, Springfield</td>
                <td>Dr. Mark Brown</td>
                <td>2024-10-11</td>
                <td>Completed</td>
                <td>Allergic to penicillin.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Patients;
