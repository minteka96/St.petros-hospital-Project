/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cpd_newsService from "../../../Services/cpd_news.service"; // Ensure the path is correct
import styles from "./CpdNews.module.css"; // Adjust the styling according to your need

const CpdNews = () => {
  const [cpdNewsList, setCpdNewsList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCpdNews = async () => {
      try {
        const response = await cpd_newsService.getAllCpdNews();
        const cpdNewsData = (response.data || []).map((news) => ({
          ...news,
          category: "CPD News", // Default category for CPD News
          categoryLink: "/category/cpd-news", // Default category link
          author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)", // Default author
        }));
        setCpdNewsList(cpdNewsData);
      } catch (err) {
        setError("Failed to fetch CPD news data!");
      }
    };

    fetchCpdNews();
  }, []);

  const handleImageClick = (newsId) => {
    navigate(`/cpdNewsDetails/${newsId}`, { state: { cpdNewsList } });
  };

  const handleTitleClick = (newsId) => {
    navigate(`/cpdNewsDetails/${newsId}`, { state: { cpdNewsList } });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className={styles.blogArea}>
      <div className="container">
        <h2 className={styles.title}>CPD News</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.row}>
          {cpdNewsList.length === 0 ? (
            <p>No CPD news available!</p>
          ) : (
            cpdNewsList.map((news) => (
              <div key={news.news_id} className={`${styles.postItem} col-md-6`}>
                <div
                  className={styles.imageContainer}
                  onClick={() => handleImageClick(news.news_id)}
                >
                  {/* You can add an image here */}
                </div>
                <div className={styles.content} style={{ color: "#00796b" }}>
                  <a className={styles.category} href={news.categoryLink}>
                    {news.category}
                  </a>
                  <h2 className={styles.title}>
                    <a>{news.news_title}</a>
                  </h2>
                  <div>
                    <p className={styles.description}>
                      {news.news_description}
                    </p>
                  </div>
                  <div className={styles.meta}>
                    {formatDate(news.created_at)} by {news.author}
                    {/* Removed author link, now it just displays the author's name */}
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

export default CpdNews;
