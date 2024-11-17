/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/banner/10002.jpg';
import img2 from '../../../../assets/img/banner/10001.jpg';
import classes from './Psychiatric.module.css';

const Psychiatric = () => {
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
  <h1>Psychiatric Department</h1>
  <p>Comprehensive care for mental health conditions.</p>
  <p>
    The psychiatric department is specialized in the diagnosis and treatment of mental health conditions, including anxiety, depression, bipolar disorder, schizophrenia, and other psychiatric disorders. TGH provides the finest and most recent health care services in managing psychiatric conditions, such as:
  </p>
  <ul>
    <li>Individual psychotherapy</li>
    <li>Group therapy sessions</li>
    <li>Cognitive behavioral therapy (CBT)</li>
    <li>Medication management</li>
    <li>Family therapy</li>
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
                  <h6 className="title">Mental Health </h6>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev"><i className="icofont-arrow-left"></i></div>
            <div className="swiper-button-next"><i className="icofont-arrow-right"></i></div>
          </div>

          <div className={classes.services} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Mental Health Evaluations</li>
              <li className={classes.servicesItem}>Therapy and Counseling</li>
              <li className={classes.servicesItem}>Psychiatric Assessment</li>
              <li className={classes.servicesItem}>Medication Management</li>
            </ul>
          </div>

          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Asres</h5>
            <p>A compassionate psychiatrist dedicated to mental wellness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psychiatric;
