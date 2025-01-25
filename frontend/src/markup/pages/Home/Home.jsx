import banner1 from "../../../assets/img/slider/st.peter1jpg copy.png";
import banner2 from "../../../assets/img/banner/img2 banner.jpg";
import banner3 from "../../../assets/img/slider/lab/labroom.jpg";
// import team1 from "../../../assets/img/team/doc1.png";
// import team2 from "../../../assets/img/team/doc2.png";
// import team3 from "../../../assets/img/team/doc3.png";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Home.css";
import LatestNews from "../News/LatestNews.jsx";
import videoService from "../../../Services/videos.service.js";
import { Carousel } from "react-bootstrap";
import Doc from "./Doc.jsx";
import Services from "../../pages/servicepage/Services.jsx";
const Home = () => {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [showVideo, setShowVideo] = useState(false);

  console.log("title", title);
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await videoService.getAllVideos();
        console.log("response", response);
        if (response) {
          setTitle(response.title);
          setVideoLink(response.video_link);
        }
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };

    fetchVideo();
  }, []);
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: "icofont-prescription",
      title: "Medical Counseling",
      description:
        "We provide personalized medical counseling services to help you make informed decisions about your health. Our experienced team offers guidance on treatments, diagnoses, and healthcare management.",
    },
    {
      icon: "icofont-microscope",
      title: "Medical Facilities",
      description:
        "Kidus Petros Hospital is equipped with state-of-the-art medical technology and modern facilities. From diagnostic equipment to comfortable patient rooms, we strive to offer an environment that promotes healing and recovery.",
    },
    {
      icon: "icofont-ambulance-cross",
      title: "24 Hours Services",
      description:
        "We understand that medical emergencies can happen at any time. That’s why our hospital provides 24-hour emergency services and round-the-clock patient care, ensuring immediate attention whenever you need it.",
    },
    {
      icon: "icofont-blood",
      title: "Personal Services",
      description:
        "We take a patient-centered approach to healthcare, offering tailored services that meet the individual needs of each patient. From specialized treatments to personalized care plans, your health is our priority.",
    },
    {
      icon: "icofont-paralysis-disability",
      title: "Dedicated Patient Care",
      description:
        "Our team is committed to delivering compassionate and comprehensive care to all patients. With a focus on quality and comfort, we work diligently to ensure every patient receives the best possible care during their stay.",
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <>
      <div className="wrapper home-default-wrapper">
        <main className="main-content site-wrapper-reveal">
          <section className="hero-slider play_btn-wrapper" style={{height:"80vh"}}>
            <Carousel
              controls={true}
              indicators={true}
              interval={3000}
              pause="hover"
            >
              {/* Slide 1 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                  }}
                >
                  <div className="container d-flex flex-column justify-content-center h-100 text-white">
                    <div className="slider-content">
                      <h5 className="title">
                        We are Classic and Historical,
                        <span className="d-block">Serving Since 1953</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${banner2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                  }}
                >
                  <div className="container d-flex flex-column justify-content-center h-100 text-white">
                    <div className="slider-content">
                      <h5 className="title">
                        መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span>
                      </h5>
                      <h2 className="title">
                        Our Existence is
                        <span className="d-block">For You</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${banner3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                  }}
                >
                  <div className="container d-flex flex-column justify-content-center h-100 text-white">
                    <div className="slider-content">
                      <h5 className="title">
                        መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span>
                      </h5>
                      <h2 className="title">
                        Our Existence is
                        <span className="d-block">For You</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            <div>
              {title && title !== "stop" && (
                <div className="play_btn mt-4">
                  <a
                    href={videoLink}
                    className="overlay-link lightbox-image video-fancybox ripple"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="play-icon">
                      <div className="play-button">
                        <div className="triangle"></div>
                      </div>
                    </div>
                  </a>
                  <div className="text">{title}</div>
                </div>
              )}
            </div>
          </section>
          <Services />
          <Doc />
          <LatestNews />
          {/* End */}
          <div className="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.263531705987!2d38.75581056600536!3d9.073717297055985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8ede0363bdaf%3A0xe1edc0f09e9bb639!2sSt.%20Peter%E2%80%99s%20Specialized%20Hospital!5e1!3m2!1sen!2set!4v1729108276923!5m2!1sen!2set"></iframe>
          </div>
        </main>

        <div className="offcanvas-overlay"></div>

        <div
          id="offcanvas-mobile-menu"
          className="offcanvas offcanvas-mobile-menu"
        >
          <div className="inner">
            <div className="border-bottom mb-3 pb-3 text-end">
              <button className="offcanvas-close">×</button>
            </div>
            <div className="offcanvas-head mb-3">
              <div className="header-top-offcanvas">
                <p>
                  <i className="icofont-google-map"></i> <span>ADDRESS:</span>{" "}
                  568 Elizaberth Str, London, UK
                </p>
              </div>
            </div>
            <nav className="offcanvas-menu">
              <ul>
                <li>
                  <a href="#">
                    <span className="menu-text">Home</span>
                  </a>
                  <ul className="offcanvas-submenu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">Services</span>
                  </a>
                  <ul className="offcanvas-submenu">
                    <li>
                      <a href="services.html">Service</a>
                    </li>
                    <li>
                      <a href="service-details.html">service details</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">
                    <span className="menu-text">blog</span>
                  </a>
                  <ul className="offcanvas-submenu">
                    <li>
                      <a href="blog.html">Blog list</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog details</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="about.html">about</a>
                </li>

                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div className="offcanvas-social my-4">
              <ul>
                <li>
                  <a href="#">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-rss-feed"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icofont-play-alt-1"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="media-wrap">
              <li className="media media-list">
                <span className="media-icon">
                  <i className="icofont-clock-time"></i>
                </span>
                <div className="media-content">
                  <span className="media-sub-heading">working hours</span>
                  <span className="media-heading">
                    MON - FRI: 2:00- 11:00{" "}
                  </span>
                </div>
              </li>

              <li className="media media-list">
                <span className="media-icon">
                  <i className="icofont-ui-call"></i>
                </span>
                <div className="media-content">
                  <span className="media-sub-heading">hotline 24/7</span>
                  <a className="media-heading" href="tel:+0962-58-58-258">
                    +251111111111
                  </a>
                </div>
              </li>

              <li className="media media-list">
                <span className="media-icon">
                  <i className="icofont-envelope"></i>
                </span>
                <div className="media-content">
                  <span className="media-sub-heading">email us</span>
                  <a
                    className="media-heading"
                    href="mailto:support@clenora.com.uk"
                  >
                    kidus petros hospital
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
