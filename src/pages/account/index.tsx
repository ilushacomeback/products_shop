import { selectors, useAppSelector } from '@/shared';
import { Navigate } from 'react-router-dom';
import { DeleteUser } from '@/features';

export const Account = () => {
  const token = useAppSelector(selectors.authSelectors.selectToken);

  return !token ? <Navigate to="/login" /> : <DeleteUser />;
};
