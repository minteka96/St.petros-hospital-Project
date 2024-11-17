/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ResearchPublication.jsx
import React from 'react';
import classes from './ResearchPublication.module.css';

const ResearchPublication = ({ title, authors = [], date, abstract, pdfUrl }) => {
  return (
    <div className={classes.publicationCard}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.authors}>
        <strong>Authors:</strong> {authors?.join(', ')}
      </p>
      <p className={classes.date}><strong>Date:</strong> {date}</p>
      <p className={classes.abstract}><strong>Abstract:</strong> {abstract}</p>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={classes.pdfLink}>
        View Full PDF
      </a>
    </div>
  );
};

export default ResearchPublication;
