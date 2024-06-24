import React, { PropsWithChildren } from 'react';
import { ResponseData, AuthState } from '../../interfaces/index';
import { useAppDispatch } from '../../hooks/index';
import { actions } from '../../model/store';
import { AuthContext } from './AuthContext';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch();

  const logIn = (payload: ResponseData): void => {
    const { id, fullName } = payload.data;
    const normalizeData: AuthState = { token: payload.token, id, fullName };
    document.cookie = `${encodeURIComponent('user')}=${encodeURIComponent(
      JSON.stringify(normalizeData)
    )};samesite=strict;max-age=604800`;
    // localStorage.setItem('user', JSON.stringify(normalizeData));
  };

  const logOut = (): void => {
    document.cookie = `${encodeURIComponent('user')}=;max-age=0`;
    // localStorage.removeItem('user');
    dispatch(actions.logout());
  };

  return (
    <AuthContext.Provider value={{ logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
