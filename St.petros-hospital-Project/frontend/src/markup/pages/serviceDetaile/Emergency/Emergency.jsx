/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/imaging/FB_IMG_1729208139176.jpg';
import img2 from '../../../../assets/img/slider/imaging/image2.jpg';
import img3 from '../../../../assets/img/slider/imaging/imaging-1.png';
import classes from './Emergency.module.css';

const Emergency = () => {
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
  <h1>Emergency Department</h1>
  <p>Immediate care for urgent medical conditions.</p>
  <p>
    The emergency department is dedicated to providing fast and effective treatment for acute medical issues. Our team is equipped to handle a wide range of emergencies, including:
  </p>
  <ul>
    <li>Trauma and injury care</li>
    <li>Cardiac emergencies</li>
    <li>Stroke management</li>
    <li>Respiratory distress</li>
    <li>Severe allergic reactions</li>
    <li>Critical care support</li>
  </ul>
</div>


      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                 <p className="title" style={{ color:'#00796b', fontSize: '50px' }}>Trauma Care</p>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <p className="title" style={{ color:'#00796b', fontSize: '50px' }}>Resuscitation</p>
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
              <li className={classes.servicesItem}>Emergency medical services</li>
              <li className={classes.servicesItem}>Cardiac arrest response</li>
              <li className={classes.servicesItem}>Acute trauma management</li>
              <li className={classes.servicesItem}>Stabilization and transfer</li>
            </ul>
          </div>

          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Emily Davis</h5>
            <p>Dedicated to providing the highest level of emergency care.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
