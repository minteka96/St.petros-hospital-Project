/* eslint-disable no-unused-vars */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import for Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Correct Swiper styles import
import img1 from '../../../../assets/img/slider/toxico/13.JPG';
import img2 from '../../../../assets/img/slider/toxico/13.JPG';
import img3 from '../../../../assets/img/about/001.jpg';
import classes from './Toxicology.module.css';

const Toxicology = () => {
  const galleryItems = [
    { image: img1, title: '' },
    { image: img2, title: 'Toxic Substance Exposure' },
    { image: img3, title: 'Critical Care & Support' },
  ];

  const services = [
    'Toxicology emergency care, including decontamination of patients with acute poisoning',
    'Critical care and mechanical ventilation for poisoned patients requiring intensive care',
    'Routine care for toxicology patients in the toxicology ward',
    'Acceptance of toxicology patients from any facility, based on service availability',
    'Psychiatric consultations to address mental health aspects of poisoned patients',
    'Outpatient follow-up care for toxicology patients',
    'On-call consultation and guidance for remote healthcare providers',
    'Community education on poison prevention and control',
  ];

  return (
    <div className={classes.mainContent}>
      <div className={classes.pageTitleArea}>
        <h1>Toxicology Department</h1>
        <p>
          The Toxicology Department provides specialized care for the prevention, diagnosis, and treatment of poisoning and toxic exposures. It plays a crucial role in addressing emerging public health concerns, including chemical, biological, and environmental hazards.
        </p>
        <p>
          The department was established in 2017 and is Ethiopia’s pioneering national poison center, showcasing the hospitals commitment to the International Health Regulations (IHR) of 2005. The center has treated over 1,200 poisoned patients, aiming to enhance the quality and accessibility of its services to better meet community demands.
        </p>
      </div>

      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <div className={classes.departmentGallery}> {/* Apply the correct class */}
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
            >
              {galleryItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      height: '300px',
                    }}
                  >
                    <div className="slider-content">
                      <p className="title">
                        <span className="d-block">{item.title}</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-prev">
              <i className="icofont-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="icofont-arrow-right"></i>
            </div>
          </div>

          <div className={classes.toxicologyServices}>
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              {services.map((service, index) => (
                <li className={classes.servicesItem} key={index}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toxicology;
