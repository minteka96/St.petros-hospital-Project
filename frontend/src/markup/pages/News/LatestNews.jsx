import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
import styles from "./News.module.css"; // Import the CSS module

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch latest news on component load
  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await newsService.getAllNews();
        // Take only the latest 3 news items and add dynamic properties
        const newsData = (response || [])
          .slice(0, 3) // Take only the latest 3
          .map((news) => ({
            ...news,
            category: "News", // Default category
            categoryLink: "/category/news", // Default category link
            author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)", // Default author
          }));

        setLatestNews(newsData);
      } catch (err) {
        setError("Failed to fetch latest news!");
      }
    };

    fetchLatestNews();
  }, []);

  // Handle navigation on title or image click
  const handleNewsClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList: latestNews } });
  };

  // Format date string
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date"; // Handle invalid dates
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return isNaN(date)
      ? "Invalid Date"
      : date.toLocaleDateString(undefined, options);
  };

  // Truncate long text
  const truncateText = (text, maxLength = 15) => {
    if (!text) return "No Link";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  return (
    <section className={styles.blogArea}>
      <div className="container">
        <h2 className={styles.title}>Latest News</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.row}>
          {latestNews.length === 0 ? (
            <p>No news available!</p>
          ) : (
            latestNews.map((news) => (
              <div key={news.news_id} className={styles.postItem}>
                {/* Image Section */}
                <div
                  className={styles.imageContainer}
                  onClick={() => handleNewsClick(news.news_id)} // Trigger click to redirect
                >
                  <div className={styles.imageGrid}>
                    {news.newsImageLinks && news.newsImageLinks.length > 0 ? (
                      news.newsImageLinks
                        .slice(0, 3)
                        .map((imageLink, index) => (
                          <img
                            key={index}
                            src={imageLink}
                            alt={`News Image ${index + 1}`}
                            className={styles.thumb}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent triggering the outer click handler
                              handleNewsClick(news.news_id); // Trigger navigation on image click
                            }}
                          />
                        ))
                    ) : (
                      <span>No Image</span>
                    )}
                    {news.newsImageLinks && news.newsImageLinks.length > 3 && (
                      <span className={styles.moreImages}>
                        +{news.newsImageLinks.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className={styles.content}>
                  <a className={styles.category} href={news.categoryLink}>
                    {news.category}
                  </a>
                  <h2 className={styles.title}>
                    <a
                      href={`/newsDetails/${news.news_id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNewsClick(news.news_id); // Prevent default and trigger click
                      }}
                    >
                      {news.news_title || "Untitled News"}
                    </a>
                  </h2>

                  <div>
                    <p className={styles.description}>
                      {news.news_description || "No description available."}
                    </p>
                  </div>

                  <div className={styles.meta}>
                    <span>
                      {formatDate(news.created_at)} by{" "}
                      <span className={styles.author}>{news.author}</span>
                    </span>
                    {news.news_link && (
                      <a
                        href={news.news_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                      >
                        Visit News Link
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    className={styles.detailsButton}
                    onClick={() => handleNewsClick(news.news_id)} // Trigger click to redirect
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
