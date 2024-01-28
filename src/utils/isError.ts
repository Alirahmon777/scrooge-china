import { TError } from '@/admin/types/types';

export function isError(obj: any): obj is TError {
  return typeof obj === 'object' && obj !== null && 'data' in obj && 'details' in obj.data && 'status' in obj;
}
