/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import healthTipService from "../../../Services/healthtip.service";
import styles from "./HealthTip.module.css";
import { format } from "date-fns";

const HealthTip = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips();
        const healthTipsData = (response.data || []).map((tip) => ({
          ...tip,
          category: "Health Tips", // Default category
          categoryLink: "/category/health-tips", // Default category link
          authorLink: `/author/${
            tip.author?.toLowerCase().replace(/\s+/g, "-") || "health-literacy"
          }`, // Dynamic author link
          author: tip.author || "health-literacy", // Default author
        }));
        setHealthTips(healthTipsData);
      } catch (err) {
        setError("Failed to fetch health tips.");
      }
    };

    fetchHealthTips();
  }, []);

  const handleNavigation = (tipId) => {
    navigate(`/healthTipDetails/${tipId}`, { state: { healthTips } });
  };

  return (
    <section className={styles.healthTipsArea}>
      <div className="container">
        <h2 className={styles.title}>Health Tips</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className={styles.row}>
          {healthTips.length === 0 ? (
            <p>No health tips available.</p>
          ) : (
            healthTips.map((tip) => (
              <div key={tip.health_tip_id} className={styles.postItem}>
                {/* Check for video link and embed video */}
                {tip.video_link ? (
                  <div className={styles.videoContainer}>
                    <iframe
                      width="100%"
                      height="250"
                      src={tip.video_link}
                      title="Health Tip Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div
                    className={styles.imageContainer}
                    onClick={() => handleNavigation(tip.health_tip_id)}
                  >
                    <img
                      src={`${import.meta.env.VITE_API_URL}${tip.health_tip_image}`}
                      alt={tip.health_tip_title || "Health Tip Image"}
                      className={styles.thumb}
                    />
                  </div>
                )}

                <div className={styles.content}>
                  <a className={styles.category} href={tip.categoryLink}>
                    {tip.category}
                  </a>
                  <h2 className={styles.title}>
                    <span
                      onClick={() => handleNavigation(tip.health_tip_id)}
                      className={styles.titleLink}
                    >
                      {tip.health_tip_title}
                    </span>
                  </h2>
                  <p className={styles.description}>
                    {tip.health_tip_description}
                  </p>
                  <div className={styles.meta}>
                    {format(new Date(tip.created_at), "MMMM d, yyyy")} by{" "}
                    <a className={styles.author} href={'#'}>
                      {tip.author}
                    </a>
                  </div>
                </div>

                {/* View Details Button */}
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleNavigation(tip.health_tip_id)}
                    className={styles.viewDetailsButton}
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

export default HealthTip;
