/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img2 from "../../../../assets/img/banner/IMG_20241121_042453_816.jpg";
import img3 from "../../../../assets/img/banner/14.jpg";
import classes from "./Psychiatric.module.css";

const Psychiatric = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Psychiatric Department</h1>
        <p>Expert care for mental health and psychiatric disorders.</p>
        <p>
          The psychiatric department at SPH specializes in the diagnosis,
          treatment, and management of various mental health conditions,
          including: Anxiety, <br /> Depression, Bipolar Disorder,
          Schizophrenia, Substance Use Disorder, Dementia, Sleep Disorders,
          Sexual Disorders, and Other Psychiatric Disorders
        </p>
        <h3>Key Services in the Psychiatric Department:</h3>
        <h4>Inpatient and Outpatient Services:</h4>
        <p>
          SPH provides both inpatient and outpatient services, offering
          comprehensive care for individuals who require hospitalization and
          those who can be treated on an outpatient basis. Our inpatient units
          provide a supportive and therapeutic environment for patients in
          crisis, while outpatient services offer ongoing care and support for
          long-term treatment.
        </p>
        <h4>Medication Management:</h4>
        <p>
          Medication management is an essential part of treating many
          psychiatric disorders. Our team of psychiatrists and healthcare
          providers work closely <br /> with patients to prescribe and monitor
          the effectiveness of psychiatric medications, ensuring that patients
          receive the right treatment for their condition.
        </p>
        <h4>Psychoeducation:</h4>
        <p>
          Psychoeducation plays a key role in helping patients and their
          families understand mental health conditions. We provide educational
          resources, counseling, and support to help individuals manage their
          conditions more effectively.
        </p>
        <h4>Psychotherapy:</h4>
        <p>
          SPH offers a variety of psychotherapy services, including Cognitive
          Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and{" "}
          <br /> other therapeutic approaches to help individuals cope with
          their psychiatric conditions and improve their quality of life.
        </p>
        <h4>Health Education:</h4>
        <p>
          Health education is a critical component of treatment. SPH educates
          patients and the community about mental health awareness, <br /> and
          the importance of seeking professional help when needed.
        </p>
        <h3>Commitment to Mental Health Care:</h3>
        <p>
          SPH is dedicated to providing the finest and most up-to-date
          healthcare services for managing psychiatric conditions. Our team of
          experienced <br /> psychiatrists, psychologists, therapists, and
          support staff work together to ensure patients receive compassionate
          and effective care.
        </p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          {/* Department Gallery with React Bootstrap Carousel */}
          <Carousel className={classes.departmentGallery}>
            {/* Gallery Slide for Medication Management */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img2}
                alt="Medication Management"
              />
              <Carousel.Caption>
                <p
                  className={`${classes.sliderTitle} ${classes.medicationManagement}`}
                >
                  Medication Management
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Gallery Slide for Counseling & Support */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img3}
                alt="Counseling & Support"
              />
              <Carousel.Caption>
                <p className={`${classes.sliderTitle} ${classes.counseling}`}>
                  Counseling & Support
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Psychiatric;
