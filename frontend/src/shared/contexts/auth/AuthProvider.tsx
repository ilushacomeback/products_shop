import { PropsWithChildren } from 'react';
import { ResponseData, AuthState } from '../../interfaces/index';
import { useAppDispatch } from '../../hooks';
import { actions } from '../../../app/model/store';
import { AuthContext } from './AuthContext';

export const AuthProvider = (props: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const logIn = (payload: ResponseData): void => {
    console.log(payload)
    const { id, username } = payload;
    const normalizeData: AuthState = { token: '1', id, username };
    document.cookie = `user=${encodeURIComponent(
      JSON.stringify(normalizeData)
    )};samesite=strict;max-age=604800`;
    // localStorage.setItem('user', JSON.stringify(normalizeData));
  };

  const logOut = (): void => {
    document.cookie = `user=;max-age=0`;
    // localStorage.removeItem('user');
    dispatch(actions.logout());
  };

  return (
    <AuthContext.Provider value={{ logOut, logIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
