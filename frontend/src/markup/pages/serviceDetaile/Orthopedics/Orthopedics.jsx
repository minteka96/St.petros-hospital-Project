/* eslint-disable no-unused-vars */


import img1 from '../../../../assets/img/slider/ortopedics/ortopedics.jpg'; // Replace with relevant images
import img2 from '../../../../assets/img/team/02.jpg';
import img3 from '../../../../assets/img/team/03.jpg';
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import classes from './Orthopedics.module.css';

const Orthopedics = () => {
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
        <h1>Orthopedics Department</h1>
        <p>Expert care for bone, joint, and muscle health.</p>
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
                    <span className="d-block"></span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block"></span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block"></span>
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

          {/* Orthopedics Services */}
          <div className={classes.orthopedicsServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Fracture management and bone repair</li>
              <li className={classes.servicesItem}>Joint replacement surgery</li>
              <li className={classes.servicesItem}>Sports medicine and injury prevention</li>
              <li className={classes.servicesItem}>Physical therapy and rehabilitation</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Zerhun</h5>
            <p>Renowned orthopedic surgeon with over 15 years of experience in joint surgery.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthopedics;
