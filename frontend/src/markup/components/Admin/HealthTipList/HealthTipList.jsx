// Import required modules and components
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import healthTipService from "../../../../Services/healthtip.service.js"; // Adjust the path as needed
import classes from "./HealthTipList.module.css"; // Adjust the path as needed
import { format } from "date-fns"; // Library for date formatting
import { FaEdit, FaTrash } from "react-icons/fa"; // Action icons
import { useAuth } from "../../../../contexts/AuthContext"; // Adjust the path as needed

// Environment variable for API base URL
const api_url = import.meta.env.VITE_API_URL;


const HealthTipList = () => {
  const { user } = useAuth();
  const token = user?.token || null; // Extract token from authenticated user context
  const navigate = useNavigate();

  // State management
  const [healthTips, setHealthTips] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch health tips on component load
  useEffect(() => {
    const fetchHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips(token);
        setHealthTips(response.data || []);
      } catch (err) {
        setError("Failed to fetch health tips. Please try again.");
      }
    };
    fetchHealthTips();
  }, [token]);

  const handleDelete = async (healthTipId) => {
    if (!window.confirm("Are you sure you want to delete this health tip?"))
      return;

    try {
      await healthTipService.deleteHealthTip(healthTipId, token);
      setHealthTips((prevTips) =>
        prevTips.filter((tip) => tip.health_tip_id !== healthTipId)
      );
      setSuccess("Health tip deleted successfully!");
    } catch (err) {
      setError("Failed to delete health tip. Please try again.");
    }
  };

  const truncateText = (text, maxLength = 100) =>
    text?.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text || "";
// console.log(healthTips)
  return (
    <div className={classes.healthTipListContainer}>
      <h2>Health Tip List</h2>

      {/* Error and Success Messages */}
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      {/* Health Tips Table */}
      {healthTips.length === 0 ? (
        <p>No health tips available at the moment.</p>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Detail</th>
              <th>Description</th>
              <th>Link</th>
              <th>Image</th>
              <th>Video</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {healthTips.map((tip) => (
              <tr key={tip.health_tip_id}>
                <td data-label="Title">{tip.health_tip_title}</td>
                <td data-label="Detail">{tip.health_tip_detail}</td>
                <td data-label="Description">{tip.health_tip_description}</td>
                <td data-label="Link">
                  {tip.health_tip_link ? (
                    <a
                      target="_blank"
                      href={tip.health_tip_link}
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {truncateText(tip.health_tip_link)}
                    </a>
                  ) : (
                    "No Link"
                  )}
                </td>
                <td data-label="Image" style={{ textAlign: "center" }}>
                  <a
                    target="_blank"
                    href={
                      tip.health_tip_image
                        ? `${api_url}${tip.health_tip_image}`
                        : "#"
                    }
                  >
                    <img
                      style={{ width: "90%", borderRadius: "5%" }}
                      src={
                        tip.health_tip_image
                          ? `${api_url}${tip.health_tip_image}`
                          : ""
                      }
                      alt={
                        tip.health_tip_image
                          ? "Click to view full image"
                          : "No Image Available"
                      }
                    />
                  </a>
                </td>
                <td data-label="Link">
                  {tip.health_tip_video_link ? (
                    <a
                      href={tip.health_tip_video_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {truncateText(tip.health_tip_video_link)}
                    </a>
                  ) : (
                    "No Link"
                  )}
                </td>
                <td data-label="Date">
                  {format(new Date(tip.created_at), "MM-dd-yyyy | HH:mm")}
                </td>

                <td data-label="Actions">
                  <button
                    onClick={() =>
                      navigate(
                        `/admin/healthtiplist/edit/${tip.health_tip_id}`,
                        {
                          state: { tip },
                        }
                      )
                    }
                    className={classes.iconButton}
                  >
                    <FaEdit className={classes.editIcon} />
                  </button>
                  <button
                    onClick={() => handleDelete(tip.health_tip_id)}
                    className={classes.iconButton}
                  >
                    <FaTrash className={classes.deleteIcon} />
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
