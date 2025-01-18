import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trainCourseStatusService from "../../../../Services/trainCourseStatus.service";
import { useAuth } from "../../../../contexts/AuthContext";

function TrainCourseStatus() {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [trainingData, setTrainingData] = useState([]);
  // console.log("training data",trainingData)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { trainee_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainingData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await trainCourseStatusService.getTrainingDataById(token, trainee_id);
        console.log("first response",response.data)
        setTrainingData(response.data || []);

      } catch (err) {
        setError("Failed to fetch training data. Please try again later.");
        console.error("Error fetching training data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainingData();
  }, [token, trainee_id]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this training record?"
    );
    if (confirmDelete) {
      try {
        setLoading(true);
        await trainCourseStatusService.deleteTrainingData(id, token);
        navigate("/admin/training");
      } catch (err) {
        console.error("Error deleting training data:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-header text-center text-white">
          <h3 className="mb-0 text-black">Training Course Status</h3>
        </div>
        <div className="card-body">
          {error && <div className="alert alert-danger">{error}</div>}
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Registration</th>
                    <th>Pre-Test Status</th>
                    <th>Post-Test Status</th>
                    <th>Pre-Score</th>
                    <th>Post-Score</th>
                    <th>Certificate Status</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
  {Array.isArray(trainingData) ? (
    trainingData.map((item, index) => (
      <tr key={index}>
        <td>{item.course_name}</td>
        <td>{item.trainee_id}</td>
        <td>{item.registration ? "Completed" : "Pending"}</td>
        <td>{item.pri_test}</td>
        <td>{item.post_test}</td>
        <td>{item.pri_score}</td>
        <td>{item.post_score}</td>
        <td>{item.certificate ? "Issued" : "Not Issued"}</td>
        <td>
          <div className="btn-group">
            <button
              onClick={() => navigate(`/admin/training/${item.course_id}`)}
              className="btn btn-info btn-sm"
            >
              View
            </button>
            <button
              onClick={() => handleDelete(item.course_id)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : trainingData && typeof trainingData === "object" ? (
    <tr>
      <td>{trainingData.course_name}</td>
  <td
    className={`fw-bold ${
      trainingData.registration ? "text-success" : "text-danger"
    }`}
  >
    {trainingData.registration ? "Completed" : "Pending"}
  </td>
  <td
    className="fw-bold"
    style={{
      color:
        trainingData.pri_test === "1"
          ? "blue"
          : trainingData.pri_test === "completed"
          ? "green"
          : "gray",
    }}
  >
    {trainingData.pri_test === "1"
      ? "Start"
      : trainingData.pri_test === "completed"
      ? "Completed"
      : "Close"}
  </td>
  <td
    className="fw-bold"
    style={{
      color:
        trainingData.post_test === "1"
          ? "blue"
          : trainingData.post_test === "completed"
          ? "green"
          : "gray",
    }}
  >
    {trainingData.post_test === "1"
      ? "Start"
      : trainingData.post_test === "completed"
      ? "Completed"
      : "Close"}
  </td>
  <td>{trainingData.pri_score}</td>
  <td>{trainingData.post_score}</td>
  <td
    className="fw-bold"
    style={{
      color:
        trainingData.certificate === "passed"
          ? "green"
          : trainingData.certificate === "failed"
          ? "red"
          : "orange",
    }}
  >
    {trainingData.certificate === "passed"
      ? "Issued"
      : trainingData.certificate === "failed"
      ? "Not Issued"
      : "Take the exam"}
  </td>
      <td>
        {/* <div className="btn-group">
          <button
            onClick={() => navigate(`/admin/training/${trainingData.course_id}`)}
            className="btn btn-info btn-sm"
          >
            View
          </button>
          <button
            onClick={() => handleDelete(trainingData.course_id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div> */}
      </td>
    </tr>
  ) : (
    <tr>
      <td colSpan="8" className="text-center">
        No training data available.
      </td>
    </tr>
  )}
</tbody>

              </table>
            </div>
          )}
        </div>
        <div className="card-footer">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-secondary"
            disabled={loading}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainCourseStatus;
