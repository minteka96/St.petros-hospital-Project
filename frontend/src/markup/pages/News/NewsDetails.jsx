import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./NewsDetails.module.css"; // Importing the CSS module

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options); // Format date only
};

const NewsDetails = () => {
  const { newsId } = useParams();
  const location = useLocation();
  const { newsList } = location.state || {}; // Get newsList from state

  if (!newsList || !Array.isArray(newsList)) {
    return (
      <div>
        Error: News data is unavailable. <Link to="/news">Go back to News</Link>
      </div>
    );
  }

  const news = newsList.find((item) => item.news_id === Number(newsId));

  if (!news) {
    return (
      <div>
        News not found. <Link to="/news">Go back to News</Link>
      </div>
    );
  }

  return (
    <section className={styles["blog-detail-area"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles["post-item-detail"]}>
              <div className={styles.thumb}>
                <img
                  src={`${import.meta.env.VITE_API_URL}${news.news_image_link}`}
                  alt={news.news_title}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{news.news_title}</h2>
                {/* news_description */}
                <div className={styles.description}>
                  <p>{news.news_description}</p>
                </div>
                {/* news_detail */}
                <div className={styles.detail}>
                  <p>{news.news_detail}</p>
                </div>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {formatDate(news.created_at)}
                  </span>{" "}
                  by{" "}
                  <Link className={styles.author} to={news.authorLink}>
                    {news.author || "Admin"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Sidebar can be added here if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
