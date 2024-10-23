import React, { useState } from "react";
import "./offcanvas.css"; // Ensure this is included
import classes from "./header.module.css";
import logo from "../../../assets/img/new logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
 const [activeSubMenu, setActiveSubMenu] = useState(null);

 // Function to toggle the submenu
 const toggleSubMenu = (menu) => {
   setActiveSubMenu((prev) => (prev === menu ? null : menu)); // Toggle between menus
 };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        {/* Header Top Start */}
        <div
          className={`header-top ${classes.header_top_bg} d-none d-lg-block`}
        >
          <div className="container">
            <div className={`${classes.header_top_hover} row row-cols-2`}>
              <div className="col">
                <p>
                  <i className="icofont-google-map"></i> <span>ADDRESS:</span>
                  Addis Ababa,Gulele Sub-City, Woreda 1
                </p>
              </div>
              <div className="col">
                <ul className="social-links text-end">
                  <li>
                    <a href="#">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-rss-feed"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-play-alt-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End */}

        {/* Header Middle Start */}
        <div
          className={` ${classes.header_middle_bg} header-middle mobile-sticky`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-middle-content">
                  <div className="header-logo">
                    <a href="index.html">
                      <img className="" src={logo} alt="Logo" />
                    </a>
                  </div>
                  {/* =================== */}
                  <ul className={`  media-wrap d-none d-lg-flex`}>
                    {/* <!-- media-list start --> */}
                    <li className="media media-list">
                      <span className="media-icon">
                        <i className="icofont-clock-time"></i>
                      </span>
                      <div
                        className={` ${classes.media_wrapper} media-content`}
                      >
                        <span className="media-sub-heading">working hours</span>
                        <span className="media-heading">
                          MON - FRI: 9.00 - 21.00
                        </span>
                      </div>
                    </li>
                    {/* <!-- media-list end --> <!-- media-list start -->*/}
                    <li
                      className={` ${classes.media_wrapper} media media-list`}
                    >
                      <span className="media-icon">
                        <i className="icofont-ui-call"></i>
                      </span>
                      <div className={`${classes.media_wrapper} media-content`}>
                        <span className="media-sub-heading">hotline 24/7</span>
                        <a className="media-heading" href="tel:+251111541746">
                          +251111541746
                        </a>
                      </div>
                    </li>
                    {/* <!-- media-list end -->

                    <!-- media-list start --> */}
                    <li className="media media-list">
                      <span className="media-icon">
                        <i className="icofont-envelope"></i>
                      </span>
                      <div className={`${classes.media_wrapper} media-content`}>
                        <span className="media-sub-heading">email us</span>
                        <a
                          className="media-heading"
                          href="mailto: info@kpsh.gov.et"
                        >
                          info@kpsh.gov.et
                        </a>
                      </div>
                    </li>
                    {/* <!-- media-list end --> */}
                  </ul>
                  {/* =================== */}
                  <a
                    href="#"
                    className={` ${classes.book_now_btn} book-now-btn d-none d-sm-inline-block d-lg-none`}
                  >
                    book an appointment
                  </a>
                  <div class="mobile-menu-toggle d-lg-none">
                    <a
                      href="#offcanvas-mobile-menu"
                      class="offcanvas-toggle"
                      onClick={toggleMenu}
                    >
                      <svg viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Middle End */}
        {/* ================================= */}
        {/* <!-- header-bottom start --> */}
        <div
          className={`${classes.header_bottom_bg} header-bottom d-none d-lg-block`}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={`${classes.main_menu_wrapper} d-flex flex-wrap align-items-center justify-content-between`}
                >
                  <ul className="main-menu">
                    <li className="">
                      <a className="main-menu-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="contact.html">
                        News
                      </a>
                    </li>

                    <li>
                      <a className="main-menu-link" href="services.html">
                        Services
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="sub-menu-link" href="services.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="sub-menu-link"
                            href="service-details.html"
                          >
                            Service Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="main-menu-link" href="">
                        CPD
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="sub-menu-link" href="blog.html">
                            About CPD
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="main-menu-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        Tender
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        News
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="contact.html">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={` ${classes.book_now_btn} book-now-btn`}
                  >
                    book an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-bottom end -->
        {/* =================================== */}

        {/* ====================================================== */}
        {/* <!-- header-bottom start --> */}
        <div className="header-bottom sticky-header d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={`${classes.main_menu_wrapper} d-flex flex-wrap align-items-center justify-content-between`}
                >
                  <ul className="main-menu">
                    <li className="active">
                      <a className="main-menu-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="services.html">
                        Services
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="sub-menu-link" href="services.html">
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            className="sub-menu-link"
                            href="service-details.html"
                          >
                            Service Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="main-menu-link" href="#">
                        CPD
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a className="sub-menu-link" href="blog.html">
                            ABOUT CPD
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a className="main-menu-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        Tender
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="about.html">
                        News
                      </a>
                    </li>
                    <li>
                      <a className="main-menu-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className={` ${classes.book_now_btn} book-now-btn`}
                  >
                    book an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-bottom end --> */}
        {/* ============================================= */}
        {/* Offcanvas Menu Start */}
        <div>
          <div
            className={`offcanvas-overlay ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>

          <div
            id="offcanvas-mobile-menu"
            className={`offcanvas offcanvas-mobile-menu ${
              isMenuOpen ? "active" : ""
            }`}
          >
            <div className="inner">
              <div className="border-bottom mb-3 pb-3 text-end">
                <button className="offcanvas-close" onClick={toggleMenu}>
                  ×
                </button>
              </div>
              <div className="offcanvas-head mb-3">
                <div className="header-top-offcanvas">
                  <p>
                    <i className="icofont-google-map"></i> <span>ADDRESS:</span>
                     Addis Ababa,Gulele Sub-City, Woreda 1
                  </p>
                </div>
              </div>
              <nav className="offcanvas-menu">
                <ul>
                  <li>
                    <a href="#">
                      <span className="menu-text">Home</span>
                    </a>
                  </li>
                  <li
                    className={`sub-menu-list ${
                      activeSubMenu === "services" ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => toggleSubMenu("services")}
                    >
                      {/* Change icon based on state */}
                    </span>
                    <a href="#">
                      <span className="menu-text">Services</span>
                    </a>
                    <ul
                      className="offcanvas-submenu"
                      style={{
                        display:
                          activeSubMenu === "services" ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="services.html">Service</a>
                      </li>
                      <li>
                        <a href="service-details.html">Service Details</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`sub-menu-list ${
                      activeSubMenu === "cpd" ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => toggleSubMenu("cpd")}
                    >
                      {/* Change icon based on state */}
                    </span>
                    <a href="#">
                      <span className="menu-text">CPD</span>
                    </a>
                    <ul
                      className="offcanvas-submenu"
                      style={{
                        display: activeSubMenu === "cpd" ? "block" : "none",
                      }}
                    >
                      <li>
                        <a href="blog.html">ABOUT CPD</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-social my-4">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-rss-feed"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-play-alt-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="media-wrap">
                <li className="media media-list">
                  <span className="media-icon">
                    <i className="icofont-clock-time"></i>
                  </span>
                  <div className="media-content">
                    <span className="media-sub-heading">working hours</span>
                    <span className="media-heading">
                      MON - FRI: 9.00 - 21.00
                    </span>
                  </div>
                </li>
                <li className="media media-list">
                  <span className="media-icon">
                    <i className="icofont-ui-call"></i>
                  </span>
                  <div className="media-content">
                    <span className="media-sub-heading">hotline 24/7</span>
                    <a className="media-heading" href="tel:+251111541746">
                      +251111541746
                    </a>
                  </div>
                </li>
                <li className="media media-list">
                  <span className="media-icon">
                    <i className="icofont-envelope"></i>
                  </span>
                  <div className="media-content">
                    <span className="media-sub-heading">email us</span>
                    <a className="media-heading" href="mailto:info@kpsh.gov.et">
                      info@kpsh.gov.et
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Offcanvas Menu End */}
      </header>
    </>
  );
};

export default Header;
