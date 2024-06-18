import React, { PropsWithChildren } from 'react';
import { ResponseData, AuthState } from '../../interfaces/index';
import { useAppDispatch } from '../../hooks/index';
import { actions } from '../../model/store';
import { AuthContext } from './AuthContext';


export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch()

  const logIn = (payload: ResponseData): void => {
    const { id, fullName } = payload.data;
    const normalizeData: AuthState = { token: payload.token, id, fullName };
    localStorage.setItem('user', JSON.stringify(normalizeData));
  };

  const logOut = (): void => {
    localStorage.removeItem('user');
    dispatch(actions.logout())
  };

  return (
    <AuthContext.Provider value={{ logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
