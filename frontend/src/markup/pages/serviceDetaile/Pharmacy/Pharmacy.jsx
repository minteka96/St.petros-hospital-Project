/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap'; // Importing Carousel
import img1 from '../../../../assets/img/slider/pharmacy/pharma.JPG';
import img2 from '../../../../assets/img/slider/pharmacy/pharma47.jpg';
import img3 from '../../../../assets/img/slider/pharmacy/190248resizie.jpg';
import classes from './Pharmacy.module.css';

const Pharmacy = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Pharmacy Department</h1>
        <p>
          The Pharmacy Department plays a critical role in ensuring patient safety and enhancing therapeutic outcomes through the appropriate management of pharmaceutical services in hospitals. The departments services cover a broad range of areas, each focusing on providing quality care and ensuring the rational, safe, and effective use of medications.
        </p>
        <ul>
          <li><strong className={classes.gt}>Clinical Pharmacy</strong>: Involves assessing patients, identifying drug therapy problems, and improving treatment outcomes.</li>
          <li><strong className={classes.gt}>Compounding Pharmacy</strong>: Customizes medications based on prescriptions for personalized care.</li>
          <li><strong className={classes.gt}>Community Pharmacy</strong>: Offers direct access to medications and health advice, ensuring rational medicine use.</li>
          <li><strong className={classes.gt}>Drug Supply Management</strong>: Ensures the hospital has an uninterrupted supply of quality medicines.</li>
          <li><strong className={classes.gt}>Dispensary Pharmacy</strong>: Prepares and distributes medications with appropriate counseling.</li>
          <li><strong className={classes.gt}>Drug Information Service</strong>: Provides essential drug-related information and education to healthcare professionals and patients.</li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery */}
        <div className={classes.departmentGallery}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="Pharmacy" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Pharmacy Equipment" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Pharmacy Work" />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Pharmacy Services */}
        <div className={classes.pharmacyServices}>
          <h4 className={classes.servicesTitle}>Our Services</h4>
          <ul className={classes.servicesList}>
            <li className={classes.servicesItem}>Clinical Pharmacy</li>
            <li className={classes.servicesItem}>Compounding Pharmacy</li>
            <li className={classes.servicesItem}>Community Pharmacy</li>
            <li className={classes.servicesItem}>Drug Supply Management</li>
            <li className={classes.servicesItem}>Dispensary Pharmacy</li>
            <li className={classes.servicesItem}>Drug Information Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
