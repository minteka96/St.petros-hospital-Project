import React from "react";
import { Link } from "react-router-dom";
import classes from "./AddDoctor.module.css";

function AddDoctor() {
  return (
    <>
      <section className={classes.adminHeader}>
        <h1>Add a Doctor</h1>
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
              <Link to="./AddDoctor.jsx" className={classes.active}>
                Add Doctor
              </Link>
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
            onClick={() => (window.location.href = "./index.html")}
          >
            Logout
          </button>
        </nav>

        <main className={classes.content}>
          <section>
            <form
              action="/admin/add-doctor"
              method="POST"
              encType="multipart/form-data"
              className={classes.addDoctorForm}
            >
              <div className={classes.formGroup}>
                <label htmlFor="doctorName">Doctor's Name:</label>
                <input type="text" id="doctorName" name="doctorName" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="specialty">Specialty:</label>
                <input type="text" id="specialty" name="specialty" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="department">Department:</label>
                <input type="text" id="department" name="department" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="email">Contact Email:</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="availability">Availability:</label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  placeholder="e.g., Mon-Fri, 9AM-5PM"
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="salary">Salary:</label>
                <input
                  type="number"
                  id="salary"
                  name="salary"
                  required
                  placeholder="Monthly Salary in USD"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="workHours">Work Hours Per Week:</label>
                <input
                  type="number"
                  id="workHours"
                  name="workHours"
                  required
                  placeholder="e.g., 40"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="photo">Profile Photo:</label>
                <input type="file" id="photo" name="photo" accept="image/*" />
              </div>

              <div className={classes.formActions}>
                <button type="submit" className={classes.submitBtn}>
                  Add Doctor
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default AddDoctor;
