import { PropsWithChildren } from 'react';
import { ResponseData, AuthState } from '../../interfaces/index';
import { useAppDispatch } from '../../hooks';
import { actions } from '../../../app/model/store';
import { AuthContext } from './AuthContext';

export const AuthProvider = (props: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  const logIn = (payload: ResponseData): void => {
    const {
      user: { id, username },
      accessToken,
    } = payload;
    const normalizeData: AuthState = { accessToken, id, username };
    localStorage.setItem('user', JSON.stringify(normalizeData));
    // document.cookie = `user=${encodeURIComponent(
    //   JSON.stringify(normalizeData)
    // )};samesite=strict;max-age=604800`;
  };

  const logOut = (): void => {
    localStorage.removeItem('user');
    dispatch(actions.logout());
    // document.cookie = `user=;max-age=0`;
  };

  return (
    <AuthContext.Provider value={{ logOut, logIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
