/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/lab/lab miro58.JPG";
import img2 from "../../../../assets/img/slider/lab/lab3.jpg";
import classes from "./GeneralLab.module.css";

const GeneralLab = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>General Laboratory</h1>
        <p>
          Comprehensive diagnostic services for accurate and reliable medical
          services.
        </p>
        <p>
          The hospital laboratory department is equipped to provide a wide range
          of diagnostic tests and services, supporting the diagnosis and
          treatment of various medical conditions. The laboratory is accredited
          by ISO 15189 international standards in two scopes (AFB and Gene
          X-pert Test). The laboratory services include the following:
        </p>
        <ul>
          <li>Hematology & Serological Testing</li>
          <li>Blood Chemistry & Hormonal Analysis</li>
          <li>Clinical Bacteriology Testing</li>
          <li>Pathology Examination</li>
          <li>Parasitology & Urinalysis Testing</li>
          <li>
            TB Diagnostic and Follow-up Testing (AFB, TB Culture, GenExpert,
            DST)
          </li>
          <li>Blood Bank Service</li>
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
                alt="Advanced Equipment"
              />
              <Carousel.Caption>
                <h5>Advanced Equipment</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img2}
                alt="Blood Tests"
              />
              <Carousel.Caption>
                <h5>Blood Tests</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default GeneralLab;
