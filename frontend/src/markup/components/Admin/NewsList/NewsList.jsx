// Import statements
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service";
import classes from "./NewsList.module.css";
import { format } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from react-icons

// API URL from environment variables
const api_url = import.meta.env.VITE_API_URL;

const NewsList = () => {
  // State variables
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Fetch news data on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAllNews();
        setNewsList(response.data || []);
      } catch (err) {
        setError("Failed to fetch news list.");
      }
    };

    fetchNews();
  }, []);

  // Handle delete functionality
  const handleDelete = async (newsId) => {
    if (!window.confirm("Are you sure you want to delete this news item?")) {
      return;
    }

    try {
      await newsService.deleteNews(newsId);
      setNewsList(newsList.filter((news) => news.news_id !== newsId));
      setSuccess("News deleted successfully!");
    } catch (err) {
      setError("Failed to delete news item.");
    }
  };

  // Helper to truncate long text
  const truncateText = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <div className={classes.newsListContainer}>
      <h2>News List</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}
      {newsList.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <table className={classes.newsTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Detail</th>
              <th>Description</th>
              <th>Link</th>
              <th>Image Link</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {newsList.map((news) => (
              <tr key={news.news_id}>
                <td data-label="Title">{news.news_title}</td>
                <td data-label="Detail">{news.news_detail}</td>
                <td data-label="Description">{news.news_description}</td>
                <td data-label="Link">
                  {news.news_link ? (
                    <a
                      href={news.news_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {truncateText(news.news_link)}
                    </a>
                  ) : (
                    "No Link"
                  )}
                </td>
                <td data-label="Image Link" style={{ textAlign: "center" }}>
                  <a
                    href={
                      news.news_image_link
                        ? `${api_url}${news.news_image_link}`
                        : "#"
                    }
                  >
                    <img
                      style={{ width: "90%", borderRadius: "5%" }}
                      src={
                        news.news_image_link
                          ? `${api_url}${news.news_image_link}`
                          : ""
                      }
                      alt={news.news_image_link ? "click to view" : "No Image"}
                    />
                  </a>
                </td>
                <td data-label="Date">
                  {format(new Date(news.created_at), "MM-dd-yyyy | HH:mm")}
                </td>
                <td data-label="Actions">
                  <button
                    onClick={() =>
                      navigate(`/admin/news/edit/${news.news_id}`, {
                        state: { news },
                      })
                    }
                    className={classes.iconButton}
                  >
                    <FaEdit className={classes.editIcon} />
                  </button>
                  <button
                    onClick={() => handleDelete(news.news_id)}
                    className={classes.iconButton}
                  >
                    <FaTrash className={classes.deleteIcon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NewsList;
