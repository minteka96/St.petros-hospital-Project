import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service"; // Adjust the path if necessary
import classes from "./AddNewsForm.module.css";

const AddNewsForm = () => {
  // State variables for the form
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDetail, setNewsDetail] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [newsImageLink, setNewsImageLink] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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

    try {
      const response = await newsService.createNews(formData);
      console.log("response", response);
      if (response.error) {
        setError(response.error);
        setSuccess("");
      } else {
        setSuccess("News added successfully!");
        setError("");

        setNewsTitle("");
        setNewsDetail("");
        setNewsDescription("");
        setNewsLink("");
        setNewsImageLink(null);

        setTimeout(() => {
          navigate("/admin-dashboard/news");
        }, 2000);
      }
    } catch (err) {
      // Improved error handling
      console.error("Error submitting news:", err);
      // setError("Something went wrong while adding the news.");
      // alert("Something went wrong while adding the news.");
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
        type="file"
        // accept="image/*"
        onChange={(e) => setNewsImageLink(e.target.files[0])}
      />
      <button type="submit" className={classes.submitButton}>
        Add News
      </button>
    </form>
  );
};

export default AddNewsForm;
