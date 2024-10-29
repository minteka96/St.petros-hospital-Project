/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/servicedetail/r01.jpg';
import img2 from '../../../../assets/img/slider/surgical/10002.jpg';
import img3 from '../../../../assets/img/slider/surgical/surgical3.jpg';
import classes from './Surgery.module.css';

const Surgery = () => {
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
        <h1>Surgery Department</h1>
        <p>Advanced surgical procedures and care.</p>
      </div>

      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#d84315"}}>Surgery</h5>
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
              <li className={classes.servicesItem}>General Surgery</li>
              <li className={classes.servicesItem}>Cardiac Surgery</li>
              <li className={classes.servicesItem}>Neurosurgery</li>
              <li className={classes.servicesItem}>Bariatric Surgery</li>
            </ul>
          </div>

          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Workiya</h5>
            <p>A skilled surgeon with years of experience in various specialties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surgery;
