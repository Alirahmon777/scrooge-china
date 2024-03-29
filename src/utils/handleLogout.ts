export const handleAdminLogout = () => {
  localStorage.removeItem('admin');
  window.location.reload();
};

export const handleUserLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('user-last-order-chat');
  window.location.reload();
};
