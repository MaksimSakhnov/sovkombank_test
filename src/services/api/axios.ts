import axios from 'axios';

const basePort = process.env.REACT_APP_BASE_PORT
  ? `:${process.env.REACT_APP_BASE_PORT}/`
  : '/';
const baseUrl = process.env.REACT_APP_BASE_URL
  ? process.env.REACT_APP_BASE_URL
  : 'https://api-plan-editor-dev.satellite-soft.ru';

const resultUrl = baseUrl + basePort;

export const client = axios.create({
  baseURL: `http://localhost:3001/`,
  headers: { 'Content-Type': 'application/json' },
});
