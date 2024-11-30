/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import img1 from '../../../../assets/img/slider/dr/drtb.jpg';
import img2 from '../../../../assets/img/slider/dr/mdr1.jpg';
import img3 from '../../../../assets/img/slider/dr/mdr.jpg';
import classes from './DrTbTreatment.module.css';

const DrTbTreatment = () => {
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
        <h1>DR-TB Department</h1>
        <p>
          Comprehensive care for drug-resistant tuberculosis (DR-TB) patients.
        </p>
        <p>
          The DR-TB department at St. Peter’s Hospital specializes in the diagnosis,
          treatment, and management of drug-resistant forms of tuberculosis, which are
          resistant to first-line anti-TB drugs. The department is equipped to handle cases
          of Multi-Drug Resistant TB (MDR-TB) and Extensively Drug-Resistant TB (XDR-TB),
          supported by a dedicated team of specialists and cutting-edge facilities. It
          provides a range of services essential for comprehensive TB care.
        </p>
        <p>
          DR-TB treatment was initiated for the first time in Ethiopia at St. Peter’s
          Hospital in 2001 EC by the FMoH,GHC and other supporting partners. Since then, it
          has served as the national referral center for DR-TB treatment, training
          healthcare workers from across the country and providing technical support
          during the expansion of treatment programs to regional centers.
        </p>
        <p>
          St. Peter’s Hospital was the first to use one of the new TB drugs, Bedaquiline,
          and to treat patients with XDR regimens. Currently, it provides treatment for
          pre-XDR, XDR, and other patients with advanced drugs such as Bedaquiline and
          Delamanid.
        </p>
        <p>
          The success of its program has enabled the selection of St. Peter’s Hospital as
          one of the sites for the STREAM trial, an international multi-center study
          investigating various DR-TB treatment options.
        </p>
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
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="slider-content">
                  <h6 className="title">
                    <span className="d-block">
                 
                      </span>
                  </h6>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="slider-content">
                  <h6 className="title">
                    <span className="d-block">
               

                    </span>
                  </h6>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="slider-content">
                  <h6 className="title">
                    {/* <span className="d-block">DR-TB Department Slide 3</span> */}
                  </h6>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="swiper-button-prev"><i className="icofont-arrow-left"></i></div>
            <div className="swiper-button-next"><i className="icofont-arrow-right"></i></div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={classes.additionalInfo}>
          {/* DR-TB Services */}
          <div className={classes.drTbServices}>
            <h2 className={classes.servicesTitle}>Services We Provide</h2>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>Drug susceptibility testing</li>
              <li className={classes.servicesItem}>Second-line anti-TB drug therapy</li>
              <li className={classes.servicesItem}>Individualized patient care and monitoring</li>
              <li className={classes.servicesItem}>Comprehensive counseling and  pscho social support </li>
              <li className={classes.servicesItem}>Outreach programs and community support</li>
              <li className={classes.servicesItem}>Advanced diagnostic imaging and laboratory facilities</li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default DrTbTreatment;
