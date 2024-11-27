/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import jobService from "../../../../Services/jobs.service"; // Adjust path as necessary
import classes from "./EditJobForm.module.css"; // Adjust path as necessary

const EditJobForm = () => {
  const { job_id } = useParams(); // Extract `job_id` from the URL
  const location = useLocation(); // Access state passed via navigate
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.job) {
        // Use the job item from state
        const job = location.state.job;
        setJobTitle(job.job_title || "");
        setJobDescription(job.job_description || "");
        setJobRequirements(job.job_requirements || "");
        setQualifications(job.qualifications || "");
        setJobGrade(job.job_grade || "");
        setTerms(job.terms || "");
        setSalary(job.salary || "");
        setAddress(job.address || "");
        setApplicationLink(job.application_link || "");
        setDeadline(job.deadline || "");
        setLoading(false);
      } else {
        // Fetch from API if no state is passed
        try {
          const response = await jobService.getJobById(job_id);
          const job = response.data;
          setJobTitle(job.job_title || "");
          setJobDescription(job.job_description || "");
          setJobRequirements(job.job_requirements || "");
          setQualifications(job.qualifications || "");
          setJobGrade(job.job_grade || "");
          setTerms(job.terms || "");
          setSalary(job.salary || "");
          setAddress(job.address || "");
          setApplicationLink(job.application_link || "");
          setDeadline(job.deadline || "");
        } catch (err) {
          setError("Failed to fetch job details.");
        } finally {
          setLoading(false);
        }
      }
    };

    initializeFormData();
  }, [job_id, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      job_title: jobTitle,
      job_description: jobDescription,
      job_requirements: jobRequirements,
      qualifications,
      job_grade: jobGrade,
      terms,
      salary,
      address,
      application_link: applicationLink,
      deadline
    };

    if (!jobTitle || !jobDescription) {
      setError("Job title and description are required.");
      return;
    }

    try {
      const response = await jobService.updateJob(job_id, formData);
      
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Job updated successfully!");
        setError("");

        setTimeout(() => {
          navigate("/admin/jobs"); // Navigate to job listings page after success
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong while updating the job.");
      setSuccess("");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit Job</h2>
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
        placeholder="Salary"
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
        type="text"
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
        Save Changes
      </button>
    </form>
  );
};

export default EditJobForm;
