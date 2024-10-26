/* eslint-disable react-refresh/only-export-components */

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/ENT/001.jpeg';
import img2 from '../../../../assets/img/slider/ENT/002.jpeg';
import img3 from '../../../../assets/img/slider/ENT/002.jpeg';
import classes from './ENT.module.css';

const ENT = () => {
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
        <h1>ENT Department</h1>
        <p>Your trusted specialists in ear, nose, and throat care.</p>
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
                   <h5 className="title" style={{fontSize:'50px', color:"#00796b"}}>
                    <span className="d-block">
                    ENT Care
                        </span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block">
                        {/* Advanced Sinus Treatments */}
                        </span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#00796b"}}>
                    <span className="d-block">
                    ENT Care
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

          {/* ENT Services */}
          <div className={classes.entServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Hearing evaluations and audiology services</li>
              <li className={classes.servicesItem}>Sinus and allergy treatments</li>
              <li className={classes.servicesItem}>Throat disorders and treatments</li>
              <li className={classes.servicesItem}>Surgical interventions for ENT conditions</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Bilen</h5>
            <p>A renowned ENT specialist with over 15 years of experience in treating complex cases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ENT;
