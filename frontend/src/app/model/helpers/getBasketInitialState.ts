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
    console.log(response)
    const dataUser = await response.json();
    console.log(dataUser);
    dispatch(actions.addProductsInBasket(dataUser.basket));
  } else {
    dispatch(actions.addProductsInBasket(getCookie('basket')));
  }
};
