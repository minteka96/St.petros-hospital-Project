import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service.js";
import { useAuth } from "../../../../contexts/AuthContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./AddNewsForm.module.css";

const AddNewsForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDetail, setNewsDetail] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [newsLink, setNewsLink] = useState("");
  const [newsImages, setNewsImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!newsTitle.trim()) {
      toast.error("News title is required.");
      return false;
    }
    if (!newsDetail.trim()) {
      toast.error("News detail is required.");
      return false;
    }
    if (newsLink && !/^https?:\/\/[^\s$.?#].[^\s]*$/i.test(newsLink)) {
      toast.error("Please enter a valid URL for the news link.");
      return false;
    }
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
    if (newsImages.length > 0) {
      newsImages.forEach((image) => {
        formData.append("news_image", image);
      });
    }

    try {
      const response = await newsService.createNews(formData, token);
      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("News added successfully!");
        setNewsTitle("");
        setNewsDetail("");
        setNewsDescription("");
        setNewsLink("");
        setNewsImages([]);
        setImagePreviews([]);
        setTimeout(() => {
          navigate("/admin/news");
        }, 2000);
      }
    } catch (err) {
      console.error("Error submitting news:", err);
      toast.error("Something went wrong while adding the news.");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewsImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add News</h2>

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
        onChange={handleImageChange}
        multiple
        className={classes.inputFile}
      />

      {imagePreviews.length > 0 && (
        <div className={classes.imagePreviews}>
          {imagePreviews.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt="preview"
              className={classes.previewImage}
            />
          ))}
        </div>
      )}

      <button type="submit" className={classes.submitButton}>
        Add News
      </button>

      <div className={classes.notice}>
        <p>
          <strong>Note:</strong> Please use images with the standard size of
          1200x675 pixels for the best display on the website.
        </p>
      </div>

      <ToastContainer />
    </form>
  );
};

export default AddNewsForm;
