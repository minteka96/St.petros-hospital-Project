import React from "react";
import banner1 from "../../../assets/img/slider/st.peter1jpg copy.png";
import banner3 from "../../../assets/img/slider/kidus petros 2copy.jpg";
import team1 from "../../../assets/img/team/doc1.png";
import team2 from "../../../assets/img/team/doct2.png";
import team3 from "../../../assets/img/team/doc3.png";
import doctor1 from "../../../assets/img/photos/st.peter9jpg.png";
import blog1 from "../../../assets/img/blog/sendek.png";
import blog2 from "../../../assets/img/blog/Transfer.png";
import blog3 from "../../../assets/img/blog/pox.png";
function Home() {
  return (
    <>
      <div class="wrapper home-default-wrapper">
        <main class="main-content site-wrapper-reveal">
          <section class="hero-slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  style={{ backgroundImage: `url(${banner1})` }}
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="slider-content">
                          <h5 class="title animated delay2">
                            መኖራችን
                            <span class="d-block">ለእርስዎ ነዉ!</span>
                          </h5>
                          <h2 class="title animated delay2">
                            Our Existence is
                            <span class="d-block">For You</span>
                          </h2>
                          <a
                            href="#"
                            class="btn btn-danger me-3 animated delay1"
                          >
                            our services
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide"
                  style={{ backgroundImage: `url(${banner3})` }}
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div class="slider-content">
                          <h5 class="title animated delay2">
                            መኖራችን
                            <span class="d-block">ለእርስዎ ነዉ!</span>
                          </h5>
                          <h2 class="title animated delay2">
                            Our Existence is
                            <span class="d-block">For You</span>
                          </h2>
                          <a
                            href="#"
                            class="btn btn-danger me-3 animated delay1"
                          >
                            our services
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="swiper-button-prev">
                <i class="icofont-arrow-left"></i>
              </div>
              <div class="swiper-button-next">
                <i class="icofont-arrow-right"></i>
              </div>
            </div>
          </section>

          <section
            class="service-area"
            style={{ backgroundColor: "rgb(243, 243, 243)" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="section-title text-center">
                    <p>Our services</p>
                    <h2 class="title">
                      <span>Best Solution</span> For Your Health
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="row service-style2">
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-brain"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Psychiatry</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-eye"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Opthalmology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-heart-beat"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Cardiology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-microscope-alt"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Immumnology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-blood-drop"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Hematology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-laboratory"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Laboratory</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-pills"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Oncology</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3 service-item">
                      <div class="icon">
                        <i class="icofont-tooth"></i>
                      </div>
                      <div class="content">
                        <h5 class="service-name">Dental</h5>
                        <p>Lorem ispm dolor sit amaettum prahraph dolor sum</p>
                        <a class="btn-link" href="service-details.html">
                          More <i class="icofont-simple-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="feature-section" data-bg-color="#fff">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="section-title"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <h2 class="title">
                      <span>Why Choose</span> Saint Peters Hospital
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-xl-8">
                  <div
                    class="row icon-box-style"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-prescription"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">Medical Counseling</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-doctor-alt"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">Top Level Doctors</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-microscope"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">Medical Facilites</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-ambulance-cross"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">24 Hours Services</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-blood"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">Personal Services</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="icon-box-item">
                        <div class="icon">
                          <i class="icofont-paralysis-disability"></i>
                        </div>
                        <div class="content">
                          <h5 class="title">Dedicated Patient Care</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consect adipisicing elit
                            vero. Donec ultri sollicitudin lacus
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="thumb" data-aos="fade-left" data-aos-duration="1500">
              <img src={doctor1} alt="hope-Image" width="550" />
            </div>
          </section>

          <section
            class="team-area team-default-area"
            data-bg-color="#f3f3f3"
            style={{ backgroundColor: "rgb(243, 243, 243)" }}
          >
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="section-title text-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <p>Meet Our Docots</p>
                    <h2 class="title">
                      <span>Specialist </span> Doctor's
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div
                    class="swiper-container team-slider-container"
                    data-aos="fade-up"
                    data-aos-duration="1300"
                  >
                    <div class="swiper-wrapper team-slider">
                      <div class="swiper-slide team-member">
                        <div class="thumb">
                          <img src={team1} alt="hope-HasTech" width="200" />
                        </div>
                        <div class="content">
                          <div class="member-info">
                            <h4 class="name">Dr. _____</h4>
                            <p>Orthopedic Surgeon</p>
                            <a href="#/" class="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide team-member">
                        <div class="thumb">
                          <img src={team2} alt="hope-HasTech" width="200" />
                        </div>
                        <div class="content">
                          <div class="member-info">
                            <h4 class="name">Dr. _____</h4>
                            <p>Neonatologist</p>
                            <a href="#/" class="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide team-member">
                        <div class="thumb">
                          <img src={team3} alt="hope-HasTech" height="350" />
                        </div>
                        <div class="content">
                          <div class="member-info">
                            <h4 class="name">Dr. ____</h4>
                            <p>Cardiologist</p>
                            <a href="#/" class="btn-link">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="blog-area blog-default-area">
            <div class="container">
              <div class="row">
                <div class="col-lg-6">
                  <div
                    class="section-title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2 class="title">
                      <span>Latest From</span> Our Blog
                    </h2>
                  </div>
                  <div
                    class="post-items-style1"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <div class="post-item">
                      <div class="thumb">
                        <a href="blog-details.html">
                          <img src={blog1} height="100" />
                        </a>
                      </div>
                      <div class="content">
                        <h4 class="title">
                          <a href="blog-details.html">
                            የሰንደቅ ዓላማ ቀን በሆስፒታሉ ተከበረ
                          </a>
                        </h4>
                        <div class="meta">
                          አዲስ አበባ - ጥቅምት 4 - 2016
                          <a class="author" href="blog.html">
                            (ቅ.ጴ.ስ.ሆ)
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="post-item">
                      <div class="thumb">
                        <a href="blog-details.html">
                          <img src={blog2} alt="hope-Blog" height="100" />
                        </a>
                      </div>
                      <div class="content">
                        <h4 class="title">
                          <a href="blog-details.html">የዝውውር ማስታወቂያ</a>
                        </h4>
                        <div class="meta">
                          አዲስ አበባ - መስከረም 13 - 2017
                          <a class="author" href="blog.html">
                            (ቅ.ጴ.ስ.ሆ)
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="post-item">
                      <div class="thumb">
                        <a href="blog-details.html">
                          <img src={blog3} alt="hope-Blog" height="100" />
                        </a>
                      </div>
                      <div class="content">
                        <h4 class="title">
                          <a href="blog-details.html">
                            የዝንጀሮ ፈንጣጣ (Monkeypox) <br />
                            #healthtip
                          </a>
                        </h4>
                        <div class="meta">
                          አዲስ አበባ - ነሐሴ 15 - 2016 <br />
                          <a class="author" href="blog.html">
                            በቅዱስ ጴጥሮስ ሆስፒታል የጤና ትምህርት ክፍል የተዘጋጀ ©
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="section-title mt-md-70"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h2 class="title">
                      <span>FAQs</span>
                    </h2>
                  </div>
                  <div
                    class="accordian-content"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                  >
                    <div
                      class="accordion accordion-style2 no-bg"
                      id="accordionStyle"
                    >
                      <div class="accordion-item">
                        <div class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Can I Get A Divorce Without A Consultant?
                            <i class="icon icon-plus icofont-thin-down"></i>
                            <i class="icon icon-minus icofont-close-line"></i>
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionStyle"
                        >
                          <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            I Have A Technical Problem Or Support Issue I Need
                            Resolved, Who Do I Email?
                            <i class="icon icon-plus icofont-thin-down"></i>
                            <i class="icon icon-minus icofont-close-line"></i>
                          </button>
                        </div>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionStyle"
                        >
                          <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What Other Services Are You Compatible With?
                            <i class="icon icon-plus icofont-thin-down"></i>
                            <i class="icon icon-minus icofont-close-line"></i>
                          </button>
                        </div>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionStyle"
                        >
                          <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-header" id="headingFour">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Are You Hiring?
                            <i class="icon icon-plus icofont-thin-down"></i>
                            <i class="icon icon-minus icofont-close-line"></i>
                          </button>
                        </div>
                        <div
                          id="collapseFour"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionStyle"
                        >
                          <div class="accordion-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur consectetur elit lacinia ornare. In
                            volutpat rutrum molestie. Vivamus efficitur orci, ac
                            gravida eros bibendum non. Nullam auctor varius fer
                            vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices.
                          </div>
                        </div>
                      </div>
                    </div>
                    <a class="btn-line" href="#/">
                      View All Questions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div class="map-area">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.263531705987!2d38.75581056600536!3d9.073717297055985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8ede0363bdaf%3A0xe1edc0f09e9bb639!2sSt.%20Peter%E2%80%99s%20Specialized%20Hospital!5e1!3m2!1sen!2set!4v1729108276923!5m2!1sen!2set"></iframe>
          </div>
        </main>

        <div class="offcanvas-overlay"></div>

        <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
          <div class="inner">
            <div class="border-bottom mb-3 pb-3 text-end">
              <button class="offcanvas-close">×</button>
            </div>
            <div class="offcanvas-head mb-3">
              <div class="header-top-offcanvas">
                <p>
                  <i class="icofont-google-map"></i> <span>ADDRESS:</span> 568
                  Elizaberth Str, London, UK
                </p>
              </div>
            </div>
            <nav class="offcanvas-menu">
              <ul>
                <li>
                  <a href="#">
                    <span class="menu-text">Home</span>
                  </a>
                  <ul class="offcanvas-submenu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span class="menu-text">Services</span>
                  </a>
                  <ul class="offcanvas-submenu">
                    <li>
                      <a href="services.html">Service</a>
                    </li>
                    <li>
                      <a href="service-details.html">service details</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">
                    <span class="menu-text">blog</span>
                  </a>
                  <ul class="offcanvas-submenu">
                    <li>
                      <a href="blog.html">Blog list</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog details</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="about.html">about</a>
                </li>

                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
            <div class="offcanvas-social my-4">
              <ul>
                <li>
                  <a href="#">
                    <i class="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-rss-feed"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="icofont-play-alt-1"></i>
                  </a>
                </li>
              </ul>
            </div>

            <ul class="media-wrap">
              <li class="media media-list">
                <span class="media-icon">
                  <i class="icofont-clock-time"></i>
                </span>
                <div class="media-content">
                  <span class="media-sub-heading">working hours</span>
                  <span class="media-heading">MON - FRI: 9.00 - 21.00 </span>
                </div>
              </li>

              <li class="media media-list">
                <span class="media-icon">
                  <i class="icofont-ui-call"></i>
                </span>
                <div class="media-content">
                  <span class="media-sub-heading">hotline 24/7</span>
                  <a class="media-heading" href="tel:+0962-58-58-258">
                    +0962-58-58-258
                  </a>
                </div>
              </li>

              <li class="media media-list">
                <span class="media-icon">
                  <i class="icofont-envelope"></i>
                </span>
                <div class="media-content">
                  <span class="media-sub-heading">email us</span>
                  <a class="media-heading" href="mailto:support@clenora.com.uk">
                    support@clenora.com.uk
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      <div class="scroll-to-top"><span class="icofont-rounded-up"></span></div>
      </div>
    </>
  );
}

export default Home;
