/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../../assets/img/photos/department-s2.jpg';
import img2 from '../../../../assets/img/photos/department-s1.jpg';
import img3 from '../../../../assets/img/slider/slide2.jpg';
import classes from './Dental.module.css';

const Dental = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Dental Department</h1>
        <p>Comprehensive dental care and oral health services.</p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery */}
          <div className={classes.departmentGallery}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <img src={img1} alt="Dental Care" className={classes.galleryImage} />
            <img src={img2} alt="Oral Health" className={classes.galleryImage} />
            <img src={img3} alt="Dental Procedures" className={classes.galleryImage} />
          </div>

          {/* Dental Services */}
          <div className={classes.services}>
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Routine dental check-ups</li>
              <li className={classes.servicesItem}>Teeth cleaning and whitening</li>
              <li className={classes.servicesItem}>Root canal treatments</li>
              <li className={classes.servicesItem}>Dental implants and crowns</li>
            </ul>
          </div>

          {/* Head Of Department */}
          <div className={classes.headOfDepartment}>
            <h4 className={classes.departmentHeadTitle}>Head of Department</h4>
            <h5 className={classes.departmentHeadName}>Dr. Melkam</h5>
            <p>Specialist in dental surgery with 15 years of experience in oral health care.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dental;
