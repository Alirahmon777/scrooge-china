export const handleAdminLogout = () => {
  localStorage.removeItem('admin');
  window.location.href = '/admin/login';
};

export const handleUserLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('user-last-order-chat');
  window.location.reload();
};
