/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/slide1.jpg';
import img2 from '../../../../assets/img/slider/slide1.jpg';
import img3 from '../../../../assets/img/about/001.jpg';
import classes from './Toxicology.module.css';

const Toxicology = () => {
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
  <h1>Toxicology Department</h1>
  <p>
    Specialized care for the prevention, diagnosis, and treatment of poisoning and toxic exposures. 
  </p>
  <p>
    The toxicology department provides comprehensive services to manage cases of exposure to various toxins, including chemical, biological, and environmental hazards. TGH offers state-of-the-art care and advanced treatment protocols in toxicology, such as:
  </p>
  <ul>
    <li>Poison management and antidote therapy</li>
    <li>Environmental and occupational toxicology</li>
    <li>Drug overdose treatment</li>
    <li>Heavy metal toxicity testing and treatment</li>
    <li>Chemical exposure evaluation</li>
    <li>Biohazard incident response</li>
  </ul>
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
                  <p className="title">
                    <span className="d-block">
                        Toxic 
                        </span>
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <p className="title">
                    <span className="d-block"> Substance </span>
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <p className="title">
                    <span className="d-block">Management </span>
                  </p>
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

          {/* Toxicology Services */}
          <div className={classes.toxicologyServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Diagnosis and treatment of poisoning</li>
              <li className={classes.servicesItem}>Management of toxic exposures</li>
              <li className={classes.servicesItem}>Toxicology consultations</li>
              <li className={classes.servicesItem}>Support for patients and families</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment} id="team">
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Ayele
            </h5>
            <p>A specialist in toxicology with extensive experience in emergency medicine.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toxicology;
