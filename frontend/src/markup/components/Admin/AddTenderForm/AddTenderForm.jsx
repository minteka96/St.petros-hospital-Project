import React, { useState } from "react";
import "./AddTenderForm.css"; // Assuming you will style here
import logo from "../../../../assets/img/images/logo copy.png";
// import TenderSubmitForm from "./TenderSubmitForm"; // Import TenderSubmitForm

const AddTenderForm = () => {
  const [formData, setFormData] = useState({
    tenderTitle: "",
    description: "",
    category: "Medical Equipment",
    openingDate: "",
    closingDate: "",
    estimatedBudget: "",
    timeline: "",
  });

  const [errors, setErrors] = useState({});
  const [isTenderFormVisible, setTenderFormVisible] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.tenderTitle)
      formErrors.tenderTitle = "Tender title is required";
    if (!formData.description)
      formErrors.description = "Description is required";
    if (!formData.openingDate)
      formErrors.openingDate = "Opening date is required";
    if (!formData.closingDate)
      formErrors.closingDate = "Closing date is required";
    if (!formData.estimatedBudget)
      formErrors.estimatedBudget = "Estimated budget is required";
    if (!formData.timeline) formErrors.timeline = "Timeline is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Tender form submitted successfully!");
      setTenderFormVisible(true); // Show the TenderSubmitForm after validation
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
        <h1>St. Petros Hospital Tender Form</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <h2>Tender Information</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tenderTitle">Tender Title:</label>
              <input
                type="text"
                id="tenderTitle"
                name="tenderTitle"
                value={formData.tenderTitle}
                onChange={handleChange}
                required
                placeholder="Enter the title of the tender"
              />
              {errors.tenderTitle && (
                <p className="error-message">{errors.tenderTitle}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Medical Equipment">Medical Equipment</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="IT Services">IT Services</option>
                <option value="Construction">Construction</option>
                <option value="Cleaning Services">Cleaning Services</option>
                <option value="Cars">Cars</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Provide a detailed description of the tender"
            />
            {errors.description && (
              <p className="error-message">{errors.description}</p>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="openingDate">Opening Date:</label>
              <input
                type="date"
                id="openingDate"
                name="openingDate"
                value={formData.openingDate}
                onChange={handleChange}
                required
              />
              {errors.openingDate && (
                <p className="error-message">{errors.openingDate}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="closingDate">Closing Date:</label>
              <input
                type="date"
                id="closingDate"
                name="closingDate"
                value={formData.closingDate}
                onChange={handleChange}
                required
              />
              {errors.closingDate && (
                <p className="error-message">{errors.closingDate}</p>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="estimatedBudget">Estimated Budget (USD):</label>
              <input
                type="number"
                id="estimatedBudget"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                required
                placeholder="e.g., 5000"
              />
              {errors.estimatedBudget && (
                <p className="error-message">{errors.estimatedBudget}</p>
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
                placeholder="e.g., 6 months or by June 2025"
              />
              {errors.timeline && (
                <p className="error-message">{errors.timeline}</p>
              )}
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">
            Post Tender
          </button>
        </div>
      </form>

      {/* {isTenderFormVisible && (
        <TenderSubmitForm
          tenderData={formData} // Pass form data to the TenderSubmitForm
          onClose={() => setTenderFormVisible(false)} // Handle closing the form
        />
      )} */}
    </div>
  );
};

export default AddTenderForm;







