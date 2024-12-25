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
  const [closedJobs, setClosedJobs] = useState([]);
  const [openJobs, setOpenJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
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
        response.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setJobs(response);
      } catch (err) {
        setError("Something went wrong while fetching jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const compareDate = (deadline) => {
    const currentDate = new Date(new Date().toISOString()).getTime();
    const unixTimestamp = new Date(deadline).getTime();
    return unixTimestamp > currentDate;
  };

  // filter jobs by status
  useEffect(() => {
    const open = jobs.filter((job) => compareDate(job.deadline));
    const closed = jobs.filter((job) => !compareDate(job.deadline));
    setOpenJobs(open);
    setClosedJobs(closed);
    setSearchTerm(open);
  }, [jobs]);


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
      {/* {jobs.length > 0 && (
        <p className="vacancy-count">
          {jobs.length} vacancy{jobs.length > 1 ? "s" : ""}
        </p>
      )} */}
      <div className="d-flex justify-content-around ">
        <button
          className="btn active flex-fill mx-2"
          onClick={() => setSearchTerm(jobs)}
        >
          All Jobs
        </button>
        <button
          className="btn active flex-fill mx-2"
          onClick={() => setSearchTerm(openJobs)}
        >
          {openJobs.length} Open Job{openJobs.length > 1 ? "s" : ""}
        </button>
        <button
          className="btn active flex-fill mx-2"
          onClick={() => setSearchTerm(closedJobs)}
        >
          {closedJobs.length} Closed Job{closedJobs.length > 1 ? "s" : ""}
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs available at the moment.</p>
      ) : (
        <div>
          {searchTerm.map((job) => (
            <div className="vacancy" key={job.vacancy_id}>
              <div className="vacancy-header">
                <h2 className="vacancy-position">Position: {job.job_title}</h2>
                <p
                  style={{ fontWeight: "bold" }}
                  className="vacancy-subtitle my-2"
                >
                  {job.job_description}
                </p>
                <span className="vacancy-details">
                  <p className="vacancy-subtitle m-0">
                    <span style={{ fontWeight: "bold" }}>Opening Date:</span>{" "}
                    {dateFormat(job.created_at)}
                  </p>
                  <p className="vacancy-subtitle m-0 ">|</p>
                  <p className="vacancy-subtitle">
                    <span style={{ fontWeight: "bold" }}>Closing Date:</span>{" "}
                    {dateFormat(job.deadline)}
                  </p>
                </span>
                <p className="vacancy-subtitle">
                  <span style={{ fontWeight: "bold" }}>Place of Work:</span>
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
                      style={{
                        color: compareDate(job.deadline) ? "blue" : "gray",
                        textDecoration: "underline",
                        cursor: compareDate(job.deadline)
                          ? "pointer"
                          : "not-allowed",
                        fontWeight: "bold",
                      }}
                      to={
                        compareDate(job.deadline)
                          ? `/application/form?undfjw=${job.vacancy_id}`
                          : "#"
                      }
                      title={
                        compareDate(job.deadline)
                          ? ""
                          : "the deadline has passed"
                      }
                      onClick={(e) => {
                        if (!compareDate(job.deadline)) {
                          e.preventDefault();
                        }
                      }}
                    >
                      here
                    </Link>
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
