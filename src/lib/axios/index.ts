import { TStoredAdmin } from '@/admin/types/types';
import { TStoredUser } from '@/types/types';
import axios from 'axios';
const storedAdmin: TStoredAdmin = JSON.parse(localStorage.getItem('admin') || '{}');
const storedUser: TStoredUser = JSON.parse(localStorage.getItem('user') || '{}');

const $user = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

$user.interceptors.request.use((config) => {
  const token = storedUser.token;
  if (!token) return config;
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

const $admin = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

$admin.interceptors.request.use((config) => {
  const token = storedAdmin.admin_token;
  if (!token) return config;
  config.headers['X-AM-Authorization'] = `Bearer ${token}`;
  return config;
});

export { $user, $admin };
