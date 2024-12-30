/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cpd_newsService from "../../../../Services/cpd_news.service.js"; // Ensure the path is correct
import classes from "./AddcpdNewsForm.module.css"; 
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const AddCpdNewsForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;

  // State variables for the form
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState(""); // Corrected state for expiry date
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!newsTitle || !newsDescription || !expiryDate) {
    setError("Title, Description, and Expiry Date are required.");
    return;
  }

  const formData = { newsTitle, newsDescription, expiryDate };
  setLoading(true);

  try {
    const response = await cpd_newsService.createCpdNews(formData, token);
    if (response.error) {
      setError(response.error);
      setSuccess("");
    } else {
      setSuccess("News added successfully!");
      setError("");
    }
  } catch (err) {
    console.error("Error submitting news:", err);
    setError("Something went wrong while adding the news.");
    setSuccess("");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add News</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      <input
        type="text"
        placeholder="News Title"
        value={newsTitle}
        onChange={(e) => setNewsTitle(e.target.value)}
        className={classes.inputField}
        required
      />
    
      <textarea
        placeholder="News Description"
        value={newsDescription}
        onChange={(e) => setNewsDescription(e.target.value)}
        className={classes.textareaField}
        required
      />
      
      <input
        type="date" // Added date picker for expiry date
        placeholder="Expiry Date"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        className={classes.inputField}
        required
      />
      <button type="submit" className={classes.submitButton}>
        Add News
      </button>
    </form>
  );
};

export default AddCpdNewsForm;
