/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import publicationService from '../../../../Services/researchPublication.service';
import styles from './EditPublicationForm.module.css';
import { useAuth } from '../../../../contexts/AuthContext';

const EditPublicationForm = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const { id } = useParams(); // Extract `id` from the URL
  const location = useLocation(); // Access state passed via navigate
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [abstract, setAbstract] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [filePath, setFilePath] = useState('');
  const [status, setStatus] = useState('defense_pending');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeFormData = async () => {
      if (location.state?.publication) {
        const publication = location.state.publication;
        setTitle(publication.title || '');
        setAuthor(publication.author || '');
        setAbstract(publication.abstract || '');
        setPublicationDate(publication.publication_date || '');
        setFilePath(publication.file_path || '');
        setStatus(publication.status || 'defense_pending');
        setLoading(false);
      } else {
        try {
          const data = await publicationService.getPublicationById(id, token);
          const publication = data;
          setTitle(publication.title || '');
          setAuthor(publication.author || '');
          setAbstract(publication.abstract || '');
          setPublicationDate(publication.publication_date || '');
          setFilePath(publication.file_path || '');
          setStatus(publication.status || 'defense_pending');
        } catch (err) {
          setError('Failed to fetch publication details.');
        } finally {
          setLoading(false);
        }
      }
    };

    initializeFormData();
  }, [id, location.state, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const publicationData = {
      title,
      author,
      abstract,
      publication_date: publicationDate,
      file_path: filePath,
      status,
    };

    if (!title || !author) {
      setError('Title and Author are required.');
      return;
    }

    try {
      await publicationService.updatePublication(id, publicationData, token);
      setSuccess('Publication updated successfully!');
      setError('');

      setTimeout(() => {
        navigate('/admin/publications');
      }, 2000);
    } catch (err) {
      setError('Something went wrong while updating the publication.');
      setSuccess('');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Edit Publication</h2>
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
        type="text"
        placeholder="File Path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        className={styles.inputField}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.inputField}
      >
        <option value="defense_pending">Defense Pending</option>
        <option value="defense_completed">Defense Completed</option>
      </select>
      <button type="submit" className={styles.submitButton}>
        Update Publication
      </button>
    </form>
  );
};

export default EditPublicationForm;
