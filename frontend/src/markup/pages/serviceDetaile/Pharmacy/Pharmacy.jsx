

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/pharmacy/pharmacy.jpg';
import img2 from '../../../../assets/img/slider/pharmacy/190248resizie.jpg';

import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from './Pharmacy.module.css';

const Pharmacy = () => {
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
  <h1>Pharmacy Department</h1>
  <p>
    The Pharmacy Department plays a critical role in ensuring patient safety and enhancing therapeutic outcomes through the appropriate management of pharmaceutical services in hospitals. The departments services cover a broad range of areas, each focusing on providing quality care and ensuring the rational, safe, and effective use of medications.
  </p>
  <p>
    Below is a breakdown of the key service areas within the Pharmacy Department:
  </p>
  <ul>
    <li>
      <strong>Clinical Pharmacy</strong>: Clinical pharmacy is vital for promoting rational and effective medication use. It involves assessing patients, identifying drug therapy problems, developing care plans, and making therapeutic decisions to improve treatment outcomes. Clinical pharmacists work in direct patient care settings across various wards, including Medical, ICU, Pediatric, Surgical, MDR-TB, and Toxicology.
    </li>
    <li>
      <strong>Compounding Pharmacy</strong>: This service focuses on preparing customized medications based on prescriptions. It includes non-sterile preparations (e.g., ointments, creams) and bulk preparations (e.g., alcohol-based hand rubs, antiseptic products). Compounding ensures that patients receive personalized drug formulations.
    </li>
    <li>
      <strong>Community Pharmacy</strong>: Community pharmacy provides direct access to medications and health advice, focusing on rational medicine use, cost-effective care, and enhancing patient outcomes. It also encourages motivation among pharmacy staff to maintain high standards.
    </li>
    <li>
      <strong>Drug Supply Management (DSM)</strong>: DSM ensures the hospital has an uninterrupted supply of quality medicines. It involves selection, procurement, stock management, and ensuring the timely delivery of medicines while managing costs and supplier relations.
    </li>
    <li>
      <strong>Dispensary Pharmacy</strong>: This service involves the preparation and distribution of medications to patients with appropriate counseling and follow-up. The pharmacy also offers specialty services such as OPD pharmacy, Inpatient Pharmacy, Emergency Pharmacy, MCH Pharmacy, MDR-TB Pharmacy, ART Pharmacy, OR Pharmacy, and Toxicology Pharmacy.
    </li>
    <li>
      <strong>Drug Information Service (DIS)</strong>: DIS provides essential information and education to healthcare professionals and patients. It responds to queries, offers health education, and prepares newsletters, drug alerts, and publications to keep healthcare teams informed. It also provides poison information and emergency support.
    </li>
  </ul>
  <p>
    The Pharmacy Department at St Peter Specialized Hospital is dedicated to ensuring that patients receive safe, effective, and personalized medication therapy. The various services are designed to meet specific needs, ensuring that pharmaceuticals are used rationally and safely to optimize patient outcomes.
  </p>
</div>

      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#00796b"}} >Pharmacy</h5>
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

        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
