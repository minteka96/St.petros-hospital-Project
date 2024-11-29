import axios from "axios";
const api_url = import.meta.env.VITE_API_URL;
// create user service
export const createUser = (user) => axios.post(`${VITE_API_URL}/users`, user);

// get all users
export const getAllUsers = () => axios.get(`${VITE_API_URL}/api/users`);



export default { createUser, getAllUsers };