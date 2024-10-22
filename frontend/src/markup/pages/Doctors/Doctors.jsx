import React from "react";
import classes from "./Doctors.module.css";
import doc from "../../../assets/img/team/03.jpg";
import doc2 from "../../../assets/img/testimonial/01.jpg";
function Doctors() {
  return (
    <div className={classes.container}>
      <header className={classes.adminHeader}>
        <h1>Doctors Management</h1>
      </header>

      <nav className={classes.sidebar}>
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="../Doctors/Doctors.jsx" className={classes.active}>
              Doctors
            </a>
          </li>
          <li>
            <a href="../AddDoctor/AddDoctor.jsx">Add Doctor</a>
          </li>
          <li>
            <a href="../Patients/Patients.jsx">Patients</a>
          </li>
          <li>
            <a href="./addPatient.html">Add Patient</a>
          </li>
        </ul>
        <button
          className={classes.logoutBtn}
          onclick="location.href='./index.html';"
        >
          Logout
        </button>
      </nav>

      <main className={classes.content}>
        <section className={classes.doctorsList}>
          <h2>Doctors</h2>
          <div className={classes.searchBar}>
            <input
              type="text"
              placeholder="Search by doctor name..."
              id="search"
            />
            <button type="button">Search</button>
          </div>

          <table className={classes.doctorsTable}>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Specialty</th>
                <th>Department</th>
                <th>Contact</th>
                <th>Availability</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={doc2}
                    alt="Dr. John Smith"
                    className={classes.doctorPhoto}
                  />
                </td>
                <td>Dr. John Smith</td>
                <td>Cardiologist</td>
                <td>Cardiology</td>
                <td>john.smith@hospital.com</td>
                <td>Mon-Fri, 9AM-5PM</td>
                <td>
                  <button className={classes.editBtn}>Edit</button>
                  <button className={classes.deleteBtn}>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={doc}
                    alt="Dr. Emily Johnson"
                    className={classes.doctorPhoto}
                  />
                </td>
                <td>Dr. Emily Johnson</td>
                <td>Neurologist</td>
                <td>Neurology</td>
                <td>emily.johnson@hospital.com</td>
                <td>Mon-Wed, 10AM-4PM</td>
                <td>
                  <button className={classes.editBtn}>Edit</button>
                  <button className={classes.deleteBtn}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Doctors;
