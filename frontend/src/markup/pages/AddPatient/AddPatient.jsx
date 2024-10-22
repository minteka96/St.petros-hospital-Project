import React from "react";
import { Link } from "react-router-dom";
import classes from "./AddPatient.module.css";

function AddPatient() {
  return (
    <>
      <section className={classes.adminHeader}>
        <h1>Add a Patient</h1>
      </section>

      <div className={classes.container}>
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
              <Link to="../Patients/Patients.jsx">Patients</Link>
            </li>
            <li>
              <Link
                to="../AddPatient/AddPatient.jsx"
                className={classes.active}
              >
                Add Patient
              </Link>
            </li>
          </ul>
          <button
            className={classes.logoutBtn}
            onClick={() => (window.location.href = "./index.html")}
          >
            Logout
          </button>
        </nav>

        <main className={classes.content}>
          <section>
            <form
              action="/admin/add-patient"
              method="POST"
              encType="multipart/form-data"
              className={classes.addPatientForm}
            >
              <div className={classes.formGroup}>
                <label htmlFor="patientName">Patient's Name:</label>
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="treatedBy">Assigned Doctor:</label>
                <input type="text" id="treatedBy" name="treatedBy" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="appointmentDay">Appointment Day:</label>
                <input
                  type="date"
                  id="appointmentDay"
                  name="appointmentDay"
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="treatmentStatus">Treatment Status:</label>
                <select id="treatmentStatus" name="treatmentStatus" required>
                  <option value="">Select Status</option>
                  <option value="Completed">Completed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="medicalHistory">Medical History:</label>
                <input
                  type="text"
                  id="medicalHistory"
                  name="medicalHistory"
                  required
                />
              </div>

              <div className={classes.formActions}>
                <button type="submit" className={classes.submitBtn}>
                  Add Patient
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default AddPatient;
