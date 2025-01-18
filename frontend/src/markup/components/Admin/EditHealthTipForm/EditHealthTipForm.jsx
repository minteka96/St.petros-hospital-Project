/* eslint-disable no-unused-vars */
// Import required modules and components
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import healthTipService from "../../../../Services/healthtip.service"; // Adjust the path as needed
import classes from "./EditHealthTipForm.module.css"; // Adjust the path as needed
import { useAuth } from "../../../../contexts/AuthContext.jsx";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const EditHealthTipForm = () => {
  const { user } = useAuth();
  const token = user?.token || null; // Extract token from authenticated user context
  const { health_tip_id } = useParams(); // Retrieve health tip ID from URL params
  const navigate = useNavigate(); // Navigation handler

  // State management for form inputs and loading state
  const [healthTipTitle, setHealthTipTitle] = useState("");
  const [healthTipDetail, setHealthTipDetail] = useState("");
  const [healthTipDescription, setHealthTipDescription] = useState("");
  const [healthTipLink, setHealthTipLink] = useState("");
  const [healthTipVideoLink, setHealthTipVideoLink] = useState("");
  const [healthTipImageLink, setHealthTipImageLink] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize form data on component mount
  useEffect(() => {
    const fetchHealthTipFromAPI = async () => {
      try {
        const response = await healthTipService.getHealthTipById(health_tip_id);
        if (response) {
          setHealthTipTitle(response.health_tip_title || "");
          setHealthTipDetail(response.health_tip_detail || "");
          setHealthTipDescription(response.health_tip_description || "");
          setHealthTipLink(response.health_tip_link || "");
          setHealthTipVideoLink(response.health_tip_video_link || "");
          setHealthTipImageLink(response.health_tip_image_link || null);
          setLoading(false);
        }
      } catch (error) {
        toast.error("Failed to fetch health tip details.");
      }
    };
    fetchHealthTipFromAPI();
  }, [health_tip_id]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!healthTipTitle || !healthTipDetail) {
      toast.error("Health tip title and detail are required.");
      return;
    }

    const formData = new FormData();
    formData.append("health_tip_title", healthTipTitle);
    formData.append("health_tip_detail", healthTipDetail);
    formData.append("health_tip_description", healthTipDescription);
    formData.append("health_tip_video_link", healthTipVideoLink);
    formData.append("health_tip_link", healthTipLink);
    if (healthTipImageLink) {
      formData.append("health_tip_image", healthTipImageLink);
    }

    try {
      const response = await healthTipService.updateHealthTip(
        health_tip_id,
        formData,
        token
      );
      if (response.error) {
        throw new Error(response.error);
      }

      toast.success("Health Tip updated successfully!");
      setTimeout(() => navigate("/admin/healthtiplist"), 2000);
    } catch (err) {
      toast.error("Something went wrong while updating the health tip.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <h2>Edit Health Tip</h2>

        {/* Form fields */}
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
          type="text"
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
          className={classes.inputField}
        />

        <button type="submit" className={classes.submitButton}>
          Update Health Tip
        </button>
      </form>

      {/* Toast container to display success and error messages */}
      <ToastContainer />
    </>
  );
};

export default EditHealthTipForm;
