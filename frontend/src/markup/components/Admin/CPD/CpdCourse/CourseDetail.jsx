import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../../../../contexts/AuthContext";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function CourseDetail() {
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [course, setCourse] = useState(null);
  const [createSchedule, setCreateSchedule] = useState(false);
  const { course_id } = useParams();
  const [success, setSuccess] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const handleShow = () => {setShow(true);
    setFormData(course);
  };
  const [formData, setFormData] = useState({
    course_name: "",
    course_level: "",
    credits: "",
    pri_test: null,
    pri_test_duration: "",
    post_test: null,
    post_test_duration: "",
    minimum_score: "",
  });
  const [schedule, setSchedule] = useState({});
  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setShow(false);
    setSuccess(false);
    setFormData(course);
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file inputs
    }));
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `${api_url}/api/cpd/course/${course_id}`,
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        setCourse(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };

    fetchCourse();
  }, [token, navigate, course_id, api_url, refresh]);

  // check is the file path is correct

  const checkFilePath = (file) => {
    if (!file && typeof file !== "string") return false;
    if (typeof file !== "string") return false;

    const allowedExtensions = ["xlsx"]; // Define allowed extensions
    const fileExtension = file.split(".").pop().toLowerCase(); // Extract file extension

    // Check if the file extension matches allowed extensions
    return allowedExtensions.includes(fileExtension);
  };

  // check if the file type is xlsx
  const isXlsxFile = (file) => {
    if (!file || !file.name) return false;
    const allowedExtensions = ["xlsx"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
  };

  const handleEdit = async () => {
    const submissionData = new FormData();
    submissionData.append("course_name", formData.course_name);
    submissionData.append("course_level", formData.course_level);
    submissionData.append("credits", formData.credits);
    submissionData.append("pri_duration", formData.pri_test_duration);
    submissionData.append("post_duration", formData.post_test_duration);
    submissionData.append("min_score", formData.minimum_score);
    if (
      formData.pri_test &&
      (isXlsxFile(formData.pri_test) || checkFilePath(formData.pri_test))
    ) {
      submissionData.append("pri_test", formData.pri_test);
    } else {
      alert("Please upload a valid xlsx file for pri_test");
      return;
    }
    if (
      (formData.post_test && isXlsxFile(formData.post_test)) ||
      checkFilePath(formData.post_test)
    ) {
      submissionData.append("post_test", formData.post_test);
    } else {
      alert("Please upload a valid xlsx file for post_test");
      return;
    }
    try {
      const response = await axios.put(
        `${api_url}/api/cpd/course/${course_id}`,
        submissionData,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (response.status === 200) {
        // alert("Course details updated successfully!");
        setRefresh(!refresh);
        setSuccess(true);
        setTimeout(() => {
          handleClose();
        }, 1500);
      }
    } catch (error) {
      console.error("Error updating course details:", error);
    }
  };

  const handleDelete = async () => {
    // confirm deletion by alert
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await axios.delete(
        `${api_url}/api/cpd/course/${course_id}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      if (response.status === 200) {
        alert("Course deleted successfully!");
        handleClose();
        navigate("/admin/cpd/list");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleSchedule = async (e) => {
    e.preventDefault();
    const submitData = new FormData();
    submitData.append("course_name", formData.course_name);
    submitData.append(
      "registration_start_date",
      schedule.registration_start_date
    );
    submitData.append("registration_end_date", schedule.registration_end_date);
    submitData.append("course_start_date", schedule.course_start_date);
    submitData.append("course_end_date", schedule.course_end_date);

    try {
      const response = await axios.post(
        `${api_url}/api/cpd/schedule/${course_id}`,
        submitData,
        {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setCreateSchedule(!createSchedule);
        setTimeout(() => {
          handleCloseSchedule();
          navigate(`/admin/cpd/schedule`);
        }, 1500);
      }
    } catch (error) {
      console.error("Error updating schedule:", error);
    }
  };

  const [show, setShow] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCloseSchedule = () =>{ setShowSchedule(false);
    setFormData(course);
  };
  const handleShowSchedule = () => {setShowSchedule(true);
    setFormData(course);};

  if (!course) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card ">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">{course.course_name}</h2>
          <p>
            <strong>Course Level:</strong> {course.course_level}
          </p>
          <p>
            <strong>credits:</strong> {course.credits}
          </p>
          <p>
            <strong>Minimum Score Required:</strong> {course.minimum_score}
          </p>
          <p>
            <strong>Primary Test:</strong>{" "}
            {course.pri_test ? (
              <span className="text-success">Attached</span>
            ) : (
              <span className="text-danger">Not Attached</span>
            )}
          </p>
          <p>
            <strong>Primary Test Duration:</strong> {course.pri_test_duration}{" "}
            minutes
          </p>
          <p>
            <strong>Post Test:</strong>{" "}
            {course.post_test ? (
              <span className="text-success">Attached</span>
            ) : (
              <span className="text-danger">Not Attached</span>
            )}
          </p>
          <p>
            <strong>Post Test Duration:</strong> {course.post_test_duration}{" "}
            minutes
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button className="btn" onClick={() => navigate("/admin/cpd/list")}>
              Back
            </button>
            <button
              variant="primary"
              className="btn"
              onClick={(() => handleEdit, handleShow)}
            >
              Edit
            </button>
            <button className="btn" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn" onClick={handleShowSchedule}>
              Schedule
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        // animation={false}
        size="lg"
        // Increased modal width
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{
              maxWidth: "100%",
            }}
            onSubmit={(event) => {
              event.preventDefault(); // Prevent the page refresh
              handleEdit(); // Call the edit handler
            }}
          >
            <div className="mb-3">
              {success && (
                <div className="alert alert-success py-1">
                  course updated successfully
                </div>
              )}
              <label htmlFor="courseName" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                value={formData.course_name}
                placeholder="Enter course name"
                required
                name="course_name"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="courseLevel" className="form-label">
                Course Level
              </label>
              <input
                type="text"
                id="courseLevel"
                value={formData.course_level}
                placeholder="Enter course level"
                required
                name="course_level"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="credits" className="form-label">
                Credits
              </label>
              <input
                type="number"
                id="credits"
                value={formData.credits}
                placeholder="Enter credits"
                required
                name="credits"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="priTestQuestion" className="form-label">
                Pri-Test Questions{" "}
                <span className="text-muted text-sm">
                  (leave blank to keep existing questions)
                </span>
              </label>
              <input
                type="file"
                id="priTestQuestion"
                accept=".xlsx"
                name="pri_test"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="priTestDuration" className="form-label">
                Primary Test Duration (minutes)
              </label>
              <input
                type="number"
                id="priTestDuration"
                value={formData.pri_test_duration}
                placeholder="Enter duration in minutes"
                required
                name="pri_test_duration"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postTestQuestion" className="form-label">
                Post-Test Questions{" "}
                <span className="text-muted text-sm">
                  (leave blank to keep existing questions)
                </span>
              </label>
              <input
                type="file"
                id="postTestQuestion"
                accept=".xlsx"
                name="post_test"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="postTestDuration" className="form-label">
                Post Test Duration (minutes)
              </label>
              <input
                type="number"
                id="postTestDuratio"
                value={formData.post_test_duration}
                placeholder="Enter duration in minutes"
                required
                name="post_test_duration"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="minimumScore" className="form-label">
                Minimum Score for Passing Post-Test
              </label>
              <input
                type="number"
                id="minimumScore"
                value={formData.minimum_score}
                placeholder="Enter minimum score"
                required
                name="minimum_score"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                fontWeight: "bold",
                padding: "10px",
                fontSize: "16px",
              }}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showSchedule}
        onHide={handleCloseSchedule}
        backdrop={true}
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Schedule {formData.course_name} Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSchedule}>
            <div className="mb-3">
              {createSchedule && (
                <div className="alert alert-success py-1">
                  Schedule created successfully
                </div>
              )}
              <label htmlFor="" className="form-label">
                Registration start date
              </label>
              <input
                type="date"
                required
                className="form-control mb-3"
                name="registration_start_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />

              <label htmlFor="" className="form-label">
                Registration end date
              </label>
              <input
                type="date"
                required
                className="form-control mb-3"
                name="registration_end_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <label htmlFor="" className="form-label">
                Training start date
              </label>
              <input
                type="date"
                required
                className="form-control mb-3"
                name="course_start_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
              <label htmlFor="" className="form-label">
                Training end date
              </label>
              <input
                type="date"
                required
                className="form-control mb-3"
                name="course_end_date"
                onChange={handleScheduleChange}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <button className="btn " variant="primary" type="submit">
              Save
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSchedule}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CourseDetail;
