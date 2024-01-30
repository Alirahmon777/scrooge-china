import { v4 } from 'uuid';
import { handleAdminLogout, handleUserLogout } from './handleLogout';
import { isError } from './isError';
import { toastError } from './toast/toast';

export function handleAdminError(error: unknown) {
  if (isError(error)) {
    toastError(error.data.details);
    handleAdminLogout();
  } else if (error instanceof Error) {
    toastError(error.message, v4());
  } else {
    toastError('An unknown error occurred', v4());
  }
}

export function handleError(error: unknown) {
  if (isError(error)) {
    toastError(error.data.details);
    if (error.data.details == 'Bad or expired token!') {
      return handleUserLogout();
    }
  } else if (error instanceof Error) {
    toastError(error.message, v4());
  } else {
    toastError('An unknown error occurred', v4());
  }
}
