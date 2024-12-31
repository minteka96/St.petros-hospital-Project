/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/pharmacy/pharmacy.jpg"; // Replace with relevant ART department images
import img2 from "../../../../assets/img/about/006.webp";
import img3 from "../../../../assets/img/slider/derma/001.avif";
import classes from "./ART.module.css";

const ART = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <h1>Anti-Retroviral Therapy (ART)</h1>
      <p>Comprehensive care for individuals living with HIV.</p>
      <p>
        The ART department specializes in the diagnosis and treatment of
        HIV/AIDS through effective anti-retroviral therapies. The SPH HIV Care
        Center was launched in 1998, and free ART services started in 2006 EC.
        Since its inception, approximately 8,000 HIV-infected clients have been
        enrolled in the ART clinic, with 2,448 currently receiving ART. SPH
        provides the latest healthcare services for managing HIV, ensuring that
        patients receive comprehensive care, support, and access to the
        following services:
      </p>

      <h2>Key Services at SPH HIV Care Center:</h2>
      <h4>HIV Testing and Counseling:</h4>
      <p>
        SPH provides HIV testing and counseling services, helping individuals
        understand their HIV status and supporting them in making informed
        decisions about their health and treatment options.
      </p>
      <h4>Antiretroviral Therapy (ART):</h4>
      <p>
        The center offers ART to people living with HIV, which helps suppress
        the virus, improve immune function, and prevent the transmission of HIV.
        ART is provided free of charge to eligible patients.
      </p>
      <h4>Regular Monitoring (CD4 and Viral Load Testing):</h4>
      <p>
        Regular monitoring through CD4 count and viral load testing is crucial
        for assessing the immune system’s health and tracking the effectiveness
        of ART. This allows healthcare providers to adjust treatment as
        necessary for optimal results.
      </p>
      <h4>Adherence Support Programs:</h4>
      <p>
        SPH offers adherence support programs to ensure the effectiveness of
        ART. These programs help patients stay consistent with their medication
        regimens, which is essential for viral suppression and overall health
        improvement.
      </p>
      <h4>Prevention of Mother-to-Child Transmission (PMTCT):</h4>
      <p>
        SPH provides services aimed at preventing the transmission of HIV from
        mother to child during pregnancy, labor, and breastfeeding. This
        includes the administration of ART to pregnant women living with HIV to
        protect both the mother and the baby.
      </p>

      {/* Department Gallery using React Bootstrap Carousel */}
      <div className={classes.departmentArea}>
        <div className={classes.contentWrapper}>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              ></div>
              <Carousel.Caption>
                <h5>HIV Care</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              ></div>
              <Carousel.Caption>
                <h5>ART Services</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                }}
              ></div>
              <Carousel.Caption>
                <h5>Support Programs</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ART;
