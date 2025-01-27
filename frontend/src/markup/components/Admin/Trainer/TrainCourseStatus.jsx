import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trainCourseStatusService from "../../../../Services/trainCourseStatus.service";
import { useAuth } from "../../../../contexts/AuthContext";

function TrainCourseStatus() {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [trainingData, setTrainingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { trainee_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainingData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await trainCourseStatusService.getTrainingDataById(
          token,
          trainee_id
        );
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
    <div className="card">
      <div
        className="card-header text-center py-1"
       
      >
        <h3 className="mb-0">Training Course Status</h3>
      </div>
      <div className="card-body">
        {error && <div className="alert alert-danger">{error}</div>}
        {loading ? (
          <div
            className="text-center py-4"
            style={{
              background: "#f8f9fa",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <span className="spinner-border text-primary" role="status"></span>
            <p className="mt-2">Loading...</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped mx-auto">
              <thead className="thead-dark">
                <tr>
                  <th>Course Name</th>
                  <th>Registration</th>
                  <th>Pre-Test Status</th>
                  <th>Post-Test Status</th>
                  <th>Pre-Score</th>
                  <th>Post-Score</th>
                  <th>Certificate Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(trainingData) ? (
                  trainingData.map((item, index) => (
                    <tr key={index} className="align-middle">
                      <td>{item.course_name}</td>
                      <td
                        className={`fw-bold ${
                          item.registration ? "text-success" : "text-danger"
                        }`}
                      >
                        {item.registration ? "Completed" : "Pending"}
                      </td>
                      <td>
                        {item.pri_test === "1"
                          ? "Start"
                          : item.pri_test === "completed"
                          ? "Completed"
                          : "not started"}
                      </td>
                      <td>
                        {item.post_test === "1"
                          ? "Start"
                          : item.post_test === "completed"
                          ? "Completed"
                          : "not started"}
                      </td>
                      <td>
                        {item.pri_test === "completed" ? item.pri_score : "-"}
                      </td>
                      <td>
                        {item.post_test === "completed" ? item.post_score : "-"}
                      </td>
                      <td
                        className="fw-bold"
                        style={{
                          color:
                            item.certificate === "passed"
                              ? "green"
                              : item.certificate === "failed"
                              ? "red"
                              : "orange",
                        }}
                      >
                        {item.certificate === "passed"
                          ? "Issued"
                          : item.certificate === "failed"
                          ? "Not Issued"
                          : "Pending"}
                      </td>
                    </tr>
                  ))
                ) : trainingData && typeof trainingData === "object" ? (
                  <tr className="align-middle">
                    <td>{trainingData.course_name}</td>
                    <td
                      className={`fw-bold ${
                        trainingData.registration
                          ? "text-success"
                          : "text-danger"
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
                    <td>
                      <span
                        className={`badge ${
                          item.certificate === "passed"
                            ? "bg-success"
                            : item.certificate === "failed"
                            ? "bg-danger"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {item.certificate === "passed"
                          ? "Issued"
                          : item.certificate === "failed"
                          ? "Not Issued"
                          : "Take the exam"}
                      </span>
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
      <div className="card-footer text-end">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary btn-sm"
          disabled={loading}
          style={{
            padding: "8px 16px",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Back
        </button>
      </div>
    </div>
  </div>
);


}

export default TrainCourseStatus;
