/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import healthTipService from "../../../../Services/healthtip.service";
import { Link } from "react-router-dom";
import classes from "./HealthTipList.module.css";

const HealthTipList = () => {
  const [healthTips, setHealthTips] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHealthTips = async () => {
      try {
        const response = await healthTipService.getAllHealthTips();
        setHealthTips(response.data);
      } catch (err) {
        setError("Failed to fetch health tips.");
      }
    };

    fetchHealthTips();
  }, []);

  const handleDelete = async (id) => {
    try {
      await healthTipService.deleteHealthTip(id);
      setHealthTips(healthTips.filter((tip) => tip.health_tip_id !== id));
    } catch (err) {
      setError("Failed to delete health tip.");
    }
  };

  return (
    <div>
      <h2>Health Tips</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {healthTips.map((healthTip) => (
            <tr key={healthTip.health_tip_id}>
              <td>{healthTip.health_tip_title}</td>
              <td>
                <Link to={`/admin/health-tip/${healthTip.health_tip_id}/edit`} className={classes.editLink}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(healthTip.health_tip_id)} className={classes.deleteButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthTipList;
