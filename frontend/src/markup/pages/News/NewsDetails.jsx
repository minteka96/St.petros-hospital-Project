
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./NewsDetails.module.css"; // Importing the CSS module

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options); // Format date only
};

// Helper function to process content into list items
const formatContentAsList = (content) => {
  if (!content) return [];

  // Split the content into lines and preserve the original formatting
  return content
    .split(/\n/) // Split by newlines
    .map((item) => item.trim()) // Trim leading/trailing spaces
    .filter((item) => item.length > 0); // Exclude empty lines
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

  // Format the content for the detailed view (splitting by newlines or bullet markers)
  const contentList = formatContentAsList(news.news_detail);

  return (
    <section className={styles["blog-detail-area"]}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={styles["post-item-detail"]}>
              <div className={styles.content}>
                <h2 className={styles.title}>{news.news_title}</h2>

                <p className={styles.description}>{news.news_description}</p>

                <p className={styles.detail}>
                  {contentList.length > 0
                    ? contentList.join("\n") // Join the content as plain text separated by newlines
                    : news.news_detail}
                </p>

                <p className={styles.meta}>
                  {formatDate(news.created_at)} by{" "}
                  <span className={styles.author}>{news.author}</span>
                </p>
              </div>

              <div className={styles.thumb}>
                <div className={styles.imageGrid}>
                  {news.newsImageLinks && news.newsImageLinks.length > 0
                    ? news.newsImageLinks.map((imageLink, index) => (
                        <a
                          key={index}
                          href={imageLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.imageLink}
                        >
                          <img
                            src={imageLink}
                            alt={`News Image ${index + 1}`}
                            className={styles.image}
                          />
                        </a>
                      ))
                    : "No Image"}
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className={styles.backButton}>
              <Link to="/news" className={styles.backButtonLink}>
                &larr; Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

