/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import healthTipService from "../../../../Services/healthtip.service";  // Import the renamed service
import classes from "./HealthTipList.module.css";  // Your styles
import { FaEdit, FaTrash } from "react-icons/fa";  // Icons for edit and delete

const HealthTipList = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips();
        setHealthTips(response.data || []);
      } catch (err) {
        setError("Failed to fetch health tips.");
      }
    };
    fetchHealthTips();
  }, []);

  const handleDelete = async (healthTipId) => {
    if (window.confirm("Are you sure you want to delete this health tip?")) {
      try {
        await healthTipService.deleteHealthTip(healthTipId);
        setHealthTips(healthTips.filter((tip) => tip.id !== healthTipId));
        setSuccess("Health tip deleted successfully!");
      } catch (err) {
        setError("Failed to delete health tip.");
      }
    }
  };

  return (
    <div className={classes.healthTipListContainer}>
      <h2>Health Tip List</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      {healthTips.length === 0 ? (
        <p>No health tips available.</p>
      ) : (
        <table className={classes.healthTipTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Details</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {healthTips.map((tip) => (
              <tr key={tip.id}>
                <td>{tip.title}</td>
                <td>{tip.details}</td>
                <td>{new Date(tip.createdAt).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => navigate(`/admin/health-tips/edit/${tip.id}`)}>
                    <FaEdit />
                  </button>
                  <button onClick={() => handleDelete(tip.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HealthTipList;
