import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../../Services/news.service";
import classes from "./NewsList.module.css";
import { format } from "date-fns";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../../../contexts/AuthContext.jsx";

// API URL from environment variables
const api_url = import.meta.env.VITE_API_URL;

const NewsList = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;

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
        setNewsList(Array.isArray(response) ? response : []);
      } catch (err) {
        setError("Failed to fetch news list. Please try again later.");
        setTimeout(() => setError(""), 3000);
      }
    };
    fetchNews();
  }, []);

  // Handle delete functionality
  const handleDelete = async (newsId) => {
    if (!window.confirm("Are you sure you want to delete this news item?"))
      return;

    try {
      await newsService.deleteNews(newsId, token);
      setNewsList(newsList.filter((news) => news.news_id !== newsId));
      setSuccess("News deleted successfully!");
      setTimeout(() => setSuccess(""), 2000);
    } catch (err) {
      setError("Failed to delete news item.");
      setTimeout(() => setError(""), 2000);
    }
  };

  // Truncate long text
  const truncateText = (text, maxLength = 15) => {
    if (!text) return "No Link";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  // Render formatted text with styles
  const renderFormattedText = (text) => {
    return text.split("\n").map((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("🔹")) {
        return (
          <li key={index} className={classes.bulletedDetail}>
            {trimmed}
          </li>
        );
      } else if (trimmed.startsWith("👉")) {
        return (
          <p key={index} className={classes.highlightedDetail}>
            {trimmed}
          </p>
        );
      } else {
        return (
          <p key={index} className={classes.plainDetail}>
            {trimmed}
          </p>
        );
      }
    });
  };

  return (
    <div className={classes.newsListContainer}>
      <h2>News List</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && (
        <div className={classes.successMessage}>
          <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
          {success}
        </div>
      )}
      {newsList.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <table className={classes.newsTable}>
          <thead>
            <tr>
              <th className={classes.titleColumn}>Title</th>
              <th className={classes.detailColumn}>Detail</th>
              <th className={classes.descriptionColumn}>Description</th>
              <th className={classes.linkColumn}>Link</th>
              <th className={classes.imageColumn}>Image</th>
              <th className={classes.dateColumn}>Date</th>
              <th className={classes.actionsColumn}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr key={news.news_id}>
                <td>{news.news_title}</td>
                <td className={classes.truncate}>
                  <div className={classes.newsDetail}>
                    {renderFormattedText(news.news_detail)}
                  </div>
                </td>
                <td className={classes.truncate}>
                  <div className={classes.newsDescription}>
                    {renderFormattedText(news.news_description)}
                  </div>
                </td>
                <td>
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
                <td className={classes.imageCell}>
                  <div className={classes.imageGrid}>
                    {news.newsImageLinks && news.newsImageLinks.length > 0
                      ? news.newsImageLinks
                          .slice(0, 1)
                          .map((imageLink, index) => (
                            <a
                              key={index}
                              href={imageLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={imageLink}
                                alt={`News Image ${index + 1}`}
                                className={classes.imageThumbnail}
                              />
                            </a>
                          ))
                      : "No Image"}
                    {news.newsImageLinks && news.newsImageLinks.length > 1 && (
                      <span className={classes.moreImages}>
                        +{news.newsImageLinks.length - 1}
                      </span>
                    )}
                  </div>
                </td>
                <td>
                  {format(new Date(news.created_at), "MM-dd-yyyy | HH:mm")}
                </td>
                <td className={classes.actionsCell}>
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
