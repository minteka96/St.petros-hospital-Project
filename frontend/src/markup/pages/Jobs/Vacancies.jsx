/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import jobsservice from "../../../Services/jobs.service";
import { Link } from "react-router-dom";
import "./JobsDetails/Vacancies.css";

const Vacancies = () => {
  const [showDetails, setShowDetails] = useState(new Set());
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleDetails = (id) => {
    setShowDetails((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsservice.getAllJobs();
        setJobs(response);
      } catch (err) {
        setError("Something went wrong while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const dateFormat = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="vacancies-container my-4">
      <h1 className="vacancies-title ">Vacancy</h1>
      <p className="vacancies-description">
        If you aspire to be part of a dedicated, multi-disciplinary team that
        works together to improve our patients' lives, come join us.
      </p>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <div>
          {jobs.map((job) => (
            <div className="vacancy" key={job.vacancy_id}>
              <div className="vacancy-header">
                <h2 className="vacancy-position">Position: {job.job_title}</h2>
                <p className="vacancy-subtitle">{job.job_description}</p>
                <p className="vacancy-subtitle">
                  Closing Date: {dateFormat(job.deadline)} | Place of Work:{" "}
                  {job.address}
                </p>
              </div>
              <button
                onClick={() => toggleDetails(job.vacancy_id)}
                className="toggle-button"
              >
                {showDetails.has(job.vacancy_id)
                  ? "Hide Details"
                  : "Show Details"}
              </button>
              {showDetails.has(job.vacancy_id) && (
                <ul className="details-list">
                  <li>
                    <strong>Qualification: </strong>
                    {job.qualifications}
                  </li>
                  <li>
                    <strong>Grade: </strong>
                    {job.job_grade}
                  </li>
                  <li>
                    <strong>Requirements: </strong>
                    {job.job_requirements}
                  </li>
                  <li>
                    <strong>Terms: </strong>
                    {job.terms}
                  </li>
                  <li>
                    <strong>Salary: </strong>
                    {job.salary}
                  </li>
                  <li>
                    <strong>How to Apply: </strong>
                    Please submit your CVs and credentials in person to the
                    hospital, or apply online{" "}
                    <Link
                      style={{ color: "blue", textDecoration: "underline", cursor: "pointer", fontWeight: "bold" ,hover: "underline" }}
                      to={`/application/form?vacancy_id=${job.vacancy_id}&title=${job.job_title}`}
                    >
                      here
                    </Link>
                    .
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Vacancies;
