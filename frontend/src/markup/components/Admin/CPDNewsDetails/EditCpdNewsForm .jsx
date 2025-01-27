/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import cpd_newsService from "../../../../services/cpd_news.service";

import classes from "./EditCpdNewsForm.module.css"; // Adjust path if necessary
import { useAuth } from "../../../../contexts/AuthContext.jsx";


const EditCpdNewsForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const  id  = 1; // Extract `id` from URL
  const location = useLocation(); // Access state passed via navigate
  const navigate = useNavigate();

  const [data, setData] = useState({
    news_title: "",
    news_description: "",
    news_expiry_date: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      try {
        if (location.state?.news) {
          const news = location.state.news;
          setData({
            news_title: news.news_title || "",
            news_description: news.news_description || "",
            news_expiry_date: news.news_expiry_date
              ? new Date(news.news_expiry_date).toISOString().split("T")[0]
              : "", // Handle invalid or missing date
          });
        } else {
          const response = await cpd_newsService.getCpdNewsById(id);
          const news = response.data;
          setData({
            news_title: news.news_title || "",
            news_description: news.news_description || "",
            news_expiry_date: news.news_expiry_date
              ? new Date(news.news_expiry_date).toISOString().split("T")[0]
              : "", // Handle invalid or missing date
          });
        }
      } catch (err) {
        console.error("Failed to fetch news details:", err);
        setError("Failed to fetch news details.");
      } finally {
        setLoading(false);
      }
    };
  
    initializeFormData();
  }, [id, location.state]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!data.news_title || !data.news_description) {
      setError("News title and description are required.");
      return;
    }
  
    // Match the exact field names expected by the backend
    const formData = {
      news_title: data.news_title,
      news_description: data.news_description,
      expiry_date: data.news_expiry_date
    };
  
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
  
      const response = await axios.put(`${API_URL}/api/cpd_news/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token
        },
      });
  
      setSuccess("CPD News updated successfully!");
      setError("");
  
      setTimeout(() => {
        navigate("/admin/cpd-news-list");
      }, 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Something went wrong while updating the CPD news.";
      setError(errorMessage);
      setSuccess("");
    }
  };
  
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit CPD News</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      <input
        type="text"
        placeholder="News Title"
        value={data.news_title}
        name="news_title"
        onChange={handleChange}
        className={classes.inputField}
        required
      />
      <textarea
        placeholder="News Description"
        value={data.news_description}
        name="news_description"
        onChange={handleChange}
        className={classes.textareaField}
        required
      />
      <input
        type="date"
        value={data.news_expiry_date}
        name="news_expiry_date"
        onChange={handleChange}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Update CPD News
      </button>
    </form>
  );
};

export default EditCpdNewsForm;
