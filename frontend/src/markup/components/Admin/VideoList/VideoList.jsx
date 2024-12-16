// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEdit, FaTrash, FaPlus, FaSpinner, FaSearch, FaSort, FaListUl, FaThLarge } from "react-icons/fa";
// import { useAuth } from "../../../../contexts/AuthContext";
// import videoService from "../../../../Services/video.service";


// const VideoList = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOrder, setSortOrder] = useState("newest");
//   const [viewMode, setViewMode] = useState("grid");

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       setLoading(true);
//       const response = await videoService.getAllVideos();
//       setVideos(response.data || []);
//     } catch (err) {
//       setError("Failed to fetch videos");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (videoId) => {
//     if (!window.confirm("Are you sure you want to delete this video?")) return;
//     try {
//       await videoService.deleteVideo(videoId, user?.token);
//       setVideos(videos.filter((video) => video.video_id !== videoId));
//     } catch (err) {
//       setError("Failed to delete video");
//     }
//   };

//   const formatVideoUrl = (url) => {
//     if (url.includes("youtube.com") || url.includes("youtu.be")) {
//       let videoId = "";
//       if (url.includes("youtube.com/watch?v=")) {
//         videoId = url.split("watch?v=")[1];
//       } else if (url.includes("youtu.be/")) {
//         videoId = url.split("youtu.be/")[1];
//       }
//       return `https://www.youtube.com/embed/${videoId.split("&")[0]}`;
//     }
//     return url;
//   };

//   const filteredAndSortedVideos = videos
//     .filter((video) =>
//       video.video_link.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .sort((a, b) => {
//       if (sortOrder === "newest") {
//         return new Date(b.created_at) - new Date(a.created_at);
//       }
//       return new Date(a.created_at) - new Date(b.created_at);
//     });

//     const renderGridView = () => (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//         {filteredAndSortedVideos.map((video) => (
//           <div key={video.video_id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
//             <div className="relative">
//               <div className="aspect-video w-full"> {/* Updated aspect ratio container */}
//                 <iframe
//                   src={formatVideoUrl(video.video_link)}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   allowFullScreen
//                   title={`Video ${video.video_id}`}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//             {/* Rest of your card content */}
//           </div>
//         ))}
//       </div>
//     );

//     const renderListView = () => (
//       <div className="space-y-6">
//         {filteredAndSortedVideos.map((video) => (
//           <div key={video.video_id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-[400px] lg:w-[500px]">
//                 <div className="aspect-video relative">
//                   <iframe
//                     src={formatVideoUrl(video.video_link)}
//                     className="absolute inset-0 w-full h-full object-cover"
//                     allowFullScreen
//                     title={`Video ${video.video_id}`}
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//               <div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
//                 <div className="space-y-2">
//                   <h3 className="text-lg font-semibold text-gray-800">Video #{video.video_id}</h3>
//                   <p className="text-sm text-gray-500">
//                     Added {new Date(video.created_at).toLocaleDateString()}
//                   </p>
//                   <p className="text-sm text-gray-600 max-w-xl truncate">
//                     {video.video_link}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3 mt-4 md:mt-0">
//                   <button
//                     onClick={() => navigate(`/admin/videos/edit/${video.video_id}`)}
//                     className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
//                   >
//                     <FaEdit className="w-4 h-4 mr-2" />
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(video.video_id)}
//                     className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
//                   >
//                     <FaTrash className="w-4 h-4 mr-2" />
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
    

//   return (
//     <div className="p-6 space-y-6  m-auto" >
//       <div className="bg-primary rounded-xl shadow-lg">
//         <div className="p-6">
//           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 ">
//             <div>
//               <h1 className="text-2xl font-bold text-white pb-0">Video Gallery</h1>
//               <p className="mt-2 text-gray-100 text-sm">
//                 {videos.length} videos in collection
//               </p>
//             </div>
            
//             <div className="flex flex-wrap items-center gap-2">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search videos..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-64 pl-10 pr-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
//                 />
//                 <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//               </div>
              
//               <div className="flex items-center bg-white rounded-lg p-1">
//                 <button
//                   onClick={() => setViewMode("grid")}
//                   className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600"}`}
//                 >
//                   <FaThLarge className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={() => setViewMode("list")}
//                   className={`p-2 rounded ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600"}`}
//                 >
//                   <FaListUl className="w-4 h-4" />
//                 </button>
//               </div>

//               <button
// onClick={() => setSortOrder(prev => prev === "newest" ? "oldest" : "newest")}
//   className="flex items-center gap-2 px-4 py-2.5 bg-white text-green-600 rounded-lg
//            hover:bg-green-50 hover:text-green-700 border border-green-200
//            transition-all duration-200 font-medium shadow-sm
//            active:scale-95"
// >
//   <FaSort className="w-4 h-4" />
//   <span>{sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
// </button>

// <button
//   onClick={() => navigate('/admin/add-video')}
//   className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-red-600
//            text-white rounded-lg font-medium shadow-md
//            hover:from-red-600 hover:to-red-700
//            transition-all duration-200 transform
//            active:scale-95 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
// >
//   <FaPlus className="w-4 h-4" />
//   <span>Add Video</span>
// </button>

//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 rounded-xl p-6">
//         {loading ? (
//           <div className="flex justify-center items-center min-h-[400px]">
//             <FaSpinner className="w-8 h-8 animate-spin text-blue-500" />
//           </div>
//         ) : videos.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No videos found</p>
//           </div>
//         ) : (
//           viewMode === "grid" ? renderGridView() : renderListView()
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoList;

import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus, FaSpinner, FaSearch, FaSort, FaEye, FaDownload, FaShare, FaStar } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../../../contexts/AuthContext";
import videoService from "../../../../Services/video.service";

const VideoList = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [videoToDelete, setVideoToDelete] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await videoService.getAllVideos();
      setVideos(response.data || []);
      toast.success("Videos loaded successfully", {
        icon: '🎥',
        duration: 3000
      });
    } catch (err) {
      toast.error("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (video) => {
    setVideoToDelete(video);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await videoService.deleteVideo(videoToDelete.video_id, user?.token);
      setVideos(prev => prev.filter(v => v.video_id !== videoToDelete.video_id));
      toast.success("Video deleted successfully");
      setIsDeleteModalOpen(false);
    } catch (err) {
      toast.error("Failed to delete video");
    }
  };

  const formatVideoUrl = useMemo(() => (url) => {
    if (!url) return "";
    const patterns = {
      youtube: {
        watch: /youtube\.com\/watch\?v=([^&]+)/,
        short: /youtu\.be\/([^&]+)/
      }
    };

    for (const [platform, pattern] of Object.entries(patterns)) {
      for (const [type, regex] of Object.entries(pattern)) {
        const match = url.match(regex);
        if (match) return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    return url;
  }, []);

  const filteredAndSortedVideos = useMemo(() => {
    return videos
      .filter(video => 
        video.video_link.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [videos, searchTerm, sortOrder]);

  const DeleteModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
      >
        <h3 className="text-xl font-semibold text-gray-800">Delete Video</h3>
        <p className="mt-2 text-gray-600">
          Are you sure you want to delete this video? This action cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  const VideoCard = ({ video }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video relative">
        <iframe
          src={formatVideoUrl(video.video_link)}
          className="absolute inset-0 w-full h-full"
          allowFullScreen
          title={`Video ${video.video_id}`}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-gray-800">Video #{video.video_id}</h3>
            <p className="text-sm text-gray-500">
              {new Date(video.created_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(`/admin/videos/edit/${video.video_id}`)}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <FaEdit className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDeleteClick(video)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <FaTrash className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaEye className="w-4 h-4" />
            <span>{video.views || 0} views</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="w-4 h-4 text-yellow-400" />
            <span>{video.rating || 0}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <AnimatePresence>
        {isDeleteModalOpen && <DeleteModal />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg mb-8"
        >
          <div className="p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white">Video Gallery</h1>
                <p className="mt-2 text-blue-100">
                  {videos.length} videos in collection
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search videos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-72 pl-10 pr-4 py-2.5 rounded-lg border-0 focus:ring-2 
                             focus:ring-blue-500 shadow-sm"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <button
                  onClick={() => setSortOrder(prev => prev === "newest" ? "oldest" : "newest")}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white rounded-lg
                           hover:bg-white/20 transition-colors duration-200"
                >
                  <FaSort className="w-4 h-4" />
                  <span>{sortOrder === "newest" ? "Newest First" : "Oldest First"}</span>
                </button>

                <button
                  onClick={() => navigate('/admin/add-video')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r 
                           from-green-500 to-green-600 text-white rounded-lg
                           hover:from-green-600 hover:to-green-700 
                           transition-all duration-200 shadow-md"
                >
                  <FaPlus className="w-4 h-4" />
                  <span>Add Video</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <FaSpinner className="w-8 h-8 animate-spin text-blue-500" />
            <p className="text-gray-500">Loading videos...</p>
          </div>
        ) : videos.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <div className="text-gray-400 text-6xl">📹</div>
            <p className="text-gray-500 text-lg">No videos found</p>
            <button
              onClick={() => navigate('/admin/add-video')}
              className="text-blue-500 hover:underline"
            >
              Add your first video
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredAndSortedVideos.map(video => (
                <VideoCard key={video.video_id} video={video} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default VideoList;
