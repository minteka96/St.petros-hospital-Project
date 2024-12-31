/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/img/about/001.jpg';
import img2 from '../../../assets/img/about/007.png';
import img3 from '../../../assets/img/about/006.webp';
import img4 from '../../../assets/img/about/004 dr.webp';
import img7 from '../../../assets/img/about/002.jpg';
import './About.css'; // Ensure this path is correct

const AboutUs = () => {


  return (
    <div className="wrapper home-default-wrapper">
      <main className="main-content site-wrapper-reveal">
        <section className="hero-slider">
          <div className="container-fluid px-0">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-content">
                          <h5 className="title animated delay2">መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span></h5>
                          <h2 className="title animated delay2">Our Existence is <span className="d-block">For You</span></h2>
                          <a href="#" className="btn btn-danger w-auto px-4 py-2">about us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="post-details-content">
                  <h5 className="title" style={{ color: 'lightseagreen' }}>Introduction</h5>
                  <p>St. Peter Hospital boasts a rich history dating back to Sene 23, 1953 EC, when it was established in Mesalemiya...</p>
                  <p>The hospital served around 250 patients daily and extended its reach through an outreach wing equipped with a portable X-ray machine...</p>
                  <p>In 2005 EC, St. Peter Hospital embarked on a significant expansion of its specialty services...</p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <img src={img2} alt="St. Peter Hospital" className="img-fluid rounded shadow-sm" />
              </div>
            </div>

            <blockquote className="blockquote-style mt-5">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <h2 className="fs-1">History & Expansion</h2>
                  <p>St. Peter Hospital became a national leader in multidrug-resistant tuberculosis...</p>
                </div>

                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Milestones & Developments</h2>
                  <p>In 2008 EC, during Ato Yakob Seman's tenure as Chief Executive Officer...</p>
                </div>
              </div>
            </blockquote>

            <blockquote className="blockquote-style mt-5">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Vision</h2>
                  <p>By 2022, we envision transforming the hospital into a center of excellence...</p>
                </div>

                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Mission</h2>
                  <p>St. Peter Hospital is committed to providing high-quality, affordable...</p>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  )
}


export default AboutUs;
