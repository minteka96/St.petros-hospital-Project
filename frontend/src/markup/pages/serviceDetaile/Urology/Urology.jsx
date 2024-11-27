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
        <p>In this department, you are in the hands of experts and have up-to-date medical services for your kidney problems ensuring that you have the most accurate and
comprehensive care. Successful treatment starts with an accurate diagnosis by using the best innovative advanced imaging technologies and specialized medical expertise. Offering treatment modalities with meticulous follow-up for diseases like acute kidney injury, chronic kidney disease, hypertension,  glomerulonephritis, and urinary tract obstruction.</p>
 <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li > tratment Urinary tract infections,Stricture surgary </li>
              <li> Renal Stone Surgary </li>
              <li>BPH Surgary  urological maliganacy Surgary & Treatment of prostate issues</li>
              <li>Male infertility evaluation</li>
            </ul>
          </div>
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

        
        </div>
      </div>
    </div>
  );
};

export default Urology;
