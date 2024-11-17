/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import classes from "./CourseRegistration.module.css";

function CourseRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    courses: "",
    level: "",
  });

  const [trainerData, setTrainerData] = useState({
    name: "",
    sex: "",
    profession: "",
    phone: "",
    accountNumber: "",
    email: "",
    sign: "",
  });

  const [currentStage, setCurrentStage] = useState("registration");
  const [preTestScore, setPreTestScore] = useState(null);
  const [postTestScore, setPostTestScore] = useState(null);
  const [passed, setPassed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrainerChange = (e) => {
    const { name, value } = e.target;
    setTrainerData({ ...trainerData, [name]: value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setCurrentStage("trainerInfo");
  };

  const handleTrainerSubmit = (e) => {
    e.preventDefault();
    setCurrentStage("courseSelection");
  };

  const handleCourseSelectionSubmit = (e) => {
    e.preventDefault();
    setCurrentStage("preTest");
  };

  const handlePreTestSubmit = (e) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 100);
    setPreTestScore(score);
    setCurrentStage("courseContent");
  };

  const handlePostTestSubmit = async (e) => {
    e.preventDefault();
    const score = Math.floor(Math.random() * 100);
    setPostTestScore(score);
    const passMark = 60;
    setPassed(score >= passMark);
    setCurrentStage("result");

    if (score >= passMark) {
      await sendCertificateEmail();
    }
  };

  const sendCertificateEmail = async () => {
    try {
      await axios.post("http://localhost:5000/api/sendCertificate", {
        email: formData.email,
        course: formData.courses,
        level: formData.level,
      });
      alert("Certificate sent to your email!");
    } catch (error) {
      console.error("Error sending certificate:", error);
    }
  };

  return (
    <section className="py-8">
      <div className={classes.container}>
        <div className={classes.formWrapper}>
          {/* Registration Step */}
          {currentStage === "registration" && (
            <form onSubmit={handleRegisterSubmit}>
              <h3>Registration</h3>
              <label className={classes.label}>
                First Name
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <button type="submit" className={classes.button}>
                Register and Continue
              </button>
            </form>
          )}

          {/* Trainer Information Step */}
          {currentStage === "trainerInfo" && (
            <form onSubmit={handleTrainerSubmit}>
              <h3>Trainer Information</h3>
              <label className={classes.label}>
                Name (Block Letters)
                <input
                  type="text"
                  name="name"
                  value={trainerData.name}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Sex
                <select
                  name="sex"
                  value={trainerData.sex}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                >
                  <option value="">--Select--</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className={classes.label}>
                Profession
                <input
                  type="text"
                  name="profession"
                  value={trainerData.profession}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={trainerData.phone}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                CBE Account Number
                <input
                  type="text"
                  name="accountNumber"
                  value={trainerData.accountNumber}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Email
                <input
                  type="email"
                  name="email"
                  value={trainerData.email}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Signature
                <input
                  type="text"
                  name="sign"
                  value={trainerData.sign}
                  onChange={handleTrainerChange}
                  className={classes.input}
                  required
                />
              </label>
              <button type="submit" className={classes.button}>
                Save Trainer Information
              </button>
            </form>
          )}

          {/* Course Selection Step */}
          {currentStage === "courseSelection" && (
            <form onSubmit={handleCourseSelectionSubmit}>
              <h3>Course Selection</h3>
              <label className={classes.label}>
                Course
                <input
                  type="text"
                  name="courses"
                  value={formData.courses}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <label className={classes.label}>
                Level
                <input
                  type="text"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className={classes.input}
                  required
                />
              </label>
              <button type="submit" className={classes.button}>
                Continue to Pre-Test
              </button>
            </form>
          )}

          {/* Pre-Test Step */}
          {currentStage === "preTest" && (
            <form onSubmit={handlePreTestSubmit}>
              <h3>Pre-Test</h3>
              <button type="submit" className={classes.button}>
                Start Pre-Test
              </button>
            </form>
          )}

          {/* Course Content Step */}
          {currentStage === "courseContent" && (
            <div>
              <h3>Course Content</h3>
              <p>Here you would display the course materials.</p>
              <button
                onClick={() => setCurrentStage("postTest")}
                className={classes.button}
              >
                Continue to Post-Test
              </button>
            </div>
          )}

          {/* Post-Test Step */}
          {currentStage === "postTest" && (
            <form onSubmit={handlePostTestSubmit}>
              <h3>Post-Test</h3>
              <button type="submit" className={classes.button}>
                Start Post-Test
              </button>
            </form>
          )}

          {/* Result Step */}
          {currentStage === "result" && (
            <div>
              <h3>Result</h3>
              <p>Pre-Test Score: {preTestScore}</p>
              <p>Post-Test Score: {postTestScore}</p>
              {passed ? <p>Congratulations, you passed!</p> : <p>Sorry, you did not pass.</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CourseRegistration;
