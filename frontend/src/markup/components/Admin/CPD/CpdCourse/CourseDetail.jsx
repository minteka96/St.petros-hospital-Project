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
  const { course_id } = useParams();
  const [success, setSuccess] = useState(false);
  const [refresh, setRefresh] = useState(false);
 const handleClose = () => {
   setShow(false);
   setSuccess(false);
 };
 const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({
      course_name: "",
      course_level: "",
      pri_test: null,
      pri_duration: "",
      post_test: null,
      post_duration: "",
      minimum_score: "",
    });

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

  const handleEdit = async() => {
   try {
    const response = await axios.put(
      `${api_url}/api/cpd/course/${course_id}`,
      formData,
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
  }

  const handleDelete = async() => {
   // confirm deletion by alert 
   const confirmDelete = window.confirm(
    "Are you sure you want to delete this course?");
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

  const handleSchedule = () => {
    
  };

  const [show, setShow] = useState(false);
  
 

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
            <button className="btn" onClick={handleSchedule}>
              Schedule
            </button>
          </div>
        </div>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
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
                  <div className="alert alert-success py-1">course updated successfully</div>
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
                  name="pri_duration"
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
                  id="postTestDuration"
                  value={formData.post_test_duration}
                  placeholder="Enter duration in minutes"
                  required
                  name="post_duration"
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
                  name="min_score"
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
      </div>
    </div>
  );
}

export default CourseDetail;
