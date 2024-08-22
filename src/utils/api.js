import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.yourdomain.com', // Replace with your API base URL
  timeout: 10000,
});

export default api;
