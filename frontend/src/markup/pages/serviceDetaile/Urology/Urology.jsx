/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/urology/uro-1.jpg';
import img2 from '../../../../assets/img/banner/0004.jpeg';
import img3 from '../../../../assets/img/banner/10002.jpg';
import classes from './Urology.module.css';

const Urology = () => {
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
        <h1>Urology Department</h1>
        <p>Specialized care for urinary tract and male reproductive system.</p>
      </div>

      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#00796b"}}>Kidney Treatment</h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <h6 className="title">Prostate Care</h6>
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
              <li className={classes.servicesItem}>Urinary tract infections</li>
              <li className={classes.servicesItem}>Kidney function tests</li>
              <li className={classes.servicesItem}>Treatment of prostate issues</li>
              <li className={classes.servicesItem}>Male infertility evaluation</li>
            </ul>
          </div>

          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Wale</h5>
            <p>A urology expert with extensive clinical experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Urology;
