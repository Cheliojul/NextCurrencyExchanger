import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'http://api.exchangeratesapi.io/v1',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
