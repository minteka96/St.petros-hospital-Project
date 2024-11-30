/* eslint-disable react-refresh/only-export-components */




/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/derma/001.avif'; // Replace with relevant ART department images
import img2 from '../../../../assets/img/about/006.webp'; 
import img3 from '../../../../assets/img/banner/0004.jpeg'
import classes from './ART.module.css';

const ART = () => {
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
   <h1>Anti-Retroviral Therapy (ART)</h1>
<p>Comprehensive care for individuals living with HIV.</p>
<p>
  The ART department specializes in the diagnosis and treatment of HIV/AIDS through effective anti-retroviral therapies. The SPH HIV Care Center was launched in 1998, and free ART services started in 2006 EC. Since its inception, approximately 8,000 HIV-infected clients have been enrolled in the ART clinic, with 2,448 currently receiving ART. SPH provides the latest healthcare services for managing HIV, ensuring that patients receive comprehensive care, support, and access to the following services:
</p>


<h2>Key Services at SPH HIV Care Center:</h2>

<h4>HIV Testing and Counseling:</h4>
<p>
  SPH provides HIV testing and counseling services, helping individuals understand their HIV status and supporting them in making informed decisions about their health and treatment options.
</p>

<h4>Antiretroviral Therapy (ART):</h4>
<p>
  The center offers ART to people living with HIV, which helps suppress the virus, improve immune function, and prevent the transmission of HIV. ART is provided free of charge to eligible patients.
</p>

<h4>Regular Monitoring (CD4 and Viral Load Testing):</h4>
<p>
  Regular monitoring through CD4 count and viral load testing is crucial for assessing the immune system’s health and tracking the effectiveness of ART. This allows healthcare providers to adjust treatment as necessary for optimal results.
</p>

<h4>Adherence Support Programs:</h4>
<p>
  SPH offers adherence support programs to ensure the effectiveness of ART. These programs help patients stay consistent with their medication regimens, which is essential for viral suppression and overall health improvement.
</p>

<h4>Prevention of Mother-to-Child Transmission (PMTCT):</h4>
<p>
  SPH provides services aimed at preventing the transmission of HIV from mother to child during pregnancy, labor, and breastfeeding. This includes the administration of ART to pregnant women living with HIV to protect both the mother and the baby.
</p>

<h4>Psychosocial Support Services:</h4>
<p>
  The HIV Care Center offers comprehensive psychosocial support, including counseling and mental health services, to help patients cope with the emotional, psychological, and social challenges that come with living with HIV.
</p>

<h4>Counseling for Cervical Cancer Screening and Linkage:</h4>
<p>
  SPH offers counseling for women living with HIV regarding the importance of cervical cancer screening. This service helps to identify women at higher risk and facilitates timely referrals for screening and follow-up care.
</p>

<h4>Voluntary Counseling and Testing (VCT):</h4>
<p>
  Voluntary counseling and testing (VCT) is provided to encourage individuals to get tested for HIV in a confidential and supportive environment. This allows individuals to make informed decisions regarding their health and take early steps in HIV care if needed.
</p>

<h4>Commitment to Comprehensive Care:</h4>
<p>
  By providing these essential services, SPH is committed to delivering holistic and comprehensive care to people living with HIV. The center ensures that patients have access to the necessary medical, psychological, and social support to live healthier lives.
</p>

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
                  <h5 className="title">
                    <span className="d-block">HIV Care</span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block"></span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block"></span>
                  </h5>
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

          
        </div>
      </div>
    </div>
  );
};

export default ART;
