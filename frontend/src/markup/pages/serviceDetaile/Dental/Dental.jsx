


/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../../assets/img/slider/dental/dental.jpg';
import img2 from '../../../../assets/img/slider/dental/dental.jpg';
import classes from './Dental.module.css';
// Correct imports for Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Dental() {
  return (
    <div className={classes.departmentContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Dental Department</h1>
        <p>Comprehensive care for dental health.</p>
        <p>
          The dental department specializes in the diagnosis and treatment of various dental conditions, including preventive care, cosmetic dentistry, and restorative treatments. TGH provides the finest and most recent health care services in managing dental health, such as:
        </p>
        <ul>
          <li>Routine Check-ups</li>
          <li>Dental Cleanings</li>
          <li>Fillings and Restorations</li>
          <li>Root Canal Treatments</li>
          <li>Teeth Whitening</li>
          <li>Orthodontics</li>
        </ul>
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
          <img src={img1} alt="Dental Department Image 1" />
        </SwiperSlide>
        <SwiperSlide className={classes.gallerySlider}>
          <img src={img2} alt="Dental Department Image 2" />
        </SwiperSlide>
      </Swiper>


      {/* Head Of Department Section */}
    
  
    </div>
  );
}

export default Dental;
