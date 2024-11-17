/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import classes from './HealthTip.module.css';

const HealthTip = ({ title, introDescription, fullDescription, image, date, author }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={classes.healthTip}>
      <h2 className={classes.title}>{title}</h2>
      <img src={image} alt={title} className={classes.image} />
      <p className={isExpanded ? classes.fullDescription : classes.intro}>
        {isExpanded ? fullDescription : introDescription}
      </p>

      <button onClick={handleReadMore} className={classes.readMoreButton}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

      {isExpanded && (
        <div className={classes.additionalInfo}>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Author:</strong> {author}</p>
        </div>
      )}
    </div>
  );
};

export default HealthTip;
