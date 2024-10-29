
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/neuro/nurology.jpg';
import img2 from '../../../../assets/img/slider/neuro/923530Dr Felke WMichael Neurosurgeon.jpg';
import img3 from '../../../../assets/img/slider/st.peter1jpg copy.png';
import classes from './Neurology.module.css';
const Neurology = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
    });
  }, [])

  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Neurology Department</h1>
        <p>Comprehensive care for neurological conditions.</p>
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
                      {/* State-of-the-Art Facility */}
                      </span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h6 className="title">
                   <span className="d-block"></span>
                  </h6>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <p className="title">
                    {/* Compassionate Care */}
                     <span className="d-block">
                      {/* For Every Patient */}
                      </span>
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

          {/* Neurology Services */}
          <div className={classes.neurologyServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Diagnosis and treatment of neurological disorders</li>
              <li className={classes.servicesItem}>EEG and EMG services</li>
              <li className={classes.servicesItem}>Neurological consultations</li>
              <li className={classes.servicesItem}>Neuropsychological assessments</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Jane Doe</h5>
            <p>Specializing in pediatric neurology with over 15 years of experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurology;

