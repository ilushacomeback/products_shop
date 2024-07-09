import { useSelector } from 'react-redux';
import { selectors } from '@/shared';

export const useAuth = (): boolean => {
  const token = useSelector(selectors.authSelectors.selectToken);
  return !!token;
};
