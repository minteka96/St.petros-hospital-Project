/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobsservice from "../../../../Services/jobs.service.js";
import classes from "./AddJobForm.module.css";
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const AddJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobRequirements, setJobRequirements] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [jobGrade, setJobGrade] = useState("");
  const [terms, setTerms] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
 const { user } = useAuth();
 const token = user ? user.token : null;
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !jobTitle ||
      !jobDescription ||
      !jobRequirements ||
      !qualifications ||
      !jobGrade ||
      !terms ||
      !salary ||
      !address ||
      !applicationLink ||
      !deadline
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const jobData = {
        job_title: jobTitle,
        job_description: jobDescription,
        job_requirements: jobRequirements,
        qualifications,
        job_grade: jobGrade,
        terms,
        salary,
        address,
        application_link: applicationLink,
        deadline,
      };

      const response = await jobsservice.createJob(jobData, token);

      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Job added successfully!");
        setError("");

        setTimeout(() => {
          navigate("/admin/all-job"); // Navigate to job listings page after success
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting job:", err);
      setError("Something went wrong while adding the job.");
      setSuccess("");
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <h2>Add Job</h2>
        {error && <div className={classes.errorMessage}>{error}</div>}
        {success && <div className={classes.successMessage}>{success}</div>}

        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className={classes.inputField}
          required
        />
        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className={classes.textareaField}
          required
        />
        <textarea
          placeholder="Job Requirements"
          value={jobRequirements}
          onChange={(e) => setJobRequirements(e.target.value)}
          className={classes.textareaField}
          required
        />
        <input
          type="text"
          placeholder="Qualifications"
          value={qualifications}
          onChange={(e) => setQualifications(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="text"
          placeholder="Job Grade"
          value={jobGrade}
          onChange={(e) => setJobGrade(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="text"
          placeholder="Terms"
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="text"
          placeholder="Salary (e.g., $40,000/year)"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="url"
          placeholder="Application Link"
          value={applicationLink}
          onChange={(e) => setApplicationLink(e.target.value)}
          className={classes.inputField}
          required
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className={classes.inputField}
          required
        />
        <button type="submit" className={classes.submitButton}>
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJobForm;
