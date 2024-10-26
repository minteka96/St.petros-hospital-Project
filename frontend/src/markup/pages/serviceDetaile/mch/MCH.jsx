/* eslint-disable react-refresh/only-export-components */
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
        <h1>Maternal & Child Health Treatment</h1>
        <p>Comprehensive healthcare solutions for mothers and children.</p>
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

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Tobia</h5>
            <p>Specialist in maternal and child health with over 15 years of experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCH;