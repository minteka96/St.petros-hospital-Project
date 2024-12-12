// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const News = () => {
//   const navigate = useNavigate();

//   // Function to handle navigation when an image is clicked
//   const handleImageClick = (postId) => {
//     navigate(`/newsDetails/${postId}`);
//   };

//   // Blog post data
//   const blogPosts = [
//     {
//       id: 1,
//       image: "../../../../assets/img/blog/0002award.jpg",
//       // image: "../../../assets/img/blog/",
//       alt: "Blog Post 1",
//       detailsLink: "/newsDetails/1",
//       categoryLink: "/news",
//       category: "News",
//       title: "Congratulations Dr. Nebiyat Tesfaye",
//       date: "Oct 17, 2017",
//       authorLink: "/news",
//       author: "Admin",
//     },
//     {
//       id: 2,
//       image: "../../../assets/img/blog/Transfer.png",
//       alt: "Blog Post 2",
//       detailsLink: "/newsDetails/2",
//       categoryLink: "/news",
//       category: "News",
//       title: "የዝውውር ማስታወቂያ",
//       date: "አዲስ አበባ - መስከረም 13 - 2017",
//       authorLink: "/news",
//       author: "Admin",
//     },
//     {
//       id: 3,
//       image: "../../../assets/img/blog/pox.png",
//       alt: "Blog Post 3",
//       detailsLink: "/newsDetails/3",
//       categoryLink: "/news",
//       category: "Health Tip",
//       title: "የዝንጀሮ ፈንጣጣ (Monkeypox) ምህረ #healthtip",
//       date: "አዲስ አበባ - ነሐሴ 15 - 2016",
//       authorLink: "/news",
//       author: "Admin (ቅ.ጴ.ስ.ሆ)",
//     },
//     {
//       id: 4,
//       image: "../../../assets/img/blog/sendek.png",
//       alt: "Blog Post 4",
//       detailsLink: "/newsDetails/4",
//       categoryLink: "/news",
//       category: "News",
//       title: "የሰንደቅ ዓላማ ቀን በሆስፒታሉ ተከበረ",
//       date: "አዲስ አበባ - ጥቅምት 4 - 2017",
//       authorLink: "/news",
//       author: "Admin (ቅ.ጴ.ስ.ሆ)",
//     },
//     {
//       id: 5,
//       image: "../../../assets/img/blog/004.jpeg",
//       alt: "Blog Post 5",
//       detailsLink: "/newsDetails/5",
//       categoryLink: "/news",
//       category: "News",
//       title:
//         "100 days of working health performace monitering meetingin kidus petros hospital",
//       date: "አዲስ አበባ - ጥቅምት 19 - 2017",
//       authorLink: "/news",
//       author: "Admin (ቅ.ጴ.ስ.ሆ)",
//     },
//   ];

//   return (
//     <section className="blog-area section-py blog-border-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="post-items-style2">
//               {/* Blog Post Items */}
//               {blogPosts.map((post) => (
//                 <div key={post.id} className="post-item">
//                   <div className="thumb">
//                     {/* Handle image click */}
//                     <img
//                       src={post.image}
//                       alt={post.alt}
//                       onClick={() => handleImageClick(post.id)}
//                       style={{
//                         cursor: 'pointer',
//                         width: '100%',      // Full width of the parent container
//                         height: '200px',    // Set a fixed height for consistency
//                         objectFit: 'cover', // Ensure images fill the space while maintaining aspect ratio
//                       }}
//                     />
//                   </div>
//                   <div className="content">
//                     <a className="category" href={post.categoryLink}>{post.category}</a>
//                     <h4 className="title">
//                       <a href={post.detailsLink}>{post.title}</a>
//                     </h4>
//                     <div className="meta">
//                       {post.date} by <a className="author" href={post.authorLink}>{post.author}</a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default News;

// **************************
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newsService from "../../../Services/news.service";
// import "./News.module.css";

const News = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await newsService.getAllNews();
        setNewsList(response.data || []);
      } catch (err) {
        setError("Failed to fetch news data.");
      }
    };

    fetchNews();
  }, []);

  const handleImageClick = (newsId) => {
    navigate(`/newsDetails/${newsId}`, { state: { newsList } });
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options); // Format date only
  };


  // ----------------------
  return (
    <section className="blog-area section-py blog-border-bottom">
      <div className="container">
        <h2>Latest News</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="row">
          {newsList.length === 0 ? (
            <p>No news available.</p>
          ) : (
            <div className="col-lg-12">
              <div className="post-items-style2">
                {newsList.map((news) => (
                  <div key={news.news_id} className="post-item">
                    <div className="thumb">
                      <img
                        src={`${import.meta.env.VITE_API_URL}${
                          news.news_image_link
                        }`}
                        alt={news.news_title || "News Image"}
                        onClick={() => handleImageClick(news.news_id)}
                        style={{
                          cursor: "pointer",
                          // width: "80%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="content">
                      <h4 className="title">
                        <a href={`/newsDetails/${news.news_id}`}>
                          {news.news_title}
                        </a>
                      </h4>
                      {/* <div className="meta">{news.created_at}</div> */}
                      <div className="meta">{formatDate(news.created_at)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
