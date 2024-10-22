/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/img/about/001.jpg';
import img2 from '../../../assets/img/about/007.png';
import img3 from '../../../assets/img/about/006.webp';
import img4 from '../../../assets/img/about/004 dr.webp';
// import img5 from '../../../assets/img/about/a9581c63-9213-4c0f-8185-6cd9fd2b3c95.jpeg';
import img6 from '../../../assets/img/about/003.jpeg';
import img7 from '../../../assets/img/about/002.jpg';

const About = () => {
  return (
    <div className="wrapper home-default-wrapper">
      <main className="main-content site-wrapper-reveal">
        <section className="hero-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* Swiper Slide 1 */}
              <div
                className="swiper-slide"
                style={{ backgroundImage: `url(${img3})` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-content">
                        <h5 className="title animated delay2">
                          መኖራችን
                          <span className="d-block">ለእርስዎ ነዉ!</span>
                        </h5>
                        <h2 className="title animated delay2">
                          Our Existence is
                          <span className="d-block">For You</span>
                        </h2>
                        <a href="#" className="btn btn-danger me-3 animated delay1">
                          about us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swiper Slide 2 */}
              <div
                className="swiper-slide"
                style={{ backgroundImage: `url(${img4})` }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-content">
                        <h5 className="title animated delay2">
                          መኖራችን
                          <span className="d-block">ለእርስዎ ነዉ!</span>
                        </h5>
                        <h2 className="title animated delay2">
                          Our Existence is
                          <span className="d-block">For You</span>
                        </h2>
                        <a href="#" className="btn btn-danger me-3 animated delay1">
                          about us
                        </a>
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
                <p className="text-pra">
                  We make digital products and help organizations big and small connect with their audience.
                </p>

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
                            <img src={img2} alt="img2" />
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

                        <div className="widget-blog-post">
                          <ul>
                            <li>
                              <div className="thumb">
                                <img src={img6} alt="Related Post" /> 
                              </div>
                              <div className="content">
                                <a href="blog-details.html"></a>
                              </div>
                            </li>
                            <li>
                              <div className="thumb">
                                {/* <img src={img2} alt="Related Post" /> */}
                              </div>
                              <div className="content">
                                <a href="blog-details.html">Another Related Post</a>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="widget-tags tags-style2">
                          <ul>
                            <li><a href="#/">Structure</a></li>
                            <li><a href="#/">Envato</a></li>
                            <li><a href="#/">Premium</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service List */}
      {/* Service List with 3 Column Layout */}
      <p style={{ fontSize: 'x-large', color: 'lightseagreen',textAlign: 'center' } }>Our Services</p>
      <div className="service-list" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>

          <ul style={{ fontSize: 'larger', listStyleType: 'none', padding: 0,color:'rgb(58, 199, 199)' }}>
            <li>Psychiatry</li>
            <li>Cardiology</li>
        
            <li>pharmacy</li>
            <li>Neurology</li>
        
            <li>Neonatology</li>
            <li>ENT</li>

          </ul>
        </div>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <ul style={{ fontSize: 'larger', listStyleType: 'none', padding: 0 ,color:'rgb(58, 199, 199)'}}>
            <li>MCH</li>
            <li>Pediatrics</li>
            <li>imaging</li>
            <li>Urology</li>
            <li>lab</li>
            
            <li>Internal Medicine</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul style={{ fontSize: 'larger', listStyleType: 'none', padding: 0,color:'rgb(58, 199, 199)' }}>
            <li>Orthopedics</li>
            <li>General Surgery</li>
            <li>Orthopedics</li>
            <li>Dermatology</li>
            <li>Toxicology</li>
            <li>Pathology</li>
          </ul>
        </div>
      </div>

      {/* Image Display after Service List */}
      <img
        style={{
          maxWidth: '100%',
          height: 'auto',
          border: '0px',
          marginTop: '20px' // Optional: Add some margin for spacing
        }}
        src={img7}
        alt="Hospital Services"
      />
    </div>
     </div>
  
         </div>
          </div>
        </section>

       
      </main>
       <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center">© 2024 group2 team . All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
    
  );
};

export default About;
