import axios from 'axios';

const API = axios.create({
  baseURL: "http://192.168.1.14:8080/api",  
//baseURL: "https://4bec-90-167-218-69.ngrok-free.app/api",
  timeout: 5000,
});

export default API;