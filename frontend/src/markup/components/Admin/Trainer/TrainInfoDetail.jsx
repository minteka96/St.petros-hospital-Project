import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import trainInfoService from "../../../../services/trainInfo.service";
import { useAuth } from "../../../../contexts/AuthContext";

function TrainInfoDetail() {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [trainee, setTrainee] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrainee = async () => {
      try {
        const response = await trainInfoService.getTraineeInfoById(id, token);
        setTrainee(response.data);
      } catch (error) {
        console.error("Error fetching trainee data:", error);
      }
    };
    fetchTrainee();
  }, [id, token]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trainee?"
    );
    if (confirmDelete) {
      try {
        setLoading(true);
        await trainInfoService.deleteTraineeInfo(id, token);
        navigate("/admin/trainees");
      } catch (error) {
        console.error("Error deleting trainee:", error);
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-header">
          <h3 className="mb-0">
            {trainee.first_name} {trainee.last_name}'s Details
          </h3>
        </div>
        <div className="card-body">
          <h5>Personal Details</h5>
          <p><strong>Email:</strong> {trainee.email}</p>
          <p><strong>Phone:</strong> {trainee.phone}</p>
          <p><strong>Profession:</strong> {trainee.profession}</p>
          <p><strong>Account Number:</strong> {trainee.account_number}</p>
        </div>
        <div className="card-footer text-end">
          <div className="d-flex gap-2">
            <button onClick={handleDelete} className="btn">
              {loading ? "Deleting..." : "Delete"}
            </button>
            <button
              onClick={() => navigate(-1)}
              className="btn btn-danger"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainInfoDetail;
