import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
import styles from "./News.module.css";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAllNews();
        const newsData = (response.data || []).map((news) => ({
          ...news,
          category: "News", // Default category
          categoryLink: "/category/news", // Default category link
          authorLink: `/author/${
            news.author?.toLowerCase().replace(/\s+/g, "-") || "admin"
          }`, // Dynamic author link
          author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)", // Default author
        }));
        setNewsList(newsData);
      } catch (err) {
        setError("Failed to fetch news data.");
      }
    };

    fetchNews();
  }, []);

  const handleImageClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
  };

  const handleTitleClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className={styles.blogArea}>
      <div className="container">
        <h2 className={styles.title}>News</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.row}>
          {newsList.length === 0 ? (
            <p>No news available.</p>
          ) : (
            newsList.map((news) => (
              <div key={news.news_id} className={styles.postItem}>
                <div
                  className={styles.imageContainer}
                  onClick={() => handleImageClick(news.news_id)}
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
                  <a className={styles.category} href={news.categoryLink}>
                    {news.category}
                  </a>
                  
                    <h2 className={styles.title}>
                      <a
                        href={`/newsDetails/${news.news_id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleTitleClick(news.news_id);
                        }}
                      >
                        {news.news_title}
                      </a>
                    </h2>

                  <div>
                    <p className={styles.description}>
                      {news.news_description}
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

export default News;
