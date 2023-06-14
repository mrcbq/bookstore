import axios from 'axios';

const bookstoreAPI = axios.create({
  baseURL:
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FWwxdH4ProPD2ldBCoKM/',
});

export default bookstoreAPI;
