import { toast } from 'react-hot-toast';

const toastError = (message: string, toastId?: string | undefined) => {
  return toast.error(message, {
    duration: 2000,
    position: 'top-center',
    id: toastId,
  });
};

const toastSuccess = (message: string, toastId?: string | undefined) => {
  return toast.success(message, {
    duration: 2000,
    position: 'top-center',
    id: toastId,
  });
};

const toastLoading = (message: string) => {
  return toast.loading(message, {
    position: 'top-center',
  });
};

const toastCustom = (message: string) => {
  return toast(message, { position: 'top-center' });
};

export { toastError, toastSuccess, toastLoading, toastCustom };
