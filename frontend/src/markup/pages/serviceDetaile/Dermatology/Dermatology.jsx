
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/derma/002.jpg';
import img2 from '../../../../assets/img/slider/derma/001.avif';
// import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from './Dermatology.module.css';

const Dermatology = () => {
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
  <h1>Dermatology Department</h1>
  <p>Comprehensive care for skin conditions.</p>
  <p>
    The dermatology department specializes in the diagnosis and treatment of diseases of the skin, hair, and nails, including conditions such as acne, eczema, psoriasis, skin cancer, and dermatitis. TGH provides the finest and most recent health care services in managing dermatological disorders, such as:
  </p>
  <ul>
    <li><strong>Skin cancer screenings</strong>: Early detection of skin cancer through routine screenings, offering the best chance for effective treatment.</li>
    <li><strong>Acne treatment</strong>: Comprehensive treatment options, including topical therapies, oral medications, and laser therapy for effective acne management.</li>
    <li><strong>Eczema management</strong>: Care plans tailored to manage eczema flare-ups, alleviate symptoms, and prevent future outbreaks.</li>
    <li><strong>Psoriasis therapy</strong>: Treatments that focus on managing the symptoms of psoriasis, including topical treatments, phototherapy, and systemic therapies.</li>
    <li><strong>Dermatopathology</strong>: Specialized diagnostic services that involve analyzing skin biopsies to accurately diagnose various skin disorders.</li>
    <li><strong>Laser treatments</strong>: Advanced laser therapies for conditions like acne scars, pigmentation disorders, and skin resurfacing.</li>
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
                  <h6 className="title">
                    <span className="d-block"> Skin Treatments</span>
                  </h6>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h6 className="title">
                    <span className="d-block">
                        {/* Experienced Dermatologists */}
                        </span>
                  </h6>
                </div>
              </div>

              {/* Slide 3
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="slider-content">
                  <h6 className="title">
                    <span className="">
                     
                        </span>
                  </h6>
                </div>
              </div> */}
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

export default Dermatology;
