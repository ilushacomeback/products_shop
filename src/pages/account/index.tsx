import { selectors, useAppSelector } from '@/shared';
import { Navigate } from 'react-router-dom';
import { DeleteUser } from '@/features';
import { Basket } from '@/entities';

export const Account = () => {
  const token = useAppSelector(selectors.authSelectors.selectToken);

  return (
    <>
      <DeleteUser />
      <Basket />
    </>
  );
};
