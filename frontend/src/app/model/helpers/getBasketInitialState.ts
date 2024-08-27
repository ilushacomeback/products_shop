import { AuthState } from '@/shared/interfaces';
import { apiRoutes } from '@/shared';
import { getAuthInitialState } from './getInitialState';
import { getCookie } from '@/shared/hooks/getCookie';
import { Dispatch } from '@reduxjs/toolkit';
import { actions } from '../store';

export const getBasketInitialState = async (dispatch: Dispatch) => {
  const user: AuthState = getAuthInitialState();

  if (user.accessToken) {
    const response = await fetch(`${apiRoutes.basket()}/${user.id}`);
    const dataUser = await response.json();
    console.log('data', dataUser)
    dispatch(actions.addProductsInBasket(dataUser));
  } else {
    dispatch(actions.addProductsInBasket(getCookie('basket')));
  }
};
