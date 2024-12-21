import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
import styles from "./LatestNews.module.css"; // Import the CSS module

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await newsService.getAllNews();
        const newsData = (response.data || []).slice(0, 4).map((news) => ({
          ...news,
          category: "News",
          categoryLink: "/category/news",
          authorLink: `/author/${
            news.author?.toLowerCase().replace(/\s+/g, "-") || "admin"
          }`,
          author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)",
        }));
        setLatestNews(newsData);
      } catch (err) {
        setError("Failed to fetch latest news!");
      }
    };

    fetchLatestNews();
  }, []);

  const handleNewsClick = (newsId) => {
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
                    title={`http://localhost:5173/newsDetails/${news.news_id}`}
                  />
                </div>
                <div className={styles.content}>
                  <a className={styles.category} href={news.categoryLink}>
                    {news.category}
                  </a>
                  <h2 className={styles.title}>
                    <a
                      href={`/newsDetails/${news.news_id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNewsClick(news.news_id);
                      }}
                    >
                      {news.news_title}
                    </a>
                  </h2>
                  <p className={styles.description}>
                    {news.news_description.length > 100
                      ? `${news.news_description.substring(0, 100)}...`
                      : news.news_description}
                  </p>
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
