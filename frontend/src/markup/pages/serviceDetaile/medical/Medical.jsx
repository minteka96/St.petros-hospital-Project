
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider//Emergancy/emergancy.jpg';
import img2 from '../../../../assets/img/slider/Emergancy/emergancy.jpg';
import img3 from '../../../../assets/img/slider/10002.jpg';
import classes from './Medical.module.css';

const Medical = () => {
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
  <h1>Medical Department</h1>
  <p>
    Providing comprehensive care for a wide range of medical conditions. 
  </p>
  <p>
    The medical department is dedicated to the diagnosis and treatment of various health issues, offering the latest advancements in healthcare services. Our team is committed to providing high-quality medical care, including but not limited to:
  </p>
  <ul>
    <li>General health check-ups</li>
    <li>Chronic disease management</li>
    <li>Preventive care</li>
      <li>Laboratory services and imaging order </li>
    <li>Emergency care services</li>
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
                    <span className="d-block">
                       </span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block">
                        {/* Advanced Diagnostic Tools */}
                        </span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block">
                        {/* Patient-Centric Care */}
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

          {/* Medical Services */}
          <div className={classes.medicalServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Routine check-ups and health assessments</li>
              <li className={classes.servicesItem}>Emergency care and urgent treatment</li>
              <li className={classes.servicesItem}>Preventive care and vaccinations</li>
              <li className={classes.servicesItem}>Chronic disease management</li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Medical;
