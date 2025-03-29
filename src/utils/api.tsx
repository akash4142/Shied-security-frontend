import axios from 'axios';


//const API_BASE_URL = 'https://shield-security-backend.onrender.com' ;
const API_BASE_URL = 'http://localhost:5000/api';


export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

