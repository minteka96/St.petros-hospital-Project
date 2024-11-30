/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import healthTipService from "../../../../Services/healthtip.service"; // Adjust path if necessary
import classes from "./AddHealthTipForm.module.css";

const AddHealthTipForm = () => {
  // State variables for the form
  const [healthTipTitle, setHealthTipTitle] = useState("");
  const [healthTipDetail, setHealthTipDetail] = useState("");
  const [healthTipDescription, setHealthTipDescription] = useState("");
  const [healthTipLink, setHealthTipLink] = useState("");
  const [healthTipImageLink, setHealthTipImageLink] = useState(null);
  const [healthTipVideoLink, setHealthTipVideoLink] = useState(""); // Video Link state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData for sending the form data, including the image
    const formData = new FormData();
    formData.append("health_tip_title", healthTipTitle);
    formData.append("health_tip_detail", healthTipDetail);
    formData.append("health_tip_description", healthTipDescription);
    formData.append("health_tip_link", healthTipLink);
    formData.append("health_tip_video_link", healthTipVideoLink); // Add video link

    if (healthTipImageLink) {
      formData.append("health_tip_image", healthTipImageLink);
    }

    try {
      // Call the service to add the health tip
      const response = await healthTipService.createHealthTip(formData);
      console.log("response", response);
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Health Tip added successfully!");
        setError("");

        // Reset the form fields
        setHealthTipTitle("");
        setHealthTipDetail("");
        setHealthTipDescription("");
        setHealthTipLink("");
        setHealthTipImageLink(null);
        setHealthTipVideoLink(""); // Reset video link

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/admin/health-tips");
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting health tip:", err);
      setError("Something went wrong while adding the health tip.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add Health Tip</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      {/* Title Input */}
      <input
        type="text"
        placeholder="Health Tip Title"
        value={healthTipTitle}
        onChange={(e) => setHealthTipTitle(e.target.value)}
        className={classes.inputField}
        required
      />

      {/* Detail Textarea */}
      <textarea
        placeholder="Health Tip Detail"
        value={healthTipDetail}
        onChange={(e) => setHealthTipDetail(e.target.value)}
        className={classes.textareaField}
        required
      />

      {/* Description Textarea */}
      <textarea
        placeholder="Health Tip Description"
        value={healthTipDescription}
        onChange={(e) => setHealthTipDescription(e.target.value)}
        className={classes.textareaField}
      />

      {/* Link Input */}
      <input
        type="text"
        placeholder="Health Tip Link"
        value={healthTipLink}
        onChange={(e) => setHealthTipLink(e.target.value)}
        className={classes.inputField}
      />

      {/* Video Link Input */}
      <input
        type="text"
        placeholder="Health Tip Video Link (optional)"
        value={healthTipVideoLink}
        onChange={(e) => setHealthTipVideoLink(e.target.value)}
        className={classes.inputField}
      />

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setHealthTipImageLink(e.target.files[0])}
        className={classes.inputField}
      />

      {/* Submit Button */}
      <button type="submit" className={classes.submitButton}>
        Add Health Tip
      </button>
    </form>
  );
};

export default AddHealthTipForm;
