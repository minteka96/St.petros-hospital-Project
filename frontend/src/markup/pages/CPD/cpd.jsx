import certificatee from "./assets/WhatsApp Image 2024-10-21 at 15.00.11.jpeg";
import img5 from "./assets/100011.png";
import smImg1 from "./assets/facebook.png";
import smImg2 from "./assets/instagram.png";
import smImg3 from "./assets/social.png";
import smImg4 from "./assets/telegram.png";
import smImg5 from "./assets/tik-tok.png";
import arrow1 from "./assets/arrowheade.png";
import arrow2 from "./assets/arrowhead.png";
import certificate from "./assets/certificate.png";
import doctor from "./assets/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture.jpg";
import { useState } from "react";
import tr1 from "./assets/tr1.jpg";
import tr2 from "./assets/tr2.jpg";
import tr3 from "./assets/tr3.jpg";
import { useLocation } from "react-router-dom";
import "./style.css"

const Cpd = () => {
  const [isCertified, setIsCertified] = useState(false);
  const [registrationForm, setRegistrationForm] = useState("G-8");
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  const next = () => {
    if (registrationForm === "G-8") {
      setRegistrationForm("G-9");
    }
  };

  const prev = () => {
    if (registrationForm === "G-9") {
      setRegistrationForm("G-8");
    }
  };

  const [formData, setFormData] = useState({
    title: "Mrs",
    firstName: "",
    fatherName: "",
    grandfatherName: "",
    email: "",
    profession: "",
    phone: "",
    courses: "TB-HIV",
    level: "Basic",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };
  const location = useLocation();
  console.log(location.hash);

  const isActive = (path) => location.hash === path;
  console.log(isActive("#general"));

  return (
    <div>
      {/* <section className="flex w-full mx-auto "> */}
      {/* <section className="md:block hidden w-1/5"></section> */}

      {/* sidebar  fixed on the left side with full height */}
      {/* hide for mobile view */}
      
      {/* <div className="hidden w-1/6 fixed left-0 h-screen bg-white border-r flex flex-col justify-between">
          <div className="px-4 py-6 screen-xl ">
            <span className="grid w-1/2 mx-auto place-content-center  ">
              <img src={img5} alt="" />
            </span>

            <ul className="mt-6 space-y-1">
              <li>
                <a
                  href="#general"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                    isActive("#general") ? "bg-gray-100" : ""
                  }`}
                >
                  General
                </a>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Registration </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <a
                        onClick={prev}
                        href="#Registration/g8"
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                          isActive("#Registration/g8") ? "bg-gray-100" : ""
                        }`}
                      >
                        Trainee Group 8
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={next}
                        href="#Registration/g9"
                        className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                          isActive("#Registration/g9") ? "bg-gray-100" : ""
                        }`}
                      >
                        Trainee Group 9
                      </a>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <a
                  href="#trainers"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                    isActive("#trainers") ? "bg-gray-100" : ""
                  }`}
                >
                  Trainers
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                    isActive("#gallery") ? "bg-gray-100" : ""
                  }`}
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#certificate"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                    isActive("#certificate") ? "bg-gray-100" : ""
                  }`}
                >
                  Certificate
                </a>
              </li>

              <li>
                <a
                  href="#feedback"
                  className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 ${
                    isActive("#feedback") ? "bg-gray-100" : ""
                  }`}
                >
                  Fee back
                </a>
              </li>
            </ul>
          </div>

          <div className="mx-auto absolute bottom-0 border-t border-gray-100 flex justify-between lg:justify-center lg:gap-4 items-center bg-white p-4 w-full ">
            <img alt="" src={smImg1} className="size-5 object-cover" />
            <img alt="" src={smImg2} className="size-5 object-cover" />
            <img alt="" src={smImg3} className="size-5 object-cover" />
            <img alt="" src={smImg4} className="size-5 object-cover" />
            <img alt="" src={smImg5} className="size-5 object-cover" />
          </div>
        </div> */}

      {/* main content align to the right */}
      
      <section className=" sm:w-5/6 w-full flex flex-col mx-auto my-4 ">
        <h1 className="text-orange-500 text-center font-bold text-3xl">
          CPD CENTER
        </h1>
        {/* about */}
        <section
          className="hover:shadow-2xl shadow-lg m-4 p-4 bg-white"
          role="region"
          aria-labelledby="general"
        >
          <h1
            id="general"
            className="text-center text-2xl font-semibold mb-4 text-orange-500"
          >
            About
          </h1>
          <div className="relative">
            <div className=" inset-0 opacity-5 bg-gray-200 rounded-lg"></div>
            <div className="w-full leading-relaxed text-justify text-gray-700">
              <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                St. Peter Specialized Hospital training center was renovated by
                USAID/TB CARE I. The training center was inaugurated on 5
                February 2013. The Hospital requested a position for the center
                from civil service, Ethiopia to consider it as one of the
                departments and to start work officially. The required office
                for training and cafeteria materials and equipment are fulfilled
                by TB CARE 1. St. Peter Specialized Hospital has assigned
                professionals such as a training coordinator, training officer,
                and other supportive staff. The organized training team started
                work from scratch.
              </p>
              {/* Additional paragraphs, only visible when showMore is true */}
              {showMore && (
                <>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    The training center has no budget to conduct any training
                    events. The first step of the training team was experience
                    sharing from an experienced training center, especially from
                    ALERT training center. Based on this, they started writing
                    proposals to partners to link to the Hospital’s focused
                    areas on TB and MDR-TB. The first partners that worked with
                    our training center were TB CARE 1 and WHO, Ethiopia, who
                    funded us for programmatic management of drug-resistant TB,
                    TB infection control, and second-line drug supply management
                    training respectively.
                  </p>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    The training team has now gained some knowledge to proceed
                    smoothly. The necessary materials and equipment have been
                    fulfilled by TB CARE 1 in addition to the establishment of
                    the center. Based on the capacity assessment done by the
                    federal ministry of health in November 2014, our training
                    center was graded "A" for fulfilling the minimum
                    requirements to conduct training. It was accepted as the
                    national TB/HIV training center by the federal ministry of
                    health.
                  </p>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    Training primarily involves transferring or obtaining the
                    knowledge, attitudes, and skills needed to carry out
                    specific tasks. It is assumed that the learned skills will
                    be applied in real life (as differentiated from education,
                    which is most often directed toward future goals). The
                    training will primarily target frontline healthcare workers
                    who interact regularly with individuals in both clinical and
                    community settings. Frontliners have the potential to
                    positively impact public health and would greatly benefit
                    from increased public health knowledge.
                  </p>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    Quality in-service training (IST) helps to improve
                    healthcare services by increasing the competency of health
                    workers. Our center is among 35 potential in-service
                    training centers in Ethiopia. In-service training is a staff
                    development process aimed at improving employee performance
                    within their assigned job responsibilities. In the health
                    sector, it is designed to strengthen the competencies of
                    health workers, ensuring they have the latest knowledge and
                    mastery of techniques according to scientific information
                    and standardized practices.
                  </p>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    Institutionalization of in-service training builds the
                    capacity of local training institutions to design and
                    deliver need-based training for healthcare workers. The goal
                    of the training center is to enhance professionals’
                    knowledge, skills, and attitudes in their areas of work. The
                    training service is integrated with clinical service to fill
                    gaps identified through training needs assessments. St.
                    Peter Specialized Hospital is a center of excellence in TB
                    and is the ideal training site for TB, TB/HIV, and MDR-TB,
                    along with other comprehensive national training packages.
                  </p>
                  <p className="mb-3 text-left rtl:text-right dark:text-gray-500 px-4">
                    Our center has conducted numerous structured national
                    training packages for healthcare workers to address both
                    clinical and programmatic issues. It is accessible to
                    national and regional health bureaus, including the federal
                    ministry of health. The training center has trained many
                    healthcare workers in various disciplines based on
                    performance need assessments. The training center’s
                    performance from September 2013 to July 2016 is detailed at
                    the end of this portfolio. The center also accommodates
                    trainees who self-sponsor their training.
                  </p>
                </>
              )}
              {/* Show More / Show Less button */}
              <button
                onClick={toggleShowMore}
                className="mt-4  text-blue-500 hover:text-blue-800 border transparent-500 bg-teal-100 hover:bg-orange-100 rounded px-4 py-2"
              >
                {showMore ? "⏫" : "⏬"}
              </button>
            </div>
          </div>
        </section>
        {/* trainers */}
        <section
          className="hover:shadow-2xl bg-white shadow-lg p-4 m-4 "
          role="region"
          aria-labelledby="trainers"
        >
          <h1
            id="trainers"
            className="text-center font-bold text-3xl text-teal-500"
          >
            Trainers
          </h1>
          <div className="mx-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <img
                className="mx-auto w-auto rounded-lg bg-white"
                src={doctor}
                alt=""
              />
              <h2 className="text-center font-bold text-xl">Test Test Test</h2>
              <p className="text-center text-gray-500">+2519 11 11 11 11 </p>
              <p className="text-center text-gray-500">
                E-mail: fortest@gmail.com
              </p>
            </div>

            <div>
              <img
                className=" mx-auto w-auto rounded-lg bg-white"
                src={doctor}
                alt=""
              />
              <h2 className="text-center font-bold text-xl">Test Test Test</h2>
              <p className="text-center text-gray-500">+2519 11 11 11 11 </p>
              <p className="text-center text-gray-500">
                E-mail: fortest@gmail.com
              </p>
            </div>
            <div>
              <img
                className=" mx-auto w-auto rounded-lg bg-white"
                src={doctor}
                alt=""
              />
              <h2 className="text-center font-bold text-xl">Test Test Test</h2>
              <p className="text-center text-gray-500">+2519 11 11 11 11 </p>
              <p className="text-center text-gray-500">
                E-mail: fortest@gmail.com
              </p>
            </div>
          </div>
        </section>
        {/* About Registration */}
        <section
          role="region"
          aria-labelledby="Registration"
          className="hover:shadow-2xl bg-white shadow-lg p-6 m-4 rounded-md transition duration-300 ease-in-out"
        >
          <span className="flex justify-center">
            <h1
              id="Registration/g9"
              className="text-3xl mb-4 font-bold text-center text-orange-500"
            >
              Registration
            </h1>
            <p id="Registration/g8"></p>
          </span>
          <div className="lg:flex ">
            {/* Registration Details */}
            <div className="w-full pr-6">
              <h2 className="text-xl font-italic text-center  text-red-500">
                ⚠️ Notice only for company employees
              </h2>
              <p className="text-lg text-gray-700">
                Here you can find the details about the registration process.
                Please make sure to follow the steps correctly to complete your
                registration.
              </p>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">
                Registration Procedure
              </h2>
              <ol className="list-decimal ml-5 text-lg text-gray-700">
                <li className="mb-2">
                  Visit the registration link provided below.
                </li>
                <li className="mb-2">
                  Fill out all required fields in the registration form
                  accurately.
                </li>
                <li className="mb-2">
                  Ensure your email address is valid, as a confirmation email
                  will be sent.
                </li>
                <li className="mb-2">
                  Review your entries before submitting the form to avoid
                  errors.
                </li>
                <li className="mb-2">
                  Submit the form and await a confirmation notification from our
                  team.
                </li>
                <li>
                  For any queries or issues during registration, please contact
                  our support team.
                </li>
              </ol>
            </div>

            {/* Registration Form and Navigation */}
            <div className="w-full ">
              {/* Navigation Bar */}
              <div className="flex justify-between items-center w-full border border-gray-300 rounded-md px-4 py-3 mb-4 bg-gray-50 hover:bg-gray-100 transition duration-300">
                <button
                  onClick={prev}
                  className={`flex items-center cursor-pointer text-white hover:text-gray-800 bg-teal-500 hover:bg-orange-500 ${
                    registrationForm === "G-8"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={registrationForm === "G-8"}
                >
                  <img
                    src={arrow1}
                    alt="Previous"
                    className="w-6 h-6 bg-white rounded-full p-1 mr-2"
                  />
                  <p className="sm:block hidden">Prev</p>
                </button>
                <span className="sm:text-lg font-medium text-gray-800">
                  Trainee {registrationForm} Registration
                </span>
                <button
                  onClick={next}
                  className={`flex items-center cursor-pointer text-white hover:text-gray-800 bg-teal-500 hover:bg-orange-500 ${
                    registrationForm === "G-9"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={registrationForm === "G-9"}
                >
                  <p className="sm:block hidden mb-0">Next</p>
                  <img
                    src={arrow2}
                    alt="Next"
                    className="w-6 h-6 bg-white rounded-full p-1 ml-2"
                  />
                </button>
              </div>

              {/* Embedded Google Form */}
              {registrationForm === "G-8" && (
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSchB9YX6TxjAJrcp1y1SHkzDPEXg-n08z069jWHpq_v9A29Bg/viewform?pli=1"
                  className="w-full h-[500px] border border-gray-300 rounded-md shadow-md"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Trainee G-8 Registration Form"
                ></iframe>
              )}
              {registrationForm === "G-9" && (
                <form
                  onSubmit={handleSubmit}
                  className="max-w-lg h-[500px] mx-auto bg-white scroll-auto p-6 rounded-lg shadow-md overflow-y-auto"
                >
                  <h2 className="text-2xl font-bold mb-4">Trainee Group 8</h2>
                  <h3 className="text-xl font-semibold mb-6">TB-HIV</h3>

                  <label className="block mb-4">
                    <span className="text-gray-700">Title</span>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Father Name</span>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Grandfather Name</span>
                    <input
                      type="text"
                      name="grandfatherName"
                      value={formData.grandfatherName}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Profession</span>
                    <input
                      type="text"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Courses</span>
                    <select
                      name="courses"
                      value={formData.courses}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    >
                      <option value="TB-HIV">TB-HIV</option>
                      <option value="Course2">Course2</option>
                    </select>
                  </label>

                  <label className="block mb-4">
                    <span className="text-gray-700">Level of Training</span>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                    >
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </label>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-teal-500 text-teal-50 font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* gallery */}
        <section
          className="hover:shadow-2xl bg-white shadow-lg p-4 m-4 "
          role="region"
          aria-labelledby="gallery"
        >
          <h1
            id="gallery"
            className="text-center font-bold text-3xl p-4 text-teal-500"
          >
            GALLERY
          </h1>
          <div className="mx-4 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <img className="w-auto rounded-md bg-white" src={tr1} alt="" />
            <img className="w-auto rounded-md bg-white" src={tr2} alt="" />
            <img className="w-auto rounded-md bg-white" src={tr3} alt="" />
          </div>
        </section>
        {/* Certification*/}
        <section
          className="hover:shadow-2xl bg-white shadow-lg m-4 p-4 "
          role="region"
          aria-labelledby="certification"
        >
          <h1
            id="certificate"
            className="text-center font-bold text-3xl text-orange-500"
          >
            Certification
          </h1>

          {/* certificate */}
          {isCertified ? (
            <section className="text-center my-6">
              {/* Certificate Image */}
              <img
                src={certificatee}
                alt="Certificate Preview"
                className="mx-auto mb-4 shadow-lg rounded-md"
              />

              {/* Download Certificate Link */}
              <a
                href={certificatee} // Replace this with the actual file URL if it's hosted elsewhere
                download="Certificate.jpeg" // This specifies the default filename for the downloaded file
                className="inline-block px-6 py-2 bg-orange-500 text-teal-50 font-semibold rounded-md shadow hover:bg-teal-500 transition-colors duration-300"
              >
                Download Certificate
              </a>
            </section>
          ) : (
            <section className=" w-full grid lg:grid-cols-2 grid-cols-1  items-center  ">
              <div className=" w-auto px-4 py-12  md:py-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                  <h1 className="text-2xl font-bold sm:text-3xl">
                    Get Your Certification!
                  </h1>

                  <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    libero nulla eaque error neque ipsa culpa autem, at itaque
                    nostrum!
                  </p>
                </div>

                <form
                  action="#"
                  className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                  <div>
                    <label for="email" className="sr-only">
                      Email
                    </label>

                    <div className="relative">
                      <input
                        type="email"
                        required
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter email"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label for="password" className="sr-only">
                      Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />

                      <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      No account?
                      <a className="underline" href="#">
                        Sign up
                      </a>
                    </p>

                    <button
                      type="submit"
                      className="inline-block rounded-lg bg-orange-500 hover:bg-teal-500 text-teal-50 px-5 py-3 text-sm font-medium "
                      onClick={() => setIsCertified(true)}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className="md:block hidden mx-auto   sm:h-96 md:h-full">
                <img
                  alt=""
                  src={certificate}
                  className=" inset-0 my-auto  object-cover"
                />
              </div>
            </section>
          )}
        </section>
        {/* feedback */}
        {/*  */}
        <section
          className="hover:shadow-2xl bg-white shadow-lg m-4 p-4 rounded-lg"
          role="region"
          aria-labelledby="feedback"
        >
          <h1
            id="feedback"
            className="text-center text-2xl font-semibold text-teal-500"
          >
            Feedback
          </h1>
          <form className="mt-4">
            <textarea
              className="w-full h-40 p-4 border rounded-lg"
              placeholder="Leave your feedback here"
            ></textarea>
            <button className="mt-4 rounded-lg bg-orange-500 hover:bg-teal-500 text-teal-50 px-4 py-2 transition duration-200">
              Submit Feedback
            </button>
          </form>
        </section>
        {/* <section></section> */}
      </section>
      {/* </section> */}
    </div>
  );
};
export default Cpd;
