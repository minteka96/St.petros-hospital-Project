/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/img/slider/dr/drtb.jpg";
import img2 from "../../../../assets/img/slider/dr/mdr1.jpg";
import img3 from "../../../../assets/img/slider/dr/mdr.jpg";
import classes from "./DrTbTreatment.module.css";

const DrTbTreatment = () => {
  return (
    <div className={classes.mainContent}>
      {/* Page Title Area */}
      <div className={classes.pageTitleArea}>
        <h1>DR-TB Department</h1>
        <p>
          Comprehensive care for drug-resistant tuberculosis (DR-TB) patients.
        </p>
        <p>
          The DR-TB department at St. Peter’s Hospital specializes in the
          diagnosis, treatment, and management of drug-resistant forms of
          tuberculosis, which are resistant to first-line anti-TB drugs. The
          department is equipped to handle cases of Multi-Drug Resistant TB
          (MDR-TB) and Extensively Drug-Resistant TB (XDR-TB), supported by a
          dedicated team of specialists and cutting-edge facilities. It provides
          a range of services essential for comprehensive TB care.
        </p>
        <p>
          DR-TB treatment was initiated for the first time in Ethiopia at St.
          Peter’s Hospital in 2001 EC by the FMoH,GHC and other supporting
          partners. Since then, it has served as the national referral center
          for DR-TB treatment, training healthcare workers from across the
          country and providing technical support during the expansion of
          treatment programs to regional centers.
        </p>
        <p>
          St. Peter’s Hospital was the first to use one of the new TB drugs,
          Bedaquiline, and to treat patients with XDR regimens. Currently, it
          provides treatment for pre-XDR, XDR, and other patients with advanced
          drugs such as Bedaquiline and Delamanid.
        </p>
        <p>
          The success of its program has enabled the selection of St. Peter’s
          Hospital as one of the sites for the STREAM trial, an international
          multi-center study investigating various DR-TB treatment options.
        </p>
      </div>

      {/* Department Area */}
      <div className={classes.departmentArea}>
        {/* Department Gallery with Bootstrap Carousel */}
        <div className={classes.contentWrapper}>
          <div className={classes.departmentGallery} id="gallery">
            <h2 className={classes.galleryTitle}>Department Gallery</h2>
            <Carousel>
              {/* Slide 1 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="Drug Resistant TB"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <Carousel.Caption>
                  <h5>Drug-Resistant Tuberculosis Care</h5>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Slide 2 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="MDR-TB Treatment"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <Carousel.Caption>
                  <h5>MDR-TB Treatment</h5>
                </Carousel.Caption>
              </Carousel.Item>

              {/* Slide 3 */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Advanced TB Care"
                  style={{ objectFit: "cover", height: "400px" }}
                />
                <Carousel.Caption>
                  <h5>Advanced Drug-Resistant TB Treatment</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className={classes.additionalInfo}>
          {/* DR-TB Services */}
          <div className={classes.drTbServices}>
            <h2 className={classes.servicesTitle}>Services We Provide</h2>
            <ul className={classes.servicesList}>
              <li className={classes.servicesItem}>
                Drug susceptibility testing
              </li>
              <li className={classes.servicesItem}>
                Second-line anti-TB drug therapy
              </li>
              <li className={classes.servicesItem}>
                Individualized patient care and monitoring
              </li>
              <li className={classes.servicesItem}>
                Comprehensive counseling and psychosocial support
              </li>
              <li className={classes.servicesItem}>
                Outreach programs and community support
              </li>
              <li className={classes.servicesItem}>
                Advanced diagnostic imaging and laboratory facilities
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrTbTreatment;
