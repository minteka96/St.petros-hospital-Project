/* eslint-disable react-refresh/only-export-components */

/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/ENT/ent.jpg";
import img2 from "../../../../assets/img/slider/ENT/002.jpeg";
import img3 from "../../../../assets/img/slider/ENT/ent.jpg";
import classes from "./ENT.module.css";

const ENT = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <div className={classes.mainContent}>
          {/* Page Title Area */}
          <h1>ENT Department</h1>
          <p>Comprehensive care for ear, nose, and throat conditions.</p>
          <p>
            The ENT department specializes in the diagnosis and treatment of
            diseases related to the ear, nose, and throat, including hearing
            loss, sinus problems, throat disorders, and balance issues. TGH
            provides state-of-the-art medical services in managing ENT
            conditions, such as:
          </p>

          <h3>Key Services at SPH ENT Department:</h3>

          <h4>24 Hours Emergency Care:</h4>
          <p>
            The ENT department offers emergency care for acute ENT conditions,
            such as severe ear infections or respiratory distress, with
            immediate intervention and treatment.
          </p>

          <h4>Tympanometry:</h4>
          <p>
            Tympanometry is used to test the condition of the middle ear and the
            mobility of the eardrum by measuring the response to pressure
            changes.
          </p>

          <h4>Rigid Laryngoscopy:</h4>
          <p>
            This procedure allows for direct visualization of the larynx (voice
            box) and is used to diagnose voice problems, throat conditions, or
            abnormalities.
          </p>

          <h4>Ear Irrigation:</h4>
          <p>
            Ear irrigation is performed to remove earwax buildup that may be
            causing hearing loss or discomfort.
          </p>

          <h4>Tonsillectomy and Adenoidectomy:</h4>
          <p>
            Surgical removal of the tonsils and/or adenoids to treat chronic
            infections or breathing difficulties related to these structures.
          </p>

          <h4>Outpatient Follow-Up Care:</h4>
          <p>
            Patients are provided with comprehensive follow-up care after their
            treatment to ensure proper recovery and long-term health.
          </p>

          <h4>Allergy Testing and Treatment:</h4>
          <p>
            The department offers allergy testing and provides treatments to
            manage symptoms of allergies related to the ear, nose, and throat.
          </p>

          <h4>Commitment to Comprehensive Care:</h4>
          <p>
            SPH is committed to providing holistic care for all ENT patients,
            combining the latest medical treatments with compassionate support
            to ensure optimal outcomes.
          </p>
        </div>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Main Content Area */}
        <div className={classes.contentWrapper}>
          {/* Department Gallery with Bootstrap Carousel */}
          <div className={classes.departmentGallery}>
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <Carousel>
              {/* Slide 1 */}
              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5
                      className="title"
                      style={{ fontSize: "50px", color: "#00796b" }}
                    >
                      <span className="d-block">ENT Care</span>
                    </h5>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5 className="title">
                      <span className="d-block">
                        {/* Advanced Sinus Treatments */}
                      </span>
                    </h5>
                  </div>
                </div>
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <div
                  className={classes.carouselItem}
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "400px",
                  }}
                >
                  <div className="slider-content">
                    <h5
                      className="title"
                      style={{ fontSize: "50px", color: "#00796b" }}
                    >
                      <span className="d-block">ENT Care</span>
                    </h5>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* ENT Services */}
        </div>
      </div>
    </div>
  );
};

export default ENT;
