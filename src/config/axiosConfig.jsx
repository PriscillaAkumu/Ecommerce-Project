import axios from "axios";
import { refreshToken } from "../services/authServices"


const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL ,
  headers: { "Content-Type": "application/json" }
});

// Request interceptor to add the access token to headers
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor for handling 401 (Unauthorized) errors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshToken();
      originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
      return await instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
