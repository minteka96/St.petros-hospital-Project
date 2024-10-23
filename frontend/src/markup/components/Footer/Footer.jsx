import React from "react";
import logo from "../../../assets/img/new logo.png";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <>
      {/* Start Fotter Area Wrapper */}
      <footer className="footer-area pt-5">
        <div className={`${classes.footer_bottom}`}>
          <div className="container">
            <div className=" ">
              <div className="row">
                <div className="col-md-3 mb-sm-0">
                  <div className="widget-item ">
                    <div className="about-widget mb-sm-0">
                      <a className="footer-logo" href="index.html">
                        <img src={logo} alt="Logo" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ">
                  <ul className="widget-contact-info">
                    <li className="info-mail">
                      <i className="icofont-email"></i>
                      <a href="mailto://  info@kpsh.gov.et">info@kpsh.gov.et</a>
                    </li>
                    <li className="info-phone">
                      <i className="icofont-ui-call"></i>
                      <a href="tel://+251111541746">+251111541746</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="widget-contact-info">
                    <li className="info-address">
                      <i className="icofont-location-pin"></i> Gulele Sub-City,
                      Woreda 1 ,Addis Ababa,Ethiopia
                    </li>
                  </ul>
                  <div className="widget-social-icons ">
                    <a href="#">
                      <i className="icofont-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-google-plus"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-pinterest"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-rss"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61555827683411">
                      <i className="icofont-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-dribbble"></i>
                    </a>
                  </div>
                </div>

                <div className={`${classes.widget_copyright} text-center`}>
                  <p className="">
                    Copyright &copy; 2024 Kidus Petros Hospital
                    <a target="" href="#" className={`${classes.uparrowhover}`}>
                      <span class={`${classes.upArrow}`}>
                        <i className="icofont-arrow-up"></i>
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* <a href="#"></a> */}
          </div>
        </div>
      </footer>

      {/* <!--== End Footer Area Wrapper ==--> */}
    </>
  );
};

export default Footer;
