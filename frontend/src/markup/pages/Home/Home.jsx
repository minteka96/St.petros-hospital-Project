/* eslint-disable no-unused-vars */

import banner1 from "../../../assets/img/slider/st.peter1jpg copy.png";
 import banner2 from "../../../assets/img/banner/img2 banner.jpg";
import banner3 from "../../../assets/img/slider/lab/labroom.jpg";
import team1 from "../../../assets/img/team/doc1.png";
import team2 from "../../../assets/img/team/doc2.png";
import team3 from "../../../assets/img/team/doc3.png";
import doctor1 from "../../../assets/img/photos/st.peter9jpg copy.png";
import blog1 from "../../../assets/img/blog/sendek.png";
import blog2 from "../../../assets/img/blog/Transfer.png";
import blog3 from "../../../assets/img/blog/pox.png";

import play from "../../../assets/img/icons/red-play-button-icon.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="wrapper home-default-wrapper">
        <main className="main-content site-wrapper-reveal">
          <section className="hero-slider">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${banner1})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-content">
                          <h5 className="title animated delay2">
                            We are classNameic and Historical,
                            <span className="d-block">Serving Since 1953</span>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-5 pl-5">
                      <div className="play_btn">
                        <Link
                          to="https://www.youtube.com/watch?v=T8VqfQACMbM&t=511s"
                          className="overlay-link lightbox-image video-fancybox ripple"
                          target="_blank"
                        >
                          <div className="play-icon">
                            <div className="play-button">
                              <div className="triangle"></div>
                            </div>
                          </div>
                        </Link>

                        <div className="text">
                          Watch intro video <br /> <span>About us</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="swiper-slide"
                  style={{ backgroundImage: `url(${banner3})` }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-content">
                          <h5 className="title animated delay2">
                            መኖራችን
                            <span className="d-block">ለእርስዎ ነዉ!</span>
                          </h5>
                          <h2 className="title animated delay2">
                            Our Existence is
                            <span className="d-block">For You</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-button-prev">
                <i className="icofont-arrow-left"></i>
              </div>
              <div className="swiper-button-next">
                <i className="icofont-arrow-right"></i>
              </div>
            </div>
          </section>

      <section className="service-area" style={{ backgroundColor: "rgb(243, 243, 243)" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <p>Our services</p>
                <h2 className="title">
                  <span>We promise compassionate care</span> with a deep understanding of your pain.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="row service-style2">
                
                {/* ART Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">ART</h5>
                    <p>Comprehensive Antiretroviral Therapy for managing and treating HIV/AIDS with ongoing medical support.</p>
                    <a className="btn-link" href="/servicedetail/art">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Cardiology Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Cardiology</h5>
                    <p>Provide care for cardiovascular diseases, using medications to modify heart function and manage symptoms.</p>
                    <a className="btn-link" href="/servicedetail/cardiology">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Dental Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-tooth"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Dental</h5>
                    <p>Provide dental care, including diagnosis, prevention, and treatment of oral diseases and hygiene restoration.</p>
                    <a className="btn-link" href="/servicedetail/dental">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Dermatology Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-ui-skin"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Dermatology</h5>
                    <p>Comprehensive skin care, including treatment for skin diseases, cosmetic dermatology, and skin cancer screening.</p>
                    <a className="btn-link" href="/servicedetail/dermatology">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* DR-TB Treatment Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-lungs"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">DR-TB Treatment</h5>
                    <p>Specialized treatment for drug-resistant tuberculosis with advanced medical protocols.</p>
                    <a className="btn-link" href="/servicedetail/dr-tb-treatment">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Emergency Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-ambulance-cross"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Emergency</h5>
                    <p>24/7 emergency services providing immediate and life-saving care for all critical conditions.</p>
                    <a className="btn-link" href="/servicedetail/emergency">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* ENT Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-doctor"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">ENT</h5>
                    <p>Comprehensive Ear, Nose, and Throat care for all ages, providing expert diagnosis and treatment.</p>
                    <a className="btn-link" href="/servicedetail/ent">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* General Laboratory Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-test-tube"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">General Laboratory</h5>
                    <p>Perform diagnostic tests on clinical specimens to guide treatment decisions and assess patient health conditions.</p>
                    <a className="btn-link" href="/servicedetail/generallab">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* ICU Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-heart-beat-alt"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">ICU</h5>
                    <p>Intensive care services with 24/7 monitoring and advanced medical equipment for critical patients.</p>
                    <a className="btn-link" href="/servicedetail/icu">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Imaging Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-radiology"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Imaging</h5>
                    <p>State-of-the-art imaging services, including MRI, CT scans, and X-rays for precise diagnosis.</p>
                    <a className="btn-link" href="/servicedetail/imaging">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* MCH Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-baby"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">MCH</h5>
                    <p>Maternal and Child Health services focused on ensuring the well-being of mothers and children.</p>
                    <a className="btn-link" href="/servicedetail/mch">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Medical Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-stethoscope"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Medical</h5>
                    <p>General medical services for various health conditions, offering diagnoses, treatment plans, and preventive care.</p>
                    <a className="btn-link" href="/servicedetail/medical">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>
                {/* Ophthalmology Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-eye"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Ophthalmology</h5>
                    <p>   Diagnose and treat eye disorders, offering corrective
                          lenses and surgical interventions for vision
                          improvement.</p>
                      <a className="btn-link" href="/servicedetail/">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Orthopedics Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-bone"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Orthopedics</h5>
                    <p>Specialized care for musculoskeletal conditions and injuries.</p>
                     <a className="btn-link" href="/servicedetail/orthopedics">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>
<section className="service-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row">
          {/* Pathology Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-test-tube"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Pathology</h5>
              <p>
                Comprehensive diagnostic services including blood tests, tissue analysis, and disease diagnosis.
              </p>
              <a className="btn-link" href="/servicedetail/pathology">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Pediatrics Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-baby"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Pediatrics</h5>
              <p>
                Specialized healthcare services for infants, children, and adolescents.
              </p>
              <a className="btn-link" href="/servicedetail/pediatrics">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Pharmacy Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-pill"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Pharmacy</h5>
              <p>
                Onsite pharmacy offering prescription and over-the-counter medications.
              </p>
              <a className="btn-link" href="/servicedetail/pharmacy">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Psychiatry Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-brainstorming"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Psychiatry</h5>
              <p>
                Mental health support and treatment for emotional and behavioral conditions.
              </p>
              <a className="btn-link" href="/servicedetail/psychiatry">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Surgery Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-surgeon-alt"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Surgery</h5>
              <p>
                Advanced surgical procedures performed by highly skilled surgeons.
              </p>
              <a className="btn-link" href="/servicedetail/surgery">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Toxicology Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-danger-zone"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Toxicology</h5>
              <p>
                Expert care in poison management, drug overdoses, and environmental toxic exposure.
              </p>
              <a className="btn-link" href="/servicedetail/toxicology">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
          {/* Urology Service */}
          <div className="col-sm-6 col-md-6 col-lg-3 service-item">
            <div className="icon">
              <i className="icofont-kidney-alt"></i>
            </div>
            <div className="content">
              <h5 className="service-name">Urology</h5>
              <p>
                Diagnosis and treatment of urinary tract and male reproductive system conditions.
              </p>
              <a className="btn-link" href="/servicedetail/urology">
                More <i className="icofont-simple-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

   <section className="feature-section" data-bg-color="#fff">
  <div className="container">
    {/* Section Title */}
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1100">
          <h2 className="title">
            <span>Why Choose</span> Kidus Petros Hospital
          </h2>
        </div>
      </div>
    </div>
    {/* Features */}
    <div className="row">
      <div className="col-lg-12 col-xl-8">
        <div className="row icon-box-style" data-aos="fade-up" data-aos-duration="1100">
          {/* Medical Counseling */}
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-prescription"></i>
              </div>
              <div className="content">
                <h5 className="title">Medical Counseling</h5>
                <p>
                  We provide personalized medical counseling services to help you make informed decisions about your health. Our experienced team offers guidance on treatments, diagnoses, and healthcare management.
                </p>
              </div>
            </div>
          </div>
          {/* Medical Facilities */}
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-microscope"></i>
              </div>
              <div className="content">
                <h5 className="title">Medical Facilities</h5>
                <p>
                  Kidus Petros Hospital is equipped with state-of-the-art medical technology and modern facilities. From diagnostic equipment to comfortable patient rooms, we strive to offer an environment that promotes healing and recovery.
                </p>
              </div>
            </div>
          </div>
          {/* 24 Hours Services */}
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-ambulance-cross"></i>
              </div>
              <div className="content">
                <h5 className="title">24 Hours Services</h5>
                <p>
                  We understand that medical emergencies can happen at any time. That’s why our hospital provides 24-hour emergency services and round-the-clock patient care, ensuring immediate attention whenever you need it.
                </p>
              </div>
            </div>
          </div>
          {/* Personal Services */}
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-blood"></i>
              </div>
              <div className="content">
                <h5 className="title">Personal Services</h5>
                <p>
                  We take a patient-centered approach to healthcare, offering tailored services that meet the individual needs of each patient. From specialized treatments to personalized care plans, your health is our priority.
                </p>
              </div>
            </div>
          </div>
          {/* Dedicated Patient Care */}
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-paralysis-disability"></i>
              </div>
              <div className="content">
                <h5 className="title">Dedicated Patient Care</h5>
                <p>
                  Our team is committed to delivering compassionate and comprehensive care to all patients. With a focus on quality and comfort, we work diligently to ensure every patient receives the best possible care during their stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Image Section */}
    <div className="thumb" data-aos="fade-left" data-aos-duration="1500">
      <img src={doctor1} alt="Doctor Image" />
    </div>
  </div>
</section>
<section
  className="team-area team-default-area"
  data-bg-color="#f3f3f3"
  style={{ backgroundColor: "rgb(243, 243, 243)" }}
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div
          className="section-title text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>Meet Our Doctors</p>
          <h2 className="title">
            <span>Specialist </span> Doctors
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div
          className="swiper-container team-slider-container"
          data-aos="fade-up"
          data-aos-duration="1300"
        >
          <div className="swiper-wrapper team-slider">
            <div className="swiper-slide team-member">
              <div className="thumb">
                <img src={team1} alt="hope-HasTech" />
              </div>
              <div className="content">
                <div className="member-info">
                  <h4 className="name">Dr. _____</h4>
                  <p>Orthopedic Surgeon</p>
                  <a href="#/" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-slide team-member">
              <div className="thumb">
                <img src={team2} alt="hope-HasTech" />
              </div>
              <div className="content">
                <div className="member-info">
                  <h4 className="name">Dr. _____</h4>
                  <p>Neonatologist</p>
                  <a href="#/" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-slide team-member">
              <div className="thumb">
                <img src={team3} alt="hope-HasTech" />
              </div>
              <div className="content">
                <div className="member-info">
                  <h4 className="name">Dr. ____</h4>
                  <p>Cardiologist</p>
                  <a href="#/" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="blog-area blog-default-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="title">
            <span>Latest From</span> Our Blog
          </h2>
        </div>
        <div
          className="post_items-style1"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div className="post_item">
            <div className="thumb">
              <a href="blog-details.html">
                <img src={blog1} alt="Blog 1" />
              </a>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="blog-details.html">
                  የሰንደቅ ዓላማ ቀን በሆስፒታሉ ተከበረ
                </a>
              </h4>
              <div className="meta">
                አዲስ አበባ - ጥቅምት 4 - 2016
                <a className="author" href="blog.html">
                  (ቅ.ጴ.ስ.ሆ)
                </a>
              </div>
            </div>
          </div>

          <div className="post_item">
            <div className="thumb">
              <a href="blog-details.html">
                <img src={blog2} alt="hope-Blog" />
              </a>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="blog-details.html">የዝውውር ማስታወቂያ</a>
              </h4>
              <div className="meta">
                አዲስ አበባ - መስከረም 13 - 2017
                <a className="author" href="blog.html">
                  (ቅ.ጴ.ስ.ሆ)
                </a>
              </div>
            </div>
          </div>

          <div className="post_item">
            <div className="thumb">
              <a href="blog-details.html">
                <img src={blog3} alt="hope-Blog" />
              </a>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="blog-details.html">
                  የዝንጀሮ ፈንጣጣ (Monkeypox) <br />
                  #healthtip
                </a>
              </h4>
              <div className="meta">
                አዲስ አበባ - ነሐሴ 15 - 2016
                <a className="author" href="blog.html">
                  (ቅ.ጴ.ስ.ሆ)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="map-area">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.263531705987!2d38.75581056600536!3d9.073717297055985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8ede0363bdaf%3A0xe1edc0f09e9bb639!2sSt.%20Peter%E2%80%99s%20Specialized%20Hospital!5e1!3m2!1sen!2set!4v1729108276923!5m2!1sen!2set"
  ></iframe>
</div>

<div className="offcanvas-overlay"></div>

<div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
  <div className="inner">
    <div className="border-bottom mb-3 pb-3 text-end">
      <button className="offcanvas-close">×</button>
    </div>
    <div className="offcanvas-head mb-3">
      <div className="header-top-offcanvas">
        <p>
          <i className="icofont-google-map"></i> <span>ADDRESS:</span>sheromeda Entoto park road near to kuskam charch
        </p>
      </div>
    </div>
    <nav className="offcanvas-menu">
      <ul>
        <li>
          <a href="#">
            <span className="menu-text">Home</span>
          </a>
          <ul className="offcanvas-submenu">
            <li>
              <a href="index.html">Home 1</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="menu-text">Services</span>
          </a>
          <ul className="offcanvas-submenu">
            <li>
              <a href="services.html">Service 1</a>
            </li>
            <li>
              <a href="services.html">Service 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span className="menu-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
</>
  );
}

export default Home;
