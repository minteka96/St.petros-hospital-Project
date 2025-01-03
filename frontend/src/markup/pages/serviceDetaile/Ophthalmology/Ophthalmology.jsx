/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/ophtalmology/ophta (2).JPG';
import img2 from '../../../../assets/img/slider/ophtalmology/ophta.jpg';
import img3 from '../../../../assets/img/banner/10.jpg';
import classes from './Ophthalmology.module.css';

const Ophthalmology = () => {
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
        <h1>Ophthalmology Department</h1>
        <p>Comprehensive eye care and vision correction.</p>
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
                    <span className="d-block">Eye Examinations</span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h6 className="title">
                    <span className="d-block">Vision Correction</span>
                  </h6>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <p className="title">
                    <span className="d-block"></span>
                  </p>
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

          {/* Ophthalmology Services */}
          <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Comprehensive eye examinations</li>
              <li className={classes.servicesItem}>optometry care</li>
              <li className={classes.servicesItem}>Glaucoma care</li>
              <li className={classes.servicesItem}>Retinopathy Screening</li>
              <li className={classes.servicesItem}>Management of eye diseases</li>
              <li className={classes.servicesItem}>Laser vision correction</li>
              <li className={classes.servicesItem}>Pediatric ophthalmology</li>
            </ul>
          </div>

          {/* Head Of Department */}
         
        </div>
      </div>
    </div>
  );
};

export default Ophthalmology;
