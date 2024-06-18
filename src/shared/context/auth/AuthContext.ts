import { createContext } from 'react';
import { ResponseData } from '../..';

export const AuthContext = createContext({
  logIn: (payload: ResponseData): void => {},
  logOut: () => {},
});