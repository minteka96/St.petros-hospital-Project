import React, { useState } from "react";
import "./hero.css";

import { Carousel, Modal } from "react-bootstrap";
import { Fade, Zoom } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../../../assets/img/slider/st.peter1jpg copy.png";
import banner2 from "../../../../assets/img/banner/img2 banner.jpg";
import banner3 from "../../../../assets/img/slider/lab/labroom.jpg";

const HeroSlider = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => setShowVideo(true);
  const handleCloseVideo = () => setShowVideo(false);

  return (
    <section className="hero-slider play_btn-wrapper">
      {/* YouTube Video Popup Modal */}
      <Modal
        show={showVideo}
        onHide={handleCloseVideo}
        centered
        size="lg"
        className="video-modal"
      >
        <Modal.Body className="p-0">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* Carousel Section */}
      <Carousel controls={true} indicators={true} interval={4000} pause="hover">
        {/* Slide 1 */}
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url(${banner1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <div className="container d-flex flex-column justify-content-center h-100 text-white">
              <Fade delay={200} cascade>
                <h5 className="title">
                  We are Classic and Historical,
                  <span className="d-block">Serving Since 1953</span>
                </h5>
              </Fade>
              <Zoom delay={500}>
                <button
                  className="play-button btn btn-primary mt-4"
                  onClick={handleShowVideo}
                >
                  <i className="fas fa-play-circle"></i> Watch Video
                </button>
              </Zoom>
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
              height: "100vh",
            }}
          >
            <div className="container d-flex flex-column justify-content-center h-100 text-white">
              <Fade delay={200} cascade>
                <h5 className="title">
                  መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span>
                </h5>
              </Fade>
              <Fade delay={400}>
                <h2 className="title">
                  Our Existence is
                  <span className="d-block">For You</span>
                </h2>
              </Fade>
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
              height: "100vh",
            }}
          >
            <div className="container d-flex flex-column justify-content-center h-100 text-white">
              <Fade delay={200} cascade>
                <h5 className="title">
                  መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span>
                </h5>
              </Fade>
              <Fade delay={400}>
                <h2 className="title">
                  Our Existence is
                  <span className="d-block">For You</span>
                </h2>
              </Fade>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
