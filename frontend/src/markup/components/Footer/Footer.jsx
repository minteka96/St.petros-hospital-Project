/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../../assets/img/St.PeterLogo.png";
import classes from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row p-5">
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-5">
              <div className="widget-item">
                <div className="about-widget">
                  <a className="footer-logo" href="/">
                    <img src={logo} alt="Logo" width="215" />
                  </a>
                  <ul className="widget-contact-info">
                    <li className="info-address">
                      <i className="icofont-location-pin"></i>
                      Gulele Kifle Ketema, Wereda 01, along the road from Shiromeda to Entoto Park.
                    </li>
                    <li className="info-mail">
                      <i className="icofont-email"></i>
                      <a href="mailto://info@kpsh.gov.et">info@kpsh.gov.et</a>
                    </li>
                    <li className="info-phone">
                      <i className="icofont-ui-call"></i>
                      <a href="tel://+251111541746">+251111541746</a>
                    </li>
                  </ul>
                  <div className="widget-social-icons">
                    <a href="https://t.me/spsh1955" target="_blank" rel="noopener noreferrer">
                      <i className="icofont-telegram"></i>
                    </a>
                    <a href="https://www.instagram.com/kiduspetroshospital?igsh=ZjB0bHUzZGUwanRx" target="_blank" rel="noopener noreferrer">
                      <i className="icofont-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61555827683411" target="_blank" rel="noopener noreferrer">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="https://youtube.com/@stpetershospital3127?si=0eJXeauhP6v0dQ72" target="_blank" rel="noopener noreferrer">
                      <i className="icofont-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm col-md-7 col-lg-8 col-xl-7">
              <div className="widget-item">
                <h4 className="widget-title line-bottom">Recent Posts</h4>
                <nav className="widget-posts">
                  <ul className="posts-item">
                    <li>
                      <a href="blog-details.html">
                        <i className="icon icofont-rounded-double-right"></i>ዶ/ር አብርሀም እሸቱም የቅዱስ ጴጥሮስ ስፔሻላይዝድ ሆስፒታል ዋና ስራ አስፈጻሚ ሆነው በጤና ሚኒስቴር ሚኒስትር ዶ/ር ሊያ ታደሰ ተሾሙ፡፡
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i className="icon icofont-rounded-double-right"></i>የአሜሪካ ተራድኦ ድርጅት ከፍተኛ ኃላፊዎች ሆስፒታሉን ጎበኙ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i className="icon icofont-rounded-double-right"></i>ሆስፒታሉ ለጣይቱ ብጡል አንደኛ ደረጃ ት/ቤት ሴት ተማሪዎች ድጋፍ አደረገ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i className="icon icofont-rounded-double-right"></i>የዝውውር ማስታወቂያ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i className="icon icofont-rounded-double-right"></i>የጨጓራ ህመም ምንድነው?
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i className="icon icofont-rounded-double-right"></i>የሆስፒታሉ አመራሮችና ሰራተኞች የማዕድ መጋራት ስነ-ስርዓት አካሄዱ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row text-center">
              <div className="col-sm-12">
                <div className="text-center">
                  <p>
                    Copyright &copy; 2024 Kidus Petros Hospital
                    <a target="" href="#" className={classes.uparrowhover}>
                      <span className={classes.upArrow}>
                        <i className="icofont-arrow-up"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
