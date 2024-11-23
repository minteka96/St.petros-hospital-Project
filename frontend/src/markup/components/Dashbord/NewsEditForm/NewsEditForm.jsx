import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service"; // Adjust path if necessary
import classes from "./EditNewsForm.module.css"; // Adjust path if necessary

const EditNewsForm = () => {
  // const { newsId } = useParams(); // Get the news ID from URL params
  const { news_id } = useParams(); // Extract `news_id` from the URL

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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const response = await newsService.getNewsById(news_id); // Fetch the news details by ID
        const news = response.data;
        console.log('news',news)
        setFormData({
          news_title: news.news_title || "",
          news_detail: news.news_detail || "",
          news_description: news.news_description || "",
          news_link: news.news_link || "",
          news_image: news.news_image_link || "",
        });
      } catch (err) {
        setError("Failed to fetch news details.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [news_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newsService.updateNews(news_id, formData);

      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("News updated successfully!");
        setError("");
        // Add 2-second timeout before navigating
        setTimeout(() => {
          navigate("/admin/news");
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
  console.log(formData);
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
        // value={formData.news_image_link}
        onChange={handleChange}
        // placeholder="Image URL"
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Update News
      </button>
    </form>
  );
};

export default EditNewsForm;
