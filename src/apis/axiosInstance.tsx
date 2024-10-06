import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '/perplyapi/',
});

axiosInstance.interceptors.response.use((res) => res.data);
