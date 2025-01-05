// src/markup/pages/PublicationDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import publicationService from '../../../Services/researchPublication.service';
import styles from './css/PublicationDetails.module.css'; // Add styles as needed
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const PublicationDetails = () => {
  // Get the publication ID from the URL params
  const { id } = useParams();
  const { state } = useLocation();  // To get publications passed from the previous page

  // State for the publication details
  const [publication, setPublication] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the publication data by ID
    const fetchPublicationDetails = async () => {
      try {
        const response = await publicationService.getPublicationById(id);
        setPublication(response);
      } catch (err) {
        setError('Failed to fetch publication details!');
      }
    };

    fetchPublicationDetails();
  }, [id]);

  // Function to format the publication date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className={styles.publicationDetailsArea}>
      <div className="container">
        {error && <p className={styles.errorMessage}>{error}</p>}
        
        {publication ? (
          <div className={styles.publicationDetails}>
            <h2 className={styles.title}>{publication.title}</h2>
            
            <div className={styles.meta}>
              <p>Published on: {formatDate(publication.publication_date)}</p>
              <p>Author: {publication.author}</p>
            </div>

            <div className={styles.abstract}>
              <h3>Abstract</h3>
              <p>{publication.abstract}</p>
            </div>

            {/* PDF Viewer */}
            {publication.file_path && (
              <div className={styles.pdfViewer}>
                <h3>View Full PDF</h3>
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                  <div style={{ height: '600px', width: '100%' }}>
                    <Viewer fileUrl={`${import.meta.env.VITE_API_URL}${publication.file_path}`} />
                  </div>
                </Worker>
              </div>
            )}
          </div>
        ) : (
          <p>Loading publication details...</p>
        )}
      </div>
    </section>
  );
};

export default PublicationDetails;
