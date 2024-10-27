import React from "react";
import "./JobsDetails/ApplicationForm.css";

const ApplicationForm = () => {
  return (
    <div className="form-container">
      <h2>Application Form - Professional Nurse</h2>
      <p>
        Please submit your CVs and credentials in person to the Hospital, the
        hospital relocated to its current site, situated above the former Amha
        Desta school, below Kuskuam church.. OR attach your CV and credentials
        on our website.
      </p>

      <form className="application-form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Father's Name</label>
          <input type="text" placeholder="Father Name" />
        </div>

        <div className="form-group">
          <label>Marital Status</label>
          <select>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Phone</label>
          <input type="tel" placeholder="(09) 00000000" />
        </div>

        <div className="form-group">
          <label>Alternative Phone</label>
          <input type="tel" placeholder="(09) 00000000" />
        </div>

        <div className="form-group">
          <label>Birth Date</label>
          <input type="date" placeholder="mm/dd/yyyy" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label>Your Photo</label>
          <input type="file" />
        </div>

        <div className="form-group">
          <label>Your Address</label>
          <textarea placeholder="Your Address"></textarea>
        </div>

        <div className="form-group">
          <label>Education Background</label>
          <textarea placeholder="Education Background"></textarea>
        </div>

        <div className="form-group">
          <label>Working Experience</label>
          <textarea placeholder="Working Experience"></textarea>
        </div>

        <div className="form-group">
          <label>Your CV</label>
          <input type="file" />
        </div>

        <button type="submit" className="submit-button">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
