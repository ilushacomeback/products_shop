import { PropsWithChildren } from 'react';
import { useAppDispatch, actions } from '@/shared';
import { ObserverContext } from './context';

export const ObserverProvider = (props: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const { setPage } = actions;

  const nextPage = () => {
    dispatch(setPage());
  };

  return (
    <ObserverContext.Provider value={{nextPage}}>
      {props.children}
    </ObserverContext.Provider>
  );
};
