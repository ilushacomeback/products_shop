import { AuthState } from '../../interfaces/index';

export const getInitialState = (): AuthState => {
  // const user = localStorage.getItem('user');
  const user: string = decodeURIComponent(document.cookie).split('user=')[1];

  if (user) {
    return JSON.parse(user);
  }
  
  return { token: null, id: null, fullName: null };
};
