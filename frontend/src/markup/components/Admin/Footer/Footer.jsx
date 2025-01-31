import React, { useEffect, useState } from "react";
// import logo from "../../../assets/img/St.PeterLogo.png";
import logo from "../../../../assets/img/blog/St.PeterLogo.png";
import classes from "./footer.module.css";
import newsService from "../../../../Services/news.service.js";
import healthTipService from "../../../../Services/healthtip.service";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const [latestNews, setLatestNews] = useState([]);
  const [latestHealthTips, setLatestHealthTips] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await newsService.getAllNews();
        setLatestNews(response.slice(0, 3)); // Fetch the latest 3 news items
      } catch (err) {
        setError("Failed to fetch latest news!");
        console.error("Error fetching news:", err);
      }
    };

    const fetchLatestHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips();
        if (response && response.data && Array.isArray(response.data)) {
          setLatestHealthTips(response.data.slice(0, 3));
          setError("");
        } else {
          setLatestHealthTips([]);
          setError("Invalid response format for health tips.");
        }
      } catch (err) {
        setLatestHealthTips([]);
        setError("Failed to fetch latest health tips!");
      }
    };

    fetchLatestNews();
    fetchLatestHealthTips();
  }, []);

  // Function to handle navigation based on news link existence
  const handleNewsClick = (news) => {
    if (news.news_link) {
      // If news link exists, navigate to external news link
      window.open(news.news_link, "_blank");
    } else {
      // Otherwise, navigate to the news details page
      navigate(`/newsDetails/${news.news_id}`, {
        state: { newsList: latestNews },
      });
    }
  };

  // Function to handle navigation based on health tip link existence
  // Function to handle navigation based on health tip link existence
  const handleHealthTipClick = (tip) => {
    if (tip.health_tip_link) {
      // If health tip link exists, navigate to external health tip link
      window.open(tip.health_tip_link, "_blank");
    } else {
      // Otherwise, navigate to the health tip details page, passing the full health tip list
      navigate(`/healthTipDetails/${tip.health_tip_id}`, {
        state: { healthTips: latestHealthTips }, // Pass the entire healthTips array
      });
    }
  };

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row p-5">
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-5">
              <div className="widget-item">
                <div className="about-widget">
                  <a className="footer-logo" href="/">
                    <img src={logo} alt="Logo" width="215" />
                  </a>
                  <ul className="widget-contact-info">
                    <li className="info-address">
                      <i className="icofont-location-pin"></i>
                      Gulele Kifle Ketema, Wereda 01, along the road from
                      Shiromeda to Entoto Park.
                    </li>
                    <li className="info-mail">
                      <i className="icofont-email"></i>
                      <a href="mailto://info@kpsh.gov.et">info@kpsh.gov.et</a>
                    </li>
                    <li className="info-phone">
                      <i className="icofont-ui-call"></i>
                      <a href="tel://+251111541746">+251111541746</a>
                    </li>
                  </ul>
                  <div className="widget-social-icons">
                    <a
                      href="https://t.me/spsh1955"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-telegram"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/kiduspetroshospital?igsh=ZjB0bHUzZGUwanRx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61555827683411"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                    <a
                      href="https://youtube.com/@stpetershospital3127?si=0eJXeauhP6v0dQ72"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="icofont-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm col-md-7 col-lg-8 col-xl-7">
              <div className="widget-item">
                <h4 className="widget-title line-bottom">Recent Posts</h4>
                <nav className="widget-posts">
                  {error && <p>{error}</p>}

                  <ul
                    className="posts-item"
                    style={{ listStyle: "none", padding: 0, margin: 0 }}
                  >
                    {latestNews.map((news) => (
                      <li
                        key={news.news_id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <i
                          className="icon icofont-rounded-double-right"
                          style={{ marginRight: "8px" }}
                        ></i>

                        <a
                          href={
                            news.news_link || `/newsDetails/${news.news_id}`
                          }
                          onClick={(e) => {
                            if (!news.news_link) {
                              e.preventDefault();
                              handleNewsClick(news); // Call the function to handle news click
                            }
                          }}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontSize: "16px",
                          }}
                        >
                          {news.news_title || "Untitled News"}
                        </a>
                      </li>
                    ))}

                    {/* Display the latest health tips */}
                    {latestHealthTips.map((tip) => (
                      <li
                        key={tip.health_tip_id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <i
                          className="icon icofont-rounded-double-right"
                          style={{ marginRight: "8px" }}
                        ></i>
                        <a
                          href={
                            tip.health_tip_link ||
                            `/healthTipDetails/${tip.health_tip_id}`
                          }
                          onClick={(e) => {
                            if (!tip.health_tip_link) {
                              e.preventDefault(); // Prevent default behavior
                              handleHealthTipClick(tip); // Call the function to handle health tip click
                            }
                          }}
                          target={tip.health_tip_link ? "_blank" : "_self"}
                          rel={tip.health_tip_link ? "noopener noreferrer" : ""}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            fontSize: "16px",
                          }}
                        >
                          {tip.health_tip_title || "Untitled Health Tip"}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <div className="text-center">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} Kidus Petros Hospital
                    <a target="" href="#" className={classes.uparrowhover}>
                      <span className={classes.upArrow}>
                        <i className="icofont-arrow-up"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

