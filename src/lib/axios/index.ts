import axios from 'axios';

const $host = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

$host.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (!token) return config;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$host.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        // const refreshToken = getCookie("refreshToken");
        // const response = await $host.post("api/v1/token/refresh/" , {refresh: refreshToken});
        // localStorage.setItem('accessToken', response.data.access);
        // return $host.request(originalRequest);
      } catch (error) {
        // setCookie("refreshToken", "", 0);
        // localStorage.removeItem("accessToken");
        // console.error(error);
        // return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default $host;
