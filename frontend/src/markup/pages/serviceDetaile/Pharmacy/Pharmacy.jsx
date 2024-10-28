

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/pharmacy/pharmacy.jpg';
import img2 from '../../../../assets/img/slider/pharmacy/190248resizie.jpg';

import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from './Pharmacy.module.css';

const Pharmacy = () => {
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
        <h1>Pharmacy Department</h1>
        <p>Your trusted source for medications and pharmaceutical services.</p>
      </div>

      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title" style={{ fontSize: '50px', color: "#2e7d32" }}>Pharmacy</h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <h6 className="title"></h6>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
                <div className="slider-content">
                  <p className="title"></p>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev"><i className="icofont-arrow-left"></i></div>
            <div className="swiper-button-next"><i className="icofont-arrow-right"></i></div>
          </div>

          <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Prescription Medications</li>
              <li className={classes.servicesItem}>Over-the-Counter Products</li>
              <li className={classes.servicesItem}>Medication Counseling</li>
              <li className={classes.servicesItem}>Health and Wellness Products</li>
            </ul>
          </div>

          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Menelik Fikadu</h5>
            <p>A trusted pharmacist dedicated to patient care and pharmaceutical innovation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
