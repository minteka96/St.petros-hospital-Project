import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaVideo, FaSpinner, FaTimes, FaArrowLeft, FaYoutube, FaVimeo, FaLink } from "react-icons/fa";
import { useAuth } from "../../../../contexts/AuthContext";
import videoService from "../../../../Services/video.service";

const AddVideoForm = () => {
  const [videoLink, setVideoLink] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const token = user?.token;
      const videoData = {
        video_link: videoLink.trim()
      };
      
      if (!videoData.video_link) {
        throw new Error("Video link is required");
      }
      
      await videoService.createVideo(videoData, token);
      navigate("/admin/videos");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Navigation Header */}
        <nav className="mb-8">
          <button
            onClick={() => navigate('/admin/videos')}
            className="group flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="font-medium">Back to Gallery</span>
          </button>
        </nav>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <div className="flex items-center space-x-3">
              <FaVideo className="text-white w-7 h-7" />
              <h1 className="text-2xl font-bold text-white">Add New Video</h1>
            </div>
          </div>

          {/* Form Content */}
          <div className="px-8 py-8">
            {error && (
              <div className="mb-6 animate-fade-in">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <div className="flex items-center">
                    <FaTimes className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <span className="ml-3 text-red-700">{error}</span>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Video Link Input */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Video Link
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLink className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={videoLink}
                    onChange={(e) => setVideoLink(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Paste your video URL here"
                  />
                </div>

                {/* Supported Platforms */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    Supported Platforms
                  </p>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <FaYoutube className="text-red-600 w-5 h-5" />
                      <span className="text-sm text-gray-600">YouTube</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaVimeo className="text-blue-600 w-5 h-5" />
                      <span className="text-sm text-gray-600">Vimeo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigate('/admin/videos')}
                  className="px-6 py-2.5 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 font-medium min-w-[120px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <FaSpinner className="w-5 h-5 animate-spin mx-auto" />
                  ) : (
                    "Add Video"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideoForm;
