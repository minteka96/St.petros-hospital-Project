// src/api/api.js

import axios from "axios";

const API_URL = "http://localhost:3001/api"; // Change to your backend URL if necessary

// User API
export const fetchUsers = () => axios.get(`${API_URL}/users`);
export const addUser = (user) => axios.post(`${API_URL}/users`, user);
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);

// Vacancy API
export const fetchVacancies = () => axios.get(`${API_URL}/vacancy`);
export const addVacancy = (vacancy) =>
  axios.post(`${API_URL}/vacancy`, vacancy);

export const deleteVacancy = (id) => axios.delete(`${API_URL}/vacancy/${id}`);

// Application API
export const fetchApplications = () => axios.get(`${API_URL}/applications`);
export const deleteApplication = (id) =>
  axios.delete(`${API_URL}/applications/${id}`);

// News API
export const fetchNews = () => axios.get(`${API_URL}/news`);
export const addNews = (news) => axios.post(`${API_URL}/news`, news);
export const deleteNews = (id) => axios.delete(`${API_URL}/news/${id}`);

// News Detail API
export const addNewsDetail = (newsDetail) =>
  axios.post(`${API_URL}/news/details`, newsDetail); // Add this line
