import React, { useState } from "react";
import logo from "../../../assets/img/St.PeterLogo.png";
import logo1 from "../../../assets/img/logo1.png";
import { Link } from "react-router-dom";
import "./Header.css"; // Assuming you will style here
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header class="header">
        <div class="header-middle mobile-sticky">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="header-middle-content">
                  <div class="header-logo">
                    <a href="/">
                      {menuOpen ? (
                        <img src={logo} alt="Logo" width="215" />
                      ) : (
                        <img src={logo1} alt="Logo" width="215" />
                      )}
                    </a>
                  </div>
                  <ul class="media-wrap d-none d-lg-flex">
                    {/* <!-- media-list start --> */}
                    <li class="media media-list">
                      <span class="media-icon">
                        <i class="icofont-clock-time"></i>
                      </span>
                      <div class="media-content">
                        <span class="media-sub-heading">working hours</span>
                        <span class="media-heading">
                          MON - FRI: 8:00AM - 5:00PM
                        </span>
                      </div>
                    </li>
                    {/* <!-- media-list end --> */}

                    {/* <!-- media-list start --> */}
                    <li class="media media-list">
                      <span class="media-icon">
                        <i class="icofont-ui-call"></i>
                      </span>
                      <div class="media-content">
                        <span class="media-sub-heading">hotline 24/7</span>
                        <a class="media-heading" href="tel:+251111541746">
                          +251111541746
                        </a>
                      </div>
                    </li>
                    {/* <!-- media-list end --> */}

                    {/* <!-- media-list start --> */}
                    <li class="media media-list">
                      <span class="media-icon">
                        <i class="icofont-envelope"></i>
                      </span>
                      <div class="media-content">
                        <span class="media-sub-heading">email us</span>
                        <a class="media-heading" href="mailto:info@kpsh.gov.et">
                          info@kpsh.gov.et
                        </a>
                      </div>
                    </li>
                    {/* <!-- media-list end --> */}
                  </ul>
                  <a
                    href="#"
                    class="book-now-btn d-none d-sm-inline-block d-lg-none"
                  >
                    book an appointment
                  </a>
                  <div class="mobile-menu-toggle d-lg-none">
                    <a onClick={toggleMenu} className="offcanvas-toggle">
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
                  {menuOpen && (
                    <div
                      id="offcanvas-mobile-menu"
                      className="mobile-menu d-lg-none"
                    >
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/Services">Services</a>
                        </li>
                        <li>
                          <a href="/News">News</a>
                        </li>
                        <li>
                          <a href="/Tender">Tender</a>
                        </li>
                        {/* Start Tender */}
                        {/* Tender Menu */}
                        {/* <li className="tender-menu">
                          <a href="#" onClick={toggleSubMenu}>
                            Tender
                          </a>
                          {showSubMenu && (
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
                          )}
                        </li> */}

                        {/* ed tender */}
                        <li>
                          <a href="/Jobs">Jobs</a>
                        </li>
                        <li>
                          <a href="/CPD">CPD</a>
                        </li>

                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                        <li>
                          <a href="/Admin">Admin</a>
                        </li>
                        <li className="ms-5">
                          <a href="/Login" className="btn">
                            Login
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-middle end --> */}

        {/* <!-- header-bottom start --> */}
        <div class="header-bottom d-none d-lg-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <ul class="main-menu">
                    <li class="active">
                      <a class="main-menu-link" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/Services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/News">
                        News
                      </a>
                    </li>
                    {/* <li>
                      <a class="main-menu-link" href="/Tender">
                        Tender
                      </a>
                    </li> */}
                    <li className="tender-menu">
                      <a href="#" onClick={toggleSubMenu}>
                        Tender
                      </a>
                      {showSubMenu && (
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
                      )}
                    </li>

                    <li>
                      <a class="main-menu-link" href="/Jobs">
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/CPD">
                        CPD
                      </a>
                    </li>

                    <li>
                      <a class="main-menu-link" href="/contact">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/Admin">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/Login">
                        Login
                      </a>
                    </li>
                  </ul>
                  <a href="#" class="book-now-btn">
                    book an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-bottom end --> */}

        {/* <!-- header-bottom start --> */}
        <div class="header-bottom sticky-header d-none d-lg-block">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex flex-wrap align-items-center justify-content-between">
                  <ul class="main-menu">
                    <li class="active">
                      <a class="main-menu-link" href="/">
                        Home
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/about">
                        About
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="/">
                        Services
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a class="sub-menu-link" href="/">
                            Services
                          </a>
                        </li>
                        <li>
                          <a class="sub-menu-link" href="/">
                            Service Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="main-menu-link" href="#">
                        News
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a class="sub-menu-link" href="#">
                            News Headline
                          </a>
                        </li>
                        <li>
                          <a class="sub-menu-link" href="#">
                            news Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* 
                    <li>
                      <a class="main-menu-link" href="#">
                        Tender
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a class="sub-menu-link" href="#">
                            Tender Headline
                          </a>
                        </li>
                        <li>
                          <a class="sub-menu-link" href="#">
                            Tender Details
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    <li className="tender-menu">
                      <a href="#" onClick={toggleSubMenu}>
                        Tender
                      </a>
                      {showSubMenu && (
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
                      )}
                    </li>

                    <li>
                      <a class="main-menu-link" href="#">
                        Jobs
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a class="sub-menu-link" href="#">
                            Jobs list
                          </a>
                        </li>
                        <li>
                          <a class="sub-menu-link" href="#">
                            Jobs Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="main-menu-link" href="about.html">
                        CPD
                      </a>
                    </li>

                    <li>
                      <a class="main-menu-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="#">
                        Admin
                      </a>
                    </li>
                    <li>
                      <a class="main-menu-link" href="#">
                        Login
                      </a>
                    </li>
                  </ul>
                  <a href="#" class="book-now-btn">
                    book an appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-bottom end --> */}
      </header>
    </>
  );
}

export default Header;
