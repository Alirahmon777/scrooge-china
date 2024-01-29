export const openSmallTab = (url: string, window: Window) => {
  const width = 800;
  const height = 600;

  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`;

  window.open(url, '_blank', features);

  window.addEventListener('storage', () => {
    const userData = window.localStorage.getItem('user');
    console.log('log', userData);

    return userData;
  });
};
