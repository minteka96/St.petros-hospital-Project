import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./JobsDetails/Vacancies.css.css";

const Vacancies = () => {
  const [showDetails, setShowDetails] = useState({
    nurse: false,
    professionalNurse: false,
    headNurse: false,
  });

  const toggleDetails = (position) => {
    setShowDetails((prev) => ({
      ...prev,
      [position]: !prev[position],
    }));
  };

  return (
    <div className="vacancies-container">
      <h1 className="vacancies-title">Vacancy</h1>
      <p className="vacancies-description">
        If you aspire to be part of a dedicated, multi-disciplinary team that
        works together to improve our patients' lives, come join us.
      </p>

      {/* OR Scrub Nurse */}
      <div className="vacancy">
        <div className="vacancy-header">
          <h2 className="vacancy-position">Position: OR Scrub Nurse</h2>
          <p className="vacancy-subtitle">
            Closing Date: 2023-07-29 | Place of Work: Addis Ababa
          </p>
        </div>
        <button
          onClick={() => toggleDetails("nurse")}
          className="toggle-button"
        >
          {showDetails.nurse ? "Hide Details" : "Show Details"}
        </button>
        {showDetails.nurse && (
          <ul className="details-list">
            <li>
              <strong>Skill Required:</strong> Experience as Scrub Nurse
            </li>
            <li>
              <strong>Specialization:</strong> Nurses
            </li>
            <li>
              <strong>Qualification:</strong> B.Sc. degree in Nursing
            </li>
            <li>
              <strong>Job Description:</strong> Experience as Scrub Nurse with
              5+ years of experience
            </li>
            <li>
              <strong>Term of Employment:</strong> Permanent / Full Time
            </li>
            <li>
              <strong>Salary:</strong> As per the Hospital’s salary scale
            </li>
            <li>
              <strong>Address:</strong> Somale Tera, Infront of Global
              Insurance, HR Department Office No. 500/5th Floor
            </li>
            <li>
              <strong>How to Apply:</strong> Please submit your CVs and
              credentials in person to the Hospital,the hospital relocated to
              its current site, situated above the former Amha Desta school,
              below Kuskuam church., OR attach your CV and credentials on our
              website, <Link to="/application-form">here</Link>.
            </li>
          </ul>
        )}
      </div>

      {/* Professional Nurse */}
      <div className="vacancy">
        <div className="vacancy-header">
          <h2 className="vacancy-position">Position: Professional Nurse</h2>
          <p className="vacancy-subtitle">
            Closing Date: 2023-07-29 | Place of Work: Addis Ababa
          </p>
        </div>
        <button
          onClick={() => toggleDetails("professionalNurse")}
          className="toggle-button"
        >
          {showDetails.professionalNurse ? "Hide Details" : "Show Details"}
        </button>
        {showDetails.professionalNurse && (
          <ul className="details-list">
            <li>
              <strong>Skill Required:</strong> Experience in Nursing
            </li>
            <li>
              <strong>Specialization:</strong> Nurses
            </li>
            <li>
              <strong>Qualification:</strong> B.Sc. degree in Nursing
            </li>
            <li>
              <strong>Job Description:</strong> Professional nursing experience
              required
            </li>
            <li>
              <strong>Term of Employment:</strong> Permanent / Full Time
            </li>
            <li>
              <strong>Salary:</strong> As per the Hospital’s salary scale
            </li>
            <li>
              <strong>Address:</strong> Somale Tera, Infront of Global
              Insurance, HR Department Office No. 500/5th Floor
            </li>
            <li>
              <strong>How to Apply:</strong> Please submit your CVs and
              credentials in person to the Hospital, the hospital relocated to
              its current site, situated above the former Amha Desta school,
              below Kuskuam church., OR attach your CV and credentials on our
              website, <Link to="/application-form">here</Link>.
            </li>
          </ul>
        )}
      </div>

      {/* Head Nurses */}
      <div className="vacancy">
        <div className="vacancy-header">
          <h2 className="vacancy-position">Position: Head Nurses</h2>
          <p className="vacancy-subtitle">
            Closing Date: 2023-07-29 | Place of Work: Addis Ababa
          </p>
        </div>
        <button
          onClick={() => toggleDetails("headNurse")}
          className="toggle-button"
        >
          {showDetails.headNurse ? "Hide Details" : "Show Details"}
        </button>
        {showDetails.headNurse && (
          <ul className="details-list">
            <li>
              <strong>Skill Required:</strong> Experience as Head Nurse
            </li>
            <li>
              <strong>Specialization:</strong> Nursing Leadership
            </li>
            <li>
              <strong>Qualification:</strong> B.Sc. degree in Nursing
            </li>
            <li>
              <strong>Job Description:</strong> Head nurse with management
              experience
            </li>
            <li>
              <strong>Term of Employment:</strong> Permanent / Full Time
            </li>
            <li>
              <strong>Salary:</strong> As per the Hospital’s salary scale
            </li>
            <li>
              <strong>Address:</strong> Somale Tera, Infront of Global
              Insurance, HR Department Office No. 500/5th Floor
            </li>
            <li>
              <strong>How to Apply:</strong> Please submit your CVs and
              credentials in person to the Hospital, the hospital relocated to
              its current site, situated above the former Amha Desta school,
              below Kuskuam church., OR attach your CV and credentials on our
              website, <Link to="/application-form">here</Link>.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Vacancies;
