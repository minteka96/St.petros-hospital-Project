import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import publicationService from "../../../Services/researchPublication.service";
import styles from "./css/ResearchPublication.module.css";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useAuth } from "../../../contexts/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const ResearchPublications = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        // if (!token) {
        //   throw new Error("No token found!");
        // }


        const response = await publicationService.getAllPublications();

        if (!response || response.length === 0) {
          throw new Error("No publications available!");
        }

        const publicationData = response.map((publication) => ({
          ...publication,
          category: "Publication",
          categoryLink: "/category/publication",
          authorLink: `/author/${publication.author?.toLowerCase().replace(/\s+/g, "-") || "admin"}`,
          author: publication.author || "Admin",
        }));
        setPublications(publicationData);
      } catch (err) {
        console.error("Error fetching publications:", err);
        setError("Failed to fetch publication data!");
      }
    };

    fetchPublications();
  }, []);

  const handleImageClick = (publicationId) => {
    navigate(`/publicationDetails/${publicationId}`, { state: { publications } });
  };

  const handleTitleClick = (publicationId) => {
    navigate(`/publicationDetails/${publicationId}`, { state: { publications } });
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handlePdfClick = (filePath) => {
    const pdfUrl = `${import.meta.env.VITE_API_URL}${filePath.startsWith('/') ? '' : '/'}${filePath}`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className={styles.publicationArea}>
      <div className="container">
       <h2 className={styles.title} style={{ textAlign: "center",fontSize: "1.8rem",color:"#F3743A"}}> Research Publications done in Kidus Petros Hospital</h2>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <div className="row">
          {publications.length === 0 ? (
            <p>No publications available!</p>
          ) : (
            publications.map((publication) => (
              <div className="col-md-6" key={publication.id}>
                <article className={styles.postItem}>
                  <div
                    className={styles.imageContainer}
                    onClick={() => handleImageClick(publication.id)}
                  >
                    {/* If you want to add an image or thumbnail */}
                  </div>

                  <div className={styles.content}>
                    <a className={styles.category} href="#">
                      {/* {publication.category} */}
                    </a>

                    <h2 className={styles.title}>
                      <a 
                        // href="#"
                        // onClick={(e) => {
                        //   e.preventDefault();
                        //   handleTitleClick(publication.id);
                        // }}
                      >
                        {publication.title}
                      </a>
                    </h2>

                    <div>
                      <p className={styles.description}>{publication.abstract}</p>
                    </div>

                    <div className={styles.meta}>
                      {formatDate(publication.publication_date)} by{" "}
                      <span className={styles.author}>
                        {publication.author}
                      </span>
                    </div>

                    {publication.file_path && (
                      <div className={styles.pdfLink}>
                        <button
                          onClick={() => handlePdfClick(publication.file_path)}
                          className={styles.viewPdfButton}
                        >
                          Detail View PDF
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

const PDFViewer = ({ filePath }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js">
      <div style={{ height: "600px", width: "100%" }}>
        <Viewer fileUrl={filePath} />
      </div>
    </Worker>
  );
};

export default ResearchPublications;
