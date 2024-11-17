/* eslint-disable no-unused-vars */
// src/components/AddNewsDetailForm.jsx

import React, { useState } from 'react';
import { addNewsDetail } from '../../../Util/api/api';
import classes from './AddNewsDetailForm.module.css';

const AddNewsDetailForm = () => {
  const [newsId, setNewsId] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewsDetail({
        newsId: parseInt(newsId),
        detail,
      });
      // Clear the form fields
      setNewsId('');
      setDetail('');
    } catch (error) {
      console.error('Error adding news detail:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2 className={classes.heading}>Add News Detail</h2>
      <input
        type="number"
        placeholder="News ID"
        value={newsId}
        onChange={(e) => setNewsId(e.target.value)}
        className={classes.inputField}
        required
      />
      <textarea
        placeholder="Detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        className={classes.textareaField}
        required
      />
      <button type="submit" className={classes.submitButton}>
        Add Detail
      </button>
    </form>
  );
};

export default AddNewsDetailForm;
