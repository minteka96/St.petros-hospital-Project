import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../../../../../contexts/AuthContext";
const api_url = import.meta.env.VITE_API_URL;
function AddNewCourse() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const token = user?.token;
  const [formData, setFormData] = useState({
    course_name: "",
    course_level: "",
    pri_test: null,
    pri_duration: "",
    post_test: null,
    post_duration: "",
    min_score: "",
    credits: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle file inputs
    }));
  };

  // check if the file type is xlsx
 const isXlsxFile = (file) => {
   if (!file || !file.name) return false;
   const allowedExtensions = ["xlsx"];
   const fileExtension = file.name.split(".").pop().toLowerCase();
   return allowedExtensions.includes(fileExtension);
 };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare FormData object for file and text data
    const submissionData = new FormData();
    submissionData.append("course_name", formData.course_name);
    submissionData.append("course_level", formData.course_level);
    submissionData.append("pri_duration", formData.pri_duration);
    submissionData.append("post_duration", formData.post_duration);
    submissionData.append("min_score", formData.min_score);
    submissionData.append("credits", formData.credits);
if (formData.pri_test && isXlsxFile(formData.pri_test)) {
  submissionData.append("pri_test", formData.pri_test);
}else{
  alert("Please upload a valid xlsx file for pri_test");
  return
}
if (formData.post_test && isXlsxFile(formData.post_test)) {
  submissionData.append("post_test", formData.post_test);
}else{
  alert("Please upload a valid xlsx file for post_test");
  return
}


    try {
      const response = await axios.post(
        `${api_url}/api/cpd/course`,
        // "http://localhost:3001/api/cpd/course",
        submissionData,
        {
          headers: {
            "x-access-token": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert("Form submitted successfully!");
        navigate("/admin/cpd/list");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Form submission failed!");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Add New Course Details
        </h2>

        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">
            Course Name
          </label>
          <input
            type="text"
            id="courseName"
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
            placeholder="Enter course level"
            required
            name="course_level"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="priTestQuestion" className="form-label">
            Primary Test Questions
          </label>
          <input
            type="file"
            id="priTestQuestion"
            required
            accept=".xlsx"
            name="pri_test"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="priTestDuration" className="form-label">
            Primary Test Duration
          </label>
          <input
            type="number"
            id="priTestDuration"
            placeholder="Enter test duration in minutes"
            required
            name="pri_duration"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postTestQuestion" className="form-label">
            Post Test Questions
          </label>
          <input
            type="file"
            id="postTestQuestion"
            required
            accept=".xlsx"
            name="post_test"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postTestDuration" className="form-label">
            Post Test Duration
          </label>
          <input
            type="number"
            id="postTestDuration"
            placeholder="Enter test duration in minutes"
            required
            name="post_duration"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="credits" className="form-label">
            credits
          </label>
          <input
            type="number"
            id="credits"
            placeholder="Enter credits"
            required
            name="credits"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="minimumScore" className="form-label">
            Minimum Score Required for Passing post-test
          </label>
          <input
            type="number"
            id="minimumScore"
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
            backgroundColor: "#007bff",
            borderColor: "#007bff",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNewCourse;
