import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
import styles from "./News.module.css"; // Import the CSS module

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await newsService.getAllNews();
        // Take only the latest 4 news items and add dynamic properties
        const newsData = (response.data || [])
          .slice(0, 4) // Take only the latest 4
          .map((news) => ({
            ...news,
            category: "News", // Default category
            categoryLink: "/category/news", // Default category link
            authorLink: `/author/${
              news.author?.toLowerCase().replace(/\s+/g, "-") || "admin"
            }`, // Dynamic author link
            author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)", // Default author
          }));
        setLatestNews(newsData);
      } catch (err) {
        setError("Failed to fetch latest news!");
      }
    };

    fetchLatestNews();
  }, []);

  const handleNewsClick = (newsId) => {
    // Pass the latestNews list as state when navigating
    navigate(`/newsDetails/${newsId}`, { state: { newsList: latestNews } });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
                {/* Image Clickable */}
                <div
                  className={styles.imageContainer}
                  onClick={() => handleNewsClick(news.news_id)}
                >
                  <img
                    src={`${import.meta.env.VITE_API_URL}${
                      news.news_image_link
                    }`}
                    alt={news.news_title || "News Image"}
                    className={styles.thumb}
                    title={`http://localhost:5173/newsDetails/${news.news_id}`} // Display URL on hover
                  />
                </div>
                <div className={styles.content}>
                  {/* Category Link */}
                  <a className={styles.category} href={news.categoryLink}>
                    {news.category}
                  </a>
                  {/* Title Clickable */}
                  <h2 className={styles.title}>
                    <a
                      href={`/newsDetails/${news.news_id}`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor link behavior
                        handleNewsClick(news.news_id); // Navigate programmatically
                      }}
                    >
                      {news.news_title}
                    </a>
                  </h2>
                  <div>
                    <p className={styles.description}>
                      {news.news_description.length > 100
                        ? `${news.news_description.substring(0, 100)}...`
                        : news.news_description}
                    </p>
                  </div>
                  <div className={styles.meta}>
                    {formatDate(news.created_at)} by{" "}
                    <a className={styles.author} href={news.authorLink}>
                      {news.author}
                    </a>
                  </div>
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
