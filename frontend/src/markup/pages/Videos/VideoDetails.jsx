// import React from "react";
// import { useParams, Link, useLocation } from "react-router-dom";

// const formatDate = (dateString) => {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const VideoDetails = () => {
//   const { videoId } = useParams();
//   const location = useLocation();
//   const { videoList } = location.state || {};

//   if (!videoList || !Array.isArray(videoList)) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <p className="text-lg mb-4">Error: Video data is unavailable.</p>
//           <Link to="/videos" className="text-blue-600 hover:text-blue-800 underline">
//             Go back to Videos
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const video = videoList.find((item) => item.video_id === Number(videoId));

//   if (!video) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center">
//           <p className="text-lg mb-4">Video not found.</p>
//           <Link to="/videos" className="text-blue-600 hover:text-blue-800 underline">
//             Go back to Videos
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-8">
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative pt-[56.25%]">
//                 <iframe
//                   src={video.video_link}
//                   title={video.video_title}
//                   className="absolute top-0 left-0 w-full h-full"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                   {video.video_title}
//                 </h2>
//                 <div className="flex items-center text-gray-600 text-sm">
//                   <span className="font-medium">
//                     {formatDate(video.created_at)}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lg:col-span-4">
//             {/* Related videos section can be added here */}
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold mb-4">Related Videos</h3>
//               {/* Add related videos list here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoDetails;
// import React from 'react';
// import { useParams, Link, useLocation } from 'react-router-dom';

// const formatDate = (dateString) => {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   return new Date(dateString).toLocaleDateString(undefined, options);
// };

// const VideoDetails = () => {
//   const { videoId } = useParams();
//   const location = useLocation();
//   const { videoList } = location.state || {};

//   const renderErrorState = (message) => (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto">
//         <p className="text-lg text-gray-700 mb-4">{message}</p>
//         <Link 
//           to="/videos" 
//           className="inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg
//                      hover:bg-blue-700 transition-colors duration-200"
//         >
//           Go back to Videos
//         </Link>
//       </div>
//     </div>
//   );

//   if (!videoList?.length) {
//     return renderErrorState("Error: Video data is unavailable.");
//   }

//   const video = videoList.find((item) => item.video_id === Number(videoId));

//   if (!video) {
//     return renderErrorState("Video not found.");
//   }

//   return (
//     <section className="py-16 bg-gray-50 min-h-screen">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//           <div className="lg:col-span-8">
//             <article className="bg-white rounded-2xl shadow-md overflow-hidden">
//               <div className="relative pt-[56.25%] bg-gray-900">
//                 <iframe
//                   src={video.video_link}
//                   title={video.video_title}
//                   className="absolute inset-0 w-full h-full"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//               <div className="p-6 md:p-8">
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                   {video.video_title}
//                 </h1>
//                 <div className="flex items-center space-x-4">
//                   <time 
//                     dateTime={video.created_at}
//                     className="text-sm text-gray-600 font-medium"
//                   >
//                     {formatDate(video.created_at)}
//                   </time>
//                 </div>
//               </div>
//             </article>
//           </div>
          
//           <aside className="lg:col-span-4">
//             <div className="bg-white rounded-2xl shadow-md p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-6">
//                 Related Videos
//               </h2>
//               <div className="space-y-4">
//                 {videoList
//                   .filter(v => v.video_id !== video.video_id)
//                   .slice(0, 5)
//                   .map(relatedVideo => (
//                     <Link
//                       key={relatedVideo.video_id}
//                       to={`/videos/${relatedVideo.video_id}`}
//                       state={{ videoList }}
//                       className="block group"
//                     >
//                       <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                         <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden">
//                           <img
//                             src={`https://img.youtube.com/vi/${relatedVideo.video_link.split('v=')[1]}/mqdefault.jpg`}
//                             alt=""
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
//                             {relatedVideo.video_title}
//                           </h3>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {formatDate(relatedVideo.created_at)}
//                           </p>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoDetails;

import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const VideoDetails = () => {
  const { videoId } = useParams();
  const location = useLocation();
  const { videoList } = location.state || {};

  const renderErrorState = (message) => (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
        <p className="text-lg text-gray-700 font-semibold mb-4">{message}</p>
        <Link
          to="/videos"
          className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Go back to Videos
        </Link>
      </div>
    </div>
  );

  if (!videoList?.length) {
    return renderErrorState('Error: Video data is unavailable.');
  }

  const video = videoList.find((item) => item.video_id === Number(videoId));

  if (!video) {
    return renderErrorState('Video not found.');
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-8">
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative pt-[56.25%] bg-gray-900">
                <iframe
                  src={video.video_link}
                  title={video.video_title}
                  className="absolute inset-0 w-full h-full rounded-t-2xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {video.video_title}
                </h1>
                <div className="flex items-center space-x-4">
                  <time
                    dateTime={video.created_at}
                    className="text-sm text-gray-600 font-medium"
                  >
                    {formatDate(video.created_at)}
                  </time>
                </div>
              </div>
            </article>
          </div>

          {/* Related Videos Section */}
          <aside className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
                Related Videos
              </h2>
              <div className="space-y-4">
                {videoList
                  .filter((v) => v.video_id !== video.video_id)
                  .slice(0, 5)
                  .map((relatedVideo) => (
                    <Link
                      key={relatedVideo.video_id}
                      to={`/videos/${relatedVideo.video_id}`}
                      state={{ videoList }}
                      className="block group hover:bg-gray-50 rounded-lg transition duration-200"
                    >
                      <div className="flex gap-4 p-3">
                        {/* Thumbnail */}
                        <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <img
                            src={`https://img.youtube.com/vi/${relatedVideo.video_link.split('v=')[1]}/mqdefault.jpg`}
                            alt={relatedVideo.video_title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Title and Date */}
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
                            {relatedVideo.video_title}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatDate(relatedVideo.created_at)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
