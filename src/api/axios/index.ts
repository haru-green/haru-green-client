import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URI,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      history.pushState('', '', '/');
      return Promise.reject(error);
    }
  }
);

export default instance;
