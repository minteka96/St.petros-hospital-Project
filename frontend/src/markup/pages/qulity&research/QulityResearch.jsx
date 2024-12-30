/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './QulityResearch.module.css';
import { Carousel } from "react-bootstrap";
import img3 from "../../../assets/img/about/008.jpeg";
import img4 from "../../../assets/img/about/question-signs.jpg";
import img5 from "../../../assets/img/about/elaerning-825x510.jpg";



const QulityResearch = () => {
  return (
    <div
      className="qulity-research-container"
   
    >
      {/* Carousel Section */}
      <div className="carousel-section">
        <Carousel interval={3000} controls={true} indicators={true} fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <div className="carousel-caption-content">
                <h5 className="carousel-title">
                  መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span>
                </h5>
                <h2 className="carousel-subtitle">
                  Our Existence is <span className="d-block">For You</span>
                </h2>
                <a
                  href="#"
                  className="btn btn-danger me-3 carousel-button"
                >
                  Quality & Research Free Training Site
                </a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img4}
              alt="Second slide"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Comprehensive Training for Healthcare Professionals</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img5}
              alt="Third slide"
              style={{ height: "90vh", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>Access Valuable Resources and Improve Quality Standards</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

        <div className={classes.container}>
          <h2 className={classes.heading}>Research Publications and Quality Improvement</h2>
          <p className={classes.description}>
            Discover the latest research, quality improvement frameworks, and best practices in healthcare to support continuous improvement in patient care.
          </p>

          {/* Research Articles Section */}
          <section>
            <h3 className={classes.sectionTitle}>Recent Research Articles</h3>
            <ul className={classes.linkList}>
              <li className={classes.linkListItem}>
                <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  PubMed - Medical Research Database
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://www.ncbi.nlm.nih.gov/pmc/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  NCBI - Full Text Medical Articles
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://www.nejm.org/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  New England Journal of Medicine
                </a>
              </li>
            </ul>
          </section>

          {/* Quality Improvement Tools Section */}
          <section>
            <h3 className={classes.sectionTitle}>Quality Improvement Tools</h3>
            <ul className={classes.linkList}>
              <li className={classes.linkListItem}>
                <a href="https://www.ihi.org/resources/Pages/Tools/default.aspx" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Institute for Healthcare Improvement (IHI) - Quality Tools
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://leanhealthcare.ca/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Lean Healthcare - Quality Improvement Framework
                </a>
              </li>
            </ul>
          </section>

          {/* Guidelines and Best Practices Section */}
          <section>
            <h3 className={classes.sectionTitle}>Guidelines and Best Practices</h3>
            <ul className={classes.linkList}>
              <li className={classes.linkListItem}>
                <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  WHO - Global Health Guidelines
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://www.cdc.gov/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  CDC - Clinical Guidelines
                </a>
              </li>
            </ul>
          </section>

          {/* Case Studies Section */}
          <section>
            <h3 className={classes.sectionTitle}>Case Studies</h3>
            <p className={classes.caseStudyDescription}>
              Explore examples of quality improvement initiatives that have positively impacted patient care.
            </p>
          </section>

          {/* Resources and Training Section */}
          <section>
            <h3 className={classes.sectionTitle}>Resources and Training</h3>
            <ul className={classes.linkList}>
              <li className={classes.linkListItem}>
                <a href="https://www.healthcarenewssite.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Healthcare News and Resources
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://www.coursera.org/courses?query=quality%20improvement%20healthcare" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Quality Improvement Courses on Coursera
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://alison.com/course/medical-office-administration#google_vignette" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Alison - Medical Office Administration
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://www.oshacademy.com/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  OSHAcademy - Healthcare Training
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://online.atingi.org/local/explore?field%5B0%5D=topics&value%5B0%5D=1&field%5B1%5D=languages&value%5B1%5D=2&field%5B2%5D=languages&value%5B2%5D=2" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  Atingi - Online Training Resources
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://medtrain.com.au/courses/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  MedTrain - Healthcare Training Courses
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://training.safetyculture.com/course-collection/10-healthcare-training-courses/" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  SafetyCulture - Healthcare Training Courses
                </a>
              </li>
              <li className={classes.linkListItem}>
                <a href="https://campus.datacamp.com/courses/introduction-to-power-bi/getting-started-with-power-bi?ex=1" target="_blank" rel="noopener noreferrer" className={classes.link}>
                  DataCamp - Power BI Training
                </a>
              </li>
            </ul>
          </section>
        </div>
     
    </div>
  );
};

export default QulityResearch;
