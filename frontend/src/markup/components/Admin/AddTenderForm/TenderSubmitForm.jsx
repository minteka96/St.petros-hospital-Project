import React, { useState } from "react";
import "./TenderComponent.css";
import logo from "../../../../assets/img/images/logo copy.png";

function TenderSubmitForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    projectBudget: "",
    timeline: "",
    technicalProposal: null,
    supportingDocuments: null,
    experience: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{7,15}$/;

    if (!formData.companyName)
      formErrors.companyName = "Company name is required.";
    if (!formData.contactPerson)
      formErrors.contactPerson = "Contact person is required.";
    if (!formData.contactEmail || !emailPattern.test(formData.contactEmail)) {
      formErrors.contactEmail = "Valid email is required.";
    }
    if (!formData.contactPhone || !phonePattern.test(formData.contactPhone)) {
      formErrors.contactPhone = "Valid phone number is required.";
    }
    if (!formData.projectBudget || formData.projectBudget <= 0) {
      formErrors.projectBudget = "Budget must be a positive number.";
    }
    if (!formData.timeline) formErrors.timeline = "Timeline is required.";
    if (
      !formData.technicalProposal ||
      formData.technicalProposal.type !== "application/pdf"
    ) {
      formErrors.technicalProposal = "Technical proposal must be a PDF.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      setTimeout(() => {
        setSuccessMessage("Tender form submitted successfully!");
        setSubmitting(false);
      }, 2000);
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  return (
    <div className="tender-form-container">
      <header className="form-header">
        <a href="/">
          <img src={logo} alt="St. Petros Hospital" className="logo" />
        </a>
        <h1 className="form-title">Tender Submission</h1>
      </header>

      <form onSubmit={handleSubmit}>
        {/* General Form Title */}
        <h2>Company and Project Information</h2>

        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                placeholder="Enter your company name"
              />
              {errors.companyName && (
                <p className="error-message">{errors.companyName}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person:</label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                placeholder="Enter contact person's name"
              />
              {errors.contactPerson && (
                <p className="error-message">{errors.contactPerson}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactEmail">Contact Email:</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
                placeholder="Enter contact email"
              />
              {errors.contactEmail && (
                <p className="error-message">{errors.contactEmail}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contactPhone">Contact Phone:</label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                placeholder="Enter contact phone number"
              />
              {errors.contactPhone && (
                <p className="error-message">{errors.contactPhone}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="projectBudget">Estimated Budget (USD):</label>
              <input
                type="number"
                id="projectBudget"
                name="projectBudget"
                value={formData.projectBudget}
                onChange={handleChange}
                required
                placeholder="Enter estimated budget"
              />
              {errors.projectBudget && (
                <p className="error-message">{errors.projectBudget}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="timeline">Timeline:</label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                placeholder="Enter project timeline"
              />
              {errors.timeline && (
                <p className="error-message">{errors.timeline}</p>
              )}
            </div>
          </div>
        </div>

        {/* File Uploads */}
        <div className="form-section">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="technicalProposal">
                Technical Proposal (PDF only):
              </label>
              <input
                type="file"
                id="technicalProposal"
                name="technicalProposal"
                accept="application/pdf"
                onChange={handleChange}
                required
              />
              {errors.technicalProposal && (
                <p className="error-message">{errors.technicalProposal}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="supportingDocuments">Supporting Documents:</label>
              <input
                type="file"
                id="supportingDocuments"
                name="supportingDocuments"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="experience">Relevant Experience:</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              placeholder="Describe relevant experience"
            />
            {errors.experience && (
              <p className="error-message">{errors.experience}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="form-actions">
          <button type="submit" disabled={submitting} className="submit-button">
            {submitting ? "Submitting..." : "Submit Tender"}
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}
    </div>
  );
}

export default TenderSubmitForm;
