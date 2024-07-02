import { AuthState } from '@/shared/interfaces/index';
import { getCookie } from '@/shared/hooks/getCookie';

export const getInitialState = (): AuthState => {
  // const user = localStorage.getItem('user');
  const user: string | undefined = getCookie('user');

  if (user) {
    return JSON.parse(user);
  }

  return { token: null, id: null, fullName: null };
};
