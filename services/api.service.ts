import axios from 'axios';

const API = axios.create({
  baseURL: "https://e852-84-78-242-179.ngrok-free.app/api",
  timeout: 5000,
});

export default API;