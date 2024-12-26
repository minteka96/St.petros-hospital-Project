/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/img/about/001.jpg';
import img2 from '../../../assets/img/about/007.png';
import img3 from '../../../assets/img/about/006.webp';
import img4 from '../../../assets/img/about/004 dr.webp';
import img7 from '../../../assets/img/about/002.jpg';
import './About.css'; // Ensure this path is correct

// const AboutUs = () => {
//   return (
//     <div className="wrapper home-default-wrapper">
//   <main className="main-content site-wrapper-reveal">
//     <section className="hero-slider">
//       <div className="swiper-container">
//         <div className="swiper-wrapper">
//           <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-12">
//                   <div className="slider-content">
//                     <h5 className="title animated delay2">መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span></h5>
//                     <h2 className="title animated delay2">Our Existence is <span className="d-block">For You</span></h2>
//                     <a href="#" className="btn btn-danger me-3 animated delay1">about us</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* About Us Section */}
//     <section className="about-area">
//       <div className="container">
//         <div className="row">
//           {/* Left Side Text Section */}
//           <div className="col-md-6">
//             <div className="post-details-content">
//               <h5 className="title" style={{ color: 'lightseagreen' }}>Introduction</h5>
//               <p>
//                 St. Peter Hospital boasts a rich history dating back to Sene 23, 1953 EC, when it was established in Mesalemiya...
//               </p>
//               <p>
//                 The hospital served around 250 patients daily and extended its reach through an outreach wing equipped with a portable X-ray machine...
//               </p>
//               <p>
//                 In 2005 EC, St. Peter Hospital embarked on a significant expansion of its specialty services by introducing dermatology care under the leadership of Dr. Teseme, the facility’s first dermatologist. That same year, dental services were also launched, staffed by BSc nurse professionals.
//               </p>
//             </div>
//           </div>

//           {/* Right Side Image Section */}
//           <div className="col-md-6">
//             <img src={img2} alt="St. Peter Hospital" className="img-fluid rounded" />
//           </div>
//         </div>

//         {/* Historical Sections */}
//      <blockquote className="blockquote-style">
//   <div className="row">
//     {/* Left Side: History and Expansion */}
//     <div className="col-md-6">
//       <h2 style={{ fontSize: 'xx-large' }}> (History & Expansion)</h2>
//       <p>
//         St. Peter Hospital became a national leader in multidrug-resistant tuberculosis (MDR-TB) care when it treated Ethiopias first MDR-TB patient in 2001 EC. With strong support from USAID, the hospital has since been recognized as a center of excellence in MDR-TB diagnosis and treatment. That same year, St. Peters Hospital introduced DR-TB treatment in Ethiopia, with the FMoH, GHC, and other partners. Since then, it has become the national referral center for DR-TB treatment, training healthcare workers across the country and providing technical support for the expansion of treatment programs to regional centers. This pivotal work was led by Dr. Daniel Meressa, an internal medicine specialist.
//       </p>
//       <p>
//         The hospital also conducted a groundbreaking clinical trial in two phases to reduce treatment duration and improve success rates for DR-TB patients. This initiative has significantly advanced the management of DR-TB, contributing to better outcomes and setting a precedent for future treatment protocols in Ethiopia.
//       </p>
//     </div>

//     {/* Right Side: Milestones and Recent Developments */}
//     <div className="col-md-6">
//       <h2 style={{ fontSize: 'xx-large' }}>(Milestones & Developments)</h2>
//       <p>
//         In 2008 EC, during Ato Yakob Seman’s tenure as Chief Executive Officer, the hospital further expanded to offer Cesarean section (C/S) surgeries, broadening its surgical capabilities to include general surgery. By 2010 EC, comprehensive outpatient services were introduced, solidifying its role as a multi-specialty hospital. A major milestone was the construction of the hospital’s seven-story main building, designed to accommodate the growing demand for healthcare services. It now houses 300 inpatient beds, including 12 ICU beds, 13 operating rooms including two emergency ORs, and state-of-the-art facilities such as a Cath Lab for cardiac care and adult and pediatric emergency departments.
//       </p>
//       <p>
//         In 2008 EC, the Ministry of Health acknowledged the hospital’s outstanding quality of service with a reward of 3 million ETB. This recognition marked a turning point as the hospital expanded its offerings to more than 32 specialties and subspecialties.
//       </p>
//       <p>
//         In recent years, the hospital has embraced modernization and sustainability initiatives. It has introduced Ethiopia’s first public-private partnership (PPP) health project in diagnostic services, encompassing radiology, pathology, and laboratory testing. Additionally, the hospital is undergoing a clean and green transformation, including renovations, digitalization, and the construction of recreational facilities for its staff, such as a gym and football fields.
//       </p>
//     </div>
//   </div>
// </blockquote>


//         {/* Mission and Vision Section */}
//         <blockquote className="blockquote-style">
//           <div className="row">
//             {/* Left Side: Vision Section */}
//             <div className="col-md-6">
//               <h2 style={{ fontSize: 'xx-large' }}> (Vision)</h2>
//               <p>
//                By 2022, we envision transforming the hospital into a center of excellence for research, education, and clinical care, dedicated to improving health outcomes and providing compassionate services to our community.
//                         </p>
           
//             </div>

//             {/* Right Side: Mission Section */}
//             <div className="col-md-6">
//               <h2 style={{ fontSize: 'xx-large' }}> (Mission)</h2>
//               <p>
//                 St. Peter Hospital is committed to providing high-quality, affordable, and patient-centered healthcare services, with a focus on specialized TB treatment and other essential health services.
//               </p>
//             </div>
//           </div>
//         </blockquote>
//       </div>
//     </section>
//   </main>
// </div>

//   );
// };
const AboutUs = () => {
  return (
    <div className="wrapper home-default-wrapper">
      <main className="main-content site-wrapper-reveal">
        <section className="hero-slider">
          <div className="container-fluid px-0">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: `url(${img3})` }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <div className="slider-content">
                          <h5 className="title animated delay2">መኖራችን <span className="d-block">ለእርስዎ ነዉ!</span></h5>
                          <h2 className="title animated delay2">Our Existence is <span className="d-block">For You</span></h2>
                          <a href="#" className="btn btn-danger w-auto px-4 py-2">about us</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area">
          <div className="container">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="post-details-content">
                  <h5 className="title" style={{ color: 'lightseagreen' }}>Introduction</h5>
                  <p>St. Peter Hospital boasts a rich history dating back to Sene 23, 1953 EC, when it was established in Mesalemiya...</p>
                  <p>The hospital served around 250 patients daily and extended its reach through an outreach wing equipped with a portable X-ray machine...</p>
                  <p>In 2005 EC, St. Peter Hospital embarked on a significant expansion of its specialty services...</p>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <img src={img2} alt="St. Peter Hospital" className="img-fluid rounded shadow-sm" />
              </div>
            </div>

            <blockquote className="blockquote-style mt-5">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <h2 className="fs-1">History & Expansion</h2>
                  <p>St. Peter Hospital became a national leader in multidrug-resistant tuberculosis...</p>
                </div>

                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Milestones & Developments</h2>
                  <p>In 2008 EC, during Ato Yakob Seman's tenure as Chief Executive Officer...</p>
                </div>
              </div>
            </blockquote>

            <blockquote className="blockquote-style mt-5">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Vision</h2>
                  <p>By 2022, we envision transforming the hospital into a center of excellence...</p>
                </div>

                <div className="col-12 col-md-6">
                  <h2 className="fs-1">Mission</h2>
                  <p>St. Peter Hospital is committed to providing high-quality, affordable...</p>
                </div>
              </div>
            </blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
