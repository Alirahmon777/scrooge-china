import { v4 } from 'uuid';
import { handleAdminLogout, handleUserLogout } from './handleLogout';
import { isError } from './isError';
import { toastCustom, toastError } from './toast/toast';
import { AppDispatch } from '@/redux/store';
import { setUser, setUserToken } from '@/redux/features/slices/auth/authReducer';

export function handleAdminError(error: unknown) {
  if (isError(error)) {
    if (error.status == 404) {
      toastError('Not Found!');
      return;
    }
    toastError(error.data.details);
    if (
      error.data.details == 'Bad or expired token!' ||
      error.data.details.toLocaleLowerCase().includes('unauthorized')
    ) {
      handleAdminLogout();
    }
  } else if (error instanceof Error) {
    toastError(error.message, v4());
  } else {
    toastError('An unknown error occurred', v4());
  }
}

export function handleError(error: unknown) {
  if (isError(error)) {
    toastError(error.data.details);

    if (
      error.data.details == 'Bad or expired token!' ||
      error.data.details.toLocaleLowerCase().includes('unauthorized')
    ) {
      return handleUserLogout();
    }
  } else if (error instanceof Error) {
    toastError(error.message, v4());
  } else {
    toastError('An unknown error occurred', v4());
  }
}
export function handleSimpleError(error: unknown) {
  if (isError(error)) {
    toastError(error.data.details);
  } else if (error instanceof Error) {
    toastError(error.message, v4());
  } else {
    toastError('An unknown error occurred', v4());
  }
}

export function handleCheckError(error: unknown, lng: string, dispatch: AppDispatch) {
  if (isError(error)) {
    if (
      error.data.details == 'Bad or expired token!' ||
      error.data.details.toLocaleLowerCase().includes('unauthorized')
    ) {
      localStorage.removeItem('user');
       localStorage.removeItem('user-last-order-chat');
      dispatch(setUser({ user: null }));
      dispatch(setUserToken({ token: null }));
      toastCustom(
        lng == 'ru' ? 'ваш токен истек, пожалуйста войдите снова' : 'your token has expired, please login again'
      );
      return;
    }
  } else if (error instanceof Error) {
    toastError(error.message);
  } else {
    toastError('An unknown error occurred');
  }
}
