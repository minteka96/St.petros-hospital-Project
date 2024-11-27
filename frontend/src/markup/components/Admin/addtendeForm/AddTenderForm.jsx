/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tenderService from "../../../../Services/tender.service"; // Adjust the path if necessary
import classes from "./AddTenderForm.module.css";

const AddTenderForm = () => {
  // State variables for the form
  const [tenderTitle, setTenderTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [closingDate, setClosingDate] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [tenderDocument, setTenderDocument] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("tenderTitle", tenderTitle);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("openingDate", openingDate);
    formData.append("closingDate", closingDate);
    formData.append("estimatedBudget", estimatedBudget);
    formData.append("timeline", timeline);

    if (tenderDocument) {
      formData.append("tenderDocument", tenderDocument);
    }

    try {
      const response = await tenderService.createTender(formData); // Assuming createTender method exists in tenderService
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Tender added successfully!");
        setError("");

        setTenderTitle("");
        setCategory("");
        setDescription("");
        setOpeningDate("");
        setClosingDate("");
        setEstimatedBudget("");
        setTimeline("");
        setTenderDocument(null);

        setTimeout(() => {
          navigate("/admin/tenders"); // Redirect to tenders list page
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting tender:", err);
      setError("Something went wrong while adding the tender.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add Tender</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      <input
        type="text"
        placeholder="Tender Title"
        value={tenderTitle}
        onChange={(e) => setTenderTitle(e.target.value)}
        className={classes.inputField}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={classes.inputField}
        required
      />

      <textarea
        placeholder="Tender Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={classes.textareaField}
        required
      />

      <input
        type="date"
        placeholder="Opening Date"
        value={openingDate}
        onChange={(e) => setOpeningDate(e.target.value)}
        className={classes.inputField}
        required
      />

      <input
        type="date"
        placeholder="Closing Date"
        value={closingDate}
        onChange={(e) => setClosingDate(e.target.value)}
        className={classes.inputField}
        required
      />

      <input
        type="number"
        placeholder="Estimated Budget"
        value={estimatedBudget}
        onChange={(e) => setEstimatedBudget(e.target.value)}
        className={classes.inputField}
        required
      />

      <input
        type="text"
        placeholder="Timeline"
        value={timeline}
        onChange={(e) => setTimeline(e.target.value)}
        className={classes.inputField}
      />

      <input
        type="file"
        onChange={(e) => setTenderDocument(e.target.files[0])}
        className={classes.fileInput}
      />

      <button type="submit" className={classes.submitButton}>
        Add Tender
      </button>
    </form>
  );
};

export default AddTenderForm;
