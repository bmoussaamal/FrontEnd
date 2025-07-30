import axios from 'axios';
const API_URL = 'http://localhost:3000/auth'; // ou selon ton routeur Express

//const login = async (email, password) => {
  return await axios.post(`${API_URL}/login`, { email, password });
//};
//export default {
 // login,
//};
 //src/services/authService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // PORT  backend
  withCredentials: true,
});

export const login = async (email, password) => {
  return await api.post('/auth/login', { email, password });
};

export const checkIP = async (ip) => {
  return await api.post('/api/ip/check', { ip });
};

export default api;
