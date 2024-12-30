/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/imaging/FB_IMG_1729208139176.jpg";
import img2 from "../../../../assets/img/slider/imaging/image2.jpg";
import img3 from "../../../../assets/img/slider/imaging/imaging-1.png";
import classes from "./Imaging.module.css";

const Imaging = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>Imaging Department</h1>
        <p>Advanced diagnostic imaging services.</p>
        <p>
          The imaging department specializes in a wide range of diagnostic imaging services, including X-rays, MRIs, CT scans, and ultrasounds. TGH provides the latest technology and expertise in imaging to ensure accurate diagnosis and effective treatment planning, offering services such as:
        </p>
        <ul>
          <li>X-rays</li>
          <li>Magnetic Resonance Imaging (MRI)</li>
          <li>Computed Tomography (CT) scans</li>
          <li>Ultrasounds</li>
          <li>Mammography</li>
        </ul>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery with React Bootstrap Carousel */}
        <div className={classes.carouselWrapper}>
          <h2 className={classes.galleryTitle}>Imaging Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img1}
                alt="Advanced CT Scans"
              />
              <Carousel.Caption>
                <h5>Advanced CT Scans</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img2}
                alt="MRI Technology"
              />
              <Carousel.Caption>
                <h5>MRI Technology</h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className={`d-block w-100 ${classes.carouselImage}`}
                src={img3}
                alt="X-ray Machines"
              />
              <Carousel.Caption>
                <h5>X-ray Machines</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
s
      {/* Imaging Services */}
      <div className={classes.imagingService}>
        <h4 className={classes.servicesTitle}>Our Services</h4>
        <ul className={classes.servicesList}>
          <li className={classes.servicesItem}>Digital X-ray services</li>
          <li className={classes.servicesItem}>CT scans for advanced diagnostics</li>
          <li className={classes.servicesItem}>MRI scans for detailed internal imaging</li>
          <li className={classes.servicesItem}>Ultrasound imaging for various medical needs</li>
        </ul>
      </div>
    </div>
  );
};

export default Imaging;
