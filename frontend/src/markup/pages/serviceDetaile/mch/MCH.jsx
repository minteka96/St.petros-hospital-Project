/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./MCH.module.css"; // Importing modular CSS
import img1 from "../../../../assets/img/slider/mch/mch.jpg";
import img2 from "../../../../assets/img/slider/mch/mch2.jpg";
import img3 from "../../../../assets/img/slider/mch/mch4.jpg";

const MCH = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Maternal and Child Health Department</h1>
        <p>Comprehensive care for maternal and child health.</p>
        <p>
          The Maternal and Child Health (MCH) department is dedicated to
          providing high-quality healthcare services for mothers and children.
          We focus on the prevention, diagnosis, and treatment of maternal and
          pediatric conditions, ensuring the well-being of both mother and
          child. Our services include:
        </p>
        <ul>
          <li>Antenatal care and safe delivery services</li>
          <li>Postnatal care and maternal education</li>
          <li>Child immunization programs</li>
          <li>Newborn and pediatric care</li>
          <li>Family planning and reproductive health services</li>
          <li>Nutrition and breastfeeding support</li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery */}
        <div className={classes.departmentGallery}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Maternal and Child Health"
              />
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Expert Pediatricians"
              />
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Comprehensive Care for Mothers"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* MCH Services */}
        <div className={classes.mchServices} id="services">
          <h4 className={classes.servicesTitle}>Our Services</h4>
          <ul className={classes.servicesList}>
            <li className={classes.servicesItem}>
              Antenatal care and counseling
            </li>
            <li className={classes.servicesItem}>
              Pediatric care and immunizations
            </li>
            <li className={classes.servicesItem}>
              Postnatal care and family planning
            </li>
            <li className={classes.servicesItem}>
              Nutritional support for mothers and children
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MCH;
