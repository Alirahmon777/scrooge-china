export const getStatus = (status: string) => {
  if (status == '"Cancelled"') {
    return 'Отклонен';
  }
  if (status == '"Succeeded"') {
    return 'Успешно';
  }
};
