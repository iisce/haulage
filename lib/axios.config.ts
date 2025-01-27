import axios from 'axios';
// import { accessToken } from './auth';

export const axiosWithoutAuth = axios.create({
     baseURL: process.env.BACKEND_URL || "http://localhost:6550",
     timeout: 10000,
});

export const axiosWithAuth = axios.create({
     baseURL: process.env.BACKEND_URL || "http://localhost:6550",
     timeout: 10000,
     headers: {
          // Authorization: `Bearer ${accessToken}`,
     },
});
