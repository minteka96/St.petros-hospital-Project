/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/slide1.jpg';
import img2 from '../../../../assets/img/slider/slide2.jpg';

import classes from './ICU.module.css';

const ICU = () => {
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
      <div className={classes.pageTitleArea}>
  <h1>Intensive Care Unit</h1>
  <p>Expert care for critically ill patients.</p>
  <p>
    The Intensive Care Unit (ICU) is designed to provide comprehensive and continuous care for patients with life-threatening conditions. Our team of specialized healthcare professionals offers the highest level of medical support and monitoring for conditions such as:
  </p>
  <ul>
    <li>Severe respiratory distress</li>
    <li>Cardiac arrest and acute coronary syndrome</li>
    <li>Severe infections and sepsis</li>
    <li>Post-operative care for major surgeries</li>
    <li>Trauma and neurological emergencies</li>
    <li>Multisystem organ failure</li>
  </ul>
</div>


      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title">Patient Monitoring</h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <h6 className="title">Advanced Life Support</h6>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev"><i className="icofont-arrow-left"></i></div>
            <div className="swiper-button-next"><i className="icofont-arrow-right"></i></div>
          </div>

          <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Critical Care</li>
              <li className={classes.servicesItem}>Monitoring and Support</li>
              <li className={classes.servicesItem}>Ventilator Management</li>
              <li className={classes.servicesItem}>Nutritional Support</li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ICU;
