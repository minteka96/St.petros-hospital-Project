/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import publicationService from '../../../../Services/researchPublication.service';
import styles from './PublicationList.module.css';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons from react-icons
import { useAuth } from '../../../../contexts/AuthContext';

const PublicationList = () => {
  const { user } = useAuth();
  const token = user ? user.token : null;
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const data = await publicationService.getAllPublications(token);
        setPublications(data || []);
      } catch (err) {
        setError('Failed to fetch publications list.');
      }
    };

    fetchPublications();
  }, [token]);

  const handleDelete = async (publicationId) => {
    if (!window.confirm('Are you sure you want to delete this publication?')) {
      return;
    }

    try {
      await publicationService.deletePublication(publicationId, token);
      setPublications(publications.filter((publication) => publication.id !== publicationId));
      setSuccess('Publication deleted successfully!');
    } catch (err) {
      setError('Failed to delete publication.');
    }
  };

  const truncateText = (text, maxLength = 15) => {
    if (!text) return '';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  return (
    <div className={styles.publicationListContainer}>
      <h2>Publication List</h2>
      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}
      {publications.length === 0 ? (
        <p>No publications available.</p>
      ) : (
        <table className={styles.publicationTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Abstract</th>
              <th>Publication Date</th>
              <th>File Path</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((publication) => (
              <tr key={publication.id}>
                <td data-label="Title">{publication.title}</td>
                <td data-label="Author">{publication.author}</td>
                <td data-label="Abstract">{truncateText(publication.abstract)}</td>
                <td data-label="Publication Date">{publication.publication_date}</td>
                <td data-label="File Path">
                  {publication.file_path ? (
                    <a
                      href={`${import.meta.env.VITE_API_URL}${publication.file_path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {truncateText(publication.file_path)}
                    </a>
                  ) : (
                    'No File'
                  )}
                </td>
                <td data-label="Actions">
                  <button
                    onClick={() => navigate(`/admin/publications/edit/${publication.id}`, { state: { publication } })}
                    className={styles.iconButton}
                  >
                    <FaEdit className={styles.editIcon} />
                  </button>
                  <button
                    onClick={() => handleDelete(publication.id)}
                    className={styles.iconButton}
                  >
                    <FaTrash className={styles.deleteIcon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PublicationList;
