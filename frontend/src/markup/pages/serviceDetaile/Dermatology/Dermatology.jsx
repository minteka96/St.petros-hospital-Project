
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/derma/002.jpg';
import img2 from '../../../../assets/img/slider/derma/images.jpeg';
import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from './Dermatology.module.css';

const Dermatology = () => {
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
        <h1>Dermatology Department</h1>
        <p>Comprehensive skincare solutions for all your needs.</p>
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
                  <h6 className="title">
                    <span className="d-block"> Skin Treatments</span>
                  </h6>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h6 className="title">
                    <span className="d-block">
                        {/* Experienced Dermatologists */}
                        </span>
                  </h6>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h6 className="title">
                    <span className="">
                        {/* Personalized Skincare Plans */}
                        </span>
                  </h6>
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

          {/* Dermatology Services */}
          <div className={classes.dermatologyServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Acne treatment and skincare consultations</li>
              <li className={classes.servicesItem}>Laser therapy for skin conditions</li>
              <li className={classes.servicesItem}>Cosmetic dermatology services</li>
              <li className={classes.servicesItem}>Skin cancer screenings</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. selam</h5>
            <p>Expert in dermatology and cosmetic skincare with over 20 years of experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dermatology;
