import axios from 'axios';

const bookstoreAPI = axios.create({
  baseURL: 'https://your-bookstore-api-url.com',
});

export default bookstoreAPI;
