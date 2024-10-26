import React, { useState } from "react";
import "./offcanvasmenu.css"; // Ensure this is included
import classes from "./header.module.css";
import logo from "../../../assets/img/St.PeterLogo.png";
import { Link } from "react-router-dom";

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
            <div className={`${classes.header_top_hover} row row-cols-2 `}>
              <div className="col-3 d-flex align-items-center">
                <ul className={`media-wrap d-none d-lg-flex`}>
                  <li className="media media-list d-flex">
                    <span className="media-icon">
                      <i
                        className="icofont-google-map"
                        style={{ fontSize: "30px" }}
                      ></i>
                    </span>
                    <div className="d-flex ">
                      <span className="media-sub-heading mr-3">
                        <strong style={{ color: "white" }}>ADDRESS</strong>
                      </span>
                      <span
                        className="media-heading"
                        style={{ color: "white" }}
                      >
                        WOREDA 01,GULELE KIFLE KETEMA, SHIROMEDA TO ENTOTO PARK.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-7 d-flex align-items-center">
                <ul className={`media-wrap d-none d-lg-flex`}>
                  <li className="media media-list d-flex">
                    <span className="media-icon">
                      <i className="icofont-clock-time"></i>
                    </span>
                    <div className={` ${classes.media_wrapper} media-content`}>
                      <span className="media-sub-heading">working hours</span>
                      <span className="media-heading">
                        MON - FRI: 8:00AM - 5:00PM
                      </span>
                    </div>
                  </li>
                  <li
                    className={`${classes.media_wrapper} media media-list d-flex`}
                  >
                    <span className="media-icon">
                      <i className="icofont-ui-call"></i>
                    </span>
                    <div className={`${classes.media_wrapper} media-content`}>
                      <span className="media-sub-heading">hotline 24/7</span>
                      <span className="media-heading" to="tel:+251111541746">
                        +251111541746
                      </span>
                    </div>
                  </li>
                  <li className="media media-list d-flex">
                    <span className="media-icon">
                      <i className="icofont-envelope"></i>
                    </span>
                    <div className={`${classes.media_wrapper} media-content`}>
                      <span className="media-sub-heading">email us</span>
                      <Link
                        className="media-heading"
                        to="mailto: info@kpsh.gov.et"
                      >
                        info@kpsh.gov.et
                      </Link>
                    </div>
                  </li>
                  {/* <!-- media-list end --> */}
                </ul>
              </div>
              <div className="col-2 d-flex align-items-center">
                <ul className="social-links text-end">
                  <li>
                    <Link to="https://t.me/spsh1955" target="_blank">
                      <i class="icofont-telegram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/kiduspetroshospital?igsh=ZjB0bHUzZGUwanRx"
                      target="_blank"
                    >
                      <i class="icofont-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.facebook.com/profile.php?id=61555827683411"
                      target="_blank"
                    >
                      <i class="icofont-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://youtube.com/@stpetershospital3127?si=0eJXeauhP6v0dQ72"
                      target="_blank"
                    >
                      <i class="icofont-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top End */}

        {/* Header Middle Start */}
        <div
          className={` ${classes.header_middle_bg} header-middle mobile-sticky d-lg-none`}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-middle-content">
                  {/* =================== */}

                  {/* =================== */}
                  <Link
                    to="#"
                    className={` ${classes.book_now_btn} book-now-btn d-none d-sm-inline-block d-lg-none`}
                  >
                    book an appointment
                  </Link>
                  <div class="mobile-menu-toggle d-lg-none">
                    <Link
                      to="#offcanvas-mobile-menu"
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
                    </Link>
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
              <div className="col-lg-10">
                <div
                  className={`${classes.main_menu_wrapper} d-flex flex-wrap align-items-center justify-content-between`}
                >
                  <ul className="main-menu">
                    <div className="header-logo mr-5">
                      <Link to="/">
                        <img src={logo} alt="Logo" className={classes.logo} />
                      </Link>
                    </div>
                    <li className="">
                      <Link className="main-menu-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/News">
                        News
                      </Link>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/services">
                        Services
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="sub-menu-link" to="/servicedetail">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link className="sub-menu-link" to="/servicedetail">
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/cpd">
                        CPD
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="sub-menu-link" to="/about-cpd">
                            About CPD
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/jobs">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/tender">
                        Tender
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/tender-form-post">Tender Post</Link>
                        </li>
                        <li>
                          <Link to="/tender-list">Tender List</Link>
                        </li>
                        <li>
                          <Link to="/all-tender-form-details/:tenderNo">
                            Tender Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${classes.moto_box} col-lg-2 `}>
                <strong className={`${classes.moto_text}`}>
                  መኖራችን ለእርስዎ ነዉ!
                  <br /> Our Existence is For You
                </strong>
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
                    <div className="header-logo mr-5">
                      <Link to="index.html">
                        <img src={logo} alt="Logo" className={classes.logo} />
                      </Link>
                    </div>
                    <li className="active ml-5">
                      <Link className="main-menu-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/News">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/services">
                        Services
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="sub-menu-link" to="/services">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link className="sub-menu-link" to="/service-detail">
                            Service Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/cpd">
                        CPD
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link className="sub-menu-link" to="/about-cpd">
                            ABOUT CPD
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="/jobs">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link className="main-menu-link" to="about.html">
                        Tender
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/tender-form-post">Tender Post</Link>
                        </li>
                        <li>
                          <Link to="/tender-list">Tender List</Link>
                        </li>
                        <li>
                          <Link to="/all-tender-form-details/:tenderNo">
                            Tender Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="main-menu-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <Link
                    to="#"
                    className={` ${classes.book_now_btn} book-now-btn`}
                  >
                    book an appointment
                  </Link>
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
                    Gulele Kifle Ketema, Wereda 01, along the road from
                    Shiromeda to Entoto Park
                  </p>
                </div>
              </div>
              <nav className="offcanvas-menu">
                <ul>
                  <li>
                    <Link to="/">
                      <span className="menu-text">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="main-menu-link" to="/News">
                      News
                    </Link>
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
                    <Link to="/services">
                      <span className="menu-text">Services</span>
                    </Link>
                    <ul
                      className="offcanvas-submenu"
                      style={{
                        display:
                          activeSubMenu === "services" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/services">Service</Link>
                      </li>
                      <li>
                        <Link to="/service-detail">Service Details</Link>
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
                    <Link to="/cpd">
                      <span className="menu-text">CPD</span>
                    </Link>
                    <ul
                      className="offcanvas-submenu"
                      style={{
                        display: activeSubMenu === "cpd" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/about-cpd">ABOUT CPD</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link className="main-menu-link" to="/jobs">
                      Jobs
                    </Link>
                  </li>
                  <li
                    className={`sub-menu-list ${
                      activeSubMenu === "tender" ? "active" : ""
                    }`}
                  >
                    <span
                      className="menu-expand"
                      onClick={() => toggleSubMenu("tender")}
                    >
                      {/* Change icon based on state */}
                    </span>
                    <Link className="main-menu-link" to="/tender">
                      Tender
                    </Link>
                    <ul
                      className="offcanvas-submenu"
                      style={{
                        display: activeSubMenu === "tender" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/tender-form-post">Tender Post</Link>
                      </li>
                      <li>
                        <Link to="/tender-list">Tender List</Link>
                      </li>
                      <li>
                        <Link to="/all-tender-form-details/:tenderNo">
                          Tender Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-social my-4">
                <ul>
                  <li>
                    <a href="https://t.me/spsh1955" target="_blank">
                      <i class="icofont-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/kiduspetroshospital?igsh=ZjB0bHUzZGUwanRx"
                      target="_blank"
                    >
                      <i class="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=61555827683411"
                      target="_blank"
                    >
                      <i class="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@stpetershospital3127?si=0eJXeauhP6v0dQ72"
                      target="_blank"
                    >
                      <i class="icofont-youtube"></i>
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
                    <Link className="media-heading" to="tel:+251111541746">
                      +251111541746
                    </Link>
                  </div>
                </li>
                <li className="media media-list">
                  <span className="media-icon">
                    <i className="icofont-envelope"></i>
                  </span>
                  <div className="media-content">
                    <span className="media-sub-heading">email us</span>
                    <Link
                      className="media-heading"
                      to="mailto:info@kpsh.gov.et"
                    >
                      info@kpsh.gov.et
                    </Link>
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
