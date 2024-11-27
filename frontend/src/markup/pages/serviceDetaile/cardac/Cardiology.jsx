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
// Adjust this import as needed
function Cardiology() {
  return (
    <div className={classes.departmentContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <div className={classes.mainContent}>
          {/* Page Title Area */}
          <h1>Cardiology Department</h1>
          <p>Comprehensive care for cardiovascular conditions.</p>
          <p>
            The cardiology department specializes in the diagnosis and treatment of diseases of the heart and blood vessels, including coronary artery disease, heart failure, arrhythmias, and valvular heart diseases.SPH provides the finest and most recent healthcare services in managing cardiovascular disorders, such as:
          </p>

          <h3>Key Services at SPH Cardiology Department:</h3>

          <h4>Electrocardiogram (ECG):</h4>
          <p>
            ECG is used to measure the electrical activity of the heart, helping diagnose arrhythmias and other heart conditions.
          </p>

          <h4>Echocardiogram:</h4>
          <p>
            An echocardiogram uses ultrasound to produce images of the hearts structure and function, allowing for the detection of heart defects and diseases.
          </p>

          <h4>Surgical Management of Cardiothoracic Malignancies:</h4>
          <p>
            The cardiology department offers surgical treatment for malignancies affecting<br/>  the heart and lungs, improving patient outcomes through expert surgical interventions.
          </p>

          <h4>Outpatient Follow-Up Care:</h4>
          <p>
            Patients are provided with comprehensive follow-up care after their initial treatment, ensuring continuous monitoring of their heart health.
          </p>

          <h4>Cardiac Catheterization:</h4>
          <p>
            This procedure involves inserting a catheter into the hearts blood vessels to diagnose<br/>  and treat cardiovascular diseases,such as blockages or structural abnormalities.
          </p>

          <h4>Emergency Care:</h4>
          <p>
            The department provides emergency care for patients experiencing acute cardiovascular events, such as heart attacks and arrhythmias, with immediate intervention and support.
          </p>

          <h4>Commitment to Comprehensive Care:</h4>
          <p>
           SPH is dedicated to offering holistic care for all cardiovascular patients, combining advanced medical treatments with compassionate support to ensure long-term heart health.
          </p>
        </div>
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

     
    
    </div>
  );
}

export default Cardiology;
