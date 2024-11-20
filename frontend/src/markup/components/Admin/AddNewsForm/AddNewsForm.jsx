import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../../services/news.service"; // Adjust the path if necessary
import classes from "./AddNewsForm.module.css";

const AddNewsForm = () => {
  // State variables for the form
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDetail, setNewsDetail] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [newsImageLink, setNewsImageLink] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object with updated field names to match the backend
    const formData = {
      news_title: newsTitle,
      news_detail: newsDetail,
      news_description: newsDescription,
      news_link: newsLink,
      news_image_link: newsImageLink,
    };

    try {
      // Call the createNews service
      const response = await newsService.createNews(formData);

      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("News added successfully!");
        setError("");

        // Clear form fields
        setNewsTitle("");
        setNewsDetail("");
        setNewsDescription("");
        setNewsLink("");
        setNewsImageLink("");
        // Add 2-second timeout before navigating
        setTimeout(() => {
          navigate("/admin/news");
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong while adding the news.");
      setSuccess("");
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
        type="text"
        placeholder="Image URL"
        value={newsImageLink}
        onChange={(e) => setNewsImageLink(e.target.value)}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Add News
      </button>
    </form>
  );
};

export default AddNewsForm;
