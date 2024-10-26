/* eslint-disable no-unused-vars */
// ServiceDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import MCH from './mch/MCH';
import Cardiology from './cardac/Cardiology';
import Neurology from './neurology/Neurology';
import '../../../assets/css/swiper.min.css';
import { Outlet } from 'react-router-dom';
import ENT from './ENT/ENT';

function ServiceDetail() {
  return (
    <>
      <main className="main-content site-wrapper-reveal">
        <div className="page-title-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content">
                  <div className="bread-crumbs">
                    <a href="/">Home<span className="breadcrumb-sep">/</span></a>
                    <a href="/">Departments<span className="breadcrumb-sep">/</span></a>
                    <span className=""></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="department-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="department-wrpp">
                  <div className="sidebar-wrapper">
                    <div className="widget-item">
                      <h4 className="widget-title">list of departments</h4>
                      <div className="widget-side-nav">
                        <ul>
                          <li><Link to="art">ART</Link></li>
                          <li><Link to="cardiology">Cardiology</Link></li>
                          <li><Link to="neurology">Neurology</Link></li>
                          <li><Link to="mch">MCH</Link></li>
                            <li><Link to="dermatology">Dermatology</Link></li>
                          <li><Link to="orthopedics">Orthopedics</Link></li>
                            <li><Link to="dr-tb-treatment">DrTbTreatment</Link></li>
                             <li><Link to="pediatrics">Pediatrics</Link></li>
                             <li><Link to="ent">ENT</Link></li>
                              <li><Link to="medical">Medical</Link></li>
                              <li><Link to="toxicology">Toxicology</Link></li>
                              <li><Link to="surgery">Surgery</Link></li>
                              <li><Link to="urology">Urology</Link></li>
                              <li><Link to="pathology">Pathology</Link></li>
                              <li><Link to="psychiatric">Psychiatric</Link></li>
                              <li><Link to="generallab">GeneralLab</Link></li>

                              <li><Link to="pharmacy">Pharmacy</Link></li>
                              
                              <li><Link to="dental">Dental</Link></li>
                                 <li><Link to="icu">ICU</Link></li>
                                <li><Link to="emergency">Emergency</Link></li>
                                  <li><Link to="imaging">Imaging</Link></li>
                          {/* <li><Link to="/urology">Urology</Link></li> */}
                        </ul>
                      </div>
                    </div>

                    <div className="widget-item">
                      <div className="widget-work-hours">
                        <h4 className="title">Work Hours</h4>
                        <ul>
                          <li><span className="work-day">Monday</span><span className="work-hours">7:00 - 17:00</span></li>
                          {/* Other work hours */}
                        </ul>
                        <a className="btn-theme btn-white" href="#/">REQUEST A CONSULTATION</a>
                      </div>
                    </div>
                  </div>
 <Outlet />
                  {/* <div className="department-content">
                    <h2 className="title"></h2>
                    <div className="swiper-container department-gallery">
                      <div className="swiper-wrapper gallery-slider">
                        <div className="swiper-slide">
                          <img src="assets/img/photos/department-s1.jpg" alt="hope-Image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="assets/img/photos/department-s2.jpg" alt="hope-Image" />
                        </div>
                      </div>
                      <div className="swiper-button-prev"><i className="icofont-rounded-left"></i></div>
                      <div className="swiper-button-next"><i className="icofont-rounded-right"></i></div>
                    </div>

                    <div className="content">
                      <p>The Pediatrics Department at Kidus Petros Hospital offers specialized care for children...</p>
                      <ul className="list-style1">
                        <li>Routine Pediatric Checkups</li>
                        <li>Immunizations and Vaccinations</li>
                        <li>Pediatric Emergency Care</li>
                        <li>Childhood Illness Treatment</li>
                        <li>Growth and Development Monitoring</li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </>
  );
}

export default ServiceDetail;