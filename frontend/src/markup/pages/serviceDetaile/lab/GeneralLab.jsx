/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Correct import for Swiper styles
// Correct for Swiper v7 and above
import img1 from '../../../../assets/img/slider/lab/lab 55.JPG';
import img2 from '../../../../assets/img/slider/lab/lab.jpg';
import classes from './GeneralLab.module.css';

const GeneralLab = () => {
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
        <h1>General Laboratory</h1>
        <p>Comprehensive diagnostic services for accurate and reliable medical services.</p>
        <p>
          The hospital laboratory department is equipped to provide a wide range of diagnostic tests and services, supporting
          the diagnosis and treatment of various medical conditions. The laboratory is accredited by ISO 15189 international
          standards in two scopes (AFB and Gene X-pert Test). The laboratory services include the following:
        </p>
        <ul>
          <li>Hematology & Serological Testing</li>
          <li>Blood Chemistry & Hormonal Analysis</li>
          <li>Clinical Bacteriology Testing</li>
          <li>Pathology Examination</li>
          <li>Parasitology & Urinalysis Testing</li>
          <li>TB Diagnostic and Follow-up Testing (AFB, TB Culture, GenExpert, DST)</li>
          <li>Blood Bank Service</li>
        </ul>
      </div>
      
      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title"></h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <h6 className="title">Blood Tests</h6>
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

export default GeneralLab;
