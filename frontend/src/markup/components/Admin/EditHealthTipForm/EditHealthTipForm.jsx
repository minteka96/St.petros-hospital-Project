/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import healthTipService from "../../../Services/healthtip.service";
import classes from "./EditHealthTipForm.module.css";

const EditHealthTipForm = () => {
  const { health_tip_id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [healthTipTitle, setHealthTipTitle] = useState("");
  const [healthTipDetail, setHealthTipDetail] = useState("");
  const [healthTipDescription, setHealthTipDescription] = useState("");
  const [healthTipLink, setHealthTipLink] = useState("");
  const [healthTipImageLink, setHealthTipImageLink] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.healthTip) {
        const healthTip = location.state.healthTip;
        setHealthTipTitle(healthTip.health_tip_title || "");
        setHealthTipDetail(healthTip.health_tip_detail || "");
        setHealthTipDescription(healthTip.health_tip_description || "");
        setHealthTipLink(healthTip.health_tip_link || "");
        setHealthTipImageLink(healthTip.health_tip_image_link || null);
        setLoading(false);
      } else {
        try {
          const response = await healthTipService.getHealthTipById(health_tip_id);
          const healthTip = response.data;
          setHealthTipTitle(healthTip.health_tip_title || "");
          setHealthTipDetail(healthTip.health_tip_detail || "");
          setHealthTipDescription(healthTip.health_tip_description || "");
          setHealthTipLink(healthTip.health_tip_link || "");
          setHealthTipImageLink(healthTip.health_tip_image_link || null);
        } catch (err) {
          setError("Failed to fetch health tip details.");
        } finally {
          setLoading(false);
        }
      }
    };

    initializeFormData();
  }, [health_tip_id, location.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("health_tip_title", healthTipTitle);
    formData.append("health_tip_detail", healthTipDetail);
    formData.append("health_tip_description", healthTipDescription);
    formData.append("health_tip_link", healthTipLink);
    if (healthTipImageLink) {
      formData.append("health_tip_image", healthTipImageLink);
    }

    if (!healthTipTitle || !healthTipDetail) {
      setError("Health tip title and detail are required.");
      return;
    }

    try {
      const response = await healthTipService.updateHealthTip(health_tip_id, formData);
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("Health Tip updated successfully!");
        setError("");

        setTimeout(() => {
          navigate("/admin/health-tips");
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong while updating the health tip.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit Health Tip</h2>
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
        type="text"
        placeholder="Health Tip Link"
        value={healthTipLink}
        onChange={(e) => setHealthTipLink(e.target.value)}
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
  );
};

export default EditHealthTipForm;
