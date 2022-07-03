import axios from 'axios';

const baseConfig = {
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export default axios.create(baseConfig);
