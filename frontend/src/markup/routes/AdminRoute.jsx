// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Applicants from "../components/Admin/Applicant/Applicant.jsx";
import ApplicantDetails from "../components/Admin/Applicant/ApplicantDetail.jsx";
import AdminMenu from "../components/Admin/AdminMenu/AdminMenu.jsx";
import logo from "../../assets/img/logo copy.png";
import AdminDashbord from "../components/Admin/AdminDashbord/AdminDashbord.jsx";
import VideoEmbeds from '../components/Admin/VideoEmbeds/videos.jsx';

/* ************ News Components Start Here about news ********************  */
import AddNews from "../components/Admin/AddNewsForm/AddNewsForm.jsx";
import EditNews from "../components/Admin/NewsEditForm/NewsEditForm.jsx";
import Newss from "../components/Admin/NewsList/NewsList.jsx";
/* **************** News Components End Here about news  ******************/
/* ************ Health Tip Components Start Here ********************  */
import HealthTipList from "../components/Admin/HealthTipList/HealthTipList.jsx";
import AddHealthTipForm from "../components/Admin/addhealthtipForm/AddHealthTipForm.jsx";
import EditHealthTip from "../components/Admin/EditHealthTipForm/EditHealthTipForm.jsx";
import AddJobForm from "../components/Admin/AddJobsForm/AddJobsForm.jsx";
import EditJobForm from "../components/Admin/JobsEditForm/EditJobForm.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";
import AdminManagement from "../pages/Admin/AdminManagement.jsx";
import AddAdmin from "../pages/Admin/AddAdmin.jsx";
import JobsListPage from "../components/Admin/JobList/JobList.jsx";
import { updatePasswordSchema } from "../../Schemas/validationSchemas.js";
const api_url = import.meta.env.VITE_API_URL;
import ApplicantsPage from "../components/Admin/Applicant/ApplicantsPage.jsx";
import HRManagerApplicants from "../components/Admin/Applicant/HRManagerApplicants.jsx";
import JobArchivePage from "../components/Admin/Applicant/JobArchivePage.jsx";
import AddNewCourse from "../components/Admin/CPD/CpdCourse/AddNewCourse.jsx";
import ListAllCourses from "../components/Admin/CPD/CpdCourse/ListAllCourses.jsx";
import CourseDetail from "../components/Admin/CPD/CpdCourse/CourseDetail.jsx";
// import ContactDashboard from "../components/Admin/Contact/ContactDashboard.jsx";
// import AdminLayout from "../components/Admin/AdminLayout.jsx";
// CPD News Components
import AddCpdNewsForm from "../components/Admin/CPDNewsForm/AddCpdNewsForm.jsx";
import CpdNewsList from "../components/Admin/CPDNewsList/CpdNewsList.jsx";
import EditCpdNewsForm from "../components/Admin/CPDNewsDetails/EditCpdNewsForm .jsx";
import Cpdnews from "../pages/CPD/Cpdnews.jsx";

const AdminRoute = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const logOut = () => {
    sessionStorage.removeItem("access-token");
    navigate("/login");
  };

  useEffect(() => {
    const token = user ? user.token : null;
    if (!token) {
      navigate("/login");
      return;
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
    }
  }, [navigate, user]);

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
        className="w-100 gradientCustom px-3 d-flex align-items-center justify-content-between"
      >
        <div>
          <Link to="/">
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-end">
          <h2 className="m-0 text-white pr-3">Welcome: {user?.username}</h2>

          <button onClick={logOut} className="btn btn-danger">
            <img
              src="https://img.icons8.com/?size=100&id=26215&format=png&color=FFFFFF"
              alt="Logout Icon"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
          <img
            src="https://img.icons8.com/?size=100&id=65342&format=png&color=00a99e"
            alt="Profile Icon"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "70px" }}>
        {/* Fixed Sidebar */}
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
          <AdminMenu />
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
<Route path="/cpd-news" element={<Cpdnews />} />
                <Route path="/add-cpd-news" element={<AddCpdNewsForm />} />
                <Route path="/edit-cpd-news/:newsId" element={<EditCpdNewsForm/>} />
                <Route path="/cpd-news-list" element={<CpdNewsList />} />
              <Route path="/cpd/newCourse" element={<AddNewCourse />} />
              <Route path="/cpd/list" element={<ListAllCourses />} />
              <Route path="/cpd/course/:course_id" element={<CourseDetail />} />
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
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

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
