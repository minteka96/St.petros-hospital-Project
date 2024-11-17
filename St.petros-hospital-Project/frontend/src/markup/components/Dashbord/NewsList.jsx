/* eslint-disable no-unused-vars */
// src/components/NewsList.jsx

import React, { useEffect, useState } from 'react';
import { fetchNews, deleteNews } from '../../../Util/api/api';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetchNews();
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    getNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteNews(id);
      setNews(news.filter(article => article.id !== id));
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <div>
      <h2>News</h2>
      <ul>
        {news.map(article => (
          <li key={article.id}>
            {article.title}
            <button onClick={() => handleDelete(article.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
