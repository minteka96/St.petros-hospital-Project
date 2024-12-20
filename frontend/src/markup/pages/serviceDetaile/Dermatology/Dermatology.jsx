/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/derma/002.jpg";
import img2 from "../../../../assets/img/slider/derma/001.avif";
// import img3 from '../../../../assets/img/slider/slide1.jpg';
import classes from "./Dermatology.module.css";

const Dermatology = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Dermatology Department</h1>
        <p>Comprehensive care for skin conditions.</p>
        <p>
          The dermatology department specializes in the diagnosis and treatment
          of diseases of the skin, hair, and nails, including conditions such as
          acne, eczema, psoriasis, skin cancer, and dermatitis. TGH provides the
          finest and most recent health care services in managing dermatological
          disorders, such as:
        </p>
        <ul>
          <li>
            <strong>Skin cancer screenings</strong>: Early detection of skin
            cancer through routine screenings, offering the best chance for
            effective treatment.
          </li>
          <li>
            <strong>Acne treatment</strong>: Comprehensive treatment options,
            including topical therapies, oral medications, and laser therapy for
            effective acne management.
          </li>
          <li>
            <strong>Eczema management</strong>: Care plans tailored to manage
            eczema flare-ups, alleviate symptoms, and prevent future outbreaks.
          </li>
          <li>
            <strong>Psoriasis therapy</strong>: Treatments that focus on
            managing the symptoms of psoriasis, including topical treatments,
            phototherapy, and systemic therapies.
          </li>
          <li>
            <strong>Dermatopathology</strong>: Specialized diagnostic services
            that involve analyzing skin biopsies to accurately diagnose various
            skin disorders.
          </li>
          <li>
            <strong>Laser treatments</strong>: Advanced laser therapies for
            conditions like acne scars, pigmentation disorders, and skin
            resurfacing.
          </li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery with React Bootstrap Carousel */}
        <div className={classes.carouselWrapper}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img1}
                alt="Skin Treatments"
              />
              <Carousel.Caption>
                <h5>Skin Treatments</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img2}
                alt="Experienced Dermatologists"
              />
              <Carousel.Caption>
                <h5>Experienced Dermatologists</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 (Optional, Uncomment if you want to add more images) */}
            {/* <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img3}
                alt="Comprehensive Care"
              />
              <Carousel.Caption>
                <h5>Comprehensive Care</h5>
              </Carousel.Caption>
            </Carousel.Item> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Dermatology;
