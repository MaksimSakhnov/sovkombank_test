import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'https://api-plan-editor-dev.satellite-soft.ru';

export const client = axios.create({
  baseURL: `http://localhost:3001/`,
  headers: { 'Content-Type': 'application/json' },
});
