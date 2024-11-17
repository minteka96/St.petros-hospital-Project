/* eslint-disable no-unused-vars */
// src/components/VacancyList.jsx

import React, { useEffect, useState } from 'react';
import { fetchVacancies, deleteVacancy } from '../../../Util/api/api';

const VacancyList = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const getVacancies = async () => {
      try {
        const response = await fetchVacancies();
        setVacancies(response.data);
      } catch (error) {
        console.error('Error fetching vacancies:', error);
      }
    };

    getVacancies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteVacancy(id);
      setVacancies(vacancies.filter(vacancy => vacancy.id !== id));
    } catch (error) {
      console.error('Error deleting vacancy:', error);
    }
  };

  return (
    <div>
      <h2>Vacancies</h2>
      <ul>
        {vacancies.map(vacancy => (
          <li key={vacancy.id}>
            {vacancy.title}
            <button onClick={() => handleDelete(vacancy.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacancyList;
