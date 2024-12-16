import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaVideo, FaSpinner, FaTimes, FaArrowLeft, FaCheck, FaSave } from "react-icons/fa";
import { useAuth } from "../../../../contexts/AuthContext";
import videoService from "../../../../Services/video.service";

const EditVideoForm = () => {
  const { video_id } = useParams();
  const { user } = useAuth();
  const token = user?.token;
  const navigate = useNavigate();

  const [videoLink, setVideoLink] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchVideo();
  }, [video_id]);

  const fetchVideo = async () => {
    try {
      const response = await videoService.getVideoById(video_id);
      if (response && response.data) {
        setVideoLink(response.data.video_link);
      }
    } catch (err) {
      setError("Failed to fetch video details");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSaving(true);

    try {
      const videoData = {
        video_link: videoLink.trim()
      };

      if (!videoData.video_link) {
        throw new Error("Video link is required");
      }

      const response = await videoService.updateVideo(video_id, videoData, token);
      
      if (response.status === "success") {
        setSuccess("Video updated successfully!");
        setTimeout(() => navigate("/admin/videos"), 2000);
      } else {
        throw new Error(response.message || "Failed to update video");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Navigation */}
        <button
          onClick={() => navigate('/admin/videos')}
          className="group flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 mb-8"
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Videos</span>
        </button>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
            <div className="flex items-center space-x-3">
              <FaVideo className="text-white w-7 h-7" />
              <h1 className="text-2xl font-bold text-white">Edit Video</h1>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <FaSpinner className="w-8 h-8 animate-spin text-indigo-600" />
              </div>
            ) : (
              <>
                {/* Notifications */}
                {(error || success) && (
                  <div className={`mb-6 rounded-lg p-4 ${
                    error ? 'bg-red-50 border-l-4 border-red-500' : 'bg-green-50 border-l-4 border-green-500'
                  }`}>
                    <div className="flex items-center">
                      {error ? (
                        <FaTimes className="text-red-500 w-5 h-5 mr-3" />
                      ) : (
                        <FaCheck className="text-green-500 w-5 h-5 mr-3" />
                      )}
                      <span className={error ? 'text-red-700' : 'text-green-700'}>
                        {error || success}
                      </span>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Video Link
                    </label>
                    <div className="relative rounded-lg shadow-sm">
                      <input
                        type="url"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                        className="block w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                        placeholder="Enter video URL"
                        required
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => navigate('/admin/videos')}
                      className="px-6 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={saving}
                      className="flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 font-medium min-w-[120px]"
                    >
                      {saving ? (
                        <FaSpinner className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <FaSave className="w-5 h-5 mr-2" />
                          Update Video
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVideoForm;
