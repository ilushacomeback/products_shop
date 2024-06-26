import { createContext } from 'react';
import { ResponseData } from '../../interfaces/index';

export const AuthContext = createContext({
  logIn: (payload: ResponseData): void => {},
  logOut: () => {},
});