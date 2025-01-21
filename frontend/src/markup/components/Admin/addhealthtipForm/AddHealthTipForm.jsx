import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import healthTipService from "../../../../Services/healthtip.service.js"; // Adjust the path if necessary
import classes from "./AddHealthTipForm.module.css"; // Adjust the path if necessary
import { useAuth } from "../../../../contexts/AuthContext"; // Adjust the path if necessary
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("health_tip_title", healthTipTitle);
    formData.append("health_tip_detail", healthTipDetail);
    formData.append("health_tip_description", healthTipDescription);

    // Only append optional fields if they are provided
    if (healthTipLink) {
      formData.append("health_tip_link", healthTipLink);
    }
    if (healthTipVideoLink) {
      formData.append("health_tip_video_link", healthTipVideoLink);
    }
    if (healthTipImageLink) {
      formData.append("health_tip_image", healthTipImageLink);
    }

    try {
      const response = await healthTipService.createHealthTip(formData, token);
      if (response.error) {
        toast.error(response.error); // Show error toast
      } else {
        toast.success("Health Tip added successfully!"); // Show success toast

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
      toast.error("Something went wrong while adding the health tip."); // Show error toast
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add Health Tip</h2>

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
        placeholder="Health Tip Link (optional)"
        value={healthTipLink}
        onChange={(e) => setHealthTipLink(e.target.value)}
        className={classes.inputField}
      />

      <input
        type="url"
        placeholder="Health Tip Video Link (optional)"
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

      {/* Toast container to display success and error messages */}
      <ToastContainer />
    </form>
  );
};

export default AddHealthTipForm;
