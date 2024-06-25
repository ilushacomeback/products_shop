import { selectors, useAppSelector } from '@/shared';
import { Navigate } from 'react-router-dom';

export const Account = () => {
  const token = useAppSelector(selectors.authSelectors.selectToken)
  
  return !token ? <Navigate to='/login' /> : <a href='/'>account page</a>;
};
