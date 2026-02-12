import Axios, { AxiosRequestConfig } from 'axios';
import { extractAxiosError } from '../utils/extractError';

const API_URL: string = process.env.REACT_APP_API_URL || '';

const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

type Options = {
  url: string;
  data?: Record<string, unknown>;
  token?: string;
  options?: AxiosRequestConfig;
};

const withUserToken = (options?: AxiosRequestConfig, token?: string) => {
  return {
    ...(options ?? {}),
    headers: {
      ...((options && options.headers) ?? {}),
      Authorization: `Token ${token}`,
    },
  };
};

export const post = async (...args: Parameters<typeof axios.post>) => {
  try {
    return await axios.post(...args);
  } catch (error) {
    throw extractAxiosError(error);
  }
};
export const get = async (...args: Parameters<typeof axios.get>) => {
  try {
    return await axios.get(...args);
  } catch (error) {
    throw extractAxiosError(error);
  }
};
export const del = async (...args: Parameters<typeof axios.delete>) => {
  try {
    return await axios.delete(...args);
  } catch (error) {
    throw extractAxiosError(error);
  }
};
export const put = async (...args: Parameters<typeof axios.put>) => {
  try {
    return await axios.put(...args);
  } catch (error) {
    throw extractAxiosError(error);
  }
};

export const authGet = (args: Options) =>
  get(args.url, withUserToken(args.options, args.token));

export const authPost = (args: Options) =>
  post(args.url, args.data, withUserToken(args.options, args.token));

export const authPut = (args: Options) =>
  put(args.url, args.data, withUserToken(args.options, args.token));

export const authDel = (args: Options) =>
  del(args.url, withUserToken(args.options, args.token));
