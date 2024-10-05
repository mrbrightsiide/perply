import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://www.perply.site/',
});

axiosInstance.interceptors.response.use((res) => res.data);
