import React from "react";
import logo from "../assets/img/St.PeterLogo.png";

function Footer() {
  return (
    <>
      <footer class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <div class="widget-item">
                <div class="about-widget">
                  <a class="footer-logo" href="/">
                    <img src={logo} alt="Logo" width="215" />
                  </a>
                  <ul class="widget-contact-info">
                    <li class="info-address">
                      <i class="icofont-location-pin"></i>Gulele Kifle Ketema,
                      Wereda 01, along the road from Shiromeda to Entoto Park.
                    </li>
                    <li class="info-mail">
                      <i class="icofont-email"></i>
                      <a href="mailto://info@kpsh.gov.et">info@kpsh.gov.et</a>
                    </li>
                    <li class="info-phone">
                      <i class="icofont-ui-call"></i>
                      <a href="tel://+251111541746">+251111541746</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-sm col-md col-lg col-xl">
              <div class="widget-item">
                <h4 class="widget-title line-bottom">Recent Posts</h4>
                <nav class="widget-posts">
                  <ul class="posts-item">
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>Lorem
                        Ispum dolor sit amet putilor
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>Medical
                        is all about quality.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>Is your
                        website user friendly ?
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>Ai
                        offer weekly updates & more.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>
                        Customer should love your web.
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>Your
                        site smooth and stunning.
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-sm col-md offset-md col-lg offset-lg col-xl">
              <div class="widget-item">
                <h4 class="widget-title line-bottom">Newsletter</h4>
                <div class="widget-newsletter">
                  <p>
                    Sign up for our mailing list to get latest updates and
                    offers.
                  </p>
                  <form class="newsletter-form input-btn-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Enter your email"
                    />
                    <button class="btn btn-theme" type="button">
                      <i class="icofont-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <div class="widget-social-icons">
                  <a href="https://t.me/spsh1955" target="_blank">
                    <i class="icofont-telegram"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/kiduspetroshospital?igsh=ZjB0bHUzZGUwanRx"
                    target="_blank"
                  >
                    <i class="icofont-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61555827683411"
                    target="_blank"
                  >
                    <i class="icofont-facebook"></i>
                  </a>
                  <a
                    href="https://youtube.com/@stpetershospital3127?si=0eJXeauhP6v0dQ72"
                    target="_blank"
                  >
                    <i class="icofont-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-12">
                <div class="widget-copyright"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
