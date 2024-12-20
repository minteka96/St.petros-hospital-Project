/* eslint-disable no-unused-vars */

import img1 from "../../../../assets/img/slider/ortopedics/ortopedics.jpg";
import img2 from "../../../../assets/img/team/02.jpg";
import img3 from "../../../../assets/img/team/03.jpg";
import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import classes from "./Orthopedics.module.css";

const Orthopedics = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Section */}
      <div className={`${classes.pageTitleArea} bg-light py-5 text-center`}>
        <Container>
          <h1 className="text-primary">Orthopedics Department</h1>
          <p className="lead text-muted">
            Comprehensive care for musculoskeletal conditions.
          </p>
          <p className="text-secondary">
            The orthopedics department specializes in the diagnosis and
            treatment of conditions affecting the musculoskeletal system,
            including fractures, joint pain, arthritis, sports injuries, and
            spinal disorders. SPH provides the finest and most recent healthcare
            services in managing orthopedic disorders, such as:
          </p>
          <ListGroup variant="flush" className="text-start mx-auto w-75">
            <ListGroup.Item>Outpatient follow-up service</ListGroup.Item>
            <ListGroup.Item>
              Surgical and non-surgical fracture management and bone repair
            </ListGroup.Item>
            <ListGroup.Item>X-rays and imaging studies</ListGroup.Item>
            <ListGroup.Item>Joint injections</ListGroup.Item>
            <ListGroup.Item>
              Physical therapy orders related to injuries
            </ListGroup.Item>
            <ListGroup.Item>Surgical interventions</ListGroup.Item>
            <ListGroup.Item>Fracture repair</ListGroup.Item>
            <ListGroup.Item>Partial hip replacement surgery</ListGroup.Item>
            <ListGroup.Item>
              Sports medicine and injury prevention
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </div>

      {/* Department Gallery Section */}
      <div className="py-5 bg-white">
        <Container>
          <h2 className="text-center text-primary mb-4">Department Gallery</h2>
          <Carousel>
            {/* Slide 1 */}
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img1}
                alt="Orthopedics Department"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">
                  Advanced Orthopedics Department
                </h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img2}
                alt="Orthopedic Surgeon"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">
                  Expert Orthopedic Surgeons
                </h5>
              </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item>
              <img
                className="d-block w-100 rounded shadow-lg"
                src={img3}
                alt="Rehabilitation Center"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="bg-dark text-white p-2 rounded">
                  Comprehensive Rehabilitation Services
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      {/* Our Services Section */}
      <div className="py-5 bg-light" id="services">
        <Container>
          <h4 className="text-center text-primary mb-4">Our Services</h4>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Outpatient Follow-Up Service</Card.Title>
                  <Card.Text>
                    Regular checkups and medical care for orthopedic patients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Fracture Management</Card.Title>
                  <Card.Text>
                    Surgical and non-surgical fracture treatments for rapid
                    recovery.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Partial Hip Replacement Surgery</Card.Title>
                  <Card.Text>
                    Advanced surgical solutions for hip joint replacement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Sports Medicine</Card.Title>
                  <Card.Text>
                    Injury prevention and treatment tailored for athletes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title>Physical Therapy</Card.Title>
                  <Card.Text>
                    Comprehensive rehabilitation programs for recovery.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Orthopedics;
