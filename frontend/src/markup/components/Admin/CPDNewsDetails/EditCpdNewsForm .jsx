/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import cpd_newsService from "../../../../Services/cpd_news.service"; // Correct path
import classes from "./EditCpdNewsForm.module.css"; // Adjust path if necessary
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const EditCpdNewsForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const { news_id } = useParams(); // Extract `news_id` from the URL
  const location = useLocation(); // Access state passed via navigate
  const navigate = useNavigate();

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsExpiryDate, setNewsExpiryDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.news) {
        // Use the news item from state if available
        const news = location.state.news;
        setNewsTitle(news.news_title || "");
        setNewsDescription(news.news_description || "");
        setNewsExpiryDate(news.news_expiry_date || "");
        setLoading(false);
      } else {
        // Fetch the news details via API if not passed through state
        try {
          const response = await cpd_newsService.getCpdNewsById(news_id);
          const news = response.data;
          setNewsTitle(news.news_title || "");
          setNewsDescription(news.news_description || "");
          setNewsExpiryDate(news.news_expiry_date || "");
        } catch (err) {
          setError("Failed to fetch news details.");
        } finally {
          setLoading(false);
        }
      }
    };

    initializeFormData();
  }, [news_id, location.state]);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation check for empty fields
  if (!newsTitle || !newsDescription) {
    setError("News title and description are required.");
    return;
  }

  const formData = new FormData();
  formData.append("news_title", newsTitle);
  formData.append("news_description", newsDescription);
  formData.append("news_expiry_date", newsExpiryDate);

  // Log the formData to verify its contents
  console.log("Form Data:", {
    news_title: newsTitle,
    news_description: newsDescription,
    news_expiry_date: newsExpiryDate,
  });

  try {
    const response = await cpd_newsService.updateCpdNews(news_id, formData, token);
    if (response.error) {
      setError(response.error);
      setSuccess("");
    } else {
      setSuccess("CPD News updated successfully!");
      setError("");

      setTimeout(() => {
        navigate("/admin/cpd-news");
      }, 2000);
    }
  } catch (err) {
    console.error("Error while updating CPD news:", err);
    setError("Something went wrong while updating the CPD news.");
    setSuccess("");
  }
};



  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit CPD News</h2>
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
        type="date"
        value={newsExpiryDate}
        onChange={(e) => setNewsExpiryDate(e.target.value)}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Update CPD News
      </button>
    </form>
  );
};

export default EditCpdNewsForm;
