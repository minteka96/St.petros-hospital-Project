import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service";
import classes from "./NewsList.module.css";
import { format } from "date-fns";
const api_url = import.meta.env.VITE_API_URL;

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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
              <th>ImageLink</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr key={news.news_id}>
                <td>{news.news_title}</td>
                <td>{news.news_detail}</td>
                <td>{news.news_description}</td>
                <td>{news.news_link}</td>
                <td style={{ textAlign: "center" }}>
                  <a href={`${api_url}${news.news_image_link}`}>
                    <img
                      style={{ width: "60px", borderRadius: "5%" }}
                      src={`${api_url}${news.news_image_link}`}
                      alt="click to view"
                    />
                  </a>
                </td>
                <td>{format(new Date(news.created_at), "MM-dd-yyyy HH:mm")}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin-dashboard/news/edit/${news.news_id}`, {
                        state: { news },
                      })
                    }
                    className={classes.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(news.news_id)}
                    className={classes.deleteButton}
                  >
                    Delete
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
