/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Form, InputGroup, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Applicants from "../components/Admin/Applicant/Applicant.jsx";
import ApplicantDetails from "../components/Admin/Applicant/ApplicantDetail.jsx";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu.jsx";
import logo from "../../assets/img/logo copy.png";
import AdminDashbord from "../components/Admin/AdminDashbord/AdminDashbord.jsx";
import VideoEmbeds from "../components/Admin/VideoEmbeds/videos.jsx";
/* ************ News Components Start Here about news ********************  */
import AddNews from "../components/Admin/AddNewsForm/AddNewsForm.jsx";
import EditNews from "../components/Admin/NewsEditForm/NewsEditForm.jsx";
import Newss from "../components/Admin/NewsList/NewsList.jsx";
/* **************** News Components End Here about news  ******************/

/* ************ Health Tip Components Start Here ********************  */
import HealthTipList from "../components/Admin/HealthTipList/HealthTipList.jsx";
import AddHealthTipForm from "../components/Admin/addhealthtipForm/AddHealthTipForm.jsx";
import EditHealthTip from "../components/Admin/EditHealthTipForm/EditHealthTipForm.jsx";
//import AddTenderForm from "../components/Admin/AddTenderForm/AddTenderForm.jsx";
import AddJobForm from "../components/Admin/AddJobsForm/AddJobsForm.jsx";
import EditJobForm from "../components/Admin/JobsEditForm/EditJobForm.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import AdminManagement from "../pages/Admin/AdminManagement.jsx";
import AddAdmin from "../pages/Admin/AddAdmin.jsx";
import JobsListPage from "../components/Admin/JobList/JobList.jsx";


// CPD News Components

import { updatePasswordSchema } from "../../Schemas/validationSchemas.js";
const api_url = import.meta.env.VITE_API_URL;
import ApplicantsPage from "../components/Admin/Applicant/ApplicantsPage.jsx";
import HRManagerApplicants from "../components/Admin/Applicant/HRManagerApplicants.jsx";
import JobArchivePage from "../components/Admin/Applicant/JobArchivePage.jsx";
import ListAllCourses from "../components/Admin/CPD/CpdCourse/ListAllCourses.jsx";
import CourseDetail from "../components/Admin/CPD/CpdCourse/CourseDetail.jsx";
import AddNewCourse from "../components/Admin/CPD/CpdCourse/AddNewCourse.jsx";

import AddCpdNewsForm from "../components/Admin/CPDNewsForm/AddCpdNewsForm.jsx";
import CpdNewsList from "../components/Admin/CPDNewsList/CpdNewsList.jsx";
import EditCpdNewsForm from "../components/Admin/CPDNewsDetails/EditCpdNewsForm .jsx";
import Cpdnews from "../pages/CPD/Cpdnews.jsx";
import ContactList from "../components/Admin/ContactList/ContactList.jsx";
import ContactDetail from "../components/Admin/ContactDetail/ContactDetail.jsx";
import ListOfSchedule from "../components/Admin/CPD/CpdSchedules/ListOfSchedule.jsx";
import Trainee from "../components/Admin/CPD/Trainees/Trainee.jsx";

// Train Info Components
import TrainInfoList from "../../markup/components/Admin/Trainer/TrainInfoList.jsx";
// import TrainInfoDetail from "../../markup/components/Admin/Trainer/TrainInfoDetail.jsx";

import AddPublication from "../components/Admin/addpublication/AddPublication.jsx";
  import EditPublicationForm from "../components/Admin/EditPublicationForm/EditPublicationForm.jsx";
   import ResearchPublications from "../pages/qulity&research/ResearchPublication.jsx";
   import PublicationList from "../components/Admin/publicationlist/PublicationList.jsx";

const AdminRoute = () => {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem("access-token");
    window.location.href = "/";
  };

  const { user } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const togglePasswordVisibility = (setter) => {
    setter((prev) => !prev);
  };

  const handleClose = () => {
    setShow(false);
    setError("");
    togglePasswordVisibility(setShowCurrentPassword);
    togglePasswordVisibility(setShowNewPassword);
    togglePasswordVisibility(setShowConfirmPassword);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword) {
      const result = updatePasswordSchema.safeParse({
        password: newPassword,
      });

      if (!result.success) {
        setPasswordError(result.error.errors[0].message); // Set the first error message
        return;
      } else {
        setPasswordError("");
      }
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const formData = {
      email,
      currentPassword,
      newPassword,
    };
    const currentEmail = user ? user.email : null;
    if (email !== currentEmail) {
      setError("Email is not correct");
      return;
    }

    try {
      const response = await axios.put(
        `${api_url}/api/user/password/${email}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      // set timeout
      if (response.status === 200) {
        setTimeout(() => {
          handleClose();
          logOut;
          navigate("/login");
        }, 2000);
        setError("");
        setSuccess("Password updated successfully!");
        setNewPassword("");
        setCurrentPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error("Error:", err.response?.data.error);
      setError(err.response?.data.error);
    }
  };

  useEffect(() => {
    const token = user ? user.token : null;
    if (!token) {
      navigate("/login");
    }
    const isTokenExpired = () => {
      if (token) {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const expirationTime = decodedToken.exp;
        const currentTime = Date.now() / 1000;
        return expirationTime < currentTime;
      }
      return true;
    };

    if (isTokenExpired()) {
      sessionStorage.removeItem("access-token");
      navigate("/login");
      // window.location.href = "/login";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "white" }}>
      {/* Fixed Header */}
      <div
        style={{
          height: "70px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
        className="w-100 gradientCustom px-3 d-flex align-items-center justify-content-between "
      >
        <div>
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>

        <div className="d-flex align-items-center justify-content-end position-relative">
          <h2 className=" m-0 text-white pr-3">Welcom: {user?.username}</h2>

          <button onClick={logOut} className="btn btn-danger">
            <img
              src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
              alt="Logout Icon"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
          <img
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            src="https://img.icons8.com/?size=100&id=65342&format=png&color=00a99e"
            alt="Profile Icon"
            style={{ width: "50px", height: "50px", cursor: "pointer" }}
          />

          {isDropdownOpen && (
            <button
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onClick={handleShow}
              className="bg1 btn position-absolute top-100 left-0 border-white"
            >
              change password
            </button>
          )}
        </div>
      </div>

      <div className="row" style={{ marginTop: "70px" }}>
        <div
          className="col-md-3 normalBg p-0 admin-left-side"
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            height: "calc(100vh - 70px)",
            overflowY: "auto",
            zIndex: 999,
          }}
        >
          <div>
            <AdminMenu />
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className="col-md-9 admin-right-side p-0"
          style={{
            marginLeft: "25%",
            paddingTop: "70px",
            overflowY: "auto",
            height: "calc(100vh - 70px)",
          }}
        >
          <div className="m-3 normalBg">
            <Routes>
              <Route path="/video" element={<VideoEmbeds />} />
              <Route path="/" element={<AdminDashbord />} />
              <Route path="/admins" element={<AdminManagement />} />
              <Route path="/new" element={<AddAdmin />} />
              <Route path="/ApplicantsPage" element={<ApplicantsPage />} />
              <Route path="/JobArchivePage" element={<JobArchivePage />} />
              <Route path="/HRManagerApplicants" element={<HRManagerApplicants />} />
              <Route path="/applicant" element={<Applicants />} />
              <Route path="/applicant/:id" element={<ApplicantDetails />} />
              <Route path="/add-news" element={<AddNews />} />
              <Route path="/news" element={<Newss />} />
              <Route path="news/edit/:news_id" element={<EditNews />} />
              <Route path="/add-healthtip" element={<AddHealthTipForm />} />
              <Route path="/healthtipList" element={<HealthTipList />} />
              <Route path="/healthtiplist/edit/:health_tip_id" element={<EditHealthTip />} />
              <Route path="/add-job" element={<AddJobForm />} />
              <Route path="/all-job" element={<JobsListPage />} />
              <Route path="/job/edit/:job_id" element={<EditJobForm />} />
              
              {/* Train Info Routes */}
              <Route path="/trainees" element={<TrainInfoList    />} />
              {/* <Route path="/trainee/:id" element={<TrainInfoDetail />} /> */}
             

              <Route path="/add-publication" element={<AddPublication />} /> 
              <Route path="/publications" element={<ResearchPublications />} /> 
              <Route path="/publications/edit/:id" element={<EditPublicationForm />} />
              <Route path="/publicationlist" element={<PublicationList />} />
             
          
              <Route
                path="/edit-cpd-news/:newsId"
                element={<EditCpdNewsForm />}
              />
              {/*  */}
              <Route path="/cpd-news" element={<Cpdnews />} />
              <Route path="/add-cpd-news" element={<AddCpdNewsForm />} />
              <Route
                path="/edit-cpd-news/:newsId"
                element={<EditCpdNewsForm />}
              />
              <Route path="/cpd-news-list" element={<CpdNewsList />} />
              <Route path="/cpd/newCourse" element={<AddNewCourse />} />
              <Route path="/cpd/list" element={<ListAllCourses />} />
              <Route path="/cpd/course/:course_id" element={<CourseDetail />} />
              <Route path="/contact" element={<ContactList />} />
              <Route path="/contact/:id" element={<ContactDetail />} />
              <Route path="/cpd/schedule" element={<ListOfSchedule />} />
              <Route path="/cpd/trainees/:schedule_id" element={<Trainee />} />

            </Routes>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form id="change-password-form" onSubmit={handleSubmit}>
              {/* Email Address Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  required
                />
              </Form.Group>

              {/* Current Password Field */}
              <Form.Group className="mb-3" controlId="formCurrentPassword">
                <Form.Label>Current Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    type={showCurrentPassword ? "text" : "password"}
                    placeholder="Enter current password"
                    required
                  />
                  <button
                    type="button"
                    className="bg2"
                    variant="outline-secondary"
                    onClick={() =>
                      togglePasswordVisibility(setShowCurrentPassword)
                    }
                  >
                    {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </InputGroup>
              </Form.Group>

              {/* New Password Field */}
              <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                {passwordError && (
                  <div className="alert color1 pt-0 mb-1 p-1">
                    {passwordError}
                  </div>
                )}
                <InputGroup>
                  <Form.Control
                    onChange={(e) => setNewPassword(e.target.value)}
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    required
                  />
                  <button
                    type="button"
                    className="bg2"
                    variant="outline-secondary"
                    onClick={() => togglePasswordVisibility(setShowNewPassword)}
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </InputGroup>
              </Form.Group>

              {/* Confirm New Password Field */}
              <Form.Group className="mb-3" controlId="formConfirmNewPassword">
                <Form.Label>Confirm New Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter new password"
                    required
                  />
                  <button
                    type="button"
                    className="bg2"
                    variant="outline-secondary"
                    onClick={() =>
                      togglePasswordVisibility(setShowConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </InputGroup>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" form="change-password-form">
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AdminRoute;