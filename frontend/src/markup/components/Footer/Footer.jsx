import React from "react";
import logo from "../../../assets/img/St.PeterLogo.png";
import classes from "./footer.module.css"

function Footer() {
  return (
    <>
      <footer class="footer-area">
        <div class="container">
          <div class="row p-5">
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-5">
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

            <div class="col-sm col-md-7 col-lg-8 col-xl-7">
              <div class="widget-item">
                <h4 class="widget-title line-bottom">Recent Posts</h4>
                <nav class="widget-posts">
                  <ul class="posts-item">
                    <li>
                      <a href="blog-details.html">
                        <i class="icon icofont-rounded-double-right"></i>ዶ/ር
                        አብርሀም እሸቱም የቅዱስ ጴጥሮስ ስፔሻላይዝድ ሆስፒታል ዋና ስራ አስፈጻሚ ሆነው በጤና
                        ሚኒስቴር ሚኒስትር ዶ/ር ሊያ ታደሰ ተሾሙ፡፡
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i class="icon icofont-rounded-double-right"></i>የአሜሪካ
                        ተራድኦ ድርጅት ከፍተኛ ኃላፊዎች ሆስፒታሉን ጎበኙ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i class="icon icofont-rounded-double-right"></i>ሆስፒታሉ
                        ለጣይቱ ብጡል አንደኛ ደረጃ ት/ቤት ሴት ተማሪዎች ድጋፍ አደረገ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i class="icon icofont-rounded-double-right"></i>የዝውውር
                        ማስታወቂያ
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i class="icon icofont-rounded-double-right"></i>
                        የጨጓራ ህመም ምንድነው?
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/spsh1955/1609">
                        <i class="icon icofont-rounded-double-right"></i>የሆስፒታሉ
                        አመራሮችና ሰራተኞች የማዕድ መጋራት ስነ-ስርዓት አካሄዱ
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-12">
                <div className={` text-center`}>
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
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
