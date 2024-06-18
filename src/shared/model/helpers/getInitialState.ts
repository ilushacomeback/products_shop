import { AuthState } from '../../interfaces/index';

export const getInitialState = (): AuthState => {
  const user = localStorage.getItem('user');
  if (user) {
    const data = JSON.parse(user);
    return {
      token: data.token,
      id: Number(data.id),
      fullName: data.fullName,
    };
  }
  return { token: null, id: null, fullName: null };
};
