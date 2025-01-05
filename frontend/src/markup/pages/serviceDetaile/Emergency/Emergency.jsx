/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/Emergancy/emergancy2.jpg";
import img2 from "../../../../assets/img/slider/Emergancy/emergancy.jpg";
import img3 from "../../../../assets/img/slider/Emergancy/emergancy2.jpg"; // Uncomment this if you want to add more images
import classes from "./Emergency.module.css";

const Emergency = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Emergency Department</h1>
        <p>Immediate care for urgent medical conditions.</p>
        <p>
          The emergency department is dedicated to providing fast and effective treatment for acute medical issues. Our team is equipped to handle a wide range of emergencies, including:
        </p>
        <ul>
          <li>Trauma and injury care</li>
          <li>Cardiac emergencies</li>
          <li>Stroke management</li>
          <li>Respiratory distress</li>
          <li>Severe allergic reactions</li>
          <li>Critical care support</li>
        </ul>

        <h3>Major Activities at the Emergency Room:</h3>

        <h4>Accepting and Triaging All Patients (With or Without Referral):</h4>
        <p>
          The ER is open to all patients in need of urgent medical attention. Whether or not a patient has a referral, the ER team quickly assesses the severity of the condition through triage, prioritizing care based on the urgency of the situation.
        </p>

        <h4>Providing Emergency and Trauma Care:</h4>
        <p>
          The department is fully equipped to handle various medical emergencies, including trauma cases, heart attacks, strokes, and other life-threatening conditions. The ER team is trained to stabilize patients, manage acute injuries, and provide immediate care to prevent further complications.
        </p>

        <h4>Monitoring and Disposing of Patients Within 24 Hours:</h4>
        <p>
          Patients admitted to the ER are continuously monitored to ensure their conditions are well-managed. The goal is to provide appropriate care and, whenever possible, discharge patients or transfer them to a specialized unit within 24 hours.
        </p>

        <h4>Performing Emergency Surgeries and Procedures:</h4>
        <p>
          The department is equipped to perform emergency surgeries and procedures on-site. Whether it’s a life-saving surgery or urgent intervention, the team works quickly to address critical situations, including trauma, internal bleeding, and other emergency conditions that require immediate surgical attention.
        </p>

        <h4>Providing Psychiatric Emergency Services:</h4>
        <p>
          In addition to physical medical emergencies, the ER also provides care for psychiatric emergencies. This includes assessments for mental health crises such as severe anxiety, depression, psychosis, or self-harm. The team works with psychiatric specialists to stabilize and provide the necessary care for individuals in emotional distress.
        </p>

        <h3>Additional Features of the SPH Emergency Department:</h3>

        <h4>Stand-by Ambulances:</h4>
        <p>
          SPH ensures that ambulance services are available around the clock to transport patients quickly to the ER when needed, whether for routine emergencies or critical situations.
        </p>

        <h4>Special Emergency Staircase and Accessible ER:</h4>
        <p>
          The hospital has designed an emergency staircase and access points that are easy for patients to reach, even in challenging conditions. This ensures smooth transportation of patients with mobility issues or critical emergencies.
        </p>

        <p>
          By coordinating efficient care, providing quick assessments, and having a dedicated team of specialists, the SPH Emergency Department offers immediate and comprehensive services to patients in need of urgent medical attention. The department strives to stabilize patients, manage their conditions effectively, and ensure prompt transition to the appropriate care levels within 24 hours.
        </p>
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
                alt="Trauma Care"
              />
              <Carousel.Caption>
                <h5>Trauma Care</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img2}
                alt="Resuscitation"
              />
              <Carousel.Caption>
                <h5>Resuscitation</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 (Optional) */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img3}
                alt="Other Emergency Services"
              />
              <Carousel.Caption>
                <h5>Other Emergency Services</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
