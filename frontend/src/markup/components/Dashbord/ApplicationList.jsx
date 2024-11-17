/* eslint-disable no-unused-vars */
// src/components/ApplicationList.jsx

import React, { useEffect, useState } from 'react';
import { fetchApplications, deleteApplication } from '../../../Util/api/api';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const getApplications = async () => {
      try {
        const response = await fetchApplications();
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    getApplications();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteApplication(id);
      setApplications(applications.filter(application => application.id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  return (
    <div>
      <h2>Applications</h2>
      <ul>
        {applications.map(application => (
          <li key={application.id}>
            {application.name} - {application.vacancy_id}
            <button onClick={() => handleDelete(application.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationList;
