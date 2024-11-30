/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/surgical/surgical.jpg';
import img2 from '../../../../assets/img/slider/surgical/surgical26.jpg';
import img3 from '../../../../assets/img/slider/surgical/surgical (2).jpg';
import classes from './Surgery.module.css';

const Surgery = () => {
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
  <div className={classes.mainContent}>
    {/* Page Title Area */}
    <h1>Surgery Department</h1>
    <p>Providing expert surgical care for various conditions.</p>
    <p>
      The surgery department specializes in the diagnosis and treatment of a wide range of surgical conditions.SPH offers advanced surgical services, including:
    </p>

    <h3>Key Services at SPH Surgery Department:</h3>

    <h4>General Surgery:</h4>
    <p>
      General surgery covers a broad range of procedures to treat conditions affecting the abdomen, digestive tract, and other internal organs.
    </p>

    <h4>Orthopedic Surgery:</h4>
    <p>
      This specialty focuses on surgeries related to bones, joints, muscles, and ligaments, such as joint replacements and fracture repairs.
    </p>

    <h4>Cardiothoracic Surgery:</h4>
    <p>
      Cardiothoracic surgery involves the treatment of heart and lung conditions, including coronary artery bypass grafting (CABG) and lung resections.
    </p>

    <h4>Neurosurgery:</h4>
    <p>
      Neurosurgery addresses conditions of the brain, spine, and nervous system, including tumor removal, spinal surgery, and treatment of traumatic brain injuries.
    </p>

    <h4>Minimally Invasive Surgery:</h4>
    <p>
      This technique involves smaller incisions and the use of advanced technology, allowing for quicker recovery and less postoperative discomfort.
    </p>

    <h4>Surgical Referral Clinic:</h4>
    <p>
      The clinic provides consultations and referrals to specialized surgical care for patients requiring advanced procedures or second opinions.
    </p>

    <h4>Elective Surgery:</h4>
    <p>
      Elective surgeries are scheduled in advance and are non-emergency procedures, such as hernia repairs and cosmetic surgeries.
    </p>

    <h4>Vascular Surgery:</h4>
    <p>
      This specialty focuses on surgeries to treat conditions affecting the blood vessels, including varicose veins surgary, fistulas surgary , and vascular access for dialysis.
    </p>

    <h4>Hepatobiliary Surgery:</h4>
    <p>
      Hepatobiliary surgery involves procedures related to the liver, gallbladder, and bile ducts, such as treatment for obstructive jaundice and liver diseases.
    </p>

    <h4>Plastic and Reconstructive Surgery:</h4>
    <p>
      This specialty covers surgeries for burn care, skin grafts, flap surgeries, and reconstruction following trauma or congenital conditions.
    </p>

    <h4>Commitment to Comprehensive Care:</h4>
    <p>
      SPH is dedicated to providing comprehensive surgical care with the latest techniques, a multidisciplinary team of specialists, and compassionate support to ensure the best outcomes for our patients.
    </p>
  </div>
</div>



      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})` }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#d84315"}}>Surgery</h5>
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

export default Surgery;
