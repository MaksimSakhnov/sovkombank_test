import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'http://188.225.42.31:3001/';

export const client = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});
