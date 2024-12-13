
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import classes from './MCH.module.css';  // Importing modular CSS
import img1 from '../../../../assets/img/slider/mch/mch.jpg'; // Replace with MCH images
import img2 from '../../../../assets/img/slider/mch/mch2.jpg';
import img3 from '../../../../assets/img/slider/mch/mch4.jpg';
import Swiper from 'swiper';

const MCH = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  }, []);

  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
     <div className={classes.pageTitleArea}>
  <h1>Maternal and Child Health Department</h1>
  <p>Comprehensive care for maternal and child health.</p>
  <p>
    The Maternal and Child Health (MCH) department is dedicated to providing high-quality healthcare services for mothers and children. We focus on the prevention, diagnosis, and treatment of maternal and pediatric conditions, ensuring the well-being of both mother and child. Our services include:
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
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery with Background Image Swiper */}
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              {/* Slide 1 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block"></span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block">
                      {/* Expert Pediatricians */}
                      </span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block">
                      {/* Comprehensive Care for Mothers */}
                      </span>
                  </h5>
                </div>
              </div>
            </div>

            {/* Swiper Navigation Buttons */}
            <div className="swiper-button-prev">
              <i className="icofont-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="icofont-arrow-right"></i>
            </div>
          </div>

          {/* MCH Services */}
          <div className={classes.mchServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Antenatal care and counseling</li>
              <li className={classes.servicesItem}>Pediatric care and immunizations</li>
              <li className={classes.servicesItem}>Postnatal care and family planning</li>
              <li className={classes.servicesItem}>Nutritional support for mothers and children</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCH;