import axios from 'axios';

type OptionsType = {
  baseURL: string;
  headers: {
    'Content-Type': string;
    accept?: string;
  };
};
const service = () => {
  const options: OptionsType = {
    baseURL: 'http://api.exchangeratesapi.io/v1',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  };

  const instance = axios.create(options);

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
  return instance;
};

export default service;
