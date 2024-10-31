import React from "react";

const Header = () => {
  return (
    <div>
      <main className="main-content site-wrapper-reveal">
        {/*== Start Map Area Wrapper ==*/}
        <div className="contact-map-area">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.263531705987!2d38.75581056600536!3d9.073717297055985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8ede0363bdaf%3A0xe1edc0f09e9bb639!2sSt.%20Peter%E2%80%99s%20Specialized%20Hospital!5e1!3m2!1sen!2set!4v1729108276923!5m2!1sen!2set"></iframe>
        </div>
        {/*== End Map Area Wrapper ==*/}

        {/*== Start Contact Area ==*/}
        <section className="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-info-content">
                  <div className="info-address">
                    <h2 className="title">
                      Ethiopia, Addiss Ababa
                    </h2>
                    <p>
                      Kidus Petros Hospital Gulele Sub-City, Addis Ababa,
                      Ethiopia.
                    </p>
                    <a href="mailto:hello@yourdomain.com">
                      Email: info@kpsh.gov.et
                    </a>
                  </div>
                  <div className="brand-office">
                    <div className="info-tem">
                      <h6>Call directly:</h6>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#ffffff",
                          lineHeight: "24px",
                        }}
                      >
                        +251111541746
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          color: "#ffffff",
                          lineHeight: "24px",
                        }}
                      >
                        998
                      </p>
                    </div>

                    <div className="info-tem mb-0">
                      <h6>Work Hours:</h6>
                      <p>Mon-Sun 24 Hour Sat-Sun 10:00AM - 6:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-form">
                  <div className="section-title text-center">
                    <p>Contact</p>
                    <h2 className="title">
                      <span> We Always Ready</span> To Help You
                    </h2>
                  </div>
                  <form
                    className="contact-form-wrapper"
                    id="contact-form"
                    action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="con_name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="con_email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="con_subject"
                            placeholder="Subject (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <textarea
                            name="con_message"
                            rows="5"
                            placeholder="Write your message here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="form-group mb-0">
                          <button
                            className="btn btn-theme btn-block"
                            type="submit"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Message Notification */}
                <div className="form-message"></div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Contact Area ==*/}

        {/*== Start Footer Area Wrapper ==*/}

        {/*== End Footer Area Wrapper ==*/}
      </main>
      <div className="offcanvas-overlay"></div>
      {/* offcanvas-overlay end */}

      {/* offcanvas-mobile-menu start */}
      <div
        id="offcanvas-mobile-menu"
        className="offcanvas offcanvas-mobile-menu"
      >
        <div className="inner">
          <div className="border-bottom mb-3 pb-3 text-end">
            <button className="offcanvas-close">×</button>
          </div>
          <div className="offcanvas-head mb-3">
            <div className="header-top-offcanvas">
              <p>
                <i className="icofont-google-map"></i>
                <span>ADDRESS:</span> 568 Elizaberth Str, London, UK
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
                    <a href="service-details.html">Service Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <span className="menu-text">Blog</span>
                </a>
                <ul className="offcanvas-submenu">
                  <li>
                    <a href="blog.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
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
            {/* media-list start */}
            <li className="media media-list">
              <span className="media-icon">
                <i className="icofont-clock-time"></i>
              </span>
              <div className="media-content">
                <span className="media-sub-heading">Working Hours</span>
                <span className="media-heading">MON - FRI: 9.00 - 21.00</span>
              </div>
            </li>
            {/* media-list end */}

            {/* media-list start */}
            <li className="media media-list">
              <span className="media-icon">
                <i className="icofont-ui-call"></i>
              </span>
              <div className="media-content">
                <span className="media-sub-heading">Hotline 24/7</span>
                <a className="media-heading" href="tel:+0962-58-58-258">
                  +0962-58-58-258
                </a>
              </div>
            </li>
            {/* media-list end */}

            {/* media-list start */}
            <li className="media media-list">
              <span className="media-icon">
                <i className="icofont-envelope"></i>
              </span>
              <div className="media-content">
                <span className="media-sub-heading">Email Us</span>
                <a
                  className="media-heading"
                  href="mailto:support@clenora.com.uk"
                >
                  support@clenora.com.uk
                </a>
              </div>
            </li>
            {/* media-list end */}
          </ul>
        </div>
      </div>
      {/* offcanvas-mobile-menu end */}

      {/* Scroll Top Button */}
      <div className="scroll-to-top">
        <span className="icofont-rounded-up"></span>
      </div>
    </div>
  );
};

export default Header;
