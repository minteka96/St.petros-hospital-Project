import React, { useState } from "react";
import { Carousel, Modal, Spinner } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import banner1 from "../../../assets/img/slider/st.peter1jpg copy.png";
import banner2 from "../../../assets/img/banner/img2 banner.jpg";
import banner3 from "../../../assets/img/slider/lab/labroom.jpg";

const Carousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const openYouTubeVideo = () => {
    setShowModal(true);
    setIsVideoLoading(true); // Reset loading state
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false); // Stop showing spinner
  };

  return (
    <div style={{ marginTop: "1px", height: "90vh" }}>
      {/* YouTube Video Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        size="lg"
        centered
        backdrop="static"
        animation={true}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 1000,
          }}
          aria-label="Close"
        >
          <MdClose />
        </button>

        {/* Modal Body */}
        <Modal.Body style={{ padding: "0", position: "relative" }}>
          {isVideoLoading && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 500,
              }}
            >
              <Spinner animation="border" variant="danger" />
            </div>
          )}
          <iframe
            width="100%"
            height="400px"
            src="https://www.youtube.com/watch?v=T8VqfQACMbM&t=511s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoLoad} // Stop spinner when video loads
            style={
              isVideoLoading
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          ></iframe>
        </Modal.Body>
      </Modal>

      {/* Carousel Section */}
      <Carousel interval={2000} controls={true} indicators={true} fade>
        {/* First Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "fadeInDown 1s ease-in-out",
                }}
              >
                We are Classic and Historical,
              </h3>

              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1.5rem",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "fadeInUp 1s ease-in-out",
                  marginBottom: "20px",
                }}
              >
                Serving Since 1953
              </p>
              <FaPlayCircle
                size={80}
                style={{
                  color: "red",
                  cursor: "pointer",
                  opacity: "0.8",
                  animation: "pulse 2s infinite",
                }}
                onClick={openYouTubeVideo}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Second Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "fadeInDown 1s ease-in-out",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                    animation: "fadeInUp 1s ease-in-out",
                  }}
                  class="title animated delay2"
                >
                  መኖራችን
                  <span
                    style={{
                      color: "white",
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                      animation: "fadeInUp 1s ease-in-out",
                    }}
                    class="d-block"
                  >
                    ለእርስዎ ነዉ!
                  </span>
                </h1>
                <h2
                  style={{
                    color: "white",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                    animation: "fadeInUp 1s ease-in-out",
                  }}
                  class="title animated delay2"
                >
                  Our Existence is
                  <span
                    style={{
                      color: "white",
                      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                      animation: "fadeInUp 1s ease-in-out",
                    }}
                    class="d-block"
                  >
                    For You
                  </span>
                </h2>
              </h3>

              <FaPlayCircle
                size={80}
                style={{
                  color: "red",
                  cursor: "pointer",
                  opacity: "0.8",
                  animation: "pulse 2s infinite",
                }}
                onClick={openYouTubeVideo}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Third Slide */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            style={{ height: "90vh", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "3rem",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "fadeInDown 1s ease-in-out",
                }}
              >
                We promise compassionate care
              </h3>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "2rem",
                  color: "white",
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                  animation: "fadeInUp 1s ease-in-out",
                  marginBottom: "20px",
                }}
              >
                with a deep understanding of your pain.
              </p>
              <FaPlayCircle
                size={80}
                style={{
                  color: "red",
                  cursor: "pointer",
                  opacity: "0.8",
                  animation: "pulse 2s infinite",
                }}
                onClick={openYouTubeVideo}
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousel;
