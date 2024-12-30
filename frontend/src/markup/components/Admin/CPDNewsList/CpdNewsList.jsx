/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cpd_newsService from "../../../../Services/cpd_news.service.js"; // Ensure correct path
import classes from "./CpdNewsList.module.css";
import { format } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from react-icons
import { useAuth } from "../../../../contexts/AuthContext.jsx";

const CpdNewsList = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;

  // State variables
  const [CpdNewsList, setCpdNewsList] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Fetch news data on component mount
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await cpd_newsService.getAllCpdNews();
        setCpdNewsList(response.data || []);
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
      await cpd_newsService.deleteCpdNews(newsId, token);
      setCpdNewsList(CpdNewsList.filter((news) => news.news_id !== newsId));
      setSuccess("News deleted successfully!");
    } catch (err) {
      setError("Failed to delete news item.");
    }
  };

  return (
    <div className={classes.newsListContainer}>
      <h2>CPD News List</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}
      {CpdNewsList.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <table className={classes.newsTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CpdNewsList.map((news) => (
              <tr key={news.news_id}>
                <td data-label="Title">{news.news_title}</td>
                <td data-label="Description">{news.news_description}</td>
                <td data-label="Expiry Date">
                  {news.expiry_date
                    ? format(new Date(news.expiry_date), "MM-dd-yyyy")
                    : "No Expiry Date"}
                </td>
                <td data-label="Actions">
                  <button
                    onClick={() =>
                      navigate(`/admin/edit-cpd-news/${news.news_id}`, {
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

export default CpdNewsList;
