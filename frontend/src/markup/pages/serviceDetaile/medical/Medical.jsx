/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider//Emergancy/emergancy.jpg";
import img2 from "../../../../assets/img/slider/Emergancy/emergancy.jpg";
import img3 from "../../../../assets/img/slider/dr/mdr1.jpg";
import classes from "./Medical.module.css";

const Medical = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Medical Department</h1>
        <p>
          Providing comprehensive care for a wide range of medical conditions.
        </p>
        <p>
          The medical department is dedicated to the diagnosis and treatment of
          various health issues, offering the latest advancements in healthcare
          services. Our team is committed to providing high-quality medical
          care, including but not limited to:
        </p>
        <ul>
          <li>General health check-ups</li>
          <li>Chronic disease management</li>
          <li>Preventive care</li>
          <li>Laboratory services and imaging order</li>
          <li>Emergency care services</li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery with React Bootstrap Carousel */}
          <div className={classes.departmentGallery}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <Carousel>
              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5 className="title">{/* Content for slide 1 */}</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5 className="title">{/* Content for slide 2 */}</h5>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5 className="title">{/* Content for slide 3 */}</h5>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Medical Services */}
          <div className={classes.medicalServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>
                Routine check-ups and health assessments
              </li>
              <li className={classes.servicesItem}>
                Emergency care and urgent treatment
              </li>
              <li className={classes.servicesItem}>
                Preventive care and vaccinations
              </li>
              <li className={classes.servicesItem}>
                Chronic disease management
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
