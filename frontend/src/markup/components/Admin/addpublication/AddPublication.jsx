/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import publicationService from '../../../../Services/researchPublication.service';
import styles from './AddPublication.module.css';
import { useAuth } from '../../../../contexts/AuthContext';

const AddPublicationForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  // State variables for the form
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [abstract, setAbstract] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('abstract', abstract);
    formData.append('publication_date', publicationDate);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await publicationService.createPublication(formData, token);
      console.log('response', response);
      if (response.error) {
        setError(response.error);
        setSuccess('');
      } else {
        setSuccess('Publication added successfully!');
        setError('');

        setTitle('');
        setAuthor('');
        setAbstract('');
        setPublicationDate('');
        setFile(null);

        setTimeout(() => {
          navigate('/admin/publications');
        }, 2000);
      }
    } catch (err) {
      console.error('Error submitting publication:', err);
      setError('Something went wrong while adding the publication.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Add Publication</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.inputField}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={styles.inputField}
        required
      />
      <textarea
        placeholder="Abstract"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        className={styles.textareaField}
      />
      <input
        type="date"
        value={publicationDate}
        onChange={(e) => setPublicationDate(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit" className={styles.submitButton}>
        Add Publication
      </button>
    </form>
  );
};

export default AddPublicationForm;
