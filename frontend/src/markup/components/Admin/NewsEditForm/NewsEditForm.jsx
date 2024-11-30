import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import newsService from "../../../../Services/news.service"; // Adjust path if necessary
import classes from "./EditNewsForm.module.css"; // Adjust path if necessary
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const EditNewsForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const { news_id } = useParams(); // Extract `news_id` from the URL
  const location = useLocation(); // Access state passed via navigate
  const navigate = useNavigate();

  const [newsTitle, setNewsTitle] = useState("");
  const [newsDetail, setNewsDetail] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [newsImageLink, setNewsImageLink] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.news) {
        // Use the news item from state
        const news = location.state.news;
        setNewsTitle(news.news_title || "");
        setNewsDetail(news.news_detail || "");
        setNewsDescription(news.news_description || "");
        setNewsLink(news.news_link || "");
        setNewsImageLink(news.news_image_link || null);
        setLoading(false);
      } else {
        // Fetch from API if no state is passed
        try {
          const response = await newsService.getNewsById(news_id);
          const news = response.data;
          setNewsTitle(news.news_title || "");
          setNewsDetail(news.news_detail || "");
          setNewsDescription(news.news_description || "");
          setNewsLink(news.news_link || "");
          setNewsImageLink(news.news_image_link || null);
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

    const formData = new FormData();
    formData.append("news_title", newsTitle);
    formData.append("news_detail", newsDetail);
    formData.append("news_description", newsDescription);
    formData.append("news_link", newsLink);
    if (newsImageLink) {
      formData.append("news_image", newsImageLink);
    }

    // Validation check for empty fields
    if (!newsTitle || !newsDetail) {
      setError("News title and detail are required.");
      return;
    }

    try {
      const response = await newsService.updateNews(news_id, formData, token);
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("News updated successfully!");
        setError("");

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

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit News</h2>
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
        placeholder="News Detail"
        value={newsDetail}
        onChange={(e) => setNewsDetail(e.target.value)}
        className={classes.textareaField}
        required
      />
      <textarea
        placeholder="News Description"
        value={newsDescription}
        onChange={(e) => setNewsDescription(e.target.value)}
        className={classes.textareaField}
      />
      <input
        type="text"
        placeholder="News Link"
        value={newsLink}
        onChange={(e) => setNewsLink(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="file"
        onChange={(e) => setNewsImageLink(e.target.files[0])}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Update News
      </button>
    </form>
  );
};

export default EditNewsForm;
