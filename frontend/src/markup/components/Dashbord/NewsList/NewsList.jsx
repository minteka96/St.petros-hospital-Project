import React, { useState, useEffect } from "react";
import newsService from "../../../../Services/news.service"; // Adjust path if necessary
import classes from "./NewsList.module.css";
import { format } from "date-fns"; // Import the 'format' function from date-fns
const api_url = import.meta.env.VITE_API_URL;

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAllNews(); // Assumes this method exists
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
      await newsService.deleteNews(newsId); // Assumes this method exists
      setNewsList(newsList.filter((news) => news.news_id !== newsId)); // Update newsList after deletion
      setSuccess("News deleted successfully!!");
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
            {/* <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr> */}

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
                {/* <td>{news.news_category}</td> */}
                {/* <td>{new Date(news.news_date).toLocaleDateString()}</td> */}
                <td>{format(new Date(news.created_at), "MM-dd-yyyy HH:mm")}</td>
                <td>
                  {/* <button
                    onClick={() =>
                      (window.location.href = `/news/${news.news_id}`)
                    }
                    className={classes.viewButton}
                  >
                    View
                  </button> */}
                  <button
                    onClick={() =>
                      (window.location.href = `/admin-dashboard/news/edit/${news.news_id}`)
                    }
                    className={classes.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(news.news_id)}
                    className={classes.deleteButton}>
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
