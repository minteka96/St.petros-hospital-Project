/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap"; // Importing Carousel component from React-Bootstrap
import img1 from "../../../../assets/img/slider/peadi/pedi 10.JPG";
import img2 from "../../../../assets/img/slider/peadi/pedi2.jpg";
import img3 from "../../../../assets/img/slider/peadi/pedi4.jpg";
import classes from "./Pediatrics.module.css";

const Pediatrics = () => {
  return (
    <div className={classes.mainContent}>
      <div className={classes.pageTitleArea}>
        <h1>Pediatrics Department</h1>
        <p>Comprehensive care for children’s health.</p>
        <p>
          The pediatrics department is dedicated to the diagnosis, treatment,
          and prevention of diseases and conditions in infants, children, and
          adolescents. Our department provides expert care and advanced health
          services in managing a variety of pediatric conditions, such as:
        </p>
        <ul>
          <li>Newborn and infant care</li>
          <li>Vaccination and immunization programs</li>
          <li>Pediatric emergency care</li>
          <li>Growth and development monitoring</li>
          <li>Pediatric chronic disease management</li>
          <li>Childhood allergy and asthma treatment</li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery with React-Bootstrap Carousel */}
          <div className={`carousel-wrapper ${classes.departmentGallery}`}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <Carousel className="department-carousel" interval={3000}>
              {/* Slide 1 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh", // Adjust the height based on your design
                  }}
                >
                  <Carousel.Caption>
                    <h5>Expert Care for Children</h5>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh",
                  }}
                >
                  <Carousel.Caption>
                    <h5>Expert Pediatricians</h5>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <div
                  className="carousel-image"
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh",
                  }}
                >
                  <Carousel.Caption>
                    <h5>Pediatric Health Services</h5>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Pediatrics Services */}
          <div className={classes.pediatricsServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Routine health check-ups</li>
              <li className={classes.servicesItem}>
                Vaccinations and immunizations
              </li>
              <li className={classes.servicesItem}>
                Management of acute and chronic illnesses
              </li>
              <li className={classes.servicesItem}>
                Nutritional counseling for children
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pediatrics;
