/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../../assets/img/slider/pharmacy/pharmacy.jpg';
import img2 from '../../../../assets/img/photos/department-s1.jpg';

import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from './Pharmacy.module.css';

const Pharmacy = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Pharmacy Department</h1>
        <p>Providing medications and pharmaceutical services to patients.</p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery */}
          <div className={classes.departmentGallery}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <img src={img1} alt="Pharmacy Services" className={classes.galleryImage} />
            <img src={img2} alt="Pharmaceutical Care" className={classes.galleryImage} />
            <img src={img3} alt="Medication Supply" className={classes.galleryImage} />
          </div>

          {/* Pharmacy Services */}
          <div className={classes.services}>
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Prescription fulfillment</li>
              <li className={classes.servicesItem}>Medication management</li>
              <li className={classes.servicesItem}>Patient counseling</li>
              <li className={classes.servicesItem}>Drug information services</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment}>
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>chali</h5>
            <p>Chief pharmacist with 20 years of experience in pharmaceutical services and drug management.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
