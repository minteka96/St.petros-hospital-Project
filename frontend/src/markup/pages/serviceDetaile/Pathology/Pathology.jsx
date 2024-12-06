
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/lab/lab 51.JPG';
import img2 from '../../../../assets/img/slider/lab/lab.jpg';
import img3 from '../../../../assets/img/slider/lab/lab miro58.JPG';
import classes from './Pathology.module.css';

const Pathology = () => {
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
        <h1>Pathology Service</h1>
        <p>Expert diagnosis and management of diseases.</p>
        <p>
          The pathology service is an integral part of the general lab work, specializing in the diagnosis of diseases through the examination of tissues, cells, and body fluids. We provide comprehensive and advanced laboratory services in pathology, including:
        </p>
        <ul>
          <li>Biopsy Services</li>
          <li>Cytopathology</li>
          <li>Fluid Analysis</li>
          <li>FNAC (Fine Needle Aspiration Cytology)</li>
          <li>Microbiology</li>
        </ul>
        <p>
          Our pathology team is committed to delivering accurate diagnoses and working closely with medical professionals for optimal patient care.
        </p>
      </div>

      {/* Department Area */}
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
                  <h5 className="title"></h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
                <div className="slider-content">
                  <h5 className="title"></h5>
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

export default Pathology;
