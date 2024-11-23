import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service";
import classes from "./EditNewsForm.module.css";

const EditNewsForm = () => {
  const { news_id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    news_title: "",
    news_detail: "",
    news_description: "",
    news_link: "",
    news_image: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const populateFormData = (news) => {
      setFormData({
        news_title: news.news_title || "",
        news_detail: news.news_detail || "",
        news_description: news.news_description || "",
        news_link: news.news_link || "",
        news_image: news.news_image_link || "", // Safely handle the `news_image_link` field
      });
    };

    if (location.state?.news) {
      // Use passed state to populate the form
      populateFormData(location.state.news);
      setLoading(false);
    } else {
      // Fetch the news details if state is not provided
      const fetchNewsDetails = async () => {
        try {
          const response = await newsService.getNewsById(news_id);
          if (response.data) {
            populateFormData(response.data);
          } else {
            setError("News details not found.");
          }
        } catch (err) {
          setError("Failed to fetch news details.");
        } finally {
          setLoading(false);
        }
      };

      fetchNewsDetails();
    }
  }, [news_id, location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle file inputs separately
    if (name === "news_image" && e.target.files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: e.target.files[0], // Set the file object
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data for file uploads
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await newsService.updateNews(news_id, formDataToSend);

      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("News updated successfully!");
        setError("");
        setTimeout(() => {
          navigate("/admin-dashboard/news");
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong while updating the news.");
      setSuccess("");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit News</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}
      <input
        type="text"
        name="news_title"
        value={formData.news_title}
        onChange={handleChange}
        placeholder="News Title"
        className={classes.inputField}
        required
      />
      <textarea
        name="news_detail"
        value={formData.news_detail}
        onChange={handleChange}
        placeholder="News Detail"
        className={classes.textareaField}
        required
      />
      <textarea
        name="news_description"
        value={formData.news_description}
        onChange={handleChange}
        placeholder="News Description"
        className={classes.textareaField}
      />
      <input
        type="text"
        name="news_link"
        value={formData.news_link}
        onChange={handleChange}
        placeholder="News Link"
        className={classes.inputField}
      />
      <input
        type="file"
        name="news_image"
        onChange={handleChange}
        className={classes.inputField}
        accept="image/*" // Restrict file input to image files
      />
      <button type="submit" className={classes.submitButton}>
        Update News
      </button>
    </form>
  );
};

export default EditNewsForm;
