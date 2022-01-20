import { AxiosRequestConfig, AxiosResponse } from 'axios';
import instance from '../utils/api';

export const getCurrencyRate = async(
  url: string,
  config: AxiosRequestConfig
) => {
  const data = await instance.get(url, {
    ...config,
    params: {
      access_key: '9e4ed663c99e27f164fa1aa8972c66de',
      ...config.params,
    },
  });
  return data;
};
