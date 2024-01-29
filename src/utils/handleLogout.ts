export const handleAdminLogout = () => {
  localStorage.removeItem('admin');
  window.location.reload();
};

export const handleUserLogout = () => {
  localStorage.removeItem('user');
  window.location.reload();
};
