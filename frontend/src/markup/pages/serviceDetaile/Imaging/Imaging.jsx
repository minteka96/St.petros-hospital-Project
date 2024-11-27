
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import img1 from '../../../../assets/img/slider/imaging/FB_IMG_1729208139176.jpg';
import img2 from '../../../../assets/img/slider/imaging/image2.jpg';
import img3 from '../../../../assets/img/slider/imaging/imaging-1.png';
import classes from './Imaging.module.css';

const Imaging = () => {
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
  <h1>Imaging Department</h1>
  <p>Advanced diagnostic imaging services.</p>
  <p>
    The imaging department specializes in a wide range of diagnostic imaging services, including X-rays, MRIs, CT scans, and ultrasounds. TGH provides the latest technology and expertise in imaging to ensure accurate diagnosis and effective treatment planning, offering services such as:
  </p>
  <ul>
    <li>X-rays</li>
    <li>Magnetic Resonance Imaging (MRI)</li>
    <li>Computed Tomography (CT) scans</li>
    <li>Ultrasounds</li>
    <li>Mammography</li>
  </ul>
</div>


      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery with Background Image Swiper */}
          <div className={`swiper-container department-gallery ${classes.departmentGallery}`} id="gallery">
            <h2 className={classes.galleryTitle}>Imaging Gallery</h2>
            <div className="swiper-wrapper gallery-slider">
              {/* Slide 1 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block" style={{fontSize:'50px', color:"#00796b"}}> Advanced CT Scans</span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title">
                    <span className="d-block" style={{fontSize:'50px', color:"#00796b"}}>MRI Technology</span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="slider-content">
                  <h5 className="title" style={{fontSize:'50px', color:"#00796b"}}>
                    <span className="d-block"> X-ray Machines </span>
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

          {/* Imaging Services */}
          <div className={classes.imagingServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Digital X-ray services</li>
              <li className={classes.servicesItem}>CT scans for advanced diagnostics</li>
              <li className={classes.servicesItem}>MRI scans for detailed internal imaging</li>
              <li className={classes.servicesItem}>Ultrasound imaging for various medical needs</li>
            </ul>
          </div>

          {/* Head Of Department */}
      
        </div>
      </div>
    </div>
  );
};

export default Imaging;
