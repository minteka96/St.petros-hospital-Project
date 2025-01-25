
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
import styles from "./News.module.css";

const News = () => {
  const [newsList, setNewsList] = useState([]); // Store fetched news
  const [error, setError] = useState(""); // Store error message
  const navigate = useNavigate(); // For navigation

  // Fetch news on component load
  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Call API service to fetch news
        const response = await newsService.getAllNews();

        // Ensure response structure is valid
        const newsData = (response || []).map((news) => ({
          ...news,
          category: "News", // Default category
          categoryLink: "/category/news", // Default category link
          author: news.author || "Admin (ቅ.ጴ.ስ.ሆ)", // Default author
        }));

        // Update state with valid news data
        setNewsList(newsData);
      } catch (err) {
        console.error("Error fetching news:", err); // Debugging
        setError("Failed to fetch news data!");
      }
    };

    fetchNews();
  }, []);

  // Handle click events for navigation
  const handleImageClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
  };

  const handleTitleClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
  };

  // Handle the "Details View" button click
  const handleDetailsView = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
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

  return (
    <section className={styles.blogArea}>
      <div className="container">
        <h2 className={styles.title}>News</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.row}>
          {newsList && newsList.length > 0 ? (
            // Render fetched news
            newsList.map((news) => {
              return (
                <div key={news.news_id} className={styles.postItem}>
                  <div className={styles.imageContainer}>
                    <div className={styles.imageGrid}>
                      {Array.isArray(news.newsImageLinks) &&
                      news.newsImageLinks.length > 0 ? (
                        <>
                          <a
                            href={`/newsDetails/${news.news_id}`} // Ensure the link goes to the news details
                            onClick={(e) => {
                              e.preventDefault(); // Prevent default anchor behavior
                              handleImageClick(news.news_id); // Call the navigation function
                            }}
                          >
                            <img
                              src={news.newsImageLinks[0]}
                              alt={`News Image 1`}
                              className={styles.thumb}
                            />
                          </a>
                          {news.newsImageLinks.length > 1 && (
                            <span className={styles.moreImages}>
                              +{news.newsImageLinks.length - 1}
                            </span>
                          )}
                        </>
                      ) : (
                        "No Image"
                      )}
                    </div>
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
                        {formatDate(news.created_at)}  by{" "}
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

                    {/* Details View Button */}
                    <button
                      className={styles.detailsButton}
                      onClick={() => handleDetailsView(news.news_id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No news available!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
