import { useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const API_PROJECT = 'http://localhost:8085/api/v1';

const instance = axios.create({ baseURL: API_PROJECT });

type Controller = {
  //FAKE_API
  users: string;
  toDos: string;
  posts: string;

  //API_PROJECT
  auth: string;
  account: string;
};

type Method = {
  get: string;
  post: string;
  patch: string;
  delete: string;
};

export const useAxios = <Type>() => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const [data, setData] = useState<Type>(null!);

  const execute = async (
    method: keyof Method,
    controller: keyof Controller,
    prefix = '',
    data?: Type,
    config?: AxiosRequestConfig<any>
  ) => {
    setLoading(true);
    try {
      if (method === 'get' || method === 'delete') {
        const item = await instance[method](
          controller + prefix,
          config
        );
        setData(item.data);
        setLoading(false);
      }
      if (method === 'post' || method === 'patch') {
        const item = await instance[method](
          controller + prefix,
          data,
          config
        );
        setData(item.data);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      console.log(error.response);
    }
  };

  return { data, error, loading, execute, setData };
};
