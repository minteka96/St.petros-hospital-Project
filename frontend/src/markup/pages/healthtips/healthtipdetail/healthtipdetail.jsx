// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import styles from "./HealthTipDetail.module.css"; // Importing the CSS module

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options); // Format date only
};

const HealthTipDetail = () => {
  const { healthTipId } = useParams();
  const location = useLocation();
  const { healthTips } = location.state || {}; // Get healthTips from state

  if (!healthTips || !Array.isArray(healthTips)) {
    return (
      <div>
        Error: Health Tip data is unavailable.{" "}
        <Link to="/healthtips">Go back to Health Tips</Link>
      </div>
    );
  }

  const healthTip = healthTips.find(
    (item) => item.health_tip_id === Number(healthTipId)
  );

  if (!healthTip) {
    return (
      <div>
        Health Tip not found.{" "}
        <Link to="/healthtips">Go back to Health Tips</Link>
      </div>
    );
  }

  return (
    <section className={styles["detail-area"]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className={styles["item-detail"]}>
              <div className={styles.thumb}>
                <img
                  src={`${import.meta.env.VITE_API_URL}${healthTip.health_tip_image}`}
                  alt={healthTip.health_tip_title}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.title}>{healthTip.health_tip_title}</h2>
                {/* Health Tip Description */}
                <div className={styles.description}>
                  <p>{healthTip.health_tip_description}</p>
                </div>
                {/* Health Tip Detail */}
                <div className={styles.detail}>
                  <p>{healthTip.health_tip_detail}</p>
                </div>
                {/* Additional Meta Information */}
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {formatDate(healthTip.created_at)}
                  </span>{" "}
                  by{" "}
                  <p className={styles.author} to={healthTip.authorLink}>
                    {healthTip.author || "Admin"}
                  </p>
                </div>
                {/* Video Link */}
                {healthTip.health_tip_video_link && (
                  <div className={styles.video}>
                    <a
                      href={healthTip.health_tip_video_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Video
                    </a>
                  </div>
                )}
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

export default HealthTipDetail;
