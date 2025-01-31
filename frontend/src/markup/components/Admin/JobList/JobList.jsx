/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import jobsservice from "../../../../Services/jobs.service.js";
import classes from "./JobsListPage.module.css";
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const JobsListPage = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsservice.getAllJobs();
        if (response.error) {
          setError(response.error);
        } else {
          setJobs(response);
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("no jobs found");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [fetchData]);

  const handleDelete = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) {
      return;
    }
    try {
      await jobsservice.deleteJob(jobId, token);
      setFetchData(!fetchData);
    } catch (err) {
      console.error("Error deleting job:", err);
      setError("Something went wrong while deleting the job.");
    }
  };

  if (loading) {
    return <div className={classes.loading}>Loading jobs...</div>;
  }

  if (error) {
    return <div className={classes.errorMessage}>{error}</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <di className="p-4">
      <div className={classes.jobsListContainer}>
        <h2>Available Jobs</h2>
        {jobs.length === 0 ? (
          <p>No jobs available at the moment.</p>
        ) : (
          <ul className={classes.jobsList}>
            {jobs.map((job) => (
              <div>
                <li key={job.id} className={classes.jobItem}>
                  <h3>
                    {" "}
                    <strong>Job Title:</strong>
                    {job.job_title}
                  </h3>
                  <p>
                    <strong>Description:</strong> {job.job_description}
                  </p>
                  <p>
                    <strong>Requirements:</strong> {job.job_requirements}
                  </p>
                  <p>
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>
                  <p>
                    <strong>Grade:</strong> {job.job_grade}
                  </p>
                  <p>
                    <strong>Terms:</strong> {job.terms}
                  </p>
                  <p>
                    <strong>Salary:</strong> {job.salary}
                  </p>
                  <p>
                    <strong>Address:</strong> {job.address}
                  </p>
                  <p>
                    <strong>Deadline:</strong> {formatDate(job.deadline)}
                  </p>
                </li>
                <div className="mb-4 border-bottom d-flex justify-content-end">
                  <button
                    onClick={() => handleDelete(job.vacancy_id)}
                    className="btn btn-danger mb-2 "
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </di>
  );
};

export default JobsListPage;
