import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS

import doctor1 from "../../../assets/img/photos/st.peter9jpg copy.png";

function Doc() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="feature-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              <h2 className="title">
                <span style={{ color: "#f26524" }}>Why Choose</span> Kidus
                Petros Hospital
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-8">
            <div
              className="row icon-box-style"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              {[
                {
                  icon: "icofont-prescription",
                  title: "Medical Counseling",
                  description:
                    "We provide personalized medical counseling services to help you make informed decisions about your health.",
                },
                {
                  icon: "icofont-microscope",
                  title: "Medical Facilities",
                  description:
                    "Kidus Petros Hospital is equipped with state-of-the-art medical technology and modern facilities.",
                },
                {
                  icon: "icofont-ambulance-cross",
                  title: "24 Hours Services",
                  description:
                    "Our hospital provides 24-hour emergency services and round-the-clock patient care.",
                },
                {
                  icon: "icofont-blood",
                  title: "Personal Services",
                  description:
                    "We take a patient-centered approach to healthcare, offering tailored services that meet your needs.",
                },
                {
                  icon: "icofont-paralysis-disability",
                  title: "Dedicated Patient Care",
                  description:
                    "Our team is committed to delivering compassionate and comprehensive care to all patients.",
                },
              ].map((service, index) => (
                <div className="col-md-6 mb-4 " key={index}>
                  <div className="icon-box-item p-4 bg-light border rounded flex-1 h-100">
                    <div className="color1 icon fs-2 mb-3">
                      <i className={service.icon} style={{ color: "#f26524" }}></i>
                    </div>
                    <div className="content">
                      <h5 className="title fw-bold">{service.title}</h5>
                      <p className="text-muted">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="thumb position-absolute"
        data-aos="fade-left"
        data-aos-duration="1500"
        style={{ top: 0, right: 0 }}
      >
        <img src={doctor1} alt="Kidus Petros Hospital" className="img-fluid" />
      </div>
    </section>
  );
}

export default Doc;
