/* eslint-disable no-unused-vars */
import React from "react";
import banner1 from "../../../assets/img/slider/st.peter1jpg copy.png";
import banner3 from "../../../assets/img/slider/kidus petros 2copy.jpg";
import team1 from "../../../assets/img/team/doc1.png";
import team2 from "../../../assets/img/team/doc2.png";
import team3 from "../../../assets/img/team/doc3.png";
import doctor1 from "../../../assets/img/photos/st.peter9jpg copy.png";
import blog1 from "../../../assets/img/blog/sendek.png";
import blog2 from "../../../assets/img/blog/Transfer.png";
import blog3 from "../../../assets/img/blog/pox.png";
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
                      We are Classic and Historical,
                      <span className="d-block">Serving Since 1953</span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="mt-5 pl-5">
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

    <section
      className="service-area"
      style={{ backgroundColor: "rgb(243, 243, 243)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <p>Our services</p>
              <h2 className="title">
                      <span>We promise compassionate care</span> with a deep
                      understanding of your pain.
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Cardiology Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Cardiology</h5>
                    <p> Provide care for cardiovascular diseases, using
                          medications to modify heart function and manage
                          symptoms.</p>
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

            <div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-tooth"></i>
  </div>
  <div className="content">
    <h5 className="service-name">Dental</h5>
    <p>Provide dental care, including diagnosis, prevention,
                          and treatment of oral diseases and hygiene
                          restoration.</p>
    <a className="btn-link" href="servicedetail">
      More <i className="icofont-simple-right"></i>
    </a>
  </div>
</div>
    
             {/* Dermatology Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-ui-skin"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">Dermatology</h5>
    <p>Comprehensive skin care, including treatment for skin diseases, cosmetic dermatology, and skin cancer screening.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>
               {/* Clinical Laboratory Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-test-tube"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">General Laboratory</h5>
    <p>Perform diagnostic tests on clinical specimens to
                          guide treatment decisions and assess patient health
                          conditions.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Imaging Service */}
              {/* Imaging Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-radiology"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">Imaging</h5>
    <p>State-of-the-art imaging services, including MRI, CT scans, and X-rays for precise diagnosis.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Medical Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-stethoscope"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Medical</h5>
                    <p>Comprehensive medical care, providing consultation, diagnosis, and treatment for a wide range of illnesses and health conditions.</p>
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
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
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Pathology Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-dna-alt-1"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Pathology</h5>
                    <p>Accurate diagnosis of diseases through examination of tissues, cells, and bodily fluids.</p>
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>
                {/* Pediatrics Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-child"></i> {/* Icon for Pediatrics */}
  </div>
  <div className="content">
    <h5 className="service-name">Pediatrics</h5>
    <p>Expert care for infants, children, and adolescents, including routine check-ups, immunizations, and treatment of childhood illnesses.</p>
    <a className="btn-link" href="servicedetail">
      More <i className="icofont-simple-right"></i>
    </a>
  </div>
</div>


                {/* Pharmacy Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-prescription"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Pharmacy</h5>
                    <p>Comprehensive pharmacy services, ensuring the provision of medications, consultations, and safe prescription management.</p>
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

                {/* Psychiatry Service */}
                <div className="col-sm-6 col-md-6 col-lg-3 service-item">
                  <div className="icon">
                    <i className="icofont-brain-alt"></i>
                  </div>
                  <div className="content">
                    <h5 className="service-name">Psychiatry</h5>
                    <p>  Diagnose and treat mental disorders using
                          psychotherapy and medication for emotional and
                          behavioral health.</p>
                    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
                  </div>
                </div>

               {/* Surgery Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-surgeon"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">Surgery</h5>
    <p>State-of-the-art surgical services for various procedures, from minor surgeries to complex operations.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
  </div>
</div>
{/* Toxicology Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-laboratory"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">Toxicology</h5>
    <p>Expert testing and diagnosis of poisoning cases and toxic substance exposures.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
  </div>
</div>


               {/* Urology Service */}
<div className="col-sm-6 col-md-6 col-lg-3 service-item">
  <div className="icon">
    <i className="icofont-doctor"></i> {/* Updated icon */}
  </div>
  <div className="content">
    <h5 className="service-name">Urology</h5>
    <p>Expert care for urinary tract disorders, including kidney stones, bladder conditions, and male reproductive health.</p>
    <a className="btn-link" href="servicedetail">More <i className="icofont-simple-right"></i></a>
  </div>
</div>

                  </div>
                </div>
              </div>
            </div>
          </section>

        <section className="feature-section" data-bg-color="#fff">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title" data-aos="fade-up" data-aos-duration="1100">
          <h2 className="title">
            <span>Why Choose</span> Kidus Petros Hospital
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-xl-8">
        <div className="row icon-box-style" data-aos="fade-up" data-aos-duration="1100">
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
          <div className="col-md-6">
            <div className="icon-box-item">
              <div className="icon">
                <i className="icofont-doctor-alt"></i>
              </div>
              <div className="content">
                <h5 className="title">Top Level Doctors</h5>
                <p>
                  Our hospital is staffed with board-certified doctors and specialists from various medical fields. With years of experience and advanced training, they ensure that you receive the highest standard of care.
                </p>
              </div>
            </div>
          </div>
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
  </div>
  <div className="thumb" data-aos="fade-left" data-aos-duration="1500">
    <img src={doctor1} alt="hope-Image" />
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
      <div className="col-lg-6">
        <div
          className="section-title mt-md-70"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="title">
            <span>FAQs</span>
          </h2>
        </div>
        <div
          className="accordian-content"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <div
            className="accordion accordion-style2 no-bg"
            id="accordionStyle"
          >
            <div className="accordion-item">
              <div className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Can I Get A Medical Consultation Without An Appointment?
                  <i className="icon icon-plus icofont-thin-down"></i>
                  <i className="icon icon-minus icofont-close-line"></i>
                </button>
              </div>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionStyle"
              >
                <div className="accordion-body">
                  Yes, we offer walk-in consultations for urgent cases. However,
                  scheduling an appointment is recommended for non-emergencies
                  to ensure a convenient time with your preferred doctor.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  I Have A Technical Problem Or Support Issue I Need Resolved,
                  Who Do I Email?
                  <i className="icon icon-plus icofont-thin-down"></i>
                  <i className="icon icon-minus icofont-close-line"></i>
                </button>
              </div>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionStyle"
              >
                <div className="accordion-body">
                  For any technical or support issues related to your online
                  patient account, medical records, or billing, please email
                  our support team at pr@kpsh.gov.et
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What Other Services Are You Compatible With?
                  <i className="icon icon-plus icofont-thin-down"></i>
                  <i className="icon icon-minus icofont-close-line"></i>
                </button>
              </div>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionStyle"
              >
                <div className="accordion-body">
                  Saint Peters Hospital provides a comprehensive range of
                  services, including primary care, specialty consultations,
                  surgical procedures, and rehabilitative therapies, ensuring all
                  your healthcare needs are met.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Do You Have Other links besides this Website?
                  <i className="icon icon-plus icofont-thin-down"></i>
                  <i className="icon icon-minus icofont-close-line"></i>
                </button>
              </div>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionStyle"
              >
                <div className="accordion-body">
                  You can also follow us on facebook, telegram, youtube,
                  instagram for updates, or contact us directly for more
                  information.
                </div>
              </div>
            </div>
          </div>
          <a className="btn-line" href="#/">
            View All Questions
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


          <div className="map-area">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.263531705987!2d38.75581056600536!3d9.073717297055985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8ede0363bdaf%3A0xe1edc0f09e9bb639!2sSt.%20Peter%E2%80%99s%20Specialized%20Hospital!5e1!3m2!1sen!2set!4v1729108276923!5m2!1sen!2set"></iframe>
</div>
</main>

<div className="offcanvas-overlay"></div>

<div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
    <div className="inner">
        <div className="border-bottom mb-3 pb-3 text-end">
            <button className="offcanvas-close">×</button>
        </div>
        <div className="offcanvas-head mb-3">
            <div className="header-top-offcanvas">
                <p>
                    <i className="icofont-google-map"></i> <span>ADDRESS:</span> 568
                    Elizaberth Str, London, UK
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
                            <a href="services.html">Service</a>
                        </li>
                        <li>
                            <a href="service-details.html">service details</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#">
                        <span className="menu-text">blog</span>
                    </a>
                    <ul className="offcanvas-submenu">
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
                    <span className="media-heading">MON - FRI: 9.00 - 21.00 </span>
                </div>
            </li>

            <li className="media media-list">
                <span className="media-icon">
                    <i className="icofont-ui-call"></i>
                </span>
                <div className="media-content">
                    <span className="media-sub-heading">hotline 24/7</span>
                    <a className="media-heading" href="tel:+0962-58-58-258">
                        +0962-58-58-258
                    </a>
                </div>
            </li>

            <li className="media media-list">
                <span className="media-icon">
                    <i className="icofont-envelope"></i>
                </span>
                <div className="media-content">
                    <span className="media-sub-heading">email us</span>
                    <a className="media-heading" href="mailto:support@clenora.com.uk">
                        support@clenora.com.uk
                    </a>
                </div>
            </li>
        </ul>
    </div>
</div>

      </div>
    </>
  );
}

export default Home;
