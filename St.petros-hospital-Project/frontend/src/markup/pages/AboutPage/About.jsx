/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/img/about/001.jpg';
import img2 from '../../../assets/img/about/007.png';
import img3 from '../../../assets/img/about/006.webp';
import img4 from '../../../assets/img/about/004 dr.webp';
import img6 from '../../../assets/img/about/004 dr.webp';
import img7 from '../../../assets/img/about/002.jpg';
import './About.css'; // Ensure this path is correct

const AboutUs = () => {
  // const [yearsInService, setYearsInService] = useState(0);
  // const [departments, setDepartments] = useState(0);
  // const [healthProfessionals, setHealthProfessionals] = useState(0);
  // const [supportiveStaff, setSupportiveStaff] = useState(0);

  // const countUp = (target, setter, duration) => {
  //   let start = 0;
  //   const increment = Math.ceil(target / (duration / 100));
    
  //   const interval = setInterval(() => {
  //     if (start < target) {
  //       start += increment;
  //       setter(Math.min(start, target));
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 100);
  // };

  // useEffect(() => {
  //   countUp(64, setYearsInService, 2000);
  //   countUp(21, setDepartments, 2000);
  //   countUp(1500, setHealthProfessionals, 2000);
  //   countUp(300, setSupportiveStaff, 2000);
  // }, []);

  return (
    <div className="wrapper home-default-wrapper">
      <main className="main-content site-wrapper-reveal">
        <section className="hero-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Swiper Slide 1 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-content">
                        <h5 className="title animated delay2">መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span></h5>
                        <h2 className="title animated delay2">Our Existence is <span className="d-block">For You</span></h2>
                        <a href="#" className="btn btn-danger me-3 animated delay1">about us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swiper Slide 2 */}
              <div className="swiper-slide" style={{ backgroundImage: `url(${img4})` }}>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-content">
                        <h5 className="title animated delay2">መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span></h5>
                        <h2 className="title animated delay2">Our Existence is <span className="d-block">For You</span></h2>
                        <a href="#" className="btn btn-danger me-3 animated delay1">about us</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-button-prev">
              <i className="icofont-arrow-left"></i>
            </div>
            <div className="swiper-button-next">
              <i className="icofont-arrow-right"></i>
            </div>
          </div>
        </section>

        <section className="about-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-pra">We make digital products and help organizations big and small connect with their audience.</p>
                <div className="service-list-content">
                  <h4 className="title">Services</h4>
                  <p className="text-block">
                    It was a big, round room with a high arched roof, and the walls and ceiling and floor were covered with large emeralds set closely together. 
                    There were no windows or doors, only an opening in the ceiling, and this led to the sky. This unusual room was the council chamber of the city, 
                    where the king and his ministers sat and discussed the affairs of state.
                  </p>

                  {/* Introduction and Related Posts Layout */}
                  <div className="row">
                    {/* Introduction Section */}
                    <div className="col-md-8">
                      <div className="post-details-content">
                        <div className="post-details-body">
                          <div className="content">
                            <h5 className="title" style={{ color: 'lightseagreen' }}>Introduction</h5>
                            <div className="meta">
                              <a className="category" href="blog.html">news</a>
                              <span>-</span> December 14th, 1953 by <a className="author" href="blog.html">Admin</a>
                            </div>
                            <p>
                              Kidus Petros Hospital was established on Sene 23, 1953 EC, in Mesalemiya as a TB Demonstration and Training Center. 
                              Originally, it focused on the study and treatment of tuberculosis and other infectious diseases, offering much-needed 
                              medical education to the community. Over the years, the hospital expanded its services to cover more health conditions 
                              and developed into a renowned medical institution.
                            </p>
                            <img src={img2} alt="Kidus Petros Hospital" />
                            <h4>Hospital Overview</h4>
                            <p>
                              In 1992 EC, TB treatment was decentralized, and new facilities were added to accommodate other infectious diseases 
                              and medical needs. In 1995 EC, a five-year strategic plan was developed to enhance the hospitals capacity in 
                              providing high-quality medical services to a growing population. The hospital became a cornerstone of community health 
                              and research in the region.
                            </p>
                            <blockquote className="blockquote-style">
                              <div className="row">
                                <div className="col-md-6">
                                  <h2 style={{ fontSize: 'xx-large' }}>Our Vision (ራዕይ)</h2>
                                  <p>
                                    By 2022, we envision transforming the hospital into a center of excellence for research, education, and clinical care, 
                                    dedicated to improving health outcomes and enhancing service delivery for the community.
                                  </p>
                                </div>
                                <div className="col-md-6">
                                  <h2 style={{ fontSize: 'xx-large' }}>Our Mission (ተልዕኮ)</h2>
                                  <p>
                                    Our mission is to foster excellence in healthcare through the prevention of communicable diseases, 
                                    education, research, and responsive health services, contributing to the overall well-being of the community.
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Related Posts Section */}
                    <div className="col-md-4">
                      <div className="related-post">
                        <h2 className="title">
                          <span>Related</span> Posts
                        </h2>
                        <div className="post-items-style3">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="post-item">
                                <div className="thumb">
                                  <a href="blog-details.html">
                                    <img src={img1} alt="Related Post 1" />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="post-item">
                                <div className="thumb">
                                  <a href="blog-details.html">
                                    <img src={img2} alt="Related Post 2" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Statistics Section */}
                        {/* <div className="statistics-section">
                          <h5 className="title">Currentiy number of staff and departments Statistics</h5>
                          <div className="statistics">
                            <div className="stat-item">
                              <h3 className="count">{yearsInService}</h3>
                              <p>Years in Service</p>
                            </div>
                            <div className="stat-item">
                              <h3 className="count">{departments}</h3>
                              <p>Departments</p>
                            </div>
                            <div className="stat-item">
                              <h3 className="count">{healthProfessionals}</h3>
                              <p>Health Professionals</p>
                            </div>
                            <div className="stat-item">
                              <h3 className="count">{supportiveStaff}</h3>
                              <p>Supportive Staff</p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
