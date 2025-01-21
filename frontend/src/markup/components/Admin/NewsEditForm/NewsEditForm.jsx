import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import newsService from "../../../../Services/news.service"; // Adjust path if necessary
import classes from "./EditNewsForm.module.css"; // Adjust path if necessary
import { useAuth } from "../../../../contexts/AuthContext.jsx";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.news) {
        const news = location.state.news;
        setNewsTitle(news.news_title || "");
        setNewsDetail(news.news_detail || "");
        setNewsDescription(news.news_description || "");
        setNewsLink(news.news_link || "");
        setNewsImageLink(news.news_image_link || null);
        setLoading(false);
      } else {
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

  const validateForm = () => {
    if (!newsTitle.trim()) {
      setError("News title is required.");
      return false;
    }
    if (!newsDetail.trim()) {
      setError("News detail is required.");
      return false;
    }
    if (newsLink && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(newsLink)) {
      setError("Please enter a valid URL for the news link.");
      return false;
    }
    setError(""); // Clear errors if all validations pass
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("news_title", newsTitle.trim());
    formData.append("news_detail", newsDetail.trim());
    formData.append("news_description", newsDescription.trim());
    if (newsLink.trim()) {
      formData.append("news_link", newsLink.trim());
    }
    if (newsImageLink) {
      formData.append("news_image", newsImageLink);
    }

    try {
      const response = await newsService.updateNews(news_id, formData, token);
      if (response.error) {
        setError(response.error);
        toast.error(response.error); // Show error toast
      } else {
        toast.success("News updated successfully!"); // Show success toast
        setError("");

        setTimeout(() => {
          navigate("/admin/news");
        }, 2000);
      }
    } catch (err) {
      console.error("Error updating news:", err);
      setError("Something went wrong while updating the news.");
      toast.error("Something went wrong while updating the news."); // Show error toast
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Edit News</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}

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
        placeholder="News Link (optional)"
        value={newsLink}
        onChange={(e) => setNewsLink(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewsImageLink(e.target.files[0])}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Update News
      </button>

      {/* Toast container to display success and error messages */}
      <ToastContainer />
    </form>
  );
};

export default EditNewsForm;

