import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import videoService from "../../../../Services/videos.service.js"; // Adjust path if necessary
import { useAuth } from "../../../../contexts/AuthContext.jsx";
import classes from "./EditDeleteVideoForm.module.css";

const EditDeleteVideoForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null; // Token from user context
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [videoId, setvideoId] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log(videoId,title,videoLink);
  
  useEffect(() => {
    const fetchVideo = async () => {
      if (!token) {
        setError("You must be logged in to view this video.");
        return;
      }
      setLoading(true);
      try {
        const response = await videoService.getAllVideos(token);
        if (response) {
          setTitle(response.title);
          setVideoLink(response.video_link);
          setvideoId(response.video_id);
          setError("");
        } else {
          setError("Video not found.");
        }
      } catch (err) {
        console.error("Error fetching video:", err);
        setError("Failed to fetch video details.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!title || !videoLink) {
      setError("Please fill in all fields.");
      return;
    }

    const urlPattern = /^(https?:\/\/)?([\w\-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    if (!urlPattern.test(videoLink)) {
      setError("Please provide a valid video URL.");
      return;
    }
    // -----
    const updatedData = {
      videoId,
      title,
      video_link: videoLink,
    };
    // -----
    setLoading(true);
    try {
      const response = await videoService.updateVideoEmbed(
        updatedData,
        // videoId
        // { title, video_link: videoLink },
        // token
      );
      if (response.status === "success") {
        setSuccess("Video updated successfully!");
        setError("");
        setTimeout(() => navigate("/admin/videos"), 2000);
      } else {
        setError(response.message || "Failed to update video.");
      }
    } catch (err) {
      console.error("Error updating video:", err);
      setError("An error occurred while updating the video.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    setLoading(true);
    try {
      const response = await videoService.deleteVideoEmbed(id, token);
      if (response.status === "success") {
        setSuccess("Video deleted successfully!");
        setError("");
        setTimeout(() => navigate("/admin/videos"), 2000);
      } else {
        setError(response.message || "Failed to delete video.");
      }
    } catch (err) {
      console.error("Error deleting video:", err);
      setError("An error occurred while deleting the video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleEdit} className={classes.formContainer}>
      <h2>Video Embed</h2>
      {error && <div className={classes.errorMessage}>{error}</div>}
      {success && <div className={classes.successMessage}>{success}</div>}

      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.inputField}
        required
        disabled={loading}
      />

      <input
        type="text"
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        className={classes.inputField}
        required
        disabled={loading}
      />

      <div className={classes.buttonContainer}>
        <button
          type="submit"
          className={classes.submitButton}
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Video"}
        </button>
        <button
          type="button"
          className={classes.deleteButton}
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete Video"}
        </button>
      </div>
    </form>
  );
};

export default EditDeleteVideoForm;
