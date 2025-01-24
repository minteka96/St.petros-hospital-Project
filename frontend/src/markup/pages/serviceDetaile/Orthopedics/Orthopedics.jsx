/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import img1 from "../../../../assets/img/slider/ortopedics/ortopedics.jpg";
import img2 from "../../../../assets/img/slider/surgical/surgical3.jpg";
import img3 from "../../../../assets/img/slider/surgical/surgical.jpg";
import classes from "./Orthopedics.module.css";

const Orthopedics = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Section */}
      <div className={`${classes.pageTitleArea} bg-light py-5 text-center`}>
        <Container>
  
        <div className={classes.pageTitleArea}>
  <h1>Orthopedics Services</h1>
  <p>Comprehensive care for musculoskeletal conditions.</p>
  <p>
    The orthopedics department specializes in the diagnosis and treatment of conditions affecting the musculoskeletal system,
    including fractures, joint pain, arthritis, sports injuries, and spinal disorders. We provide comprehensive care in areas such as:
  </p>
  <ul>
    <li>Outpatient follow-up service</li>
    <li>Surgical and non-surgical fracture management and bone repair</li>
    <li>X-rays and imaging studies</li>
    <li>Joint injections</li>
    <li>Physical therapy orders related to injuries</li>
    <li>Surgical interventions</li>
    <li>Fracture repair</li>
    <li>Partial hip replacement surgery</li>
    <li>Sports medicine and injury prevention</li>
  </ul>
  <p>
    Our orthopedic team is dedicated to providing the highest standard of care and working closely with patients for the best possible recovery outcomes.
  </p>
</div>

        </Container>
      </div>

      {/* Department Gallery Section */}
      <div className="py-5 bg-white">
        <Container>
          <h2 className={classes.galleryTitle}>Department Gallery</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img1}
                alt="Orthopedics Department"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">Advanced Orthopedics Department</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img2}
                alt="Orthopedic Surgeon"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">Expert Orthopedic Surgeons</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img3}
                alt="Rehabilitation Center"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">Comprehensive Rehabilitation Services</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

    
    </div>
  );
};

export default Orthopedics;
