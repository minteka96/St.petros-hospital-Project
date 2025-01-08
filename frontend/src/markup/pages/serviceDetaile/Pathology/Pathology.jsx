/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import classes from "./Pathology.module.css"; // Importing modular CSS
import img1 from "../../../../assets/img/slider/lab/lab.jpg";
import img2 from "../../../../assets/img/slider/lab/lab 55.JPG";
import img3 from "../../../../assets/img/slider/lab/lab miro58.JPG";

const Pathology = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Pathology Services</h1>
        <p>Expert diagnosis and management of diseases.</p>
        <p>
          The pathology service is an integral part of the general lab work,
          specializing in the diagnosis of diseases through the examination of
          tissues, cells, and body fluids. We provide comprehensive and advanced
          laboratory services in pathology, including:
        </p>
        <ul>
          <li>Biopsy Services</li>
          <li>Cytopathology</li>
          <li>Fluid Analysis</li>
          <li>FNAC (Fine Needle Aspiration Cytology)</li>
          <li>Microbiology</li>
        </ul>
        <p>
          Our pathology team is committed to delivering accurate diagnoses and
          working closely with medical professionals for optimal patient care.
        </p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery */}
        <div className={classes.departmentGallery}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img1}
                alt="Pathology Laboratory"
              />
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Advanced Equipment"
              />
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Comprehensive Diagnostic Services"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Pathology Services */}
        <div className={classes.pathologyServices}>
          <h4 className={classes.servicesTitle}>Our Services</h4>
          <ul className={classes.servicesList}>
            <li className={classes.servicesItem}>Biopsy and Cytology</li>
            <li className={classes.servicesItem}>Fluid Analysis</li>
            <li className={classes.servicesItem}>
              FNAC (Fine Needle Aspiration Cytology)
            </li>
            <li className={classes.servicesItem}>Microbiology Testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pathology;
