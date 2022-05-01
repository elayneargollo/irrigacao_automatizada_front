import axios from 'axios';
import { getToken } from "../contexts/auth";

const baseURL = 'http://127.0.0.1:5000/';

const api = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json', 'Accept': '*/*' },    
});

api.interceptors.request.use(async config => {
    const token = getToken();

    console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1MTM3ODUwMiwianRpIjoiYjE2NTMzZjYtZjMwYi00MmIzLWEwYWYtYWZjYTlhYmY1YjJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjUxMzc4NTAyLCJleHAiOjE2NTEzNzk0MDJ9.0025Jpau8UspV09LRFmZHNEbMZZdF5x5RHwdwsxJO_c`;
    }
    return config;
  });

export default api;