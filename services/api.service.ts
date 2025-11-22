import axios from 'axios';

const API = axios.create({
//baseURL: "http://192.168.1.14:8080/api",  
  baseURL: "https://ee2e-84-78-243-100.ngrok-free.app/api",
  timeout: 5000,
});

export default API;