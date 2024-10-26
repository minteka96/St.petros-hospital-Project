
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/dr/drtb.jpg';
import img2 from '../../../../assets/img/slider/dr/drtb3.jpg';
import img3 from '../../../../assets/img/slider/dr/mdr.jpg';
import classes from './DrTbTreatment.module.css';

const DrTbTreatment = () => {
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
        <h1>DR-TB Treatment Department</h1>
        <p>Comprehensive care for drug-resistant tuberculosis (DR-TB).</p>
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
                    <span className="d-block"style={{ color: 'black', fontSize: '50px' }}>
                    TB Care</span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <p className="title" style={{ color: 'green', fontSize: '50px' }}>
                    Expertise in Treating <span className="d-block">DR TB</span>
                  </p>
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

          {/* DR-TB Services */}
          <div className={classes.drTbServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Diagnosis and treatment of drug-resistant tuberculosis</li>
              <li className={classes.servicesItem}>TB drug susceptibility testing</li>
              <li className={classes.servicesItem}>Inpatient and outpatient care</li>
              <li className={classes.servicesItem}>Counseling and social support</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. John Doe</h5>
            <p>A specialist in DR-TB treatment with over 10 years of experience in managing complex TB cases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrTbTreatment;
