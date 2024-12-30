/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/Icu/ICU.jpg";
import img2 from "../../../../assets/img/slider/ICU/ICU2.jpg";
import img3 from "../../../../assets/img/slider/surgical/surgical26.jpg"; // Uncomment this if you want to add more images
import classes from "./ICU.module.css";

const ICU = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Intensive Care Unit (ICU)</h1>
        <p>Critical care for patients with severe or life-threatening conditions.</p>
        <p>
          The ICU provides intensive treatment and monitoring for patients with serious medical conditions. Our team of skilled doctors, nurses, and specialists are dedicated to providing the highest level of care for patients in critical condition, including those recovering from surgeries, heart attacks, strokes, and other life-threatening illnesses.
        </p>

        <h3>Key Services Provided in the ICU:</h3>

        <h4>24/7 Monitoring and Support:</h4>
        <p>
          Our ICU is equipped with the latest technology for continuous monitoring of vital signs such as heart rate, blood pressure, oxygen levels, and respiratory status. Our healthcare team is available around the clock to respond to any sudden changes in a patients condition.
        </p>

        <h4>Advanced Respiratory Care:</h4>
        <p>
          The ICU is fully equipped to provide advanced respiratory support, including mechanical ventilation, oxygen therapy, and other interventions for patients experiencing respiratory failure or distress.
        </p>

        <h4>Post-Surgical Recovery:</h4>
        <p>
          Patients recovering from major surgeries or medical procedures are closely monitored in the ICU to ensure they remain stable, receive pain management, and recover optimally.
        </p>

        <h4>Critical Care for Cardiac Patients:</h4>
        <p>
          The ICU provides immediate care for patients experiencing heart attacks, arrhythmias, or other serious cardiac issues. Our cardiac specialists provide prompt intervention and support to stabilize the patient.
        </p>

        <h4>Neurological Care:</h4>
        <p>
          Our ICU team is skilled in providing care for patients with neurological conditions such as strokes, brain injuries, and seizures. We offer continuous monitoring and interventions to prevent further complications and promote recovery.
        </p>

        <h3>Additional Features of the ICU:</h3>

        <h4>Infection Control:</h4>
        <p>
          Strict infection control protocols are followed to prevent the spread of infections within the ICU. We take every precaution to ensure patient safety and minimize the risk of hospital-acquired infections.
        </p>

        <h4>Family Support:</h4>
        <p>
          We understand that having a loved one in the ICU can be a stressful experience. Our staff is committed to supporting families and keeping them informed about the patients condition. We offer resources for emotional and psychological support as well.
        </p>

        <p>
          The ICU is a specialized area of the hospital designed to provide the highest level of care for patients in critical conditions. By utilizing cutting-edge technology and a dedicated team of experts, we aim to provide patients with the best possible chance for recovery.
        </p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery with React Bootstrap Carousel */}
        <div className={classes.carouselWrapper}>
          <h2 className={classes.galleryTitle}>ICU Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img1}
                alt="ICU Patient Monitoring"
              />
              <Carousel.Caption>
                <h5>ICU Patient Monitoring</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img2}
                alt="Advanced Respiratory Care"
              />
              <Carousel.Caption>
                <h5>Advanced Respiratory Care</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 (Optional) */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img3}
                alt="Cardiac Care in ICU"
              />
              <Carousel.Caption>
                <h5>Cardiac Care in ICU</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ICU;
