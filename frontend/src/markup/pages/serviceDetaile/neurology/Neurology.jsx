/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/neuro/nurology.jpg";
import img2 from "../../../../assets/img/slider/neuro/923530Dr Felke WMichael Neurosurgeon.jpg";
import img3 from "../../../../assets/img/slider/neuro/nurology.jpg";
import classes from "./Neurology.module.css";

const Neurology = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Neurology Department</h1>
        <p>
          Comprehensive care for neurological conditions. The neurology
          department is specialized in the diagnosis and treatment of diseases
          of the nervous system, including stroke, movement problems,
          Parkinsons disease, epilepsy, and neuromuscular disorders. SPH
          provides the finest and most recent healthcare services in managing
          neurological disorders, such as:
        </p>
        <ul>
          <li>Nerve conduction studies (NCS)</li>
          <li>Outpatient follow-up services</li>
          <li>Elective Surgery</li>
          <li>Tumor Surgery</li>
          <li>Pediatric Neurosurgical Care</li>
          <li>Myelomeningocele care</li>
          <li>
            Blink Reflex, Spine Surgery, Repetitive Nerve Stimulation (RNS)
          </li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Carousel for Department Gallery */}
          <div className={classes.departmentGallery}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="Neurology Department"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>State-of-the-Art Facility</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Dr. Felke WMichael Neurosurgeon"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>Expert Neurological Care</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="SPH Neurology Department"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h5>Compassionate Care</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Neurology Services */}
          <div className={classes.neurologyServices} id="services">
            <h4 className={classes.servicesTitle}>Our Services</h4>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>
                Diagnosis and treatment of neurological disorders
              </li>
              <li className={classes.servicesItem}>EEG and EMG services</li>
              <li className={classes.servicesItem}>
                Neurological consultations
              </li>
              <li className={classes.servicesItem}>
                Neuropsychological assessments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neurology;
