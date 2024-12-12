// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// // Helper function to parse content with bold text and new lines
// const parseContent = (content) => {
//   const lines = content.split('\n'); // Split content by new lines
//   return lines.map((line, index) => {
//     const parts = line.split('**'); // Split by asterisks for bold
//     return (
//       <p key={index}>
//         {parts.map((part, i) =>
//           i % 2 === 1 ? <strong key={i}>{part}</strong> : part // Apply <strong> to every odd part
//         )}
//       </p>
//     );
//   });
// };

// // Blog post data (Consider moving this to a separate file)
// const blogPosts = [
//   {
//     id: 1,
//     image: '/assets/img/blog/0002award.jpg',
//     alt: 'Blog Post 1',
//     detailsLink: '/newsDetails/1',
//     categoryLink: '/news',
//     category: 'News',
//     title: 'Congratulations Dr. Nebiyat Tesfaye',
//     date: 'Oct 17, 2017',
//     authorLink: '/news',
//     author: 'Admin',
//     content: 'Our General Practitioner Dr. Nebiyat Tesfaye won the Global Life Time Achievement Award...'
//   },
//   {
//     id: 2,
//     image: '/assets/img/blog/Transfer.png',
//     alt: 'Job Announcement Image',
//     detailsLink: '/newsDetails/2',
//     categoryLink: '/news',
//     category: 'News',
//     title: 'የዝውውር ማስታወቂያ',
//     date: 'አዲስ አበባ - መስከረም 13 - 2017',
//     authorLink: 'blog.html',
//     author: 'ቅ.ጴ.ስ.ሆ',
//     content: '🔷 **የስራ መደቡ መጠሪያ**:\n - የጥርስ ሐኪም II\n\n🔷 **ደረጃ**:\n - XIV\n\n🔷 **ብዛት**:\n - 2\n\n🔷 **ደሞዝ**:\n - 9056.00 ብር'
//   },
//   {
//     id: 3,
//     image: '/assets/img/blog/pox.png',
//     alt: 'Blog Post 3',
//     detailsLink: '/newsDetails/3',
//     categoryLink: '/news',
//     category: 'Health',
//     title: 'የዝንጀሮ ፈንጣጣ (Monkeypox) ምህረ #healthtip',
//     date: 'ነሐሴ 15 - 2016',
//     authorLink: '/news',
//     author: 'Admin (ቅ.ጴ.ስ.ሆ)',
//     content: `
//       የዝንጀሮ ፈንጣጣ (Monkeypox)
//       ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
//       #healthtip

//       የዝንጀሮ ፈንጣጣ የሚከሰተው ከእንስሳ ወደ ሰው በሚተላለፍ ቫይረስ አማካኝነት ነው።
//       🔷 **የተቃለለ ምልክቶች**:
//       - ሽታ
//       - ከባድ ህመም
//       - ድካም
//       - ትኩሳት
//     `
//   }
// ];

// const NewsDetails = () => {
//   const { postId } = useParams(); // Get postId from URL params
//   const post = blogPosts.find((item) => item.id === Number(postId)); // Find the clicked post

//   if (!post) {
//     return (
//       <div>
//         Post not found. <Link to="/news">Go back to News</Link>
//       </div>
//     );
//   }

//   return (
//     <section className="blog-detail-area section-py blog-border-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="post-item-detail">
//               <div className="thumb">
//                 <img src={post.image} alt={post.alt} />
//               </div>
//               <div className="content">
//                 <h2 className="title">{post.title}</h2>
//                 <div className="meta">
//                   <span className="date">{post.date}</span> by{' '}
//                   <Link className="author" to={post.authorLink}>
//                     {post.author}
//                   </Link>
//                   <div className="category">
//                     <Link to={post.categoryLink}>{post.category}</Link>
//                   </div>
//                 </div>
//                 <div className="post-content">
//                   {parseContent(post.content)} {/* Render parsed content */}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4">
//             {/* Sidebar logic */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsDetails;

//
import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const parseContent = (content) => {
  const lines = content.split("\n");
  return lines.map((line, index) => (
    <p key={index}>
      {line
        .split("**")
        .map((part, i) =>
          i % 2 === 1 ? <strong key={i}>{part}</strong> : part
        )}
    </p>
  ));
};

const NewsDetails = () => {
  const { newsId } = useParams();
  const location = useLocation();
  const { newsList } = location.state || {}; // Get newsList from state

  if (!newsList || !Array.isArray(newsList)) {
    return (
      <div>
        Error: News data is unavailable. <Link to="/news">Go back to News</Link>
      </div>
    );
  }

  const news = newsList.find((item) => item.news_id === Number(newsId));

  if (!news) {
    return (
      <div>
        News not found. <Link to="/news">Go back to News</Link>
      </div>
    );
  }

  return (
    <section className="blog-detail-area section-py blog-border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="post-item-detail">
              <div className="thumb">
                <img
                  src={`${import.meta.env.VITE_API_URL}${news.news_image_link}`}
                  alt={news.news_title}
                />
              </div>
              <div className="content">
                <h2 className="title">{news.news_title}</h2>
                <h2 className="detail">{news.news_detail}</h2>
                {/* news_description */}
                <div className="description">
                  <h2 className="description">{news.news_description}</h2>
                </div>
                <div className="meta">
                  <span className="date">{news.created_at}</span> by{" "}
                  <Link className="author" to="#">
                    {news.author || "Admin"}
                  </Link>
                </div>

                {/* <div className="post-content">
                  {parseContent(news.content || "No content available.")}
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">{/* Add Sidebar if needed */}</div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

