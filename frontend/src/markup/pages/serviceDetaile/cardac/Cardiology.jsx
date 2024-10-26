/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './Cardiology.module.css';
import img1 from '../../../../assets/img/servicedetail/r01.jpg';
import img2 from '../../../../assets/img/slider/Icu/ICU2.jpg';




// Correct imports for Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Cardiology() {
  return (
    <div className={classes.departmentContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Cardiology Department</h1>
        <p>Providing comprehensive care for heart conditions.</p>
      </div>

      {/* Swiper Carousel for Gallery */}
      <Swiper
        navigation={true} // Enable navigation arrows
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Add Swiper modules for navigation and pagination
        className={classes.swiperContainer}
        spaceBetween={10} // Adjust space between slides if needed
        slidesPerView={1} // Number of slides to show at a time
      >
        <SwiperSlide className={classes.gallerySlider}>
          <img src={img1} alt="Department Image 1" />
        </SwiperSlide>
        <SwiperSlide className={classes.gallerySlider}>
          <img src={img2} alt="Department Image 2" />
        </SwiperSlide>
      </Swiper>

      {/* Cardiology Services */}
      <div className={classes.content}>
        <h4>Our Services</h4>
        <p>
          Kidus Petros Hospital Department of Cardiology offers a broad range of services, including:
        </p>
        <ul className={classes.listStyle1}>
          <li>Preventive Cardiac Care</li>
          <li>Cholesterol Screening</li>
          <li>Cardiac Rehabilitation</li>
          <li>Heart Health Education for Pregnant Patients</li>
        </ul>
      </div>

      {/* Price List for Services */}
      <div className={classes.priceListCol2}>
        <div className={classes.priceList}>
          <h4>Cosmetic Cardiology</h4>
          <ul>
            <li>
              <span className={classes.serviceName}>Cardiac Stent Procedure</span>
              <span className={classes.servicePrice}>$5000</span>
            </li>
            <li>
              <span className={classes.serviceName}>Coronary Bypass Surgery</span>
              <span className={classes.servicePrice}>$15,000</span>
            </li>
          </ul>
        </div>
        <div className={classes.priceList}>
          <h4>Restorative Cardiology</h4>
          <ul>
            <li>
              <span className={classes.serviceName}>Angioplasty</span>
              <span className={classes.servicePrice}>$2,500</span>
            </li>
            <li>
              <span className={classes.serviceName}>Heart Transplant</span>
              <span className={classes.servicePrice}>$50,000</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Head Of Department Section */}
      <div className={classes.teamSingle}>
        <h2 className={classes.title}>
          <span>Head Of</span> Department
        </h2>
        <div className={classes.membrInfo}>
          <h4 className={classes.departmentHeadName}>Dr. Genoveva Leannon</h4>
          <p>Dr. Genoveva Leannon has over 6 years of experience in cardiology.</p>
        </div>
      </div>
    </div>
  );
}

export default Cardiology;
