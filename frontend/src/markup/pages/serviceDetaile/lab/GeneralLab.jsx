/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/lab/labroom.jpg';
import img2 from '../../../../assets/img/slider/lab/lab-1.jpg';
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
  <p>Comprehensive diagnostic services for accurate reaiable  medical services.</p>
  <p>
    The hospital Laboratory department is equipped to provide a wide range of diagnostic tests and services, supporting the diagnosis and treatment of various medical conditions.the laboratory were Accrditated by ISO 15189  internatinal Standard in two scope (AFB AND GENE X-PERT TEST ) The laboratory services include the following:
  </p>
  <ul>
    <li>Hematology& serological Testing</li>
    <li>Blood Chemistry & hormonal Analysis</li>
    <li>clinical bactrology Testing</li>
    <li>Pathology Examination</li>
      <li>parapstology & urinalyisis Testing</li>
       <li>TB daginostic and fowloup testing like</li>
        <li>AFB,TB Culture, GenExpertand DST</li>
        <li>Blood bank service </li>
         
  </ul>
</div>
      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title"  style={{fontSize:'50px', color:"#00796b"}}>Microbiology & other sample test</h5>
                </div>
              </div>
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})` }}>
                <div className="slider-content">
                  <h6 className="title" style={{fontSize:'50px', color:"#00796b"}}>Blood Tests</h6>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev"><i className="icofont-arrow-left"></i></div>
            <div className="swiper-button-next"><i className="icofont-arrow-right"></i></div>
          </div>

          {/* <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            
          </div> */}

          {/* <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>yonas Sebsebe </h5>
            <p>An expert in clinical laboratory sciences dedicated to quality testing.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GeneralLab;
