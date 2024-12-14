import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import healthTipService from "../../../../Services/healthtip.service.js"; // Adjust the path if necessary
import classes from "./AddHealthTipForm.module.css"; // Adjust the path if necessary
import { useAuth } from "../../../../contexts/AuthContext"; // Adjust the path if necessary

const AddHealthTipForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const navigate = useNavigate();

  // State variables for the form
  const [healthTipTitle, setHealthTipTitle] = useState("");
  const [healthTipDetail, setHealthTipDetail] = useState("");
  const [healthTipDescription, setHealthTipDescription] = useState("");
  const [healthTipLink, setHealthTipLink] = useState("");
  const [healthTipVideoLink, setHealthTipVideoLink] = useState("");
  const [healthTipImageLink, setHealthTipImageLink] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("health_tip_title", healthTipTitle);
    formData.append("health_tip_detail", healthTipDetail);
    formData.append("health_tip_description", healthTipDescription);
    formData.append("health_tip_link", healthTipLink);
    formData.append("health_tip_video_link", healthTipVideoLink);
    if (healthTipImageLink) {
      formData.append("health_tip_image", healthTipImageLink);
    }

    try {

      const response = await healthTipService.createHealthTip(formData, token);
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Health Tip added successfully!");
        setError("");

        // Reset form fields
        setHealthTipTitle("");
        setHealthTipDetail("");
        setHealthTipDescription("");
        setHealthTipLink("");
        setHealthTipVideoLink("");
        setHealthTipImageLink(null);

        // Navigate to the health tip list page after 2 seconds
        setTimeout(() => {
          navigate("/admin/healthtiplist"); // Navigate to the list of health tips
        }, 2000);
      }
    } catch (err) {
      console.error("Error creating health tip:", err);
      setError("Something went wrong while adding the health tip.");
      setSuccess(""); // Clear success message if there's an error
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add Health Tip</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      <input
        type="text"
        placeholder="Health Tip Title"
        value={healthTipTitle}
        onChange={(e) => setHealthTipTitle(e.target.value)}
        className={classes.inputField}
        required
      />

      <textarea
        placeholder="Health Tip Detail"
        value={healthTipDetail}
        onChange={(e) => setHealthTipDetail(e.target.value)}
        className={classes.textareaField}
        required
      />

      <textarea
        placeholder="Health Tip Description"
        value={healthTipDescription}
        onChange={(e) => setHealthTipDescription(e.target.value)}
        className={classes.textareaField}
      />

      <input
        type="url"
        placeholder="Health Tip Link"
        value={healthTipLink}
        onChange={(e) => setHealthTipLink(e.target.value)}
        className={classes.inputField}
      />

      <input
        type="url"
        placeholder="Health Tip Video Link"
        value={healthTipVideoLink}
        onChange={(e) => setHealthTipVideoLink(e.target.value)}
        className={classes.inputField}
      />

      <input
        type="file"
        onChange={(e) => setHealthTipImageLink(e.target.files[0])}
      />

      <button type="submit" className={classes.submitButton}>
        Add Health Tip
      </button>
    </form>
  );
};

export default AddHealthTipForm;
