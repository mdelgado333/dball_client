import axios from 'axios';

const API = axios.create({
  baseURL: "https://95cc-90-167-202-41.ngrok-free.app/api",
  timeout: 5000,
});

export default API;