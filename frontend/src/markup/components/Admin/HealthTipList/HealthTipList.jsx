import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import healthTipService from "../../../../Services/healthtip.service.js";
import classes from "./HealthTipList.module.css";
import { format } from "date-fns";
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";
import { useAuth } from "../../../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const api_url = import.meta.env.VITE_API_URL;

const HealthTipList = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;

  const [healthTips, setHealthTips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips(token);
        setHealthTips(response.data || []);
      } catch (err) {
        toast.error("Failed to fetch health tips. Please try again."); // Show error toast
      }
    };
    fetchHealthTips();
  }, [token]);

  const handleDelete = async (healthTipId) => {
    if (!window.confirm("Are you sure you want to delete this health tip?"))
      return;

    try {
      await healthTipService.deleteHealthTip(healthTipId, token);
      setHealthTips(
        healthTips.filter((tip) => tip.health_tip_id !== healthTipId)
      );
      toast.success("Health tip deleted successfully!"); // Show success toast
    } catch (err) {
      toast.error("Failed to delete health tip."); // Show error toast
    }
  };

  const truncateText = (text, maxLength = 15) => {
    if (!text) return "No Link";
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  };

  const renderFormattedText = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className={classes.plainDetail}>
        {line.trim()}
      </p>
    ));
  };

  return (
    <div className={classes.healthTipListContainer}>
      <h2>Health Tip List</h2>

      {healthTips.length === 0 ? (
        <p>No health tips available.</p>
      ) : (
        <table className={classes.healthTipTable}>
          <thead>
            <tr>
              <th className={classes.titleColumn}>Title</th>
              <th className={classes.detailColumn}>Detail</th>
              <th className={classes.descriptionColumn}>Description</th>
              <th className={classes.linkColumn}>Link</th>
              <th className={classes.imageColumn}>Image</th>
              <th className={classes.videoColumn}>Video</th>
              <th className={classes.dateColumn}>Date</th>
              <th className={classes.actionsColumn}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {healthTips.map((tip) => (
              <tr key={tip.health_tip_id}>
                <td>{tip.health_tip_title}</td>
                <td className={classes.truncate}>
                  <div className={classes.healthTipDetail}>
                    {renderFormattedText(tip.health_tip_detail)}
                  </div>
                </td>
                <td className={classes.truncate}>
                  <div className={classes.healthTipDescription}>
                    {renderFormattedText(tip.health_tip_description)}
                  </div>
                </td>
                <td>
                  {tip.health_tip_link ? (
                    <a
                      href={tip.health_tip_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.link}
                    >
                      {truncateText(tip.health_tip_link)}
                    </a>
                  ) : (
                    "No Link"
                  )}
                </td>
                <td className={classes.imageCell}>
                  <a
                    href={`${api_url}${tip.health_tip_image}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`${api_url}${tip.health_tip_image}`}
                      alt="Health Tip Image"
                      className={classes.imageThumbnail}
                    />
                  </a>
                </td>
                <td>
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
                <td>
                  {format(new Date(tip.created_at), "MM-dd-yyyy | HH:mm")}
                </td>
                <td className={classes.actionsCell}>
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

      {/* Toast container to display success and error messages */}
      <ToastContainer />
    </div>
  );
};

export default HealthTipList;
