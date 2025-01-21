import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import Test3 from "./Test3";

const api_url = import.meta.env.VITE_API_URL;

function Test2() {
  const [appliedCourses, setAppliedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { trainee } = useAuth();
  const id = trainee?.id;
  useEffect(() => {
    const fetchAppliedCourses = async () => {
      if (!id) {
        setError("Trainee ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${api_url}/api/cpd/IsApply/${id}`);

        if (response?.data?.data?.length > 0) {
          setAppliedCourses(response.data.data);
        } else {
          setError("No courses found.");
        }
      } catch (err) {
        console.error("Error fetching applied courses:", err);
        setError("Failed to fetch applied courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppliedCourses();
  }, [id]);

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4" style={{ color: "#4a90e2" }}>
        Applied Courses
      </h1>
      {loading ? (
        <p className="text-center text-muted">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : selectedCourse ? (
        <Test3
          courseName={selectedCourse.course_name}
          onBack={handleBack}
          id={id}
        />
      ) : (
        <div className="row">
          {appliedCourses.map((course) => (
            <div key={course.course_id} className="col-md-4 mb-3">
              <div
                className="card h-100 shadow-sm"
                style={{ border: "1px solid #ddd", borderRadius: "8px" }}
              >
                <div className="card-body d-flex flex-column align-items-center">
                  <p
                    className="card-text text-center fw-bold"
                    style={{ color: "#333", fontSize: "1.1rem" }}
                  >
                    {course.course_name}
                  </p>
                  <button
                    className="btn btn-primary mt-auto"
                    style={{ backgroundColor: "#4a90e2", border: "none" }}
                    onClick={() => handleViewCourse(course)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Test2;
